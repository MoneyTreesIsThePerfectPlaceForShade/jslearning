function arrayDiff(a, b) {
    // если сделать b.includes(element)
    // то результатом будет массив из 'a'
    // с теми элементами, которые ЕСТЬ в 'b'
    console.log(a.filter((element) => !b.includes(element)));
    return a.filter((element) => !b.includes(element));
}

arrayDiff([1, 2, 3], [1, 2, 4]);

const a = ["apples", "oranges", "bananas", "mangos"];
const b = ["bananas"];

// мы оставляем все, что нет в b, вот как это работает
const res = a.filter((element) => !b.includes(element));

console.log(res);
