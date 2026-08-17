const nomeArquivo1 = 'documento.pdf';
validarArquivo(nomeArquivo1); 

const nomeArquivo2 = 'imagem.png';
validarArquivo(nomeArquivo2);

const nomeArquivo3 = 'gatinho_dancando.gif';
validarArquivo(nomeArquivo3);

function validarArquivo(nomeArquivo) {
    const arquivoMinusculo = nomeArquivo.toLowerCase();

    if (
        arquivoMinusculo.endsWith(".jpg") ||
        arquivoMinusculo.endsWith(".jpeg") ||
        arquivoMinusculo.endsWith(".gif") ||
        arquivoMinusculo.endsWith(".png")
    ) {
        console.log("Arquivo válido");
    } else {
        console.log("Arquivo inválido");
    }
}

/* Imprime
Arquivo inválido
Arquivo válido 
Arquivo válido */
