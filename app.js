//1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

let num = 4;

function func1(num) {
    return num * num;
}

//2. Сделайте функцию, которая возвращает сумму двух чисел. 

let a = 3;
let b = 1;

function funk2(a, b) {
    return a + b;
}

const result = funk2(a, b);
console.log(result);

//3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. 
let c = 2;

let func3 = (a, b, c) => (a - b) / c;
console.log(func3(a, b, c));


//4. Сделайте функцию, которая принимает параметром число от 1 до 7,
// а возвращает день недели на русском языке.

let week = function (funk4) {
    if (funk4 === 1) {
       return "Понедельник";
     } else if (funk4 === 2) {
       return "Вторник";
     } else if (funk4 === 3) {
       return "Среда";
     } else if (funk4 === 4) {
       return "Четверг";
     } else if (funk4 === 5) {
       return "Пятница";
     } else if (funk4 === 6) {
       return "Суббота";
     } else if (funk4 === 7) {
       return "Воскресенье";
     } else {
       return console.log('Введите funk4');
     }
    };

console.log(week(2));

// 5. Сделайте функцию, которая параметрами принимает 2 числа. 
// Если эти числа равны - пусть функция вернет true, а если не равны - false.

let a = 3;
let b = 1;

// не работает
function funk5(a, b) {
    if a === b {
        return funk5 = true;
    } else {
        return funk5 = false;
    }
};

console.log(funk5);