//функция-итератор для перебора значений неитерируемого объекта

let object = {
	name: 'obj-name',
	age: 100
};

//вариант-1 (через Object.keys())

object[Symbol.iterator] = function() {
	let objectKeys = Object.keys(object),
		count = 0;

	return{
		next() {
			if(count < objectKeys.length) {
				return {
					value: object[objectKeys[count++]],
					done: false
				};
			} else {
				return {
					done: true
				};
			}
    	}
    	};
};

for(let val of object) alert(val);

//вариант-2 (через Object.values())

object[Symbol.iterator] = function() {
	let objectValues = Object.values(object),
		count = 0;

	return {
		next() {
			if(count < objectValues.length) {
				return {
					value: objectValues[count++],
					done: false
				}
			} else {
				return {
					done: true
				};
			}
		}
	};
};

for(let val of object) alert(val);
