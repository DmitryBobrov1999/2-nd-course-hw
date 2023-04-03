// function calculate(a, b) { //Задание 1
// 	if (a < b || b > a) {
// 		return a;
// 	} else {
// 		return b;
// 	}
// }

// console.log(calculate(100, 10));

// function calculate (number) { //Задание 2
// 	if (number % 2 == 0) {
// 		console.log('Число четное')
// 	} else {
// 		console.log('Число нечетное');
// 	}
// }

// calculate(999)

// function toSquare (n) { //Задание 3.1
// 	console.log(n**2)
// }

// toSquare(20)

// function toSquare (n) { //Задание 3.2
// 	return n**2
// }

// console.log(toSquare(3))

// function toQuestion () { //Задание 4
// 	let age = prompt('Сколько вам лет?');
// 	if (age < 0) {
// 		alert('Вы ввели неправильное значение');
// 	} else if (age < 13) {
// 		alert('Привет, друг!');
// 	} else {
// 		alert('Добро пожаловать!');
// 	}
// }

// toQuestion()

// function counter(a, b) {	//Задание 5
// 	if (isNaN(a) || isNaN(b)) {
// 		return console.log('Одно или оба значения не являются числом');
// 	} else {
// 		return console.log(a * b);
// 	}
// }

// counter(3, 'Не число');

// function toAsk () { //Задание 6
// 	let n = prompt('Введите число')
// 	if (isNaN(n)) {
// 		return console.log('Переданный параметр не является числом');
// 	} else {
// 		return console.log(`${n} в кубе равняется ${n ** 3}`);
// 	}
// }

// toAsk()

// function getArea() { //Задание 7
// 	return Math.PI * this.radius ** 2;
// }

// function getPerimeter() {
// 	return 2 * Math.PI * this.radius;
// }

// const circle1 = {
// 	radius: 10,
// 	getArea: getArea,
// 	getPerimeter: getPerimeter,
// };

// const circle2 = {
// 	radius: 5,
// 	getArea: getArea,
// 	getPerimeter: getPerimeter,
// };

// console.log(circle1.getArea());
// console.log(circle2.getArea());
// console.log(circle1.getPerimeter());
// console.log(circle2.getPerimeter());

// function seasonCalc() { // Задание 8
// 	let month = Number(prompt('Введите число'));
// 	if (month === 12 || month === 1 || month === 2) {
// 		return console.log('Зима');
// 	} else if (month === 3 || month === 4 || month === 5) {
// 		return console.log('Весна');
// 	} else if (month === 6 || month === 7 || month === 8) {
// 		return console.log('Лето');
// 	} else if (month === 9 || month === 10 || month === 11) {
// 		return console.log('Осень');
// 	} else {
// 		return console.log('Не номер месяца');
// 	}
// }
