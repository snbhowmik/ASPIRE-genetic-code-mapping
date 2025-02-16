document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("mouseenter", function () {
            this.style.backgroundColor = "#0056b3";
            this.style.color = "#fff";
        });
        button.addEventListener("mouseleave", function () {
            this.style.backgroundColor = "#007bff";
            this.style.color = "#fff";
        });
    });

    const nav = document.querySelector("nav");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        } else {
            nav.style.backgroundColor = "transparent";
        }
    });
});
