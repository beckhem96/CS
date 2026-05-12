// common.js — 다크/라이트 토글, 검색 모듈 동적 로드, 로컬 수정 모드
(function () {
  const STORAGE_KEY = "webcs-theme";
  const EDIT_STORAGE_PREFIX = "webcs-edit:";
  const root = document.documentElement;

  /* ---------- 사이트 prefix 계산 ----------------------------------------
     이 스크립트의 src("assets/js/common.js" 또는 "../assets/js/common.js" 등)
     에서 "assets/js/common.js" 부분을 잘라내면 사이트 루트까지의 상대 prefix
     ("" 또는 "../")가 된다. 검색 모듈 등 다른 코드도 이 값을 공유한다. */
  function detectPrefix() {
    // 우선 자기 자신의 script 태그 src를 사용
    const tags = document.querySelectorAll('script[src*="common.js"]');
    for (const t of tags) {
      const raw = t.getAttribute("src") || "";
      const m = raw.match(/^(.*?)assets\/js\/common\.js$/);
      if (m) return m[1] || "";
    }
    return "";
  }
  const PREFIX = detectPrefix();
  window.__WEBCS_PREFIX__ = PREFIX;

  /* ---------- 테마 ----------------------------------------------------- */
  function applyTheme(theme) {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
    const btn = document.querySelector(".theme-toggle");
    if (btn) {
      btn.textContent = theme === "light" ? "🌙" : "☀️";
      btn.setAttribute("aria-label", theme === "light" ? "다크 모드로 전환" : "라이트 모드로 전환");
    }
  }

  function getInitialTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return "dark"; // 기본은 다크
  }

  function initTheme() {
    applyTheme(getInitialTheme());
    const btn = document.querySelector(".theme-toggle");
    if (btn) {
      btn.addEventListener("click", () => {
        const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
        const next = current === "light" ? "dark" : "light";
        localStorage.setItem(STORAGE_KEY, next);
        applyTheme(next);
      });
    }
  }

  /* ---------- 검색 모듈 동적 로드 ---------------------------------------
     모든 페이지에 검색 기능을 자동 부착하기 위해, 페이지가 별도로
     <script>를 추가하지 않아도 common.js만 있으면 동작하게 한다. */
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      // 같은 src가 이미 있으면 재사용
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve();
        return;
      }
      const s = document.createElement("script");
      s.src = src;
      s.async = false; // 인덱스 → search 순서 보장
      s.onload = () => resolve();
      s.onerror = () => reject(new Error("failed to load " + src));
      document.head.appendChild(s);
    });
  }

  function initSearch() {
    loadScript(PREFIX + "assets/js/search-index.js")
      .then(() => loadScript(PREFIX + "assets/js/search.js"))
      .catch((err) => console.warn("[webcs] search disabled:", err));
  }

  /* ---------- 로컬 수정 모드 ------------------------------------------ */
  function getPageKey() {
    const path = window.location.pathname.replace(/\/index\.html$/, "/index.html");
    return EDIT_STORAGE_PREFIX + path;
  }

  function getEditableElements() {
    return Array.from(document.querySelectorAll([
      "main .definition",
      "main .callout",
      "main .lead",
      "main .qa .a",
      "main .qa .script",
      "main .viz-caption",
      "main p",
      "main li",
      "main td",
    ].join(","))).filter((el) => {
      if (el.closest(".edit-toolbar")) return false;
      if (el.closest("nav")) return false;
      if (el.closest("pre")) return false;
      if (el.closest("svg")) return false;
      if (el.matches(".breadcrumb, .breadcrumb *")) return false;
      return (el.textContent || "").trim().length > 0;
    });
  }

  function assignEditIds(elements) {
    elements.forEach((el, index) => {
      if (!el.dataset.editId) {
        const tag = el.tagName.toLowerCase();
        const className = (el.className || "").toString().replace(/\s+/g, ".").replace(/[^a-zA-Z0-9_.-]/g, "");
        el.dataset.editId = `${tag}-${className || "plain"}-${index}`;
      }
    });
  }

  function readSavedEdits() {
    try {
      const raw = localStorage.getItem(getPageKey());
      return raw ? JSON.parse(raw) : {};
    } catch (err) {
      console.warn("[webcs] failed to read edits:", err);
      return {};
    }
  }

  function applySavedEdits(elements, edits) {
    elements.forEach((el) => {
      const item = edits[el.dataset.editId];
      if (item && typeof item.html === "string") {
        el.innerHTML = item.html;
        el.classList.add("local-edited");
      }
    });
  }

  function collectCurrentEdits(elements) {
    const edits = {};
    elements.forEach((el) => {
      if (el.innerHTML !== el.dataset.originalHtml) {
        edits[el.dataset.editId] = {
          selector: el.dataset.editId,
          tag: el.tagName.toLowerCase(),
          text: el.textContent.trim(),
          html: el.innerHTML,
        };
      }
    });
    return edits;
  }

  function setEditable(elements, enabled) {
    elements.forEach((el) => {
      el.contentEditable = enabled ? "true" : "false";
      el.spellcheck = false;
      el.classList.toggle("editable-active", enabled);
      if (enabled && !el.dataset.originalTitle) {
        el.dataset.originalTitle = el.getAttribute("title") || "";
      }
      if (enabled) {
        el.setAttribute("title", "클릭해서 수정할 수 있습니다");
      } else if (el.dataset.originalTitle) {
        el.setAttribute("title", el.dataset.originalTitle);
      } else {
        el.removeAttribute("title");
      }
    });
  }

  function downloadJson(filename, payload) {
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function createEditToolbar(elements) {
    const toolbar = document.createElement("div");
    toolbar.className = "edit-toolbar";
    toolbar.innerHTML = `
      <button type="button" class="edit-toggle">✏️ 수정 모드</button>
      <button type="button" class="edit-save" disabled>저장</button>
      <button type="button" class="edit-export" disabled>내보내기</button>
      <button type="button" class="edit-reset" disabled>초기화</button>
      <span class="edit-status" aria-live="polite"></span>
    `;
    document.body.appendChild(toolbar);

    const toggleBtn = toolbar.querySelector(".edit-toggle");
    const saveBtn = toolbar.querySelector(".edit-save");
    const exportBtn = toolbar.querySelector(".edit-export");
    const resetBtn = toolbar.querySelector(".edit-reset");
    const status = toolbar.querySelector(".edit-status");

    function setStatus(message) {
      status.textContent = message;
      if (message) {
        window.clearTimeout(setStatus.timer);
        setStatus.timer = window.setTimeout(() => {
          status.textContent = "";
        }, 2600);
      }
    }

    function setMode(enabled) {
      document.body.classList.toggle("edit-mode", enabled);
      setEditable(elements, enabled);
      toggleBtn.textContent = enabled ? "✅ 수정 중" : "✏️ 수정 모드";
      saveBtn.disabled = !enabled;
      exportBtn.disabled = !enabled;
      resetBtn.disabled = !enabled;
      setStatus(enabled ? "수정할 문장을 클릭하세요" : "");
    }

    toggleBtn.addEventListener("click", () => {
      setMode(!document.body.classList.contains("edit-mode"));
    });

    saveBtn.addEventListener("click", () => {
      const edits = collectCurrentEdits(elements);
      localStorage.setItem(getPageKey(), JSON.stringify(edits));
      elements.forEach((el) => {
        el.classList.toggle("local-edited", Boolean(edits[el.dataset.editId]));
      });
      setStatus(Object.keys(edits).length ? "저장됨" : "수정 내용 없음");
    });

    exportBtn.addEventListener("click", () => {
      const edits = collectCurrentEdits(elements);
      downloadJson(`webcs-edits-${document.title.replace(/\s+/g, "-").slice(0, 40)}.json`, {
        title: document.title,
        url: window.location.href,
        savedAt: new Date().toISOString(),
        edits,
      });
      setStatus("JSON 다운로드됨");
    });

    resetBtn.addEventListener("click", () => {
      const ok = window.confirm("이 페이지의 로컬 수정 내용을 모두 삭제하고 원문으로 되돌릴까요?");
      if (!ok) return;
      localStorage.removeItem(getPageKey());
      elements.forEach((el) => {
        el.innerHTML = el.dataset.originalHtml;
        el.classList.remove("local-edited");
      });
      setStatus("초기화됨");
    });
  }

  function initEditMode() {
    const main = document.querySelector("main");
    if (!main) return;
    const elements = getEditableElements();
    if (!elements.length) return;
    assignEditIds(elements);
    elements.forEach((el) => {
      el.dataset.originalHtml = el.innerHTML;
    });
    applySavedEdits(elements, readSavedEdits());
    createEditToolbar(elements);
  }

  /* ---------- 부팅 ----------------------------------------------------- */
  function init() {
    initTheme();
    initSearch();
    initEditMode();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
