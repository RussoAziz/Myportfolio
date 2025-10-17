document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll("section");
  const links = document.querySelectorAll("nav a");

  function showPage(pageId) {
    pages.forEach(p => p.classList.remove("active"));
    links.forEach(l => l.classList.remove("active"));

    const activePage = document.querySelector(`#${pageId}`);
    const activeLink = document.querySelector(`nav a[href="#${pageId}"]`);

    if (activePage) activePage.classList.add("active");
    if (activeLink) activeLink.classList.add("active");
  }

  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.substring(1) || "home";
    showPage(hash);
  });

  // كي يدخل أول مرة
  const initial = window.location.hash.substring(1) || "home";
  showPage(initial);

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = link.getAttribute("href").substring(1);
      window.location.hash = target;
    });
  });
});
