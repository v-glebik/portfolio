//РЕШЕНИЕ ЗАДАЧ НА ФАЙЛЫ

//1) Дан текстовый файл, содержащий целые числа. Удалить из него все четные числа.

let file = '1,2,3,4,5,6,7,8,9,10,11,12',
	arr = file.split(','),
	arr2 = [];
	
for(let num of arr) {
	if(num % 2 != 0) arr2.push(num);
}

file = arr2.join();

console.log(file);

//2) В данном текстовом файле удалить все слова, которые содержат хотя бы одну цифру.

file = 'Lorem ipsum dolor sit, amet 1consectetur adipisicing elit. S22equi similique at, labor333um asperiores, magni blanditiis nam dolores quibusdam volupt4444atum culpa repudiandae accusantium55555.',
arr = file.split(' '),
arr2 = [],
regExp = /\d+/;

for(let word of arr) {
if(!regExp.test(word)) arr2.push(word);
}

file = arr2.join(' ');

console.log(file);






