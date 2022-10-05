function solution(string) {
    // находим где в строке заглавная буква
    // делать будем через for и toUpperCase()

    let stringResult = "";

    for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() === string[i]) {
            stringResult += string[i];
        }
        if (string[i].toUpperCase() === string[i]) {
            stringResult = stringResult + " " + string[i];
        }
    }

    return stringResult;
}

let b = solution("camelCasingTest");
console.log(b);
