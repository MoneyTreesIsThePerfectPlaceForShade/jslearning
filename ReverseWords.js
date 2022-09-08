function reverseWords(str) {
    const array = str.split(" ");
    array.reverse();
    str = array.join(" ");
    return str;
}
