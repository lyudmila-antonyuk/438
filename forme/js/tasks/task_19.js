// Напишите код, который принимает от пользователя число и затем выводит на экран следующие три значения(все– в одной строке, разделенные пробелом): число, меньше введенного с клавиатуры на 1, число, введенное с клавиатуры, и число, больше введенного с клавиатуры на 1.

let a;

a = +prompt('Введите любое число:');
if (!a && typeof a == "object") {
	alert("Вы отменили!");
} else if (a == "") {
	alert("Вы ничего не ввели!");
} else if (isNaN(a)) {
	alert("Это не число!");
} else {
	alert(`${a - 1} ${a} ${a + 1}`);
}