const alunos = [
    {
        nome: 'Guilherme',
        nota: 8,
        turma: '1B',
    },
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Leo',
        nota: 7,
        turma: '2C',
    },
    {
        nome: 'Dudu',
        nota: 3,
        turma: '2C',
    },
];

function alunosAprovados(array, media) {
    let aprovados = [];
    for (let i = 0; i < array.length; i++) {

        const {nota, nome} = array[i];

        if (nota >= media) {
            aprovados.push (nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));