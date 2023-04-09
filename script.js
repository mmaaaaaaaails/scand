const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu__lists');
const overlay = document.querySelector('.overlay');

const toggleMenu = () => {
    menu.classList.toggle('menu__lists--active');
    overlay.classList.toggle('overlay--active');
    hamburger.classList.toggle('change');
}

hamburger.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', (event) => {
    const target = event.target;
    const itsMenu = target == menu || menu.contains(target);
    const itsHamburger = target == hamburger;
    const menuIsActive = menu.classList.contains('menu__lists--active');
    if (!itsMenu && !itsHamburger && menuIsActive) {
        toggleMenu();
    }
});
