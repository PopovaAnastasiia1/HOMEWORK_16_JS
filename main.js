num = +prompt("Введіть число");
while (num === "" || Number(isNaN(num))) {
  num = +prompt("Введіть  число ще раз:");
}

function fib(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  if (n < 0) return fib(n + 1) - fib(n + 2);
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(num));
