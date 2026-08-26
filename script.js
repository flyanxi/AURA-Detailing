// === Booking modal ===
const modal = document.getElementById('bookingModal');
const openBtns = document.querySelectorAll('.open-modal-btn');
const closeBtn = document.getElementById('closeModalBtn');

function openModal() {
    if (!modal) return;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    const firstField = modal.querySelector('input, select');
    if (firstField) firstField.focus();
}

function closeModal() {
    if (!modal) return;
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

openBtns.forEach((btn) => btn.addEventListener('click', openModal));

if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
    closeBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            closeModal();
        }
    });
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('show')) closeModal();
});

// === Mobile nav toggle ===
const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');

if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
        const isOpen = primaryNav.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    primaryNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            primaryNav.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// === Input validation (restrict characters as user types) ===
const nameInput = document.getElementById('bookingName');
const phoneInput = document.getElementById('bookingPhone');

if (nameInput) {
    nameInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, '');
    });
}

if (phoneInput) {
    phoneInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9+]/g, '');
    });
}

// === Booking form submission ===
const bookingForm = document.getElementById('bookingForm');
const formStatus = document.getElementById('formStatus');

if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (formStatus) {
            formStatus.textContent = "Thanks! We'll confirm your slot within one business day.";
        }
        bookingForm.reset();
        setTimeout(closeModal, 1800);
    });
}

// === Burger menu toggle for mobile ===
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('#primaryNav a, .open-modal-btn');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
});