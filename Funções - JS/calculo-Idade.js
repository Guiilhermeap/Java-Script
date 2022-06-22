function calculaIdade (anos) {
    return `Daqui a ${anos} anos , ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: 'Guilherme',
    idade: 21,
}

const pessoa2 = {
    nome: 'Maria',
    idade: 30,
}

const pessoa3 = {
    nome: 'Carla',
    idade: 50,
}

const animal = {
    nome: 'Ralf',
    idade: 5,
    raca: 'Vira-Lata',
};

console.log (calculaIdade.call(pessoa2, 30));
console.log (calculaIdade.call(animal, 3));
console.log (calculaIdade.call(pessoa1, 50));
console.log (calculaIdade.call(pessoa3, 23));