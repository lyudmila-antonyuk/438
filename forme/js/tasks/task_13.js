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