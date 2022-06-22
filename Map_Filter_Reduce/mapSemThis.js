function mapSemThis(arr) {
    return arr.map(function (item) {
        return item * 2;
    });
}

const nums = [2, 4, 6, 8, 10, 12, 14, 16];

console.log('Os números do ARRAY multiplicados por \"2\"\ são: \n ',mapSemThis(nums));