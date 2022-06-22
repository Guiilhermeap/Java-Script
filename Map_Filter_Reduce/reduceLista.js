const lista = [
    {
        nome: 'sabao em po',
        preco: 20,
    },
    {
        nome: 'toalha',
        preco: 25,
    },
    {
        nome: 'papel higienigo',
        preco: 15,
    },
    {
        nome: 'cereal',
        preco: 10,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current, index) {
        console.log('rodada', index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    },saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));