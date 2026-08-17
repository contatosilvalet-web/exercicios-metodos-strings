const texto = "Aprenda programar do zero com JavaScript";

function transformarUrlAmigavel(texto) {
    const urlAmigavel = texto
        .toLowerCase() // Deixa tudo minúsculo
        .trim() // Remove os espaços em branco
        .normalize("NFD") // Separa a letra base do seu acento 
        .replace(/[\u0300-\u036f]/g, "") // Remove acentos
        .replace(/[^a-z0-9\s]/g, "") // Remove caracteres especiais
        .replace(/\s+/g, "-"); // Substitui espaços por hífen

    console.log(urlAmigavel);
}

transformarUrlAmigavel(texto);

// Imprime: aprenda-programar-do-zero-com-javascript.

const texto2 = "Exercício 03 transformando texto em uma URL amigável";

function transformarUrlAmigavel(texto2) {
    const urlAmigavel = texto2
        .toLowerCase() 
        .trim() 
        .normalize("NFD")  
        .replace(/[\u0300-\u036f]/g, "") 
        .replace(/[^a-z0-9\s]/g, "") 
        .replace(/\s+/g, "-"); 

    console.log(urlAmigavel);
}

transformarUrlAmigavel(texto2);

// Imprime: exercicio-03-transformando-texto-em-uma-url-amigavel.

