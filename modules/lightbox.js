document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxTitle = document.getElementById("lightbox-title")
    const allImages = document.querySelectorAll(".article_image")

    allImages.forEach(image => {
        image.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImage.src = image.src;
            document.body.style.overflow = "hidden";
            lightboxTitle.innerText = image.alt;
        })
    })

    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
    })

})