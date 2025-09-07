const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('#close-button');
const donate = document.querySelector('#donate');
const about = document.querySelector('#about');
const toggle = document.querySelectorAll('.menuItemList div');


toggle.forEach((t) => {
    t.addEventListener('click', function (e) {
        e.preventDefault();
        const currentElement = this.parentElement;
        const currentSymbol = this.querySelector(".symbol")
        document.querySelectorAll('.menuItemList').forEach(item => {
            if (item !== currentElement) {
                item.classList.remove('active');
                item.querySelector('.symbol').textContent = '+';
            }
        })
        const isActive = currentElement.classList.toggle('active');
        currentSymbol.textContent = isActive ? '-' : '+';
    })
})
menuButton.addEventListener('click', () => {
    menu.style.right = 0;
    donate.style.marginRight = '30rem';
})
closeButton.addEventListener('click', () => {
    menu.style.right = '-30rem';
    donate.style.marginRight = '2rem';
})


if (window.innerWidth <= 768) {
    donate.remove();
}