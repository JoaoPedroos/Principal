const btnmenu = document.querySelector('#btn-menu')

function abrirmenu(){
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}
btnmenu.addEventListener('click', abrirmenu)

// Projeto
var buttonvisu = document.querySelector('.buttonvisu')
var progress = document.querySelector('.progress')
var progresssegundo = document.querySelector('.progresssegundo')
var fechar = document.querySelector('.fechar')
var btn2 = document.querySelector('.btn2')
var fecharbtn2 = document.querySelector('.fecharbtn2')

fechar.addEventListener('click', ()=>{
    progress.classList.remove('progresss')

})
fecharbtn2.addEventListener('click', ()=>{
    progresssegundo.classList.remove('progresssec')
})
buttonvisu.addEventListener('click', ()=>{
    progress.classList.add('progresss')

})
btn2.addEventListener('click', ()=>{
    progresssegundo.classList.add('progresssec')
})



