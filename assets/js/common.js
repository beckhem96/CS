// common.js — 다크/라이트 토글, 기타 공통 동작
(function () {
  const STORAGE_KEY = "webcs-theme";
  const root = document.documentElement;

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

  function init() {
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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
