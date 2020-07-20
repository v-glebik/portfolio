var play = document.getElementById('play'),
	poster = document.getElementById('poster'),
	videoRemoveButton = document.getElementById('video_remove_button'),
	iframe = document.getElementById('iframe');
	
play.addEventListener('click', displayVideo);

videoRemoveButton.addEventListener('click', hideVideo);

function displayVideo() {
  iframe.setAttribute('src', 'https://youtube.com/embed/PSMtZiQQPuQ?autoplay=1');
  play.style.zIndex = '10';
  poster.style.opacity = '0.5';
  videoRemoveButton.style.display = 'inline-block';
}

function hideVideo () {
  iframe.setAttribute('src', '');
  play.style.zIndex = '200';
  poster.style.opacity = '1.0';
  videoRemoveButton.style.display = 'none';
}

var	images = document.getElementsByClassName('img-block'),
		hoveredImgs = document.getElementsByClassName('stones-img_hovered');
	
	for(var i = 0; i < images.length; i++) {
		var image = images[i];
		image.onmouseover = showCover;
		
		if(i > 5) {
			image.style.display = 'none';
		}
	}
	
	more_stones_button.onclick = function() {
		for(i = 0; i < images.length; i++) {
			image = images[i];
			image.style.display = 'inline';
		}
	}
	
	function showCover() {
		cool_cover.style.visibility = 'visible';
		cool_cover.style.top = this.offsetTop + 'px';
		cool_cover.style.left = this.offsetLeft + 'px';	
	}