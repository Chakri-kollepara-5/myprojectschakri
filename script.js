document.addEventListener("DOMContentLoaded", function() {
    const themeButton = document.getElementById("theme-toggle-btn");
    const title = document.querySelector(".title");
    const body = document.body;

    // Load theme from local storage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeButton.innerText = "Light Mode ☀️";
        title.innerText = "My Dark Webscape: A Creative Collection 🌙";
    }

    themeButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeButton.innerText = "Light Mode ☀️";
            title.innerText = "My Dark Webscape: A Creative Collection 🌙";
        } else {
            localStorage.setItem("theme", "light");
            themeButton.innerText = "Dark Mode 🌙";
            title.innerText = "My Webscape: A Collection of Creative & Interactive Pages";
        }
    });
});
