// Défilement fluide quand on clique sur les liens du menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        let targetId = this.getAttribute('href').substring(1);
        let targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});

// Apparition des sections au défilement
const sections = document.querySelectorAll("section");

const revealSection = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.85) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);

// Effet de zoom progressif sur la galerie d'images
document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("mouseover", () => {
        img.style.transition = "transform 0.3s ease-in-out";
        img.style.transform = "scale(1.1)";
    });

    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });
});
