//бинарный поиск (только для сортированного списка)

let arr = [1,2,3,4,5,6,7,8,9];

const binar = (list, num) => {
	let min = 0,
		max = list.length - 1,
		count = 0;
	
	while(min <= max) {
		let mid = Math.floor((min + max) / 2),
			guess = list[mid];
		count++;
		
		if(guess < num) min = mid + 1;
		else if(guess > num) max = mid - 1;
		else {
			alert(`Количество операций: ${count}
					Индекс значения: ${mid}`);
			return mid;
		} 
	}
	
	alert('Данное значение не существует...');
};

binar(arr, 7);

//сортировка выбором

arr = [5, 2, 7, 1, 9, 4];
let newArr = [];

const sortBySelect = (list) => {
	while(list.length) {
		let min = list[0];
		let minIndex = 0;

		for(let i = 1; i < list.length; i++) {
			if(min > list[i]) {
				min = list[i];
				minIndex = i;
			} 
		}
	
		newArr.push(min);
		arr.splice(minIndex, 1);
	}
};

sortBySelect(arr);
alert(newArr);

//рекурсивная функция для подсчета суммы елементов в списке 

const sumElems = (list) => {
	if(list.length == 0) return 0;
	else return list[0] + sumElems(list.slice(1));
};

sumElems(arr);

//рекурсивная функция для подсчета количества елементов в списке

const countElems = (list) => {
	if(list.length == 0) return 0;
	else return 1 + countElems(list.slice(1));
};

countElems(arr);

//функция для поиска максимального элемента в списке

const findMaxElem = (list) => {
	let maxElem = list[0];
	for (let i = 1; i < list.length; i++) {
		if(maxElem < list[i]) maxElem = list[i];
	}
	return maxElem;
};

findMaxElem(arr);

//рекурсивная функция для быстрой сортировки

const quickSearch = (list) => {
	if(list.length <= 1) return list;
	else {
		let stand = list[0];
		let leftSubstr = [];
		let rightSubstr = [];
		for(let i = 1; i < list.length; i++) {
			if(stand > list[i]) leftSubstr.push(list[i]);
			else if(stand < list[i]) rightSubstr.push(list[i]);
		}
		return quickSearch(leftSubstr).concat(stand).concat(quickSearch(rightSubstr));
	}
};

quickSearch(arr);