function friend(friends) {
    // беру массив и фильтрую его по условию: букв в слове должно быть 4
    const result = friends.filter((name) => name.length === 4);
    return result;
}

console.log(friend(["Ryan", "Kieran", "Mark"]));
