//Есть одна большая коробка, в ней - несколько маленьких, в тех - еще более маленькие.
//В некоторых из них спрятаны ключи (key: true). Скрипт находит все ключи и выводит
//сообщения о том, в каких коробках они были найдены и сколько всего было ключей.

let bigBox = {
	box1: {
		box4: {
			box7: {
				box10: {
					key: true,
					box13: {
						key: true
					}
				},
				key: false
			},
			key: true
		},
		key: false
	},
	box2: {
		box5: {
			box8: {
				key: true,
				box11: {
					key: true
				}
			},
			key: false
		},
		key: false
	},
	box3: {
		box6: {
			box9: {
				key: true,
				box12: {
					key: false
				}
			},
			key: false
		},
		key: false
	},
	key: true
};

let pile = [];
let count = 0;

pile.push(bigBox);

for(let i = 0; i < pile.length; i++) {

	for(let j in pile[i]) {
		if(pile[i] == true || pile[i][j] == true) {
			if(i != 0) alert('Key is found in Box ' + i);
			else alert('Key is found in Big Box');
			count++;
		} else if(typeof pile[i][j] == 'object') pile.push(pile[i][j]);
	}
}

alert('Were found ' + count + ' keys');