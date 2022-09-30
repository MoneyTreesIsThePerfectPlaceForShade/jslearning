function likes(names) {
    // берём имена из массива и создаем из них строку, перед последним
    // именем ставим and, а не запятую

    // краевой случай - строка пустая
    if (names.length === 0) {
        return "no one likes this";
    }

    // если в массиве один элемент
    if (names.length === 1) {
        return `${names[0]} likes this`;
    }

    if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`;
    }
    // если в массиве 3 элемента
    let str = "";
    if (names.length === 3) {
        for (let i = 0; i < names.length; i++) {
            if (i === 0) {
                str = str + names[0];
            }
            if (i > 0 && i < names.length - 1) {
                str = str + ", " + names[i];
            }
            if (i === names.length - 1) {
                str = str + " and " + names[names.length - 1];
            }
        }
    }

    // если в массиве более 3 элементов
    if (names.length > 3) {
        str =
            str +
            names[0] +
            ", " +
            names[1] +
            ` and ${names.length - 2} others like this`;

        return str;
    }

    // к строке имён добавляем "like this"
    str = str + " like this";
    return str;
}

let b = likes(["Alex", "Jacob", "Mark", "Max", "Volk"]);
let a = likes(["Peter"]);
let c = likes([]);
console.log(b);
console.log(c);
console.log(a);
