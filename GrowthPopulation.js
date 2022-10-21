function nbYear(p0, percent, aug, p) {
    let result = p0;
    let counter = 0;
    while (true) {
        if (result <= p) {
            result = Math.trunc(result + result * (percent / 100) + aug);
            counter++;
        }
        if (result >= p) {
            return counter;
        }
    }
}

let c = nbYear(1500000, 2.5, 10000, 2000000);
console.log(c);
