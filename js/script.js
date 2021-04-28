// 
//  Задача 2 Пользователь вводит длину оснований трапеции (a и b), а также высоту трапеции h. 
// Программа выводит сообщение: «Площадь трапеции будет равна <значение>». Площадь 
// вычисляется по формуле ((a + b) / 2) * h, где a, b - основания, h - высота.


// let a, b; //стороны трапеции
// let h; //высота трапеции
// let S; //искомая площадь трапеции

// let result = ""; //строка с результатом

// a= +prompt("Сторона а:");
// b= +prompt("сторона b:");
// h= +prompt ("Высота h:");

// if(a > 0 && b > 0 && h > 0) {
//     S = ((a + b) / 2) * h;
//     result = `Площадь трапеции со сторонами a = ${a}), b = ${b}\nи высотой h = ${h} равна ${S}.`;
//     }
//     else {
//         result = `Неверные данные!!! Площадь невозможно посчитать!`
//     }
// alert(result);

// alert(`Площадь трапеции со сторонами a = ${a}), b = ${b}\nи высотой h = ${h} равна ${S}.`);

//Задача 3


// let sum; //сумма вклада
// let percent; //годовой процент
// let countYears; //кол-во лет
// let endWordYears ="";

// sum = Number(prompt("Сумма вклада:"));
// percent = Number(prompt("Годовой %:"));
// countYears = Number(prompt("Период вклада (лет):"));

// for(let i = 1; i <= countYears; i++) {
//     sum += sum * percent / 100;


//     if(i != 11 && i % 10 == 1) {
//     endWordYears = "год";
// }
//     else if((i >= 5 && i <= 20) || (i % 10 >= 5 && i % 10 <= 9) || (i % 10) == 0) {
//     endWordYears = "лет"
// }
//     else  {
//     endWordYears = "года";
// }

// console.log(`Через ${i} ${endWordYears} сумма = ${sum.toFixed(2)}`);
// }

//Задача 5
//Выведите столбец чисел от 1 до 50
// let i = 1

// while(i <= 50) {
//     if(i ==25) {
//         break;
//     }
//     console.log(i + `\n`);
//     i++;
// }

// do {
//     console.log(i + `\n`);
//     i++;
// } while(i <= 50);

// Мини-калькулятор
// Сложение 2-х чисел
// Разность 2-х чисел
// Произведение 2-х чисел
// Частное 2-х чисел
// Возведение числа в n-степень
// Корень n-ой степени

// let cancel = true;
// let menu = `Ваш выбор (0-6):
// 1. Сложение 2-х чисел
// 2. Разность 2-х чисел
// 3. Произведение 2-х чисел
// 4. Деление 2-х чисел
// 5. Возведение числа в n-ю степень
// 6. Вычисление корня n-й степени
// 0. Отмена`;

// let num1, num2;
// let result; //сумма, разность, произведение итд...


// do {
//     let operation = prompt(menu, "0");

//     switch (operation) {
//         case "1":
//             num1 = +prompt("Первое число:");
//             num2 = +prompt("Второе число:");

//             result = num1 + num2;
//             alert(`Сумма чисел = ${result}`);
//             break;
//         case "2":
//             num1 = prompt("Первое число:");
//             num2 = prompt("Второе число:");

//             result = num1 - num2;
//             alert(`Разность чисел = ${result}`);
//             break;
//         case "3":
//             num1 = prompt("Первое число:");
//             num2 = prompt("Второе число:");

//             result = num1 * num2;
//             alert(`Произведение чисел = ${result}`);
//             break;
//         case "4":
//             num1 = prompt("Первое число:");
//             num2 = prompt("Второе число:");

//             if (num2 != 0) {
//                 result = num1 / num2;
//                 alert(`Деление чисел = ${result.toFixed(2)}`);
//             } else {
//                 alert(`Делить на 0 нельзя!`)
//             }
//             break;
//         case "5":
//             num1 = prompt("Число:");
//             num2 = prompt("Степень:");

//             if (num2 < 0) {
//                 result = Math.pow(num1, num2).toFixed(4);
//             } 
//             else {
//                 result = Math.pow(num1, num2);
//                 // result= num1**num2;
//             }

//             alert(`Число ${num1} в степени ${num2} = ${result}`);
//             break;
//         case "6":
//             num1 = prompt("Число:");
//             num2 = prompt("Степень корня:");

//             result = Math.pow(num1, 1 / num2);
//             alert(`Корень степени ${num2} из числа ${num1} = ${result}`);
//             break;


//         case "0":
//         case null: cancel = false;
//             break;
//         default: alert("Ошибка! Неверный выбор!");
//             break;
//     }
// } while (cancel);

// Задача 6
// // Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b

// let a = `10`;
// let b = `3`;

// alert(a % b);



//Задача 7
// С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.

// let str = "";

// for(let i = 1; i < 10; i++) {
//     str = str + i;
// }

// console.log(str);

//Задача 8
//Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e'.

let str = "abcde";

for(let i = 1; i < 10; i++) {
    str = str + i;
}

console.log(str);

