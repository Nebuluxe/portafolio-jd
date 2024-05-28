// document.addEventListener("DOMContentLoaded", function() {
//     const track = document.querySelector('.skills-track');
//     const skills = Array.from(track.children);

//     // Clonar los elementos para crear el efecto infinito
//     skills.forEach(skill => {
//         const clone = skill.cloneNode(true);
//         track.appendChild(clone);
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const items = Array.from(track.children);
    const itemWidth = items[0].getBoundingClientRect().width;
    let currentIndex = 0;

    function moveToNextItem() {
        items.forEach((item, index) => {
            item.classList.remove('active');
        });
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
        const moveAmount = -currentIndex * itemWidth;
        track.style.transform = `translateX(${moveAmount}px)`;
    }

    // Inicializa el primer elemento como activo
    items[0].classList.add('active');

    // Mueve al siguiente elemento cada 2 segundos
    setInterval(moveToNextItem, 2000);
});

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('#navbar a');

    for (const link of links) {
        link.addEventListener('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                const hash = this.hash;
                smoothScrollTo(document.querySelector(hash), 1000); // 1000 ms = 1 segundo
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('#showcase a');

    for (const link of links) {
        link.addEventListener('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                const hash = this.hash;
                smoothScrollTo(document.querySelector(hash), 1000); // 1000 ms = 1 segundo
            }
        });
    }
});

function smoothScrollTo(target, duration) {
    const targetPosition = target.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}