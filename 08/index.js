const cpf = "011.022.033-44";

function removerPontuacao(documento) {
    const limpo = documento.replace(/[\.\-\/]/g, "");
    console.log(limpo);
}

removerPontuacao(cpf);

// Imprime: 01102203344.

const cnpj = "45.164.654/0001-99";

function removerPontuacao(documento) {
    const limpo = documento.replace(/[\.\-\/]/g, "");
    console.log(limpo);
}

removerPontuacao(cnpj);

// Imprime: 45164654000199. 
