// нужно отфильтерить строки, оставить только числа
function filter_list(l) {
    // создадим массив, в который будем пушить числа
    const arrResult = [];
    // если type of не number = то не пушим, так для каждого элемента массива
    for (const element of l) {
        if (typeof element === "number") {
            arrResult.push(element);
        }
    }
    // ретёрним результат в виде массива
    return arrResult;
}

console.log(filter_list([1, 2, "a", "b"]));
