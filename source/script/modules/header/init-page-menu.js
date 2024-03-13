// Использование data а рибутов показалось слишким громоздким. Оставил использование data только для лока body.

const initPageMenu = () => {

  const sandwich = document.querySelectorAll("[data-sandwich]")[0];
  const headerLogo = document.querySelectorAll("[data-header-logo]")[0];
  const body = document.getElementsByTagName("body")[0];
  const nav = document.getElementsByClassName("main-nav")[0];
  const navItems = document.querySelectorAll("[data-nav-item]");

  body.dataset.menuIsOpen = "0";

  sandwich.addEventListener("click", (e) => {

    if (Number(body.dataset.menuIsOpen)) {
      body.classList.remove("scroll-lock")
      body.dataset.menuIsOpen = "0";
    } else {
      body.classList.add("scroll-lock");
      body.dataset.menuIsOpen = "1";
    }

    e.currentTarget.classList.toggle("is-active");
    headerLogo.classList.toggle("is-menu");
    nav.classList.toggle("is-active");
  });

  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      if (entry.contentRect.width >= 1024) {
        sandwich.classList.remove("is-active");
        headerLogo.classList.remove("is-menu");
        body.classList.remove("scroll-lock");
        nav.classList.remove("is-active");
        body.dataset.menuIsOpen = "0";
      }
    }
  });

  resizeObserver.observe(body);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      sandwich.classList.remove("is-active");
      headerLogo.classList.remove("is-menu");
      body.classList.remove("scroll-lock");
      nav.classList.remove("is-active");
    }
  })
};

export { initPageMenu };
