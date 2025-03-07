let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down → Hide navbar
        navbar.classList.add("hidden-navbar");
    } else {
        // Scrolling up → Show navbar
        navbar.classList.remove("hidden-navbar");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative values
});
