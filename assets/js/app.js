/////////////////////////// parallax onscroll /////////////////////////
var parallax = (function() {
  var bg = document.querySelector('.header__bg');
  var user = document.querySelector('.login-box');
  var sectionText = document.querySelector('.title_image_transparent');
  return {
    move: function(block, windowScroll, strafeAmount) {
      var strafe = windowScroll / -strafeAmount + '%';
      var transformString = 'translate3d(0, '+ strafe +', 0)';
      var style = block.style;
      style.transform = transformString;
      style.webkitTransform = transformString;
    },
    init: function (wScroll) {
      this.move(bg, wScroll, 70);
      this.move(sectionText, wScroll, 15);
      this.move(user, wScroll, 10);
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
    // if (background != 'none') {
    //   path = background.replace('url("', '').replace('")', '');
    // }
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
(function (){
  $( "#flip-to-back" ).on('click', function() {
    $('.flip-container').addClass('visible-back');
    $('#flip-to-back').hide();
  });
  $( "#flip-to-front" ).on('click', function() {
    $('.flip-container').removeClass('visible-back');
    $('#flip-to-back').show();
  });
}());

/////////////////////// fullscreen menu + hamburger ///////////////////////
(function (){
  $( ".hamburger" ).click(function() {
    $(this).toggleClass('open');
    $('.fullscreen-menu').fadeToggle('slow', 'linear');
    $('.fullscreen-menu__bg').toggleClass('active');
    setTimeout(function(){
      $('.fullscreen-menu__nav').slideToggle(500);
    }, 700);
  });
}());

/////////////////////// slide-menu ///////////////////////
$(function() {
  $('.menu-trigger').on('click', function() {
    $(this).toggleClass('menu-trigger_active');
    $('.aside, .section_content').toggleClass('fixed_on_phone');
  });
}());

/////////////////////// parallax on mousemove ///////////////////////
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
        transformString = 'translate3d('+ positionX +'px,' + positionY +  'px, 0)';
      layerStyle.transform = transformString;
      layerStyle.bottom = '-' + bottomPosition + 'px';
    });
  });
}());
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gcGFyYWxsYXggb25zY3JvbGwgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xudmFyIHBhcmFsbGF4ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19iZycpO1xuICB2YXIgdXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1ib3gnKTtcbiAgdmFyIHNlY3Rpb25UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlX2ltYWdlX3RyYW5zcGFyZW50Jyk7XG4gIHJldHVybiB7XG4gICAgbW92ZTogZnVuY3Rpb24oYmxvY2ssIHdpbmRvd1Njcm9sbCwgc3RyYWZlQW1vdW50KSB7XG4gICAgICB2YXIgc3RyYWZlID0gd2luZG93U2Nyb2xsIC8gLXN0cmFmZUFtb3VudCArICclJztcbiAgICAgIHZhciB0cmFuc2Zvcm1TdHJpbmcgPSAndHJhbnNsYXRlM2QoMCwgJysgc3RyYWZlICsnLCAwKSc7XG4gICAgICB2YXIgc3R5bGUgPSBibG9jay5zdHlsZTtcbiAgICAgIHN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcbiAgICAgIHN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcbiAgICB9LFxuICAgIGluaXQ6IGZ1bmN0aW9uICh3U2Nyb2xsKSB7XG4gICAgICB0aGlzLm1vdmUoYmcsIHdTY3JvbGwsIDcwKTtcbiAgICAgIHRoaXMubW92ZShzZWN0aW9uVGV4dCwgd1Njcm9sbCwgMTUpO1xuICAgICAgdGhpcy5tb3ZlKHVzZXIsIHdTY3JvbGwsIDEwKTtcbiAgICB9XG4gIH1cbn0oKSk7XG53aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB3U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICBwYXJhbGxheC5pbml0KHdTY3JvbGwpO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBwcmVsb2FkZXIgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xudmFyIHByZWxvYWRlciA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciBwZXJjZW50c1RvdGFsID0gMCxcbiAgICBwcmVsb2FkZXIgPSAkKCcucHJlbG9hZGVyJyk7XG4gIHZhciBpbWdQYXRoID0gJCgnKicpLm1hcChmdW5jdGlvbiAobmR4LCBlbGVtZW50KSB7XG4gICAgdmFyIGJhY2tncm91bmQgPSAkKGVsZW1lbnQpLmNzcygnYmFja2dyb3VuZC1pbWFnZScpLFxuICAgICAgaW1nID0gJChlbGVtZW50KS5pcygnaW1nJyksXG4gICAgICBwYXRoID0gJyc7XG4gICAgLy8gaWYgKGJhY2tncm91bmQgIT0gJ25vbmUnKSB7XG4gICAgLy8gICBwYXRoID0gYmFja2dyb3VuZC5yZXBsYWNlKCd1cmwoXCInLCAnJykucmVwbGFjZSgnXCIpJywgJycpO1xuICAgIC8vIH1cbiAgICBpZiAoaW1nKSB7XG4gICAgICBwYXRoID0gJChlbGVtZW50KS5hdHRyKCdzcmMnKTtcbiAgICB9XG4gICAgaWYgKHBhdGgpIHJldHVybiBwYXRoXG4gIH0pO1xuICB2YXIgc2V0UGVyY2VudHMgPSBmdW5jdGlvbiAodG90YWwsIGN1cnJlbnQpIHtcbiAgICB2YXIgcGVyc2VudHMgPSBNYXRoLmNlaWwoY3VycmVudCAvIHRvdGFsICogMTAwKTtcbiAgICAkKCcucHJlbG9hZGVyX19wZXJjZW50cycpLnRleHQocGVyc2VudHMgKyAnJScpO1xuICAgIGlmIChwZXJzZW50cyA+PSAxMDApIHtcbiAgICAgIHByZWxvYWRlci5mYWRlT3V0KCk7XG4gICAgfVxuICB9XG4gIHZhciBsb2FkSW1hZ2VzID0gZnVuY3Rpb24gKGltYWdlcykge1xuICAgIGlmICghaW1hZ2VzLmxlbmd0aCkgcHJlbG9hZGVyLmZhZGVPdXQoKTtcbiAgICBpbWFnZXMuZm9yRWFjaChmdW5jdGlvbiAoaW1nLCBpLCBpbWFnZXMpIHtcbiAgICAgIHZhciBmYWtlSW1hZ2UgPSAkKCc8aW1nPicsIHtcbiAgICAgICAgYXR0cjoge1xuICAgICAgICAgIHNyYzogaW1nXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZmFrZUltYWdlLm9uKCdsb2FkIGVycm9yJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBwZXJjZW50c1RvdGFsKys7XG4gICAgICAgIHNldFBlcmNlbnRzKGltYWdlcy5sZW5ndGgsIHBlcmNlbnRzVG90YWwpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW1ncyA9IGltZ1BhdGgudG9BcnJheSgpO1xuICAgICAgbG9hZEltYWdlcyhpbWdzKTtcbiAgICB9XG4gIH1cbn0oKSk7XG4kKGZ1bmN0aW9uICgpIHtcbiAgcHJlbG9hZGVyLmluaXQoKTtcbn0pO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBmbGlwIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbihmdW5jdGlvbiAoKXtcbiAgJCggXCIjZmxpcC10by1iYWNrXCIgKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKCcuZmxpcC1jb250YWluZXInKS5hZGRDbGFzcygndmlzaWJsZS1iYWNrJyk7XG4gICAgJCgnI2ZsaXAtdG8tYmFjaycpLmhpZGUoKTtcbiAgfSk7XG4gICQoIFwiI2ZsaXAtdG8tZnJvbnRcIiApLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQoJy5mbGlwLWNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCd2aXNpYmxlLWJhY2snKTtcbiAgICAkKCcjZmxpcC10by1iYWNrJykuc2hvdygpO1xuICB9KTtcbn0oKSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIGZ1bGxzY3JlZW4gbWVudSArIGhhbWJ1cmdlciAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuKGZ1bmN0aW9uICgpe1xuICAkKCBcIi5oYW1idXJnZXJcIiApLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAkKCcuZnVsbHNjcmVlbi1tZW51JykuZmFkZVRvZ2dsZSgnc2xvdycsICdsaW5lYXInKTtcbiAgICAkKCcuZnVsbHNjcmVlbi1tZW51X19iZycpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAkKCcuZnVsbHNjcmVlbi1tZW51X19uYXYnKS5zbGlkZVRvZ2dsZSg1MDApO1xuICAgIH0sIDcwMCk7XG4gIH0pO1xufSgpKTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gc2xpZGUtbWVudSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuJChmdW5jdGlvbigpIHtcbiAgJCgnLm1lbnUtdHJpZ2dlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ21lbnUtdHJpZ2dlcl9hY3RpdmUnKTtcbiAgICAkKCcuYXNpZGUsIC5zZWN0aW9uX2NvbnRlbnQnKS50b2dnbGVDbGFzcygnZml4ZWRfb25fcGhvbmUnKTtcbiAgfSk7XG59KCkpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBwYXJhbGxheCBvbiBtb3VzZW1vdmUgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbihmdW5jdGlvbiAoKSB7XG5cdHZhciBwYXJhbGxheENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJhbGxheCcpLFxuXHRsYXllcnMgPSBwYXJhbGxheENvbnRhaW5lci5jaGlsZHJlbjtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHBhZ2VYID0gZS5wYWdlWCxcbiAgICAgIHBhZ2VZID0gZS5wYWdlWSxcbiAgICAgIGluaXRpYWxYID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gMikgLSBwYWdlWCxcbiAgICAgIGluaXRpYWxZID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpIC0gcGFnZVk7XG4gICAgW10uc2xpY2UuY2FsbChsYXllcnMpLmZvckVhY2goZnVuY3Rpb24gKGxheWVyLCBpKSB7XG4gICAgICB2YXJcbiAgICAgICAgZGl2aWRlciA9IGkgLyAxMDAsXG4gICAgICAgIGJvdHRvbVBvc2l0aW9uID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpICogZGl2aWRlcixcbiAgICAgICAgcG9zaXRpb25YID0gaW5pdGlhbFggKiBkaXZpZGVyLFxuICAgICAgICBwb3NpdGlvblkgPSBpbml0aWFsWSAqIGRpdmlkZXIsXG4gICAgICAgIGxheWVyU3R5bGUgPSBsYXllci5zdHlsZSxcbiAgICAgICAgdHJhbnNmb3JtU3RyaW5nID0gJ3RyYW5zbGF0ZTNkKCcrIHBvc2l0aW9uWCArJ3B4LCcgKyBwb3NpdGlvblkgKyAgJ3B4LCAwKSc7XG4gICAgICBsYXllclN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcbiAgICAgIGxheWVyU3R5bGUuYm90dG9tID0gJy0nICsgYm90dG9tUG9zaXRpb24gKyAncHgnO1xuICAgIH0pO1xuICB9KTtcbn0oKSk7Il19
