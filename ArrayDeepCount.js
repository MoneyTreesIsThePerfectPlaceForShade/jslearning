Object.defineProperty(Array.prototype, "flat", {
    value: function (depth = 1) {
        return this.reduce(function (flat, toFlatten) {
            return flat.concat(
                Array.isArray(toFlatten) && depth > 1
                    ? toFlatten.flat(depth - 1)
                    : toFlatten
            );
        }, []);
    },
});

function deepCount(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        if (Array.isArray(a[i])) {
            sum++;
            a = a.flat(1);
        }
    }

    sum += a.length;
    return sum;
}

console.log(deepCount([1, 2, [3, 4, [5]]]));
console.log("Expected " + 7);
console.log(deepCount([]));
console.log("Expected " + 0);
console.log(deepCount([1, 2, 3]));
console.log("Expected " + 3);
console.log(deepCount(["x", "y", ["z"]]));
console.log("Expected " + 4);
console.log(deepCount([[[[[[[[[]]]]]]]]]));
console.log("Expected " + 8);
