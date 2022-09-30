function numberOfPairs(gloves) {
    let result = 0;
    let copyOfGloves = [...gloves].sort();
    for (let i = 0; i < copyOfGloves.length; i++) {
        if (copyOfGloves[i] === copyOfGloves[i + 1]) {
            result++;
            copyOfGloves.splice(i, 2);
            i--;
        }
    }
    return result;
}

let b = numberOfPairs(["red", "green", "red", "blue", "blue"]);
let c = numberOfPairs(["gray", "black", "purple", "purple", "gray", "black"]);

console.log(`B: ${b}, C: ${c}`);

// let value = 3
// let arr = [1, 2, 3, 4, 5, 3]
// arr = arr.filter(item => item !== value)
