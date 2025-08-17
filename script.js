// ===== Animasi Scroll: Event muncul saat masuk viewport =====
const events = document.querySelectorAll(".event");

function checkVisibility() {
  const triggerBottom = window.innerHeight * 0.85; // 85% tinggi layar

  events.forEach(event => {
    const eventTop = event.getBoundingClientRect().top;

    if (eventTop < triggerBottom) {
      event.classList.add("show");
    } else {
      event.classList.remove("show");
    }
  });
}

// Jalankan saat load dan saat scroll
window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", checkVisibility);
