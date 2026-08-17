function validarEmail(email) {
    const temArroba = email.includes("@");
    const temPonto = email.includes(".");
    const naoComecaComPonto = !email.startsWith(".");
    const naoTerminaComPonto = !email.endsWith(".");

    if (temArroba && temPonto && naoComecaComPonto && naoTerminaComPonto) {
        console.log("E-mail válido");
    } else {
        console.log("E-mail inválido");
    }
}

validarEmail("aluno@exemplo.com");
validarEmail("aluno@exemplo.com.br");
validarEmail("aluno.teste@exemplo.com");
validarEmail("aluno.teste@exemplo.io");
validarEmail("aluno@exemplo");
validarEmail("aluno.teste@exemplo");
validarEmail("aluno.teste@.");
validarEmail("aluno.@exemplo");
validarEmail(".@");
validarEmail("@.");
validarEmail("aluno.teste@exemplo.");
validarEmail(".teste@exemplo.");
validarEmail(".teste@exemplo");

/* Imprime:
E-mail válido
E-mail válido
E-mail válido
E-mail válido
E-mail inválido
E-mail válido
E-mail inválido
E-mail válido
E-mail inválido
E-mail inválido
E-mail inválido
E-mail inválido
E-mail inválido */
