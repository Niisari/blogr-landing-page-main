const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close__btn');
const navMenu = document.querySelector('.nav__menu');
const dropdownBtns = document.querySelectorAll('.dropdown__btn');


hamburger.addEventListener('click', () => {
    navMenu.classList.add('active');
    hamburger.classList.add('hidden');
    closeBtn.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('hidden');
    closeBtn.classList.remove('active');

    document.querySelectorAll('.dropdown.active')
        .forEach(d => d.classList.remove('active'));
});


dropdownBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const currentDropdown = btn.nextElementSibling;

        document.querySelectorAll('.dropdown').forEach(dropdown => {
            if (dropdown !== currentDropdown) {
                dropdown.classList.remove('active');
            }
        });

        currentDropdown.classList.toggle('active');
    });
});