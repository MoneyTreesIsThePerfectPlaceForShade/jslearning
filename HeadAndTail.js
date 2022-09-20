const head = (array) => {
    return array[0];
};

const tail = (array) => {
    return array.slice(1);
};

const init = (array) => {
    return array.slice(0, -1);
};

const last = (array) => {
    return array[array.length - 1];
};

console.log(head([1, 2, 3, 4, 5]));
console.log(tail([1, 2, 3, 4, 5]));
console.log(init([48, 42, 49, 30]));
console.log(last([1, 2, 3, 4, 5]));
