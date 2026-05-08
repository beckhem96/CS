/* ========================================================================
   search.js — 사이트 전역 검색 모듈
   ------------------------------------------------------------------------
   동작 방식:
     1) 헤더(.site-nav)에 🔍 검색 버튼을 자동으로 주입.
     2) 버튼 클릭 또는 Ctrl/Cmd + K, "/" 키로 검색 모달 열림.
     3) 입력값으로 SEARCH_INDEX(window.SEARCH_INDEX)를 즉시 필터링.
     4) ↑/↓로 결과 이동, Enter로 이동, ESC로 닫기.

   페이지마다 깊이가 다르므로(예: index.html은 0단계, java/index.html은 1단계),
   common.js 가 자기 src 의 상대 경로에서 prefix("" 또는 "../")를 추출해 둔다.
   여기서는 window.__WEBCS_PREFIX__ 를 그대로 사용한다.
   ======================================================================== */
(function () {
  if (window.__WEBCS_SEARCH_LOADED__) return;
  window.__WEBCS_SEARCH_LOADED__ = true;

  const PREFIX = window.__WEBCS_PREFIX__ || "";

  /* ---------- DOM 생성 -------------------------------------------------- */
  function injectButton() {
    const nav = document.querySelector(".site-nav");
    if (!nav) return;
    if (nav.querySelector(".search-btn")) return; // 중복 방지

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "search-btn";
    btn.setAttribute("aria-label", "검색 (Ctrl+K)");
    btn.title = "검색 (Ctrl+K)";
    btn.innerHTML = "🔍";

    // 테마 토글 앞에 배치 (검색 → 테마 순서가 자연스러움)
    const themeBtn = nav.querySelector(".theme-toggle");
    if (themeBtn) nav.insertBefore(btn, themeBtn);
    else nav.appendChild(btn);

    btn.addEventListener("click", openModal);
  }

  let modal, input, list, statusEl;
  let currentResults = [];
  let activeIndex = 0;

  function buildModal() {
    if (modal) return;
    modal = document.createElement("div");
    modal.className = "search-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "사이트 검색");
    modal.hidden = true;
    modal.innerHTML = `
      <div class="search-backdrop" data-close></div>
      <div class="search-panel">
        <div class="search-input-row">
          <span class="search-icon">🔍</span>
          <input type="text" class="search-input"
                 placeholder="키워드를 입력하세요 — 한글/영문 모두 가능"
                 autocomplete="off" spellcheck="false" />
          <kbd class="search-esc">ESC</kbd>
        </div>
        <div class="search-status" aria-live="polite"></div>
        <ul class="search-results" role="listbox"></ul>
        <div class="search-hint">
          <kbd>↑</kbd><kbd>↓</kbd> 이동 · <kbd>Enter</kbd> 이동 · <kbd>ESC</kbd> 닫기
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    input = modal.querySelector(".search-input");
    list = modal.querySelector(".search-results");
    statusEl = modal.querySelector(".search-status");

    modal.addEventListener("click", (e) => {
      if (e.target.dataset.close !== undefined) closeModal();
    });
    input.addEventListener("input", () => render(input.value));
    modal.addEventListener("keydown", onKeydown);
  }

  function openModal() {
    buildModal();
    modal.hidden = false;
    document.body.classList.add("search-open");
    input.value = "";
    render("");
    setTimeout(() => input.focus(), 0);
  }

  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.classList.remove("search-open");
  }

  function onKeydown(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      closeModal();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      moveActive(1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      moveActive(-1);
    } else if (e.key === "Enter") {
      const item = currentResults[activeIndex];
      if (item) {
        e.preventDefault();
        location.href = PREFIX + item.url;
      }
    }
  }

  function moveActive(delta) {
    if (!currentResults.length) return;
    activeIndex = (activeIndex + delta + currentResults.length) % currentResults.length;
    updateActive();
  }

  function updateActive() {
    const items = list.querySelectorAll(".search-result");
    items.forEach((el, i) => {
      el.classList.toggle("active", i === activeIndex);
    });
    const active = items[activeIndex];
    if (active) active.scrollIntoView({ block: "nearest" });
  }

  /* ---------- 검색 알고리즘 -------------------------------------------- */
  // 점수가 높을수록 위에 노출.
  function score(entry, terms) {
    const title = entry.title.toLowerCase();
    const cat = (entry.category || "").toLowerCase();
    const summary = (entry.summary || "").toLowerCase();
    const keywords = (entry.keywords || "").toLowerCase();
    const haystack = `${title}${cat}${summary}${keywords}`;
    let s = 0;
    for (const t of terms) {
      const titleHit = title.includes(t);
      const catHit = cat.includes(t);
      const kwHit = keywords.includes(t);
      const sumHit = summary.includes(t);
      if (!titleHit && !catHit && !kwHit && !sumHit) return -1; // 한 토큰이라도 없으면 탈락
      if (title === t) s += 200;
      if (titleHit && title.startsWith(t)) s += 80;
      if (titleHit) s += 40;
      if (catHit) s += 25;
      if (kwHit) s += 20;
      if (sumHit) s += 10;
    }
    // 짧은 제목 약간 가산 (정확도 보정)
    s += Math.max(0, 30 - title.length) * 0.2;
    return s;
  }

  function search(query) {
    const q = query.trim().toLowerCase();
    const idx = window.SEARCH_INDEX || [];
    if (!q) {
      // 빈 입력일 때는 카테고리 인덱스를 먼저, 그다음 알파벳 순으로 일부 노출
      return idx
        .slice()
        .sort((a, b) => {
          if (a.category === "카테고리" && b.category !== "카테고리") return -1;
          if (b.category === "카테고리" && a.category !== "카테고리") return 1;
          return a.title.localeCompare(b.title, "ko");
        })
        .slice(0, 12);
    }
    const terms = q.split(/\s+/).filter(Boolean);
    const scored = [];
    for (const entry of idx) {
      const s = score(entry, terms);
      if (s >= 0) scored.push([s, entry]);
    }
    scored.sort((a, b) => b[0] - a[0]);
    return scored.slice(0, 30).map(([, e]) => e);
  }

  /* ---------- 렌더링 ---------------------------------------------------- */
  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, (m) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[m]);
  }
  function highlight(text, terms) {
    if (!terms.length) return escapeHtml(text);
    let out = escapeHtml(text);
    for (const t of terms) {
      if (!t) continue;
      const re = new RegExp("(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
      out = out.replace(re, '<mark>$1</mark>');
    }
    return out;
  }

  function render(query) {
    currentResults = search(query);
    activeIndex = 0;
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);

    if (!currentResults.length) {
      list.innerHTML = "";
      statusEl.textContent = query ? "결과가 없습니다." : "";
      return;
    }
    statusEl.textContent = query
      ? `${currentResults.length}개 결과`
      : `최근/주요 페이지 ${currentResults.length}개`;

    list.innerHTML = currentResults
      .map((e, i) => `
        <li class="search-result ${i === 0 ? "active" : ""}" role="option" data-index="${i}">
          <a href="${PREFIX + e.url}">
            <div class="row1">
              <span class="title">${highlight(e.title, terms)}</span>
              <span class="cat">${escapeHtml(e.category || "")}</span>
            </div>
            <div class="summary">${highlight(e.summary || "", terms)}</div>
          </a>
        </li>
      `).join("");

    list.querySelectorAll(".search-result").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        activeIndex = parseInt(el.dataset.index, 10);
        updateActive();
      });
    });
  }

  /* ---------- 전역 단축키 ---------------------------------------------- */
  document.addEventListener("keydown", (e) => {
    // 모달이 이미 열려 있을 땐 onKeydown이 처리
    if (modal && !modal.hidden) return;

    // Ctrl/Cmd + K
    if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) {
      e.preventDefault();
      openModal();
      return;
    }
    // "/" — 단, 입력 필드에서는 무시
    if (e.key === "/" && !/^(INPUT|TEXTAREA)$/.test((e.target || {}).tagName)) {
      e.preventDefault();
      openModal();
    }
  });

  /* ---------- 부팅 ------------------------------------------------------ */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectButton);
  } else {
    injectButton();
  }
})();
