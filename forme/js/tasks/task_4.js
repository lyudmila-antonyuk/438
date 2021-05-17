let a;

a = +prompt("Введите число:");
if (!a && typeof x == "object") {
    alert("Вы отменили!");
} else if (a == "") {
    alert("Вы ничего не ввели!");
} else if (isNaN(a)) {
    alert("Это не число!");
} else if (a != "10") {
    alert("Неверно!");
} else {
    alert("Верно!");
}
