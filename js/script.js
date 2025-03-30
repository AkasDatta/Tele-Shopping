// Banner image code //
const mainImage = document.getElementById("mainImage");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        // Change the main image
        const imgSrc = this.querySelector("img").src;
        mainImage.src = imgSrc;

        // Remove border-4 from all buttons
        buttons.forEach(btn => btn.classList.remove("border-4"));

        // Add border-4 to the clicked button
        this.classList.add("border-4");
    });
});



// Time count down //
let timer = 28 * 60, display = document.getElementById("countdown");
setInterval(() => {
  let m = Math.floor(timer / 60), s = timer % 60;
  display.textContent = `${m}:${s < 10 ? "0" : ""}${s} min avant la fin de l'offre`;
  timer > 0 ? timer-- : display.textContent = "Offre expirée";
}, 1000);


 // Select the button inside the #hide-button div
const button = document.querySelector("#hide-button button");

// Function to check the scroll position
function checkScroll() {
    const showButtonDiv = document.getElementById("show-button");
    const hideButtonDiv = document.getElementById("hide-button");

    // Get the positions of the divs
    const showButtonPosition = showButtonDiv.getBoundingClientRect().top;
    const hideButtonPosition = hideButtonDiv.getBoundingClientRect().top;

    // Check if the page is scrolled past the "show" div and not yet the "hide" div
    if (showButtonPosition < window.innerHeight && hideButtonPosition > window.innerHeight) {
        button.style.display = "block"; // Show button
    } else {
        button.style.display = "none"; // Hide button
    }
}

// Add scroll event listener
window.addEventListener("scroll", checkScroll);

// Call the function once on load to ensure the button is correctly displayed initially
checkScroll();
