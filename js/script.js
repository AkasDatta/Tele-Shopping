// Banner image code 
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