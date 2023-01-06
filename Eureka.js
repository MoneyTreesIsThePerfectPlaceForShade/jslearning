// надо найти все числа, которые удовл условию:
// 89 = 8**1 + 9**2
// 1 = 1**1 ; 2 = 2**1 ... 9 = 9**1

// a и b - диапазон чисел от а до b
function sumDigPow(a, b) {
    // создал массив, куда буду записывать все соответствия
    const resultArr = [];

    // весь код оборачивает цикл for, который прогонит каждое число на соответствие

    for (let i = a; i <= b; i++) {
        // делим текущее число (i) на цифры
        const digits = i.toString().split("");
        const realDigits = digits.map(Number);
        // считаем сумму цифр, возведенных в степень в соответствии с их местом в массиве
        // в этом нам поможте еще один цикл for
        let powSum = 0;
        for (let i = 0; i < realDigits.length; i++) {
            powSum += realDigits[i] ** (i + 1);
        }
        // проверяем, равно ли изначальное число с тем, что получилось
        // и пушем верные ответы
        if (i === powSum) {
            resultArr.push(i);
        }
    }
    // возвращаем массив с верными числами
    return resultArr;
}

console.log(sumDigPow(1, 10)); // ответ: 1-9
console.log(sumDigPow(1, 100)); // ответ: 1-9, 89
console.log(sumDigPow(10, 100)); // ответ: 89
console.log(sumDigPow(90, 150)); // ответ: 135
