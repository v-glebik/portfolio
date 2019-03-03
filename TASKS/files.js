//РЕШЕНИЕ ЗАДАЧ НА ФАЙЛЫ

//пепременные, которые будут использоваться в коде

const fileContent1 = 'some ugly text',
	fileContent2 = '1,2,3,4,5,6,7,8,9,10,11,12',
	fileContent3 = '1Lorem ipsum d22olor sit, ame333t consectetur adipi4444sicing elit. Sequi55555 similique at.',
	file1 = new File([fileContent1], 'file-1.txt'),
	file2 = new File([fileContent2], 'file-2.txt'),
	file3 = new File([fileContent3], 'file-3.txt');
let	fileResult,
	functionResult;

//универсальная функция, которая принимает исходный файл (парам1), 
//затем обрабатывает его в зависимости от задачи (функция callback)

function parseFile(file, callback) {
	let fileReader = new FileReader();

	fileReader.onload = function(event) {
		fileResult = event.target.result;

		callback();

		let nextFile = new File([functionResult], 'next-file.txt');

		let nextFileReader = new FileReader();

		nextFileReader.onload = function(e) {
			console.log(e.target.result);
		};

		nextFileReader.readAsText(nextFile);
	};

	fileReader.readAsText(file);
}

//1) перевести все буквы в верхний регистр

function task1() {
	functionResult = fileResult.toUpperCase();
}

//2) переставить все слова наоборот

function task2() {
	functionResult = fileResult.split(' ').reverse().join(' ');
}

//3) Дан текстовый файл. Создать новый файл, каждое слово которого получается 
//из соответствующего слова исходного файла перестановкой букв в обратном порядке.

function task3() {
	functionResult = [];
	let array = fileResult.split(' ');
	for(let val of array) {
		let reverseArray = val.split('').reverse().join('');
		functionResult.push(reverseArray);
	}
}

//4) к каждому слову добавить "lll"

function task4() {
	functionResult = [];
	let array = fileResult.split(' ');
	for(let val of array) {
		val = val + 'lll';
		functionResult.push(val);
	}
}

//5) Дан текстовый файл, содержащий целые числа. Удалить из него все четные числа.

function task5() {
	let	array = fileResult.split(',');
	functionResult = [];
	
	for(let num of array) {
		if(num % 2 != 0) functionResult.push(num);
	}

	functionResult = functionResult.join();
}

//6) В данном текстовом файле удалить все слова, которые содержат хотя бы одну цифру.

function task6() {
	let array = fileResult.split(' ');
	functionResult = [];
	const regExp = /\d+/;

	for(let word of array) {
		if(!regExp.test(word)) functionResult.push(word);
	}

	functionResult = functionResult.join(' ');
}

parseFile(file1, task1);
parseFile(file1, task2);
parseFile(file1, task3);
parseFile(file1, task4);
parseFile(file2, task5);
parseFile(file3, task6);



