const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close__btn');
const navMenu = document.querySelector('.nav__menu');
const dropdownBtns = document.querySelectorAll('.dropdown__btn');

// Hamburger Logic //
hamburger.addEventListener('click', () => {
    navMenu.classList.add('active');
    hamburger.classList.add('hidden');
    closeBtn.classList.add('active');
});

// Close Button Logic //
closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('hidden');
    closeBtn.classList.remove('active');

    document.querySelectorAll('.dropdown.active')
        .forEach(d => d.classList.remove('active'));
});

// DropDown Menu Logic //
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

document.querySelectorAll(".dropdown__btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", !expanded);
  });
});