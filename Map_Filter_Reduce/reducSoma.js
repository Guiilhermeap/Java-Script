function somaNumeros(arr) {
    return arr.reduce(function (prev, current) {
        return prev + current;
    });
}

const soma = [1, 2];

console.log(somaNumeros(soma));