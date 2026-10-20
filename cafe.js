const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            obs.unobserve(entry.target); // animasi cukup sekali
        }
    });
}, { threshold: 0.15 });

reveals.forEach((el) => {
    observer.observe(el);
});

// Foto menu: kalau file foto belum ada / gagal dimuat, tandai area fotonya supaya tampil rapi (layout card tetap utuh)
document.querySelectorAll(".menu-photo img").forEach((img) => {
    const photo = img.parentElement;
    img.addEventListener("error", () => photo.classList.add("is-missing"));
    img.addEventListener("load", () => photo.classList.remove("is-missing"));
    if (img.complete && img.naturalWidth === 0) photo.classList.add("is-missing");
});
// Navigasi hamburger untuk tablet dan perangkat mobile
const nav = document.querySelector("nav");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".atas a");

function setMenuOpen(isOpen) {
    nav.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Tutup menu navigasi" : "Buka menu navigasi");
}

menuToggle.addEventListener("click", () => {
    setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
        setMenuOpen(false);
        menuToggle.focus();
    }
});