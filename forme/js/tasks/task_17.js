let a, b, c;

a = +prompt("Введите любое число:");

if (!a && typeof a == "object") {
	alert("Вы отменили!");
} else if (a == "") {
	alert("Вы ничего не ввели!");
} else if (isNaN(a)) {
	alert("Это не число!");
} else if (a % 2) {
	b = a * 10;
	alert(`Ваше нечетное число ${a}, увеличенное в 10 раз, равно ${b}`);
} else {
	c = (a + 10);
	alert(`Ваше четное число ${a}, увеличенное на 10, равно ${c}`);
}