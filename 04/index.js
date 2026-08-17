let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

let identificadorFormatado = identificador.padStart(6, "0");

let palavras = nome.toLowerCase().split(" ");
let nomeFormatado = "";

for (let i = 0; i < palavras.length; i++) {
    let palavra = palavras[i];
    let palavraCapitalizada = palavra[0].toUpperCase() + palavra.slice(1);
    
    if (i === 0) {
        nomeFormatado = palavraCapitalizada;
    } else {
        nomeFormatado += " " + palavraCapitalizada;
    }
}

let emailFormatado = email.trim();

const usuarioFormatado = {
    identificador: identificadorFormatado,
    nome: nomeFormatado,
    email: emailFormatado
};

console.log("Identificador formatado:" ,usuarioFormatado.identificador);
console.log("Nome do usuário formatado:" ,usuarioFormatado.nome);
console.log("E-mail do usuário formatado:" ,usuarioFormatado.email);

/* Imprime: 
Identificador formatado: 000123
Nome do usuário formatado: José Silva Costa
E-mail do usuário formatado: jose@email.com */

function formatarUsuario(identificador, nome, email) {
    let identificadorFormatado = identificador.padStart(6, "0");

    let palavras = nome.toLowerCase().split(" ");
    let nomeFormatado = "";

    for (let i = 0; i < palavras.length; i++) {
        let palavra = palavras[i];
        let palavraCapitalizada = palavra[0].toUpperCase() + palavra.slice(1);
        
        if (i === 0) {
            nomeFormatado = palavraCapitalizada;
        } else {
            nomeFormatado += " " + palavraCapitalizada;
        }
    }

    let emailFormatado = email.trim();

    return {
        identificador: identificadorFormatado,
        nome: nomeFormatado,
        email: emailFormatado
    };
}

let usuario2 = formatarUsuario("12345", "aNA livia pereira silva", "    alivia@email.com  ");

console.log("Identificador formatado:", usuario2.identificador);
console.log("Nome do usuário formatado:", usuario2.nome);
console.log("E-mail do usuário formatado:", usuario2.email);

/* Imprime
Identificador formatado: 012345
Nome do usuário formatado: Ana Livia Pereira Silva
E-mail do usuário formatado: alivia@email.com */
