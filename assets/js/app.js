/////////////////////// parallax on mousemove ///////////////////////
if($('#parallax').length) {
  (function () {
    var parallaxContainer = document.getElementById('parallax'),
      layers = parallaxContainer.children;
    window.addEventListener('mousemove', function (e) {
      var pageX = e.pageX,
          pageY = e.pageY,
          initialX = (window.innerWidth / 2) - pageX,
          initialY = (window.innerHeight / 2) - pageY;
      [].slice.call(layers).forEach(function (layer, i) {
        var
          divider = i / 100,
          bottomPosition = (window.innerHeight / 2) * divider,
          positionX = initialX * divider,
          positionY = initialY * divider,
          layerStyle = layer.style,
          transformString = 'translate3d(' + positionX + 'px,' + positionY + 'px, 0)';
          layerStyle.transform = transformString;
          layerStyle.bottom = '-' + bottomPosition + 'px';
      });
    });
  }()); 
}
/////////////////////////// parallax onscroll /////////////////////////
var parallax = (function () {
  var bg = document.getElementById('header__bg');
  var user = document.getElementById('login-box');
  var sectionText = document.getElementById('title_image_transparent');
  // var bg = document.querySelector('.header__bg');
  // var user = document.querySelector('.login-box');
  // var sectionText = document.querySelector('.title_image_transparent');
  function move (block, windowScroll, strafeAmount) {
    var strafe = windowScroll / -strafeAmount + '%';
    var transformString = 'translate3d(0, ' + strafe + ', 0)';
    var style = block.style;
    style.transform = transformString;
    style.webkitTransform = transformString;
  }
  return {
    init: function (wScroll) {
      move(bg, wScroll, 70);
      move(sectionText, wScroll, 15);
      move(user, wScroll, 10);
    }
  }
}());
window.onscroll = function () {
  var wScroll = window.pageYOffset;
  parallax.init(wScroll);
}

////////////////////////// preloader /////////////////////////
var preloader = (function () {
  var percentsTotal = 0,
      preloader = $('.preloader');
  var imgPath = $('*').map(function (ndx, element) {
    var background = $(element).css('background-image'),
        img = $(element).is('img'),
        path = '';
    if (background != 'none') {
      path = background.replace('url("', '').replace('")', '');
    }
    if (img) {
      path = $(element).attr('src');
    }
    if (path) return path
  });
  var setPercents = function (total, current) {
    var persents = Math.ceil(current / total * 100);
    $('.preloader__percents').text(persents + '%');
    if (persents >= 100) {
      preloader.fadeOut();
    }
  }
  var loadImages = function (images) {
    if (!images.length) preloader.fadeOut();
    images.forEach(function (img, i, images) {
      var fakeImage = $('<img>', {
        attr: {
          src: img
        }
      });
      fakeImage.on('load error', function () {
        percentsTotal++;
        setPercents(images.length, percentsTotal);
      });
    });
  }
  return {
    init: function () {
      var imgs = imgPath.toArray();
      loadImages(imgs);
    }
  }
}());
$(function () {
  preloader.init();
});

/////////////////////// flip ///////////////////////////////
(function () {
  $('#flip-to-back').on('click', function () {
    $('.flip-container').addClass('visible-back');
    $('#flip-to-back').hide();
  });
  $('#flip-to-front').on('click', function () {
    $('.flip-container').removeClass('visible-back');
    $('#flip-to-back').show();
    setTimeout(function (){
      $('input, textarea').val('');
    }, 300)
  });
}());

/////////////////////// fullscreen menu + hamburger ///////////////////////
(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('open');
    $('.fullscreen-menu').fadeToggle('slow', 'linear');
    $('.fullscreen-menu__bg').toggleClass('active');
    $('.aside, .section_content').removeClass('fixed_on_phone');
    setTimeout(function () {
      $('.fullscreen-menu__nav').slideToggle(500);
    }, 700);
  });
}());

/////////////////////// slide-menu ///////////////////////
$(function () {
  $('.menu-trigger').on('click', function () {
    $(this).toggleClass('menu-trigger_active');
    $('.aside, .section_content').toggleClass('fixed_on_phone');
  });
}());

/////////////////////// welcome form validation ///////////////////////
$(function () {  
  $('#button_submit').on('click', function (){
    if ($('#login').val() == '') { 
      $('.error-popup_login').show();
    } else if ($('#password').val() == '') { 
      $('.error-popup_pass').show(); 
    }
  });
  $( '#login, #password' ).focus(function() {
    $('.error-popup_login, .error-popup_pass').hide();
  });
}());

/////////////////////// works form validation ///////////////////////
$(function () {  
  $('#form_send').on('click', function (e){
    e.preventDefault();
    if ($('#form_name').val() == '') { 
      $('.error-popup_name').show();
    } else if ($('#form_email').val() == '') { 
      $('.error-popup_email').show(); 
    }
  });
  $( '#form_name, #form_email' ).focus(function() {
    $('.error-popup_name, .error-popup_email').hide();
  });
}());
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIHBhcmFsbGF4IG9uIG1vdXNlbW92ZSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuaWYoJCgnI3BhcmFsbGF4JykubGVuZ3RoKSB7XG4gIChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmFsbGF4Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmFsbGF4JyksXG4gICAgICBsYXllcnMgPSBwYXJhbGxheENvbnRhaW5lci5jaGlsZHJlbjtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBwYWdlWCA9IGUucGFnZVgsXG4gICAgICAgICAgcGFnZVkgPSBlLnBhZ2VZLFxuICAgICAgICAgIGluaXRpYWxYID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gMikgLSBwYWdlWCxcbiAgICAgICAgICBpbml0aWFsWSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAtIHBhZ2VZO1xuICAgICAgW10uc2xpY2UuY2FsbChsYXllcnMpLmZvckVhY2goZnVuY3Rpb24gKGxheWVyLCBpKSB7XG4gICAgICAgIHZhclxuICAgICAgICAgIGRpdmlkZXIgPSBpIC8gMTAwLFxuICAgICAgICAgIGJvdHRvbVBvc2l0aW9uID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpICogZGl2aWRlcixcbiAgICAgICAgICBwb3NpdGlvblggPSBpbml0aWFsWCAqIGRpdmlkZXIsXG4gICAgICAgICAgcG9zaXRpb25ZID0gaW5pdGlhbFkgKiBkaXZpZGVyLFxuICAgICAgICAgIGxheWVyU3R5bGUgPSBsYXllci5zdHlsZSxcbiAgICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgPSAndHJhbnNsYXRlM2QoJyArIHBvc2l0aW9uWCArICdweCwnICsgcG9zaXRpb25ZICsgJ3B4LCAwKSc7XG4gICAgICAgICAgbGF5ZXJTdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgICAgICAgbGF5ZXJTdHlsZS5ib3R0b20gPSAnLScgKyBib3R0b21Qb3NpdGlvbiArICdweCc7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSgpKTsgXG59XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gcGFyYWxsYXggb25zY3JvbGwgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xudmFyIHBhcmFsbGF4ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGJnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcl9fYmcnKTtcbiAgdmFyIHVzZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tYm94Jyk7XG4gIHZhciBzZWN0aW9uVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZV9pbWFnZV90cmFuc3BhcmVudCcpO1xuICAvLyB2YXIgYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19iZycpO1xuICAvLyB2YXIgdXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1ib3gnKTtcbiAgLy8gdmFyIHNlY3Rpb25UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlX2ltYWdlX3RyYW5zcGFyZW50Jyk7XG4gIGZ1bmN0aW9uIG1vdmUgKGJsb2NrLCB3aW5kb3dTY3JvbGwsIHN0cmFmZUFtb3VudCkge1xuICAgIHZhciBzdHJhZmUgPSB3aW5kb3dTY3JvbGwgLyAtc3RyYWZlQW1vdW50ICsgJyUnO1xuICAgIHZhciB0cmFuc2Zvcm1TdHJpbmcgPSAndHJhbnNsYXRlM2QoMCwgJyArIHN0cmFmZSArICcsIDApJztcbiAgICB2YXIgc3R5bGUgPSBibG9jay5zdHlsZTtcbiAgICBzdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nO1xuICB9XG4gIHJldHVybiB7XG4gICAgaW5pdDogZnVuY3Rpb24gKHdTY3JvbGwpIHtcbiAgICAgIG1vdmUoYmcsIHdTY3JvbGwsIDcwKTtcbiAgICAgIG1vdmUoc2VjdGlvblRleHQsIHdTY3JvbGwsIDE1KTtcbiAgICAgIG1vdmUodXNlciwgd1Njcm9sbCwgMTApO1xuICAgIH1cbiAgfVxufSgpKTtcbndpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHdTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gIHBhcmFsbGF4LmluaXQod1Njcm9sbCk7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIHByZWxvYWRlciAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG52YXIgcHJlbG9hZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHBlcmNlbnRzVG90YWwgPSAwLFxuICAgICAgcHJlbG9hZGVyID0gJCgnLnByZWxvYWRlcicpO1xuICB2YXIgaW1nUGF0aCA9ICQoJyonKS5tYXAoZnVuY3Rpb24gKG5keCwgZWxlbWVudCkge1xuICAgIHZhciBiYWNrZ3JvdW5kID0gJChlbGVtZW50KS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnKSxcbiAgICAgICAgaW1nID0gJChlbGVtZW50KS5pcygnaW1nJyksXG4gICAgICAgIHBhdGggPSAnJztcbiAgICBpZiAoYmFja2dyb3VuZCAhPSAnbm9uZScpIHtcbiAgICAgIHBhdGggPSBiYWNrZ3JvdW5kLnJlcGxhY2UoJ3VybChcIicsICcnKS5yZXBsYWNlKCdcIiknLCAnJyk7XG4gICAgfVxuICAgIGlmIChpbWcpIHtcbiAgICAgIHBhdGggPSAkKGVsZW1lbnQpLmF0dHIoJ3NyYycpO1xuICAgIH1cbiAgICBpZiAocGF0aCkgcmV0dXJuIHBhdGhcbiAgfSk7XG4gIHZhciBzZXRQZXJjZW50cyA9IGZ1bmN0aW9uICh0b3RhbCwgY3VycmVudCkge1xuICAgIHZhciBwZXJzZW50cyA9IE1hdGguY2VpbChjdXJyZW50IC8gdG90YWwgKiAxMDApO1xuICAgICQoJy5wcmVsb2FkZXJfX3BlcmNlbnRzJykudGV4dChwZXJzZW50cyArICclJyk7XG4gICAgaWYgKHBlcnNlbnRzID49IDEwMCkge1xuICAgICAgcHJlbG9hZGVyLmZhZGVPdXQoKTtcbiAgICB9XG4gIH1cbiAgdmFyIGxvYWRJbWFnZXMgPSBmdW5jdGlvbiAoaW1hZ2VzKSB7XG4gICAgaWYgKCFpbWFnZXMubGVuZ3RoKSBwcmVsb2FkZXIuZmFkZU91dCgpO1xuICAgIGltYWdlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbWcsIGksIGltYWdlcykge1xuICAgICAgdmFyIGZha2VJbWFnZSA9ICQoJzxpbWc+Jywge1xuICAgICAgICBhdHRyOiB7XG4gICAgICAgICAgc3JjOiBpbWdcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBmYWtlSW1hZ2Uub24oJ2xvYWQgZXJyb3InLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHBlcmNlbnRzVG90YWwrKztcbiAgICAgICAgc2V0UGVyY2VudHMoaW1hZ2VzLmxlbmd0aCwgcGVyY2VudHNUb3RhbCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbWdzID0gaW1nUGF0aC50b0FycmF5KCk7XG4gICAgICBsb2FkSW1hZ2VzKGltZ3MpO1xuICAgIH1cbiAgfVxufSgpKTtcbiQoZnVuY3Rpb24gKCkge1xuICBwcmVsb2FkZXIuaW5pdCgpO1xufSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIGZsaXAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuKGZ1bmN0aW9uICgpIHtcbiAgJCgnI2ZsaXAtdG8tYmFjaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuZmxpcC1jb250YWluZXInKS5hZGRDbGFzcygndmlzaWJsZS1iYWNrJyk7XG4gICAgJCgnI2ZsaXAtdG8tYmFjaycpLmhpZGUoKTtcbiAgfSk7XG4gICQoJyNmbGlwLXRvLWZyb250Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICQoJy5mbGlwLWNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCd2aXNpYmxlLWJhY2snKTtcbiAgICAkKCcjZmxpcC10by1iYWNrJykuc2hvdygpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCl7XG4gICAgICAkKCdpbnB1dCwgdGV4dGFyZWEnKS52YWwoJycpO1xuICAgIH0sIDMwMClcbiAgfSk7XG59KCkpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBmdWxsc2NyZWVuIG1lbnUgKyBoYW1idXJnZXIgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbihmdW5jdGlvbiAoKSB7XG4gICQoJy5oYW1idXJnZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICQoJy5mdWxsc2NyZWVuLW1lbnUnKS5mYWRlVG9nZ2xlKCdzbG93JywgJ2xpbmVhcicpO1xuICAgICQoJy5mdWxsc2NyZWVuLW1lbnVfX2JnJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQoJy5hc2lkZSwgLnNlY3Rpb25fY29udGVudCcpLnJlbW92ZUNsYXNzKCdmaXhlZF9vbl9waG9uZScpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgJCgnLmZ1bGxzY3JlZW4tbWVudV9fbmF2Jykuc2xpZGVUb2dnbGUoNTAwKTtcbiAgICB9LCA3MDApO1xuICB9KTtcbn0oKSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIHNsaWRlLW1lbnUgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiQoZnVuY3Rpb24gKCkge1xuICAkKCcubWVudS10cmlnZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ21lbnUtdHJpZ2dlcl9hY3RpdmUnKTtcbiAgICAkKCcuYXNpZGUsIC5zZWN0aW9uX2NvbnRlbnQnKS50b2dnbGVDbGFzcygnZml4ZWRfb25fcGhvbmUnKTtcbiAgfSk7XG59KCkpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyB3ZWxjb21lIGZvcm0gdmFsaWRhdGlvbiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuJChmdW5jdGlvbiAoKSB7ICBcbiAgJCgnI2J1dHRvbl9zdWJtaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKXtcbiAgICBpZiAoJCgnI2xvZ2luJykudmFsKCkgPT0gJycpIHsgXG4gICAgICAkKCcuZXJyb3ItcG9wdXBfbG9naW4nKS5zaG93KCk7XG4gICAgfSBlbHNlIGlmICgkKCcjcGFzc3dvcmQnKS52YWwoKSA9PSAnJykgeyBcbiAgICAgICQoJy5lcnJvci1wb3B1cF9wYXNzJykuc2hvdygpOyBcbiAgICB9XG4gIH0pO1xuICAkKCAnI2xvZ2luLCAjcGFzc3dvcmQnICkuZm9jdXMoZnVuY3Rpb24oKSB7XG4gICAgJCgnLmVycm9yLXBvcHVwX2xvZ2luLCAuZXJyb3ItcG9wdXBfcGFzcycpLmhpZGUoKTtcbiAgfSk7XG59KCkpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyB3b3JrcyBmb3JtIHZhbGlkYXRpb24gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiQoZnVuY3Rpb24gKCkgeyAgXG4gICQoJyNmb3JtX3NlbmQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICgkKCcjZm9ybV9uYW1lJykudmFsKCkgPT0gJycpIHsgXG4gICAgICAkKCcuZXJyb3ItcG9wdXBfbmFtZScpLnNob3coKTtcbiAgICB9IGVsc2UgaWYgKCQoJyNmb3JtX2VtYWlsJykudmFsKCkgPT0gJycpIHsgXG4gICAgICAkKCcuZXJyb3ItcG9wdXBfZW1haWwnKS5zaG93KCk7IFxuICAgIH1cbiAgfSk7XG4gICQoICcjZm9ybV9uYW1lLCAjZm9ybV9lbWFpbCcgKS5mb2N1cyhmdW5jdGlvbigpIHtcbiAgICAkKCcuZXJyb3ItcG9wdXBfbmFtZSwgLmVycm9yLXBvcHVwX2VtYWlsJykuaGlkZSgpO1xuICB9KTtcbn0oKSk7Il19
