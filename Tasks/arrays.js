/* eslint-disable indent */
/* eslint-disable no-console */
//РЕШЕНИЕ ЗАДАЧ НА МАССИВЫ:

//I) ЗАПОЛНЕНИЕ МАССИВА

//1) Заполнить массив нулями, кроме первого и последнего элементов, которые должны быть равны единице.

function task1(arrLength) {
	let arr = [];

	for(let i = 0; i < arrLength; i++) {
		if(i == 0 || i == arrLength - 1) arr.push(1);
		else arr.push(0);
	}
	return arr;
}

task1(20);


//2) Заполнить массив нулями и единицами, при этом данные значения чередуются, начиная с нуля.

function task2(arrLength) {
	let arr = [];

	for(let i = 0; i < arrLength; i++) {
		if(i % 2 == 0) arr.push(0);
		else arr.push(1);
	}
	return arr;
}

task2(20);


//3) Заполнить массив последовательными нечетными числами, начиная с единицы.

function task3(arrLength) {
	let arr = [];

	for(let i = 1; i <= arrLength * 2; i+= 2) arr.push(i);

	return arr;
}

task3(20);


//4) Сформировать массив из элементов арифметической прогрессии с заданным первым элементом x и разностью d.

function task4(arrLength) {
	let arr = [],
		x = 0,
		d = 5;

	for (let i = 0; i < arrLength; i++) {
		arr.push(x);
		x+= d;
	}
	return arr;
}

task4(20);


//5) Сформировать возрастающий массив из четных чисел.

function task5(arrLength) {
	let arr = [];

	for(let i = 0; i < arrLength * 2; i+= 2) arr.push(i);

	return arr;
}

task5(20);


//6) Сформировать убывающий массив из чисел, которые делятся на 3.

function task6_1(arrLength) {
	let arr = [];

	for(let i = 3; i <= arrLength * 3; i+= 3) arr.unshift(i);

	return arr;
}

task6_1(20);

//вариант с делением по модулю:

function task6_2(arrLength) {
	let arr = [];

	for(let i = 1; i <= arrLength * 3; i++) {
		if(i % 3 == 0) arr.unshift(i);
	}
	return arr;
}

task6_2(20);


//7) Создать массив из n первых чисел Фибоначчи.

function task7_1(num) {
	let arr = [];

	let a = 1,
		b = 1;

	for(let i = 0; i < num; i++) {
		arr.push(a);
		let c = a + b;
		a = b; b = c;
	}
	return arr;
}

task7_1(20);

//решение рекурсивным методом:

function fib (num) {
	if(num <= 1) return 1;
	else return fib(num - 1) + fib (num - 2);
}

function task7_2(num) {
	let arr = [];

	for(let i = 0; i < num; i++) arr.push(fib(i));

	return arr;
}

task7_2(20);


//8) Создать массив, каждый элемент которого равен квадрату своего номера.

function task8(arrLength) {
	let arr = [];

	for(let i = 0; i < arrLength; i++) arr.push(Math.pow(i, 2));

	return arr;
}

task8(20);


//9) Создать массив, на четных местах в котором стоят единицы, а на нечетных местах - числа, равные остатку от деления своего номера на 5.

function task9(arrLength) {
	let arr = [];
	for(let i = 0; i < arrLength; i++) {
		if(i % 2 == 0) arr.push(1);
		else arr.push(i % 5);
	}
	return arr;
}

task9(20);


//10) Создать массив, состоящий из троек подряд идущих одинаковых элементов.

function task10(length, repeat) {
	let arr = [];

	for(let i = 0; i <= length; i++) {
		var newElem;
		var elem = Math.floor(Math.random() * 10);
		
		for(let i = 0; i < repeat; i++) {
			if(newElem == elem) arr.pop();
			else arr.push(elem);
		}
		newElem = elem;
		}
	return arr;
}

task10(10, 3);

//11) Создать массив, который одинаково читается как слева направо, так и справа налево.

function task11(elemsCount) {
	let arr = ['@'];

	for(let i = 0; i <= elemsCount; i++) {
		let elem = Math.floor(Math.random() * 10);
		arr.push(elem);
		arr.unshift(elem);
		}
	return arr;
}

task11(10);


//12) Сформировать массив из случайных чисел, в которых ровно две единицы, стоящие на случайных позициях.

function task12(quant) {
	let arr = [];
	var count = 0;

	while(count < quant) {
		count = 0;
		let elem = Math.floor(Math.random() * 10);
		arr.push(elem);
		for(let i = 0; i < arr.length; i++) {
			if(arr[i] == 1) count++;
		}
	}
	return arr;
}

task12(2);

















