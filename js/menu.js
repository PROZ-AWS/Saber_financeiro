const hamburgerButton = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const button = document.querySelector(".hamburger")

hamburgerButton.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    button.classList.toggle("close");
});

window.addEventListener("click", (event) => {
    if (event.target !== sidebar && event.target !== hamburgerButton) {
        sidebar.classList.remove("open");
        button.classList.remove("close");
    }
});