// common.js — 다크/라이트 토글, 검색 모듈 동적 로드
(function () {
  const STORAGE_KEY = "webcs-theme";
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

  /* ---------- 부팅 ----------------------------------------------------- */
  function init() {
    initTheme();
    initSearch();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
