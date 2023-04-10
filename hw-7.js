// let javaScriptStr = 'js' // Задание 1

// console.log(javaScriptStr.toUpperCase())




// function searchStart(Array, search) { //Задание 2
// 	newArray = [];
// 	Array.forEach(animal => {
// 		if (animal.toLowerCase().startsWith(search.toLowerCase())) {
// 			newArray.push(animal);
// 		}
// 	});
// 	return newArray;
// }

// console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
// console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));




// let number = 32.58884; // Задание 3

// console.log(Math.floor(number));
// console.log(Math.ceil(number));
// console.log(Math.round(number));




// let numbers = [52, 53, 49, 77, 21, 32] // Задание 4

// console.log(Math.min(...numbers));
// console.log(Math.max(...numbers));




// function randomCounter () { // Задание 5
// 	console.log(Math.ceil(Math.random() * 10))
// }

// randomCounter()

// function getRandomArrNumbers (number) { // Задание 6




// 	let newArray = []
// 	for (i = 0; i < (Math.floor(number / 2)); i++) {

// 			newArray.push(Math.round(Math.random() * number));

// 	}
// 	return newArray
// }

// console.log(getRandomArrNumbers(9));

// function calculateTwoNumber (numberOne, numberTwo) { // Задание 7
// 	return Math.round(Math.random() * (numberTwo - numberOne)) + numberOne
// }

// console.log(calculateTwoNumber(4, 12));




// let currentDate = new Date(); // Задание 8

// console.log(currentDate);




// let currentDate = new Date() // Задание 9

// currentDate.setDate(currentDate.getDate() + 75)

// console.log(currentDate)




// const months = [ // Задание 10
// 	'Январь',
// 	'Февраль',
// 	'Март',
// 	'Апрель',
// 	'Май',
// 	'Июнь',
// 	'Июль',
// 	'Август',
// 	'Сентябрь',
// 	'Октябрь',
// 	'Ноябрь',
// 	'Декабрь',
// ];

// const days = [
// 	'Воскресенье',
// 	'Понедельник',
// 	'Вторник',
// 	'Среда',
// 	'Четверг',
// 	'Пятница',
// 	'Суббота',
// ];

// function todayDate() {
// 	let myDate = new Date();

// 	let fullDate =
// 		'Дата: ' +
// 		myDate.getDate() +
// 		' ' +
// 		months[myDate.getMonth()] +
// 		' ' +
// 		myDate.getFullYear() +
// 		', ' +
// 		days[myDate.getDay()] + ';' +

// 	' Время: ' + myDate.getHours() + ':' + myDate.getMinutes() +
// 	':' + myDate.getSeconds();

// 	return fullDate;
// }

// console.log(todayDate());




// let food = [ //Задание 11
// 	'Яблоко',
// 	'Груша',
// 	'Дыня',
// 	'Виноград',
// 	'Персик',
// 	'Апельсин',
// 	'Мандарин',
// ];

// function toPlay() {
// 	food = food.sort(() => Math.random() - 0.5);

// 	alert(food);

// 	let questionOne = prompt('Чему равнялся первый элемент массива?');

// 	let questionTwo = prompt('Чему равнялся последний элемент массива?');

// 	let answerOne = food[0];

// 	let answerTwo = food[6];

// 	if (
// 		questionOne.toLowerCase() === answerOne.toLowerCase() &&
// 		questionTwo.toLowerCase() === answerTwo.toLowerCase()
// 	) {
// 		return 'Правильно!';
// 	} else if (
// 		questionOne.toLowerCase() === answerOne.toLowerCase() ||
// 		questionTwo.toLowerCase() === answerTwo.toLowerCase()
// 	) {
// 		return 'Вы были близки к победе!';
// 	} else {
// 		return 'Проиграл!';
// 	}
// }
