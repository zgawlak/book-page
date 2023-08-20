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

