// Напишите код, который принимает от пользователя число, представляющее собой массу тела в граммах, и выводящую на экран массу этого тела в килограммах.

let a;

a = +prompt('Как думаете, сколько весит Ваша рука в граммах?');
if (!a && typeof a == "object") {
	alert("Вы отменили!");
} else if (a == "") {
	alert("Вы ничего не ввели!");
} else if (isNaN(a)) {
	alert("Это не число!");
} else {
	alert(`А в килограммах - это вот сколько: ${a / 1000} кг`);
}