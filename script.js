// --- Typewriter effect for Home subtitle ---
const typewriterTexts = [
    "Full-Stack Web Developer",
    "MERN Stack Specialist",
    "App Developer",
    "Problem Solver",
];
let twIndex = 0, charIndex = 0, twForward = true;

function typewriter() {
    const el = document.querySelector('.typewriter');
    if (!el) return;
    const currentText = typewriterTexts[twIndex];
    if (twForward) {
        el.textContent = currentText.slice(0, ++charIndex);
        if (charIndex === currentText.length) {
            twForward = false;
            setTimeout(typewriter, 1200);
        } else {
            setTimeout(typewriter, 74);
        }
    } else {
        el.textContent = currentText.slice(0, --charIndex);
        if (charIndex === 0) {
            twForward = true;
            twIndex = (twIndex + 1) % typewriterTexts.length;
            setTimeout(typewriter, 350);
        } else {
            setTimeout(typewriter, 31);
        }
    }
}
typewriter();

// --- Projects Data ----
const projects = [
    {
        title: "CarryGoods",
        description: "A logistics platform designed to streamline goods transportation and delivery for customers and businesses. Features real-time tracking, order management, and secure payments.<br><i>Stack:</i> MERN, Socket.io, Stripe API.",
        link: "#"
    },
    {
        title: "Fingen",
        description: "A smart finance management website. Track expenses, set budgets, visualize spending, and get insights to improve your financial health.<br><i>Stack:</i> React, Node.js, MongoDB, Chart.js.",
        link: "#"
    },
    {
        title: "Portfolio Website",
        description: "This portfolio website, showcasing my skills, projects, and experience as a web and app developer.<br><i>Stack:</i> HTML, CSS, JavaScript.",
        link: "#"
    },
    {
        title: "QuickNotes",
        description: "A secure note-taking app for organizing tasks and ideas. Features markdown support, search, and offline-first design.<br><i>Stack:</i> React, Express, MongoDB, PWA.",
        link: "#"
    }
];

function renderProjects() {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = projects.map(project => `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        </div>
    `).join('');
}

renderProjects();

// --- Contact Form (demo only) ---
const form = document.getElementById('contact-form');
const msg = document.getElementById('form-msg');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    msg.textContent = "Thank you! Your message has been received (demo only, no email sent).";
    form.reset();
    setTimeout(() => { msg.textContent = ""; }, 3500);
});

// --- Navbar Link Highlight on Scroll ---
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 120;
    sections.forEach((section, idx) => {
        if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
        ) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[idx].classList.add('active');
        }
    });
});

// --- Smooth Scroll for Nav Links ---
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
    });
});