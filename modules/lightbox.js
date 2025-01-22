export function lightbox() {
    document.addEventListener("DOMContentLoaded", () => {
        const lightbox = document.getElementById("lightbox");
        const lightboxImage = document.getElementById("lightbox-image");
        const lightboxTitle = document.getElementById("lightbox-title")
        const allImages = document.querySelectorAll(".lightbox-enabled")

        //open Image
        allImages.forEach(image => {
            image.addEventListener("click", () => { //Click Event Listener for every image
                lightbox.style.display = "flex";
                lightboxImage.src = image.src;
                document.body.style.overflow = "hidden";
                lightboxTitle.innerText = image.alt;
            })
        })

        //close Image
        lightbox.addEventListener("click", () => {
            lightbox.style.display = "none";
            document.body.style.overflow = "auto";
        })

    })
}