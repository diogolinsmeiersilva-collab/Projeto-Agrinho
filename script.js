function mostrarMensagem() {
    alert("O agro sustentável une tecnologia, produtividade e preservação ambiental.");
}

function animarNumero(id, final, velocidade) {
    let atual = 0;

    const contador = setInterval(() => {
        atual += Math.ceil(final / 100);

        if (atual >= final) {
            atual = final;
            clearInterval(contador);
        }

        document.getElementById(id).innerText = atual.toLocaleString();
    }, velocidade);
}

window.onload = () => {
    animarNumero("num1", 2500, 20);
    animarNumero("num2", 50000, 15);
    animarNumero("num3", 180, 25);
};
