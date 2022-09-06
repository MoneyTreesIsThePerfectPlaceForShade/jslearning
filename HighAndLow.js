// находит наибольшее и наименьшее число, данные подаются в виде строки, пример: "1 2 3"
function highAndLow(numbers) {
  numbers = numbers.split(" ").map(Number);
  let arr = Array.from(numbers);
  return Math.max(...arr) + " " + Math.min(...arr);
}