function XO(str) {
    str = str.toLowerCase();
    let countO = 0;
    let countX = 0;

    const array = str.split("");
    array.forEach((element) => {
        if (element === "x") {
            countX++;
        } else if (element === "o") {
            countO++;
        }
    });

    if (countO === countX) {
        return true;
    } else return false;
}

console.log(XO("XO"));
console.log(XO("XOX"));
console.log(XO("asd"));
