// // // Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не 
// // // используя цикл.


// let mas = [];
// const setElements = () => {
//   for (let i = 0; i < 10; i++) {
//     mas.push(Math.ceil(Math.random() * 10));
//   }
// }
// setElements();

// const getElements = (index) => {

//   if (index < mas.length) {
//     return mas[index].toString() + '\n' + getElements(++index);
//   }
//   return;
// }

// console.log(getElements(0));

// console.dir(mas);





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

// *********************  Мини-калькулятор   ************************
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
// let params = []


// do {
//     let operation = prompt(menu, "0");

//     switch (operation) {
//         case "1": params = getParametrs(operation);
//                   result = calcResult(params, "+");
//                   alert(`Сумма чисел = ${result}`);
//                   break;

//         case "2": params = getParametrs(operation);
//                   result = calcResult(params, "-");
//                   alert(`Разность чисел = ${result}`);
//                   break;

//         case "3": params = getParametrs(operation);
//                   result = calcResult(params, "*");
//                   alert(`Произведение чисел = ${result}`);
//                   break;

//         case "4": params = getParametrs(operation);
//                   result = calcResult(params, "/");
//                   break;

//         case "5": params = getParametrs(operation);
//                   result = calcResult(params, "^");
//                   alert(`Число ${params[0]} в степени ${params[1]} = ${result}`);
//                   break;

//         case "6": params = getParametrs(operation);
//                   result = calcResult(params, "n");
//                   alert(`Корень степени ${params[1]} из числа ${params[0]} = ${result}`);
//                   break;


//         case "0":
//         case null:
//             cancel = false;
//             break;
//         default:
//             alert("Ошибка! Неверный выбор!");
//             break;
//     }
// } while (cancel);

// function getParametrs(oper) {
//     let param1, param2;
//     let str1, str2;

//     if (oper >= 1 && oper <= 4) {
//         str1 = "Первое число:";
//         str2 = "Второе число:";
//     } else if (oper == 5) {
//         str1 = "Число:";
//         str2 = "Степень:";
//     } else if (oper == 6) {
//         str1 = "Число:";
//         str2 = "Степень корня:";
//     }


//     param1 = +prompt(str1);
//     param2 = +prompt(str2);


//     return [param1, param2];

// }

// function calcResult(params, oper) {
//     let result;

//     switch (oper) {
//     case "+": result = params[0] + params[1];
//                   break;

//     case "-": result = params[0] - params[1];
//                   break;

//     case "*": result = params[0] * params[1];
//                   break;

//     case "/": if (params[1] != 0) {
//             result = `Частное 2-х чисел = ${(params[0] / params[1]).toFixed(4)}`;
//           } 
//           else {
//             result = `Делить на 0 нельзя!`;
//         }
//         break;

//     case "^": if (params[1] < 0) {
//             result = Math.pow(params[0], params[1]).toFixed(4);
//         } else {
//             result = Math.pow(params[0], params[1]);
//         }
//         break;
//     case "n": result = Math.pow(params[0], 1 / params[1]);
//     }
//         break;




//     return result;
// }

// Задача 6
// // Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b

// let a = 10;
// let b = 3;

// alert(a % b);



// Задача 7
// С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.

// let str = "";

// for(let i = 1; i < 10; i++) {
//     str = str + i;
// }

// console.log(str);

//Задача 8
//Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e'.

// let str = "abcde";

// for(let i = 1; i < 10; i++) {
//     str = str + i;
// }

// console.log(str);


// Задача 9
// Дан массив с элементами 'Привет, ', 'мир' и '!'. Необходимо вывести на экран фразу 'Привет, мир!'.

// let mas = [ `Привет, `, `мир` `!`];
// alert([0], [1], [2])



// let button = {
//     id: "generateBtn",
//     text: "Купить",
//     class: "btn",
//     isBborder: false
// };

// let select = document.getElementById("variantsButton");
// let div = document.querySelector(".buttons");
// let btn;

// select.addEventListener("input", () => {

//     if (document.getElementById(button.id)) {
//         btn.className = `${button.class} ${select.value}`;
//     } 
//     else {
//         btn = document.createElement("button");
//         btn.id = button.id;
//         btn.textContent = button.text;
//         btn.className = `${button.class} ${select.value}`;

//         div.insertAdjacentElement("afterend", btn);
//     }
// });


// let btn = document.createElement("button");
// btn.textContent = button.text;
// btn.classList.add(button.class, "btn-big");

// if(button.isBorder) {
//     btn.style.border = "2px solid red";
// }
// else {
// btn.style.border = "none";    
// }


// document.body.prepend(btn);




// ******* Задача 11 *******//
// Напишите фрагмент кода (группу комманд), который будет присваивать значения 5 и 9 
// двум переменным, а затем третья переменная будет получать значение, равное сумме 
// значений первых двух переменных. Вывести на экран значение третьей переменной.

// let a, b;

// a = +prompt("Введите первую переменную:");
// b = +prompt("Введите вторую переменную:");

// let sum = (a + b);

// alert (`Сумма двух переменных: a = ${a}, b = ${b} равна ${sum}`);



// ******* Задача 12 *******//
// //Напишите фрагмет кода который будет присваивать значение 7.5 переменной х, а затем 
// переменным a и b будет присваивать значения вдвое и втрое (соответственно) большие 
// значения переменной х. Вывести эти значения на экран.

// let x, a, b;

// x = prompt("Введите число:");

// if (!x && typeof x == "object") {
//     alert("Вы отменили!");
// } else if (x == "") {
//     alert("Вы ничего не ввели!");
// } else if (isNaN(x)) {
//     alert("Это не число!");
// } else {

//     a = +prompt("Во сколько раз Вы хотите увеличить Ваше число?");
//     if (!a && typeof a == "object") {
//         alert("Вы отменили!");
//     } else if (a == "") {
//         alert("Вы ничего не ввели!");
//     } else if (isNaN(a)) {
//         alert("Это не число!");
//     } else {

//         b = x * a;
//         alert(`Ваше число ${x}, увеличенное в ${a} раз, равно ${b}`);
//     }
// }

// ******* Задача 13 *******//
// Напишите фрагмент кода, в котором переменным а и b будут присваиваться числовые значения пользователем, с помощью команды (prompt()). Далее необходимо проверить, что число попадает в диапазон "однозначное положительное число". Затем следует присвоить переменной с значение, составленное следующим образом: значение переменной а является числом десятков, значение переменной b является числом единиц. Например, если переменной а присваивается значение 4, а переменной b – значение 7, то переменная с получает значение 47. Вывести результат на экран.
let a, b, c;

a = prompt("Введите первое число от 0 до 9:");

if (!a && typeof a == "object") {
  alert("Вы отменили!");
} else if (a == "") {
  alert("Вы ничего не ввели!");
} else if (isNaN(a)) {
  alert("Это не число!");
} else if (a < 0 || a > 9) {
  alert("Вы ввели число не от 0 до 9!");
} else {
  b = +prompt("Введите второе число от 0 до 9:");
  if (!b && typeof b == "object") {
    alert("Вы отменили!");
  } else if (b == "") {
    alert("Вы ничего не ввели!");
  } else if (isNaN(b)) {
    alert("Это не число!");
  } else if (b < 0 || b > 9) {
    alert("Вы ввели число не от 0 до 9!");
  } else {
    c = a + b;
    alert(`Ваше число равно ${c}`);
  }
}