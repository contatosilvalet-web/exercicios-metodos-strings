const numeroCartao = '1111222233334444';

function esconderNumero(numeroCartao) {
    if (numeroCartao.length !== 16) {
        console.log("Número de cartão inválido");
        return;
    }

    const inicio = numeroCartao.slice(0, 4);
    const meio = "*".repeat(8);
    const final = numeroCartao.slice(12, 16);

    const numeroFormatado = inicio + meio + final;
    console.log(numeroFormatado);
}

esconderNumero(numeroCartao);

// Imprime: 1111********4444

/* Outro exemplo:
const numeroCartao2 = '1111222233344';

Imprime: Número de cartão inválido */ 
