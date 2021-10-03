let N;
let M;
let isEven;
let sum = 0;


do {
    N = +prompt ('Введите число "N"');
    N = parseInt (N);
} while (isNaN(N) || N == '' || N === null);

document.writeln(N + ": " + typeof(N) + "<br>");


do {
    M = +prompt ('Введите число "M", которое больше, чем ' + N);
    M = parseInt (M);
} while (isNaN(M) || M == '' || M < N || N === null || M == N);

document.writeln(M + ": " + typeof(M) + "<br>");

isEven = confirm("Пропускать парные числа?");

for (let i = N; i <= M; i++) {
    if (isEven && i%2===0) {
       continue;}  
    sum = sum + i;};

if (isEven) {
document.writeln("Сумма всех непарных чисел: " + sum);
} else {
document.writeln("Сумма всех чисел: " + sum);}