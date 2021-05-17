let x, a, b;

x = prompt("Введите число:");

if (!x && typeof x == "object") {
	alert("Вы отменили!");
} else if (x == "") {
	alert("Вы ничего не ввели!");
} else if (isNaN(x)) {
	alert("Это не число!");
} else {

	a = +prompt("Во сколько раз Вы хотите увеличить Ваше число?");
	if (!a && typeof a == "object") {
		alert("Вы отменили!");
	} else if (a == "") {
		alert("Вы ничего не ввели!");
	} else if (isNaN(a)) {
		alert("Это не число!");
	} else {

		b = x * a;
		alert(`Ваше число ${x}, увеличенное в ${a} раз, равно ${b}`);
	}
}