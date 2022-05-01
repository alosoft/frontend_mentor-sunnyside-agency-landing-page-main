const humburger_menu = document.querySelector('.humburger_menu');
const overlay = document.querySelector('.overlay');

humburger_menu.addEventListener('click', () => {
    if (overlay.style.display === 'block') {
        overlay.style.display = 'none';
    } else {   
        overlay.style.display = 'block';
        humburger_menu.src = './images/close.svg'
    }

})

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    humburger_menu.src = './images/menu.svg'
})