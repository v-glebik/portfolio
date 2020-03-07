var comments = document.getElementsByClassName('product__personal-comment'),
	commentsArrowLeft = document.getElementById('comments_arrow_left')
	commentsArrowRight = document.getElementById('comments_arrow_right'),
	haloPoints = document.getElementsByClassName('halo-point'),
	commentsPoints = document.getElementsByClassName('comments__point');

	if(comments.length > 0) {	
	commentsArrowLeft.style.cursor = 'default';
	var currentSlide = 0;
	var slideInterval = setInterval(nextSlide,5000);
	var slideInit = setTimeout(setSlide, 10);

	commentsArrowLeft.style.opacity = '0.4';
	commentsArrowRight.style.cursor = 'pointer';

function setSlide() {
	goToSlide(currentSlide);
	haloPoints[currentSlide].style.visibility = 'visible';
}

function nextSlide() {
	goToSlide(currentSlide+1);
	
	if(currentSlide != 0) haloPoints[currentSlide - 1].style.visibility = 'hidden';
	
	commentsArrowLeft.addEventListener('click', previousSlide);
	commentsArrowLeft.style.opacity = '1.0';
	commentsArrowLeft.style.cursor = 'pointer';
	
	if(currentSlide == comments.length - 1) {
		commentsArrowRight.removeEventListener('click', nextSlide);
		commentsArrowRight.style.opacity = '0.4';
		commentsArrowRight.style.cursor = 'default';
	}
	
	if(currentSlide == 0) {
	haloPoints[comments.length - 1].style.visibility = 'hidden';
	}
} 

function previousSlide() {
    goToSlide(currentSlide-1);
	haloPoints[currentSlide + 1].style.visibility = 'hidden';
	
	commentsArrowRight.addEventListener('click', nextSlide);
	commentsArrowRight.style.opacity = '1.0';
	
	if(currentSlide == 0) {
		commentsArrowLeft.removeEventListener('click', previousSlide);
		commentsArrowLeft.style.opacity = '0.4';
		commentsArrowLeft.style.cursor = 'default';
		commentsArrowRight.style.cursor = 'pointer';
	}
}

function goToSlide(n) {
    comments[currentSlide].className = 'product__personal-comment slide';
	
    currentSlide = (n+comments.length)%comments.length;
    comments[currentSlide].className = 'product__personal-comment slide showing';
	haloPoints[currentSlide].style.visibility = 'visible';	
}

commentsArrowRight.addEventListener('click', nextSlide);
}

var commentButton = document.getElementById('comment_button');

	commentButton.onclick = function() {
		$( function() {
		$( "#dialog" ).dialog({
			position: { my: "top", at: "top", of: window }
		});
		} );
	}

var dialog = document.getElementById('dialog');

	if(dialog) {
	var submitButton = document.getElementById('submit_button'),
		dialogInputs = document.getElementsByClassName('dialog-input'),
		regExps = [/[А-Яа-яЁё]+/i, /[А-Яа-яЁё]+/i, /[А-Яа-яЁё]+/i, /^([a-z]+\-?\.?[a-z]+?)\@[a-z]+\.[a-z]{2}$/];
		
	function checkForms() {
		for(var i = 0; i < dialogInputs.length; i++) {
			if(dialogInputs[i].value == '') {
				dialogInputs[i].placeholder = 'Это поле не заполнено';
				$(dialogInputs[i]).animate({
					backgroundColor: "yellow",
					borderColor: "red"
				}, 3000); 
			} else if (!regExps[i].test(dialogInputs[i].value)) {
				dialogInputs[i].placeholder = 'Неправильный ввод данных';
				dialogInputs[i].style.border = "3px solid red";
				$(dialogInputs[i]).effect("pulsate", 3000);
			} else {
				dialogInputs[i].style.backgroundColor = '#ffffff';
				dialogInputs[i].style.border = '1px solid #8c8c8c';
			}
		}
	}
		
	$(submitButton).bind('click', checkForms);	
	}





