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