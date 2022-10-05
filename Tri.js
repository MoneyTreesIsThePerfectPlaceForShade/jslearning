function isTriangle(a, b, c) {
    if (a + b > c && a + c > b && c + b > a) {
        return true;
    } else {
        return false;
    }
}
