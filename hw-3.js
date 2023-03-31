//1)
let password = 'пароль';
let question = prompt('Введите пароль');

if (question === password) {
	alert('Пароль введен верно');
} else {
	alert('Пароль введен неправильно');
}

//2)
let c = 9;

if (c > 0 && c < 10) {
	console.log('Верно');
} else {
	console.log('Неверно');
}

//3)
let d = 9;
let e = 101;

if (d > 100 || e > 100) {
	console.log('Верно');
} else {
	console.log('Неверно');
}

//4)
let a = Number('2');
let b = Number('3');
alert(a + b);

//5)
let monthNumber = 1;

switch (monthNumber) {
	case 12:
	case 1:
	case 2:
		console.log('Зима');
		break;
	case 3:
	case 4:
	case 5:
		console.log('Весна');
		break;
	case 6:
	case 7:
	case 8:
		console.log('Лето');
		break;
	case 9:
	case 10:
	case 11:
		console.log('Осень');
		break;
	default:
		console.log('Ввел что-то не то');
		break;
}

//6) верстка

//7)
let counter = prompt('Пожалуйста, введите любое число');

if (Number.isNaN(counter) === true) {
} else {
	alert(Number(counter));
}

if (counter % 2 === 0) {
	alert('Число четное');
} else {
	alert('Число нечетное');
}

//8-9)
let clientOS = 0;
let clientDeviceYear = 2015;

if (clientOS === 0 && clientDeviceYear >= 2015) {
	console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 0 && clientDeviceYear < 2015) {
	console.log('Установите облегченную версию приложения для iOS по ссылке');
} else if (clientOS === 1 && clientDeviceYear >= 2015) {
	console.log('Установите версию приложения для Android по ссылке');
} else {
	console.log('Установите облегченную версию приложения для Android по ссылке');
}
