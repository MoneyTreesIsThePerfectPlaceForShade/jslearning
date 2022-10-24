function arrayDiff(a, b) {
    // если сделать b.includes(element)
    // то результатом будет массив из 'a'
    // с теми элементами, которые ЕСТЬ в 'b'
    console.log(a.filter((element) => !b.includes(element)));
    return a.filter((element) => !b.includes(element));
}

arrayDiff([1, 2, 3], [1, 2, 4]);
