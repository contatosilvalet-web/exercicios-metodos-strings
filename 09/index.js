const nome = 'Ana Souza';

function gerarNickname(nome) {
    const nickname = "@" + nome
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "") 
        .slice(0, 12);       

    console.log(nickname);
}

gerarNickname(nome);

// Imprime: @anasouza

/* Outros exemplos:
const nome = 'Leticia Pedro';

function gerarNickname(nome) {
    const nickname = "@" + nome
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "") 
        .slice(0, 12);       

    console.log(nickname);
}

gerarNickname(nome);

Imprime: @leticiapedro 

const nome = 'Letícia da Silva Pedro';

function gerarNickname(nome) {
    const nickname = "@" + nome
        .toLowerCase()
        .trim()
        .normalize("NFD")               // Separa a letra do acento 
        .replace(/[\u0300-\u036f]/g, "") // Remove os acentos
        .replace(/\s+/g, "")            
        .slice(0, 12);                 

    console.log(nickname);
}

gerarNickname(nome);

// Imprime: @leticiapedr */
