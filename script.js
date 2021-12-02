const yellow_link = document.querySelector('.yellow');
const red_link = document.querySelector('.red');
const yellow_line = document.querySelector('.yellow_line');
const red_line = document.querySelector('.red_line');
const humburger_menu = document.querySelector('.humburger_menu');
const overlay = document.querySelector('.overlay');
const mobile__menu = document.querySelector('.mobile__menu');

humburger_menu.addEventListener('click', () => {
    overlay.style.display = 'block';
})

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
})

yellow_link.addEventListener('mouseover', () => {
    yellow_line.style.display = 'block';
})

yellow_link.addEventListener('mouseleave', () => {
    yellow_line.style.display = 'none';
})

red_link.addEventListener('mouseover', () => {
    red_line.style.display = 'block';
})

red_link.addEventListener('mouseleave', () => {
    red_line.style.display = 'none';
})