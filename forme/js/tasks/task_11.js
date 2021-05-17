let a, b;

a = +prompt("Введите первую переменную:");
if (!a && typeof a == "object") {
	alert("Вы отменили!");
} else if (a == "") {
	alert("Вы ничего не ввели!");
} else if (isNaN(a)) {
	alert("Это не число!");
} else {
	b = +prompt("Введите вторую переменную:");
	if (!b && typeof b == "object") {
		alert("Вы отменили!");
	} else if (b == "") {
		alert("Вы ничего не ввели!");
	} else if (isNaN(b)) {
		alert("Это не число!");
	} else {
		let sum = (a + b);
		alert(`Сумма двух переменных: a = ${a}, b = ${b} равна ${sum}`);
	}
}