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

for (N; N <= M; N++) {
    if (isEven && N%2===0) {
       continue;}  
    sum = sum + N;};

if (isEven) {
document.writeln("Сумма всех непарных чисел: " + sum);
} else {
document.writeln("Сумма всех чисел: " + sum);}