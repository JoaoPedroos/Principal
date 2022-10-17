const btnmenu = document.querySelector('#btn-menu')

function abrirmenu(){
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}
btnmenu.addEventListener('click', abrirmenu)