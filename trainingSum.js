const sum = (input) => {
    const [a, b] = input.split(" ");
    const output = Number.parseInt(a) + Number.parseInt(b);
    return output;
};

sum("2 2");

sum("57 43");

sum("123456789 673243342");
