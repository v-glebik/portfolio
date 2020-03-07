var productCards = document.getElementsByClassName('product-card_wp-archive'),
		heartBlocks = document.getElementsByClassName('heart-block_archive');
	
	for (var i = 0; i < productCards.length; i++) {
	var productCard = productCards[i];
	var heartBlock = heartBlocks[i];
	productCard.setAttribute('id', i);
	productCard.onmouseover = showCover;
	productCard.onmouseout = hideHeart;
	productCard.onclick = function() {
	}
	
	}
	
	function showCover() {
		collection_img_hovered.style.visibility = 'visible';
		collection_img_hovered.style.top = this.offsetTop + 'px';
		collection_img_hovered.style.left = this.offsetLeft + 'px';	
		heartBlocks[this.id].style.visibility = 'visible';
	}
	
	function hideHeart() {
		heartBlocks[this.id].style.visibility = 'hidden';
	}
