// Lightbox Gallery
document.addEventListener("DOMContentLoaded", function () {
  const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionDelay: 250,
    closeText: "×",
    navText: ["‹", "›"],
  });

  // Confetti Effect
  const galleryItems = document.querySelectorAll(".gallery a");
  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    });
  });
});

// Confetti Library (auto-load dari CDN)
