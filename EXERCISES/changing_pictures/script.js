fetch('https://v-glebik.site/portfolio.json')
	.then((response) => response.json())
	.then((data) => {
		const images = document.body.children;
	
		for (var i=0; i<images.length; i++) {
			let image = images[i];
			
			image.onmouseover = function() {
				this.innerHTML = data[event.currentTarget.id].text;
				this.style.backgroundColor = 'yellow';
			};
			
			image.onmouseout = function() {
				this.innerHTML = '<img src=' + data[event.currentTarget.id].src + ' alt="">';
			};
		}	
	})
	.catch( alert );
	