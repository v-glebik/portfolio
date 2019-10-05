//скрипт подбирает правильное окончание для введенного числа, если введено не число - сообщает об ошибке

let number = prompt('Ввведите любое число'),
	numberEnd = number[number.length - 1];

if(numberEnd == 0 || (numberEnd > 4 && numberEnd < 21)) alert(`${number} единиц`);
else if(numberEnd == 1) alert(`${number} единица`);
else if (numberEnd > 1 && numberEnd < 5) alert(`${number} единицы`);
else alert('Вы ввели не число...');