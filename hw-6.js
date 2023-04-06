// const numbs = [1, 5, 4, 10, 0, 3]; // Задание 1

// for (let i = 0; i < numbs.length; i++) {
// 	console.log(numbs[i]);
// 	if (numbs[i] == 10) break;
// }




// const numbs = [1, 5, 4, 10, 0, 3]; // Задание 2

// console.log(numbs.indexOf(4));




// const numbs = [1, 3, 5, 10, 20]; // Задание 3

// console.log(numbs.join(' '));




// const theBigArray = [] //Задание 4

// for(let i = 0; i < 3; i++) {
// 	theBigArray[i] = [];
// 	for (let k = 0; k < 3; k++) {
// 		theBigArray[i].push(1)
// 	}
// }

// console.log(theBigArray)




// const numbs = [1, 1, 1]; // Задание 5

// numbs.push(2, 2, 2)

// console.log(numbs)

// const theNewArray = [9, 8, 7, 'a', 6, 5]; // Задание 6

// theNewArray.sort();
// theNewArray.pop();

// console.log(theNewArray)




// const numbs = [9, 8, 7, 6, 5]; // Задание 7

// let counter = Number(prompt('Введите число от 1 до 10'));

// for (let item of numbs) {
// 	if (counter == item) {
// 		alert('число есть');
// 	} 		
// }




// let text = 'abcdef'; // Задание 8

// let arr = text.split('')
// arr.reverse()
// console.log(arr.join(''))




// const arr = [ // Задание 9
// 	[1, 2, 3],
// 	[4, 5, 6],
// ];

// let theNewArr = [];

// for(let arrIn of arr) {
	
// 	for(let element of arrIn) {
		
// 		theNewArr.push(element)
// 	}
// }

// console.log(theNewArr);



// const arr = [2, 6, 4, 8, 14, 18] // Задание 10

// for (let i = 0; i < arr.length - 1 ; i++) {
// 	let megaSum = arr[i] + arr[i + 1]
// 	console.log(megaSum)
// }



// const arr = [2, 4, 5, 6] // Задание 11

// let square = arr.map((arrIn) =>
// 	 arrIn ** 2
// )
// console.log(square)




// let allString = ['Hello', 'A long sentence', '', 'Hi friend']; // Задание 12

// let getLength = allString.map((key) => 
// key.length
// )

// console.log(getLength);



// const numbers = [-2, 2, -6, -9, 5, 6] // Задание 13

// const counter = numbers.filter((item) => 
//  item < 0
// )

// console.log(counter)



// const numbs = [] // Задание 14
// const newArr = []

// for (let i = 0; i < 10; i++) {
// 	numbs.push(Math.floor(Math.random() * 10) + 1);
// }

// console.log(numbs);

// numbs.filter(item => {
// 	if (item % 2 == 0) {
// 		newArr.push(item);
// 	}
// });

// console.log(newArr)




// const numbs = [] // Задание 15

// for (let i = 0; i < 6; i++) {
// 	numbs.push(Math.floor(Math.random() * 10) + 1);
// }

// const length = numbs.length;

// const getAverage = numbs.reduce((Sum, Number) =>  
// 	Sum + Number
//  )

// const finalCount = getAverage / numbs.length

// console.log(finalCount)