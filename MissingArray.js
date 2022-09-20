function getLengthOfMissingArray(arrayOfArrays) {
    const result = (arrayOfArrays || [])
        .map((e) => (e ? e.length : 0))
        .sort((a, b) => {
            return a - b;
        });

    if (result.includes(0)) return 0;

    for (let i = 0; i < result.length; i++) {
        if(result[i+1] != result[i]+1) return result[i+1]-1;
    }

    return 0;
}

let b = getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]);
console.log(b);
