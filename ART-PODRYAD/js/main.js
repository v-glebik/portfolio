$(document).ready(function () {
    var carousel = $("#slider").waterwheelCarousel({
      flankingItems: 2,
      separation: 250,
      sizeMultiplier: 0.8
    });

    $('#comments').each(function () {

      var owl = $(this).find('.owl-carousel').owlCarousel({
        items: 1,
      loop: true,
      dots: true,
      dotsEach: 1,
      responsive: {
        768: {
          items: 2,
          dots: false
        }
      }
      });
    
      $(this).find('.js-prev').on('click', function () {
        owl.trigger('prev.owl.carousel');
      });
    
      $(this).find('.js-next').on('click', function () {
        owl.trigger('next.owl.carousel');
      });
    });

    let menuOpen = false;

    $('#burger').click(() => {
      if(!menuOpen) $('#menu').css('display', 'block');
      else $('#menu').css('display', 'none');

      menuOpen = !menuOpen;
    });

    $.fn.setCursorPosition = function(pos) {
      if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
      } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    };
    
    $('input[name="tel"]').mask("8(999) 999 99 99");
    
    $('input[name="tel"]').click(function(){
      $(this).setCursorPosition(2); 
    });


    $("form.form").submit(function() {
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
      }).done(function() {
        console.log("Письмо отправлено...");
        setTimeout(() => {$('#formModal').click();}, 3000);
      }).fail(function() {
        console.log("Не удалось отправить данные");
        setTimeout(() => {$('#formModal').click();}, 3000);
      });
      return false;
    });

  });