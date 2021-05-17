let str = "";
let num;

num = prompt('Введите длину строки:');

for (i = 1; i <= num; i++) {
	str += i + " ";
}

alert(str);