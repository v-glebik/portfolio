//бинарный поиск

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