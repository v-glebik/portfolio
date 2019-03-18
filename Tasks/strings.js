/* eslint-disable no-console */
/* eslint-disable no-mixed-spaces-and-tabs */
//ЗАДАЧИ НА СТРОКИ:

//1) Дана строка. Вывести ее три раза через запятую и показать количество символов в ней.

function task1() {
	let str = 'stroka',
		repeatCount = 3,
		newStr = str;

	for(let i = 1; i < repeatCount; i++) newStr = newStr + ', ' + str;

	return `Новая Строка: ${newStr}
Кол-во Символов: ${newStr.length}`;
}

task1();


//2) Дана строка. Вывести первый, последний и средний (если он есть)) символы.

function task2() {
	let str = 'str-oka';

	if(str.length % 2 == 0) {
		return `Первый Символ: ${str[0]}
Последний Символ: ${str[str.length - 1]}`;
	} else return `Средний Символ: ${str[(str.length - 1) / 2]}`;
}

task2();


//3) Дана строка. Вывести первые три символа и последний три символа, если длина строки больше 5. 
//Иначе вывести первый символ столько раз, какова длина строки.

function task3() {
	let str = 'str',
		newStr = '';

	if(str.length > 5) {
		return `${str.slice(0,3)}
${str.slice(-3)}`;
	} else {
		for(let i = 1; i <= str.length; i++) newStr+= str[0];
		return `${newStr}`;
	}
}

task3();


//4) Сформировать строку из 10 символов. На четных позициях должны находится четные цифры, на нечетных позициях - буквы.

function task4() {
	let letters = ['a', 'b', 'c', 'd', 'e'],
		str = '';

	for(let i = 0, j = 0; i < 10; i++) {
		if(i % 2 == 0) str = str + i;
		else str = str + letters[j++];
}
	return str;
}

task4();

//можно сгенерировать алфавит, тогда код будет выглядеть так:

let length = 32,
	maxLength = length * 2;

function getAlphabet() { 
	let alphabet = [],
		index = 1040,
		count = length;

	while(count--) {
		alphabet.push(String.fromCharCode(index++));
	}
	return alphabet;
}

function getString(strLength) {
	let letters = getAlphabet(),
	    str = '';

	if(strLength > maxLength) strLength = maxLength;

	for(let i = 0, j = 0; i < strLength; i++) {
	    if(i % 2 == 0) str = str + i;
	    else str = str + letters[j++];
	} 
	return str;
}

getString(64);


//5) Дана строка. Показать номера символов, совпадающих с последним символом строки.

function task5() {
	let str = 'zadacha',
		lastSymbol = str[str.length - 1],
		arr = [];

	for(let i = 0; i < str.length; i++) {
		if(str[i] == lastSymbol) arr.push(i);
	}

	arr.pop();

	return arr;
}

task5();
