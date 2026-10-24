
const lightbox = document.getElementById("skyLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeButton = document.getElementById("closeSkyLightbox");

const photoButtons = document.querySelectorAll(".sky-photo-button");

// Open the selected photo
photoButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const image = button.querySelector("img");
        const figure = button.closest("figure");
        const title = figure.querySelector("figcaption h3");
        const quote = figure.querySelector("figcaption p");

        lightboxImage.src = button.dataset.full || image.src;
        lightboxImage.alt = button.dataset.alt || image.alt;

        lightboxCaption.textContent = title.textContent;

        if (quote) {
            lightboxCaption.textContent += " — " + quote.textContent;
        }

        lightbox.showModal();
    });
});

// Close using the X button
closeButton.addEventListener("click", () => {
    lightbox.close();
});

// Close when clicking outside the photo
lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        lightbox.close();
    }
});
