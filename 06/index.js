const celular = 7199918888;

function formatarCelular(celular) {
    let numStr = celular.toString();

    if (numStr.length === 10 || numStr.length === 11) {
        let ddd = numStr.slice(0, 2);
        let resto = numStr.slice(2);

        if (resto.length === 8) {
            resto = "9" + resto;
        }

        let parte1 = resto.slice(0, 5);
        let parte2 = resto.slice(5, 9);

        console.log(`(${ddd}) ${parte1}-${parte2}`);
    } 

    else if (numStr.length === 8 || numStr.length === 9) {
        let resto = numStr;

        if (resto.length === 8) {
            resto = "9" + resto;
        }

        let parte1 = resto.slice(0, 5);
        let parte2 = resto.slice(5, 9);

        console.log(`${parte1}-${parte2}`);
    } else {
        console.log("Número de celular inválido");
    }
}

formatarCelular(celular);

// Imprime: const celular = (71) 99991-8888;

/* Outros exemplos:
const celular = 1991222526;

Imprime: (19) 99122-2526.

const celular = 1799876;

Imprime: Número de celular inválido. */
