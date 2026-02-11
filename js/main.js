const navSlide = () => {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

// Invoke function
navSlide();

// Cookie Consent Logic
document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.createElement('div');
    cookieBanner.classList.add('cookie-banner');
    cookieBanner.innerHTML = `
        <div class="cookie-content">
            <p>Utilizamos cookies propias y de terceros para mejorar nuestros servicios. Si continúa navegando, consideramos que acepta su uso. Puede obtener más información en nuestra <a href="cookies.html">Política de Cookies</a>.</p>
        </div>
        <button class="cookie-btn" id="accept-cookies">Aceptar</button>
    `;

    // Check if user already accepted cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        document.body.appendChild(cookieBanner);
        // Small delay for animation
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 100);
    }

    // Handle Accept Button
    document.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'accept-cookies') {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieBanner.classList.remove('show');
            setTimeout(() => {
                cookieBanner.remove();
            }, 500);
        }
    });
});
