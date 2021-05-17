let a, b;

a = prompt("Введите первое число:");
if (!a && typeof a == "object") {
        alert("Вы отменили!");
    } else if (a == "") {
        alert("Вы ничего не ввели!");
    } else if (isNaN(a)) {
        alert("Это не число!");
    } else {    
        b = +prompt("Введите второе число:");
        if (!b && typeof b == "object") {
            alert("Вы отменили!");
        } else if (b == "") {
            alert("Вы ничего не ввели!");
        } else if (isNaN(b)) {
            alert("Это не число!");
        } else {
    
            alert(`Остаток от деления ${a} на ${b} составляет ${a % b}`);
        }
    }
