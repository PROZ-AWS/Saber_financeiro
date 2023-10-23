function toggleTextoOculto() {
    var paragrafosOcultos = document.querySelectorAll('.conteudo_oculto');
    var botao = document.querySelector('.ler_mais');

    paragrafosOcultos.forEach(function (paragrafo) {
        if (paragrafo.style.display === 'none' || paragrafo.style.display === '') {
            paragrafo.style.display = 'block';
            botao.textContent = 'Ler Menos';
        } else {
            paragrafo.style.display = 'none';
            botao.textContent = 'Ler Mais';
        }
    });
}