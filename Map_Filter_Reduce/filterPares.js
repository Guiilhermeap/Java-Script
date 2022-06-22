function filtraPares (arr) {
    return arr.filter (callback);
}

function callback (item) {
    return item % 2 === 0;
}

const myArray = [1, 2, 134, 32, 24, 52, 21, 42, 6131, 10000];

console.log (filtraPares(myArray));


///////////////////////////////////////////////////////////
//////////////////// OUTROS MÈTODOS ///////////////////////
///////////////////////////////////////////////////////////

//////  filtrarPares 2° Método ///////

/*
function filtarImpares (arr) {
    return arr.filter (callback);
}

function callback (item) {
    return item % 2 !== 1;
}

const meuArray = [1, 2, 134, 32, 24, 52, 21, 42, 6131, 10000];

console.log (filtarImpares(meuArray));
/*


//////  filtrarImpares 1° Método ///////

/*
function filtarImpares (arr) {
    return arr.filter (callback);
}

function callback (item) {
    return item % 2 === 1;
}

const meuArray = [1, 2, 134, 32, 24, 52, 21, 42, 6131, 10000];

console.log (filtarImpares(meuArray));
*/

//////  filtrarImpares 2° Método ///////

/*
function filtarImpares (arr) {
    return arr.filter (callback);
}

function callback (item) {
    return item % 2 !== 0;
}

const meuArray = [1, 2, 134, 32, 24, 52, 21, 42, 6131, 10000];

console.log (filtarImpares(meuArray));
*/