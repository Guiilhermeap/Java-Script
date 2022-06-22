const myArray = [20, 90, 12, 10, 28, 91, 99, 2009, 2022, 5];

function valoresUnicos (arr) {
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(myArray));