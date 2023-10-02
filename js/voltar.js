// Função para exibir a seta de voltar
window.addEventListener('scroll', function(){
    let scroll = document.querySelector('.voltar')
    scroll.classList.toggle('active', window.scrollY > 250)
})

function voltar_topo(){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
}