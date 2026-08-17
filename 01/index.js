const comentario = "Esse anúncio parece uma fraude!";

function verificarComentario(comentario) {
    const textoMinusculo = comentario.toLowerCase();

    if (textoMinusculo.includes("golpe") || textoMinusculo.includes("fraude")) {
        console.log("Comentário bloqueado por conter palavras proibidas");
    } else {
        console.log("Comentário autorizado");
    }
}

verificarComentario(comentario);

const comentario2 = "Tomem cuidado, esse anúncio é um GOLPE!";

function verificarComentario(comentario2) {
    const textoMinusculo = comentario2.toLowerCase();

    if (textoMinusculo.includes("golpe") || textoMinusculo.includes("fraude")) {
        console.log("Comentário bloqueado por conter palavras proibidas");
    } else {
        console.log("Comentário autorizado");
    }
}

verificarComentario(comentario2);

const comentario3 = "Esse anúncio é excelente!";

function verificarComentario(comentario3) {
    const textoMinusculo = comentario3.toLowerCase();

    if (textoMinusculo.includes("golpe") || textoMinusculo.includes("fraude")) {
        console.log("Comentário bloqueado por conter palavras proibidas");
    } else {
        console.log("Comentário autorizado");
    }
}

verificarComentario(comentario3); 

const comentario4 = "Essa loja é demais!";

function verificarComentario(comentario4) {
    const textoMinusculo = comentario4.toLowerCase();

    if (textoMinusculo.includes("golpe") || textoMinusculo.includes("fraude")) {
        console.log("Comentário bloqueado por conter palavras proibidas");
    } else {
        console.log("Comentário autorizado");
    }
}

verificarComentario(comentario4); 
