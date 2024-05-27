document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector('.skills-track');
    const skills = Array.from(track.children);

    // Clonar los elementos para crear el efecto infinito
    skills.forEach(skill => {
        const clone = skill.cloneNode(true);
        track.appendChild(clone);
    });
});
