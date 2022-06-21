function comparaNumeros(num1, num2) {
    const primeiraFrase = criarPrimeiraFrase(num1, num2);
    const segundaFrase = criarSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
}

function criarPrimeiraFrase(num1, num2) {
    let primeiraFrase = `Os números são: ${num1} e ${num2} \n`;
    let SimNao = 'não';

    if (num1 === num2) {
        SimNao = '';
    }
    return `${primeiraFrase} ${SimNao} São iguais \n`;

}

function criarSegundaFrase(num1, num2) {
    const soma = num1 + num2;
    let comparaDez = 'menor';
    let comparaVinte = 'menor';

    if (soma > 10) {
        comparaDez = 'maior';
    }
    if (soma > 20) {
        comparaVinte = 'maior';

    }
    return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.\n`;

}
console.log(comparaNumeros(2, 2));