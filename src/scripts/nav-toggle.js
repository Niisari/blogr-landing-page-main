const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close__btn');
const navMenu = document.querySelector('.nav__menu');
const dropdownBtns = document.querySelectorAll('.dropdown__btn');

// Open / close mobile nav
hamburger.addEventListener('click', () => {
    navMenu.classList.add('active');
    hamburger.classList.add('hidden');
    closeBtn.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('hidden');
    closeBtn.classList.remove('active');

    // close all dropdowns when menu closes
    document.querySelectorAll('.dropdown.active')
        .forEach(d => d.classList.remove('active'));
});

// Dropdown logic (ONLY on nav buttons)
dropdownBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const currentDropdown = btn.nextElementSibling;

        // Optional: close other dropdowns
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            if (dropdown !== currentDropdown) {
                dropdown.classList.remove('active');
            }
        });

        currentDropdown.classList.toggle('active');
    });
});