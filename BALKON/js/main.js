$(document).ready(function() {

  var menuHidden = true;

  $('.burger').click(() => {
      if (menuHidden) $('.header__menu').css('display', 'block');
      else $('.header__menu').css('display', 'none');

      menuHidden = !menuHidden;
  });

  var isMobile = false;

  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
      isMobile = true;
  }

  function applyCarousel(elemId, elemItems, elemLoop, elemNav, elemDots, elemDotsEach) {
      $(elemId).owlCarousel({
          items: elemItems,
          loop: elemLoop,
          nav: elemNav,
          dots: elemDots,
          dotsEach: elemDotsEach,
      });
  }

  if (isMobile || window.innerWidth < 800) {
      $('#videosItems').addClass('owl-carousel');

      applyCarousel('#videosItems', 1, true, true, true, true);
      applyCarousel('#mobileTables', 1, true, true, false, false);
      applyCarousel('#certificatesItems', 1, true, true, false, false);
  }

  if (window.innerWidth < 1170) {

      applyCarousel('#certificatesItems', 3, true, true, false, false);
  }

  //applyCarousel('#expertsItems', 1, true, true, false, false);
 // applyCarousel('#mastersItems', 1, true, true, false, false);
  applyCarousel('#commentsItems', 1, true, true, false, false);
  applyCarousel('#certificatesItems', 5, true, true, true, true);

  ! function(e, t) {
      "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : t()
  }(0, function() {
      var o = "details",
          i = "summary";
      (function() {
          var e = document.createElement(o);
          if (!("open" in e)) return !1;
          e.innerHTML = "<" + i + ">a</" + i + ">b", document.body.appendChild(e);
          var t = e.offsetHeight;
          e.open = !0;
          var n = t != e.offsetHeight;
          return document.body.removeChild(e), n
      })() || (document.documentElement.className += " no-details", window.addEventListener("click", function(e) {
          if ("summary" === e.target.nodeName.toLowerCase()) {
              var t = e.target.parentNode;
              if (!t) return;
              t.getAttribute("open") ? (t.open = !1, t.removeAttribute("open")) : (t.open = !0, t.setAttribute("open", "open"))
          }
      }), function(e, t) {
          if (document.getElementById(e)) return;
          var n = document.createElement("style");
          n.id = e, n.innerHTML = t, document.getElementsByTagName("head")[0].appendChild(n)
      }("details-polyfill-style", "html.no-details " + o + ":not([open]) > :not(" + i + ") { display: none; }\nhtml.no-details " + o + " > " + i + ':before { content: "";  }\nhtml.no-details ' + o + "[open] > " + i + ':before { content: ""; }'))
  });

  function getVideo(videoId, playpauseId, totalId, bufferedId, progressId, durationId, currentTimeId) {
      var controls = {
          video: $(videoId),
          playpause: $(playpauseId),
          total: $(totalId),
          buffered: $(bufferedId),
          progress: $(progressId),
          duration: $(durationId),
          currentTime: $(currentTimeId),
          hasHours: false,
          togglePlayback: function() {
              (video.paused) ? video.play(): video.pause();
          }
      };

      var video = controls.video[0];

      controls.playpause.click(function() {
          if (video.paused) {
              video.play();
              $(this).text('&#x25CF;');
          } else {
              video.pause();
              $(this).text('&#x25BA;');
          }

          $(this).toggleClass('paused');
      });

      video.addEventListener('ended', function() {
          video.pause();
          controls.playpause.html('&#x25BA;');
          controls.playpause.toggleClass('paused');
      });

      video.addEventListener('play', function() {
          controls.playpause.html('&#x25CF;');
          controls.playpause.toggleClass('paused');
      });

      video.addEventListener('pause', function() {
          controls.playpause.html('&#x25BA;');
          controls.playpause.toggleClass('paused');
      });

      controls.video.click(function() {
          controls.togglePlayback();
      });

      video.addEventListener('canplay', function() {
          controls.hasHours = (video.duration / 3600) >= 1.0;
          controls.duration.text(formatTime(video.duration, controls.hasHours));
          controls.currentTime.text(formatTime(0), controls.hasHours);
      }, false);

      function formatTime(time, hours) {
          if (hours) {
              var h = Math.floor(time / 3600);
              time = time - h * 3600;

              var m = Math.floor(time / 60);
              var s = Math.floor(time % 60);

              return h.lead0(2) + ':' + m.lead0(2) + ':' + s.lead0(2);
          } else {
              var m = Math.floor(time / 60);
              var s = Math.floor(time % 60);

              return m.lead0(2) + ':' + s.lead0(2);
          }
      }

      Number.prototype.lead0 = function(n) {
          var nz = '' + this;
          while (nz.length < n) {
              nz = '0' + nz;
          }
          return nz;
      };

      video.addEventListener('timeupdate', function() {
          controls.currentTime.text(formatTime(video.currentTime, controls.hasHours));

          var progress = Math.floor(video.currentTime) / Math.floor(video.duration);
          controls.progress[0].style.width = Math.floor(progress * controls.total.width()) + 'px';
      }, false);

      controls.total.click(function(e) {
          var x = (e.pageX - this.offsetLeft) / $(this).width();
          video.currentTime = x * video.duration;
      });

      video.addEventListener('progress', function() {
          var buffered = Math.floor(video.buffered.end(0)) / Math.floor(video.duration);
          controls.buffered[0].style.width = Math.floor(buffered * controls.total.width()) + 'px';
      }, false);

      video.muted = false;

      $('.video__volume').click(() => video.muted = !video.muted);

  }

  getVideo('#video-1', '#playpause-1', '#total-1', '#buffered-1', '#current-1', '#duration-1', '#currentTime-1');
  getVideo('#video-2', '#playpause-2', '#total-2', '#buffered-2', '#current-2', '#duration-2', '#currentTime-2');
  getVideo('#video-3', '#playpause-3', '#total-3', '#buffered-3', '#current-3', '#duration-3', '#currentTime-3');

  (function() {
      var boxes = [],
          els, i, l;
      if (document.querySelectorAll) {
          els = document.querySelectorAll('a[rel=simplebox]');
          Box.getStyles('simplebox_css', 'simplebox/simplebox.css');
          Box.getScripts('simplebox_js', 'simplebox/simplebox.js', function() {
              simplebox.init();
              for (i = 0, l = els.length; i < l; ++i)
                  simplebox.start(els[i]);
              simplebox.start('a[rel=simplebox_group]');
          });
      }
  })();

});