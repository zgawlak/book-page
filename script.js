const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const toTopButton = document.querySelector("#back-to-top");

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
}

const toggleButton = document.querySelector("#toggle-button");
const image = toggleButton.querySelector("#hamburger");

toggleButton.addEventListener("click", function () {
    const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";

    if (isExpanded === true) {
        image.src = "assets/close-hamburger.svg";
    } else {
        image.src = "assets/hamburger.svg";
    }
});

toTopButton.addEventListener("click", backToTop);

