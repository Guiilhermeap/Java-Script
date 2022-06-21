//solucão 1

function verificaPalindromo(string) {
    if (!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("a base do teto desaba"));


//solução 2

// Ex:
//omo
//012


function verificaPalindromo2 (string) {
    if (!string) return "string inexistente";

    for (let i = 0; i < string.length; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
             return false;
        }
    }
    return true;
}


console.log(verificaPalindromo2("gato"));