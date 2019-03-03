//ЗАДАЧИ НА СТРОКИ:

//1) Дана строка. Вывести ее три раза через запятую и показать количество символов в ней.

let str = 'str-oka';
let repeatCount = 3;
let newStr = str;

for(let i = 1; i < repeatCount; i++) newStr = newStr + ', ' + str;

console.log(`Новая Строка: ${newStr}
Кол-во Символов: ${newStr.length}`);

//2) Дана строка. Вывести первый, последний и средний (если он есть)) символы.

console.log(`Первый Символ: ${str[0]}
Последний Символ: ${str[str.length - 1]}`);

if(str.length % 2 != 0) console.log(`Средний Символ: ${str[(str.length - 1) / 2]}`);

//3) Дана строка. Вывести первые три символа и последний три символа, если длина строки больше 5. 
//Иначе вывести первый символ столько раз, какова длина строки.

newStr = '';

if(str.length > 5) {
    console.log(`${str.slice(0,3)}
${str.slice(-3)}`);
} else {
    for(let i = 1; i <= str.length; i++) newStr+= str[0];
    console.log(`${newStr}`);
}


