function setSlide(){goToSlide(currentSlide),haloPoints[currentSlide].style.visibility="visible"}function nextSlide(){goToSlide(currentSlide+1),0!=currentSlide&&(haloPoints[currentSlide-1].style.visibility="hidden"),commentsArrowLeft.addEventListener("click",previousSlide),commentsArrowLeft.style.opacity="1.0",commentsArrowLeft.style.cursor="pointer",currentSlide==comments.length-1&&(commentsArrowRight.removeEventListener("click",nextSlide),commentsArrowRight.style.opacity="0.4",commentsArrowRight.style.cursor="default"),0==currentSlide&&(haloPoints[comments.length-1].style.visibility="hidden")}function previousSlide(){goToSlide(currentSlide-1),haloPoints[currentSlide+1].style.visibility="hidden",commentsArrowRight.addEventListener("click",nextSlide),commentsArrowRight.style.opacity="1.0",0==currentSlide&&(commentsArrowLeft.removeEventListener("click",previousSlide),commentsArrowLeft.style.opacity="0.4",commentsArrowLeft.style.cursor="default",commentsArrowRight.style.cursor="pointer")}function goToSlide(e){comments[currentSlide].className="product__personal-comment slide",currentSlide=(e+comments.length)%comments.length,comments[currentSlide].className="product__personal-comment slide showing",haloPoints[currentSlide].style.visibility="visible"}function checkForms(){for(var e=0;e<dialogInputs.length;e++)""==dialogInputs[e].value?(dialogInputs[e].placeholder="Это поле не заполнено",$(dialogInputs[e]).animate({backgroundColor:"yellow",borderColor:"red"},3e3)):regExps[e].test(dialogInputs[e].value)?(dialogInputs[e].style.backgroundColor="#ffffff",dialogInputs[e].style.border="1px solid #8c8c8c"):(dialogInputs[e].placeholder="Неправильный ввод данных",dialogInputs[e].style.border="3px solid red",$(dialogInputs[e]).effect("pulsate",3e3))}var comments=document.getElementsByClassName("product__personal-comment"),commentsArrowLeft=document.getElementById("comments_arrow_left");if(commentsArrowRight=document.getElementById("comments_arrow_right"),haloPoints=document.getElementsByClassName("halo-point"),commentsPoints=document.getElementsByClassName("comments__point"),comments.length>0){commentsArrowLeft.style.cursor="default";var currentSlide=0,slideInterval=setInterval(nextSlide,5e3),slideInit=setTimeout(setSlide,10);commentsArrowLeft.style.opacity="0.4",commentsArrowRight.style.cursor="pointer",commentsArrowRight.addEventListener("click",nextSlide)}var commentButton=document.getElementById("comment_button");commentButton.onclick=function(){$(function(){$("#dialog").dialog({position:{my:"top",at:"top",of:window}})})};var dialog=document.getElementById("dialog");if(dialog){var submitButton=document.getElementById("submit_button"),dialogInputs=document.getElementsByClassName("dialog-input"),regExps=[/[А-Яа-яЁё]+/i,/[А-Яа-яЁё]+/i,/[А-Яа-яЁё]+/i,/^([a-z]+\-?\.?[a-z]+?)\@[a-z]+\.[a-z]{2}$/];$(submitButton).bind("click",checkForms)}