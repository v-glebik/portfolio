"use strict";

var sortLinks = document.querySelectorAll('.opt');
var cardsCounters = document.querySelectorAll('span.cards-counter');
var tumblers = document.querySelectorAll('.tumbler');
var pointers = document.querySelectorAll('.pointer');
var ons = document.querySelectorAll('.on');
var offs = document.querySelectorAll('.off');

var _loop = function _loop(i) {
  var sortLink = sortLinks[i];

  sortLink.onclick = function () {
    for (var _i4 = 0; _i4 < sortLinks.length; _i4++) {
      sortLink = sortLinks[_i4];
      sortLink.classList.remove('blue');
    }

    this.classList.add('blue');
  };
};

for (var i = 0; i < sortLinks.length; i++) {
  _loop(i);
}

var _loop2 = function _loop2(_i) {
  var cardsCounter = cardsCounters[_i];

  cardsCounter.onclick = function () {
    for (var _i5 = 0; _i5 < cardsCounters.length; _i5++) {
      cardsCounter = cardsCounters[_i5];
      cardsCounter.classList.remove('blue');
    }

    this.classList.add('blue');
  };
};

for (var _i = 0; _i < cardsCounters.length; _i++) {
  _loop2(_i);
}

var _loop3 = function _loop3(_i2) {
  var tumbler = tumblers[_i2];

  tumbler.onclick = function () {
    this.classList.toggle('tumbler--active');
    if (window.innerWidth > 880) pointers[_i2].classList.toggle('right');else pointers[_i2].classList.toggle('right--mobile');

    if (ons && offs) {
      ons[_i2].classList.toggle('full-opacity');

      offs[_i2].classList.toggle('full-opacity');
    }
  };
};

for (var _i2 = 0; _i2 < tumblers.length; _i2++) {
  _loop3(_i2);
}

var isMobile = false;

if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
  isMobile = true;
}

if (isMobile) {
  var owl;
  var xDown;
  var yDown;

  (function () {
    owl = $('.owl-carousel');
    owl.owlCarousel({
      items: 1
    });
    var pages = document.querySelectorAll('.page');
    var rightToLeft = ['вт', 'ср', 'чт', 'пт', 'сб', 'вс', 'конец'];
    var leftToRight = ['конец', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

    var _loop4 = function _loop4(_i3) {
      var page = pages[_i3];
      page.addEventListener('touchstart', handleTouchStart, false);
      page.addEventListener('touchmove', handleTouchMove, {
        passive: false
      });
      xDown = null;
      yDown = null;

      function getTouches(evt) {
        return evt.touches || evt.originalEvent.touches;
      }

      function handleTouchStart(evt) {
        var firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
      }

      function handleTouchMove(evt) {
        if (!xDown || !yDown) {
          evt.preventDefault();
          return false;
        }

        var swipeUp = false;
        var swipeDown = false;
        var swipeLeft = false;
        var swipeRight = false;
        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;
        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          if (xDiff > 0) {
            swipeLeft = true;
          } else {
            swipeRight = true;
          }
        } else {
          if (yDiff > 0) {
            swipeUp = true;
          } else {
            swipeDown = true;
          }
        }

        xDown = null;
        yDown = null;

        if (swipeLeft) {
          setTimeout(function () {
            showPrompt(rightToLeft[_i3]);
          }, 500);
          evt.preventDefault();
          evt.stopPropagation();
          return false;
        } else if (swipeRight) {
          setTimeout(function () {
            showPrompt(leftToRight[_i3]);
          }, 500);
          evt.preventDefault();
          evt.stopPropagation();
          return false;
        }
      }
    };

    for (var _i3 = 0; _i3 < pages.length; _i3++) {
      _loop4(_i3);
    }
  })();
}

function showPrompt(text) {
  var prompt = document.createElement('div');
  prompt.className = 'prompt';
  prompt.textContent = text;
  document.body.append(prompt);
  setInterval(function () {
    prompt.remove();
  }, 2000);
}