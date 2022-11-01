function isPangram(string) {
    // 1) Сперва лоуеркейсим строку
    string = string.toLowerCase();
    // 2) Записываем в новую переменную результаты match()
    const buf = string.match(/[a-z]/g);
    // 2.2) Сортируем этот массив
    buf.sort();
    // 2.5) Чтобы записать только уникальные значения, создам set
    const bufSet = new Set(buf);
    console.log(bufSet);
    // 3) Проверяем, есть ли в массиве ВСЕ буквы алфавита, можно также через match()
    const res = bufSet.size === 26 ? true : false;

    return res;
}

let c = isPangram("Cwm fjord bank glyphs vext quiz");
console.log(c);
