//РЕШЕНИЕ ЗАДАЧ НА МАССИВЫ

//I) ЗАПОЛНЕНИЕ МАССИВА

//1) Заполнить массив нулями, кроме первого и последнего элементов, которые должны быть равны единице.

let arr = [],
	arrLength = 12;

for(let i = 0; i < arrLength; i++) {
	if(i == 0 || i == arrLength - 1) arr.push(1);
	else arr.push(0);
}

console.log(arr);

//2) Заполнить массив нулями и единицами, при этом данные значения чередуются, начиная с нуля.

arr = [];

for(let i = 0; i < arrLength; i++) {
	if(i % 2 == 0) arr.push(0);
	else arr.push(1);
}

console.log(arr);

//3) Заполнить массив последовательными нечетными числами, начиная с единицы.

arr = [];

for(let i = 1; i <= arrLength * 2; i+= 2) arr.push(i);

console.log(arr);

//4) Сформировать массив из элементов арифметической прогрессии с заданным первым элементом x и разностью d.

arr = [];

let x = 0,
	d = 5;

for (let i = 0; i < arrLength; i++) {
	arr.push(x);
	x+= d;
}

console.log(arr);

//5) Сформировать возрастающий массив из четных чисел.

arr = [];

for(let i = 0; i < arrLength * 2; i+= 2) arr.push(i);

console.log(arr);

//6) Сформировать убывающий массив из чисел, которые делятся на 3.

arr = [];

for(let i = 3; i <= arrLength * 3; i+= 3) arr.unshift(i);

console.log(arr);

//вариант с делением по модулю:

arr = [];

for(let i = 1; i <= arrLength * 3; i++) {
	if(i % 3 == 0) arr.unshift(i);
}

console.log(arr);


//7) Создать массив из n первых чисел Фибоначчи.

arr = [];

let n = 7,
	a = 1,
	b = 1;

for(let i = 0; i < n; i++) {
	arr.push(a);
	let c = a + b;
	a = b; b = c;
}

console.log(arr);

//решение рекурсивным методом:

arr = [];

function fibb (num) {
	if(num <= 1) return 1;
	else return fibb(num - 1) + fibb (num - 2);
}

for(let i = 0; i < n; i++) arr.push(fibb(i));

console.log(arr);









