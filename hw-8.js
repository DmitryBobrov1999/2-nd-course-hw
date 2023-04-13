// function getResult(num, result) { // Задание 1
// 	return result(num);
// }

// function sum(el) {
// return	el.reduce((acc, num) => acc + num, 0);
// }

// function mult(el) {
// 	return el.reduce((acc, num) => acc * num, 1);
// }

// console.log(getResult([5, 3, 1, 3], sum));
// console.log(getResult([5, 3, 1, 3], mult));








// const users = [ // Задание 2
// 	{ name: 'Jon', age: 22 },
// 	{ name: 'Richard', age: 18 },
// 	{ name: 'Anton', age: 32 },
// 	{ name: 'Lida', age: 23 },
// 	{ name: 'Bob', age: 44 },
// ];


// function compareUser(a, b) {
// 	if (a.age > b.age) return 1;
// 	if (a.age < b.age) return -1;
// 	return 0;
// }

// users.sort(compareUser);

// console.log(users);




// const arr = [1, '4', 9, 'two']; // Задание 3

// function each(num, result) {
// 	return result(num);
// }

// function reversArr(el) {
// 	return el.reverse();
// }

// console.log(each(arr, reversArr));






let timerId = setInterval(() => {
	console.log(new Date());
let timerA = setTimeout(() => {
		clearInterval(timerId);
	}, 30000);
 
}, 3000);


