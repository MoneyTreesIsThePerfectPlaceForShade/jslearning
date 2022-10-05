function findOdd(A) {
    // из массива создамем Set - чтобы получить уникальные значения
    A.sort((a, b) => {
        return a - b;
    });
    const setOfValues = [...new Set(A)];

    // счиатаем сколько раз появлялось то или иное значение

    function getOcc(array, value) {
        const c = array.filter((v) => v === value).length;

        return c;
    }
    const resArr = [];
    // тут мы нашли, сколько раз появлялось то или иное значение
    for (let i = 0; i < setOfValues.length; i++) {
        resArr[i] = getOcc(A, setOfValues[i]);
    }

    for (let i = 0; i < setOfValues.length; i++) {
        if (resArr[i] % 2 !== 0) {
            return setOfValues[i];
        }
    }
}

let b = findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]);

console.log(b);
