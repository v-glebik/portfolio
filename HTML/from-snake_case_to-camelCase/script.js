const arr = ['firstStringElement', 'secondStringElement', 'thirdStringElement'],
	view = document.getElementById('view'),
	button = document.getElementById('button');

view.innerText = arr[0] + '\n' + arr[1] + '\n' + arr[2];
button.innerText = 'To snake_Case';

const changeCase = () => {
	if(button.innerText == 'To snake_Case') {
		button.innerText = 'To camelCase';
		for (let i = 0; i < arr.length; i++) {
			arr[i] = arr[i].replace(/[A-Z]/g, function(elem) {
				return '_' + elem.toLowerCase();
			});
		}
		view.innerText = arr[0] + '\n' + arr[1] + '\n' + arr[2];
	}
	else {
		button.innerText = 'To snake_Case';
		for (let i = 0; i < arr.length; i++) {
			arr[i] = arr[i].replace (/(_)([a-z])/g, function (elem, x, y) {
				return y.toUpperCase();
			});
		}
		view.innerText = arr[0] + '\n' + arr[1] + '\n' + arr[2];
	}
};

button.onclick = changeCase;