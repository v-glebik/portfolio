//Функция getNum1 возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5, 
//затем возведет его в квадрат и выведет на экран.
function getNum1() {
	return new Promise((resolve) => {
		setTimeout(() => resolve(Math.ceil(Math.random() * 5)), 3000);
	}).then((number) => {
		let result = number * number;
		alert(`Число 1: ${number}
				Квадрат числа: ${result}`);
		return result;
	});
}

//Функция getNum2 возвращает промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10, 
//затем возведет его в квадрат и выведет на экран.
function getNum2() {
	let min = 5;
	let max = 10;

	return new Promise((resolve) => {
		setTimeout(() => resolve(Math.ceil(Math.random() * (max - min) + min)), 5000);
	}).then((number) => {
		let result = number * number;
		alert(`Число 2: ${number}
				Квадрат числа: ${result}`);
		return result;
	});
}

//Функция getSum будет дожидаться результата getNum1, затем будет дожидаться результата getNum2, 
//а затем найдет сумму полученных чисел и выведет на экран.
function getSum(f1, f2) {
	let strF1 = f1.toString();
	let strF2 = f2.toString();
	let booleanStrF1 = Boolean(strF1.match('new Promise'));
	let booleanStrF2 = Boolean(strF2.match('new Promise'));
	
	if(!booleanStrF1 && !booleanStrF2) {
		alert('Обе функции не являются промисами');
		return;
	}
	else if(!booleanStrF1) {
		alert('Функция f1 не является промисом');
		return;
	}
	else if(!booleanStrF2) {
		alert('Функция f2 не является промисом');
		return;
	} else { 
		f1().then((result1) => {
			f2().then((result2) => alert(`Общая сумма: ${(result1 + result2)}`));
		});
	}
}

getSum(getNum1, getNum2);