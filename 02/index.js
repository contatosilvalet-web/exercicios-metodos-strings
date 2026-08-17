const cpf = "12345678900";
const cnpj = "12345678900123";

function formatarCPF(cpf) {
    if (cpf.length !== 11) {
        return "CPF inválido."; 
    }

    const inicio = cpf.slice(0, 3);
    const meio = cpf.slice(3, 6);
    const fim = cpf.slice(6, 9);
    const digito = cpf.slice(9);

    return `${inicio}.${meio}.${fim}-${digito}`;
}

const cpfFormatado = formatarCPF(cpf);
console.log("CPF formatado: ", cpfFormatado);

// Imprime: CPF formatado:  123.456.789-00.

function formatarCNPJ(cnpj) {
    if (cnpj.length !== 14) {
        return "CNPJ inválido"; 
    }

    const inicio = cnpj.slice(0, 2);
    const meio1 = cnpj.slice(2, 5);
    const meio2 = cnpj.slice(5, 8);
    const fim = cnpj.slice(8, 12);
    const digito = cnpj.slice(12);

    return `${inicio}.${meio1}.${meio2}/${fim}-${digito}`;
}

const cnpjFormatado = formatarCNPJ(cnpj);
console.log("CNPJ formatado: ", cnpjFormatado);

// Imprime: CNPJ formatado:  12.345.678/9001-23. 
