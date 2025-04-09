let body = document.querySelector("body");
let tenis = document.querySelector(".imagem-tenis");

function mudarVisual(cor, imagem) {
    tenis.classList.add('troca-efeito');

    body.style.background = cor
    
    // Contador de tempo
    setTimeout(() => {
        tenis.src = imagem
        tenis.classList.remove('troca-efeito');
    }, 500);

    // 1000 milisegundos = 1 segundo
}

