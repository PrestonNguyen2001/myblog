const darkModeToggle = document.querySelector("#dark-mode-toggle");
const displayImg = document.querySelector(".display-img");
const backButton = document.getElementById("back"); // Get the back button element

// Function to enable dark mode
const enableDarkMode = () => {
    document.body.classList.add("darkMode");
    localStorage.setItem("darkMode", "enabled");
    displayImg.src = "/assets/Images/background-dark.png"; // Change background image to dark mode
}

// Function to disable dark mode
const disableDarkMode = () => {
    document.body.classList.remove("darkMode");
    localStorage.setItem("darkMode", null);
    displayImg.src = "/assets/Images/background-light.png"; // Change background image to light mode
}

// Event listener for dark mode toggle
darkModeToggle.addEventListener("click", () => {
    const darkModeEnabled = localStorage.getItem("darkMode") === "enabled";
    if (!darkModeEnabled) {
        enableDarkMode();
        darkModeToggle.classList.add("bxs-sun");
    } else {
        disableDarkMode();
        darkModeToggle.classList.remove("bxs-sun");
    }
});

// Preload the dark mode background image when toggled
darkModeToggle.addEventListener("click", () => {
    preloadImage("assets/Images/background-dark.png");
});

// Preload the light mode background image when toggled
darkModeToggle.addEventListener("click", () => {
    preloadImage("/assets/Images/background-light.png");
});

// Function to preload an image
const preloadImage = (url) => {
    const img = new Image();
    img.src = url;
}

// Check if current page is blog.html and show the back button
const currentPage = window.location.pathname.split("/").pop();
if (currentPage === "blog.html") {
    backButton.style.display = "block";
} else {
    backButton.style.display = "none";
}

// Event listener for back button click
backButton.addEventListener("click", () => {
    window.location.href = "index.html"; // Navigate back to index.html
});
