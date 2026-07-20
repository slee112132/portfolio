// Mobile navigation
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    const open = navMenu.classList.toggle('active');
    hamburger.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
});

navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    });
});

// In-game style clock: MM/DD DAY + time of day.
// Midnight (12 AM) is the Dark Hour.
const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function timeOfDay(hour) {
    if (hour === 0) return 'DARK HOUR';
    if (hour < 5) return 'LATE NIGHT';
    if (hour < 8) return 'EARLY MORNING';
    if (hour < 12) return 'MORNING';
    if (hour < 15) return 'DAYTIME';
    if (hour < 18) return 'AFTERNOON';
    if (hour < 23) return 'EVENING';
    return 'LATE NIGHT';
}

function updateClock() {
    const now = new Date();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    const tod = timeOfDay(now.getHours());

    document.getElementById('clock-date').textContent = mm + '/' + dd;
    document.getElementById('clock-day').textContent = DAYS[now.getDay()];

    const todEl = document.getElementById('clock-tod');
    todEl.textContent = tod;
    todEl.classList.toggle('dark-hour', tod === 'DARK HOUR');
}

updateClock();
setInterval(updateClock, 30 * 1000);

// Navbar shadow on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Reveal-on-scroll with a slight stagger per section
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.section').forEach(section => {
    section.querySelectorAll('.reveal').forEach((el, i) => {
        el.style.transitionDelay = Math.min(i * 90, 450) + 'ms';
        revealObserver.observe(el);
    });
});

// Active nav link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 140;
    let currentId = null;

    sections.forEach(section => {
        if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
            currentId = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
    });
}, { passive: true });
