/* eslint-disable no-console */
/* eslint-disable no-mixed-spaces-and-tabs */
//ЗАДАЧИ НА СТРОКИ:

let str1 = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
	str2 = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
	str3 = '++--0+00--0+++000--++';

//1) Дана строка. Вывести ее три раза через запятую и показать количество символов в ней.

function task1(string) {
	let	repeatCount = 3,
		newString = string;

	for(let i = 1; i < repeatCount; i++) newStr = newString + ', ' + string;

	return `Новая Строка: ${newString}
Кол-во Символов: ${newString.length}`;
}

task1(str1);


//2) Дана строка. Вывести первый, последний и средний (если он есть)) символы.

function task2(string) {

	if(string.length % 2 == 0) {
		return `Первый Символ: ${string[0]}
Последний Символ: ${string[string.length - 1]}`;
	} else return `Средний Символ: ${string[(string.length - 1) / 2]}`;
}

task2(str2);


//3) Дана строка. Вывести первые три символа и последний три символа, если длина строки больше 5. 
//Иначе вывести первый символ столько раз, какова длина строки.

function task3(string) {
	let	newString = '';

	if(string.length > 5) {
		return `${string.slice(0,3)}
${string.slice(-3)}`;
	} else {
		for(let i = 1; i <= string.length; i++) newString+= string[0];
		return `${newString}`;
	}
}

task3(str1);


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

function task5(string) {
	let	lastSymbol = string[string.length - 1],
		arr = [];

	for(let i = 0; i < string.length; i++) {
		if(string[i] == lastSymbol) arr.push(i);
	}

	arr.pop();

	return arr;
}

task5(str2);


//6) Дана строка. Показать третий, шестой, девятый и так далее символы.

function task6_1(string) {
	let arr = [];

	for(let i = 2; i < string.length; i+= 3) arr.push(string[i]);

	return arr;
}

task6_1(str1);

//вариант:
function task6_2(string) {
	let arr = [];

	for(let i = 0; i < string.length; i++) {
		if(i % 3 == 2) arr.push(string[i]);
	}

	return arr;
}

task6_2(str1);


//7) Дана строка. Определите общее количество символов '+' и '-' в ней. А так же сколько таких символов, после которых следует цифра ноль.

function task7(string) {
	let countPlus = 0,
		countMinus = 0,
		countNull = 0;

	for(let i = 0; i < string.length; i++) {
		let symbol = string[i];

		if(symbol == '+') countPlus++;
		else if(symbol == '-') countMinus++;
		else if(symbol == '0' && i < string.length - 1) countNull++;;
	}  

	return `Плюс: ${countPlus} раз
Минус: ${countMinus} раз
После нуля: ${countNull} раз`;
}

task7(str3);


//8) Дана строка. Определите, какой символ в ней встречается раньше: 'x' или 'w'. Если какого-то из символов нет, вывести сообщение об этом.

function task8(string, firstSymbol, secondSymbol) {

	for(let i = 0; i < string.length; i++) {
		let symbol = string[i];

		if(string.indexOf(firstSymbol) == -1 && string.indexOf(secondSymbol) == -1) {
			alert('В строке нет таких символов');
			return;
		} else if(string.indexOf(firstSymbol) == -1) {
			alert(`В строке нет символа: ${firstSymbol}`);
			return;
		} else if(string.indexOf(secondSymbol) == -1) {
			alert(`В строке нет символа: ${secondSymbol}`);
			return;
		} else {
			if(symbol === firstSymbol) {
				alert (`Первый символ: ${firstSymbol}`);
				return;
			} else if(symbol === secondSymbol) {
				alert(`Первый символ: ${secondSymbol}`);
				return;
			}
		}
	}
}

task8(str1, 'w', 'x');


//9) Даны две строки. Вывести большую по длине строку столько раз, на сколько символов отличаются строки.

function task9(...args) {
	let array = [];

	for(let i = 0; i < args.length; i++) {
		if(typeof args[i] === 'string') array.push(args[i].length);
	}

	let maxLength = array[0],
		minLength = array[0],
		maxIndex = 0;

	for (let i = 1; i < array.length; i++) {
		if(array[i] > maxLength) {
			maxLength = array[i];
			maxIndex = i;
		}
		if(array[i] < minLength) {
			minLength = array[i];
		}
	}

	let result = maxLength - minLength;
	
	for(let j = 1; j <= result; j++) {
		document.write(`${j} ${args[maxIndex]}<br>`);
	}		
}

task9(str1, str2, str3);