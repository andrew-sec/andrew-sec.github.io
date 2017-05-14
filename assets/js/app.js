// //parallax on mousemove
// ;(function () {
// 	var parallaxContainer = document.getElementById('parallax'),
// 	layers = parallaxContainer.children;

//   window.addEventListener('mousemove', function (e) {
//     var pageX = e.pageX,
//       pageY = e.pageY,
//       initialX = (window.innerWidth / 2) - pageX,
//       initialY = (window.innerHeight / 2) - pageY;

//     [].slice.call(layers).forEach(function (layer, i) {
//       var
//         divider = i / 100,
//         bottomPosition = (window.innerHeight / 2) * divider,
//         positionX = initialX * divider,
//         positionY = initialY * divider,
//         layerStyle = layer.style,
//         transformString = 'translate3d('+ positionX +'px,' + positionY +  'px, 0)';

//       layerStyle.transform = transformString;
//       layerStyle.bottom = '-' + bottomPosition + 'px';
//     });
//   });
// }());

//parallax onscroll
// var parallax = (function() {
//   var bg = document.querySelector('.header__bg');
//   var user = document.querySelector('.login-box');
//   var sectionText = document.querySelector('.title_image_transparent');

//   return {
//     move: function(block, windowScroll, strafeAmount) {
//       var strafe = windowScroll / -strafeAmount + '%';
//       var transformString = 'translate3d(0, '+ strafe +', 0)';

//       var style = block.style;

//       style.transform = transformString;
//       style.webkitTransform = transformString;
//     },

//     init: function (wScroll) {
//       this.move(bg, wScroll, 70);
//       this.move(sectionText, wScroll, 15);
//       this.move(user, wScroll, 10);
//     }
//   }

// }());

// window.onscroll = function () {
//   var wScroll = window.pageYOffset;

//   parallax.init(wScroll);
// }

//preloader
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

//flip
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

//fullscreen menu + hamburger
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC8vcGFyYWxsYXggb24gbW91c2Vtb3ZlXG4vLyA7KGZ1bmN0aW9uICgpIHtcbi8vIFx0dmFyIHBhcmFsbGF4Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmFsbGF4JyksXG4vLyBcdGxheWVycyA9IHBhcmFsbGF4Q29udGFpbmVyLmNoaWxkcmVuO1xuXG4vLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZSkge1xuLy8gICAgIHZhciBwYWdlWCA9IGUucGFnZVgsXG4vLyAgICAgICBwYWdlWSA9IGUucGFnZVksXG4vLyAgICAgICBpbml0aWFsWCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpIC0gcGFnZVgsXG4vLyAgICAgICBpbml0aWFsWSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAtIHBhZ2VZO1xuXG4vLyAgICAgW10uc2xpY2UuY2FsbChsYXllcnMpLmZvckVhY2goZnVuY3Rpb24gKGxheWVyLCBpKSB7XG4vLyAgICAgICB2YXJcbi8vICAgICAgICAgZGl2aWRlciA9IGkgLyAxMDAsXG4vLyAgICAgICAgIGJvdHRvbVBvc2l0aW9uID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpICogZGl2aWRlcixcbi8vICAgICAgICAgcG9zaXRpb25YID0gaW5pdGlhbFggKiBkaXZpZGVyLFxuLy8gICAgICAgICBwb3NpdGlvblkgPSBpbml0aWFsWSAqIGRpdmlkZXIsXG4vLyAgICAgICAgIGxheWVyU3R5bGUgPSBsYXllci5zdHlsZSxcbi8vICAgICAgICAgdHJhbnNmb3JtU3RyaW5nID0gJ3RyYW5zbGF0ZTNkKCcrIHBvc2l0aW9uWCArJ3B4LCcgKyBwb3NpdGlvblkgKyAgJ3B4LCAwKSc7XG5cbi8vICAgICAgIGxheWVyU3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nO1xuLy8gICAgICAgbGF5ZXJTdHlsZS5ib3R0b20gPSAnLScgKyBib3R0b21Qb3NpdGlvbiArICdweCc7XG4vLyAgICAgfSk7XG4vLyAgIH0pO1xuLy8gfSgpKTtcblxuLy9wYXJhbGxheCBvbnNjcm9sbFxuLy8gdmFyIHBhcmFsbGF4ID0gKGZ1bmN0aW9uKCkge1xuLy8gICB2YXIgYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19iZycpO1xuLy8gICB2YXIgdXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1ib3gnKTtcbi8vICAgdmFyIHNlY3Rpb25UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlX2ltYWdlX3RyYW5zcGFyZW50Jyk7XG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICBtb3ZlOiBmdW5jdGlvbihibG9jaywgd2luZG93U2Nyb2xsLCBzdHJhZmVBbW91bnQpIHtcbi8vICAgICAgIHZhciBzdHJhZmUgPSB3aW5kb3dTY3JvbGwgLyAtc3RyYWZlQW1vdW50ICsgJyUnO1xuLy8gICAgICAgdmFyIHRyYW5zZm9ybVN0cmluZyA9ICd0cmFuc2xhdGUzZCgwLCAnKyBzdHJhZmUgKycsIDApJztcblxuLy8gICAgICAgdmFyIHN0eWxlID0gYmxvY2suc3R5bGU7XG5cbi8vICAgICAgIHN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcbi8vICAgICAgIHN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcbi8vICAgICB9LFxuXG4vLyAgICAgaW5pdDogZnVuY3Rpb24gKHdTY3JvbGwpIHtcbi8vICAgICAgIHRoaXMubW92ZShiZywgd1Njcm9sbCwgNzApO1xuLy8gICAgICAgdGhpcy5tb3ZlKHNlY3Rpb25UZXh0LCB3U2Nyb2xsLCAxNSk7XG4vLyAgICAgICB0aGlzLm1vdmUodXNlciwgd1Njcm9sbCwgMTApO1xuLy8gICAgIH1cbi8vICAgfVxuXG4vLyB9KCkpO1xuXG4vLyB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4vLyAgIHZhciB3U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuXG4vLyAgIHBhcmFsbGF4LmluaXQod1Njcm9sbCk7XG4vLyB9XG5cbi8vcHJlbG9hZGVyXG52YXIgcHJlbG9hZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHBlcmNlbnRzVG90YWwgPSAwLFxuICAgIHByZWxvYWRlciA9ICQoJy5wcmVsb2FkZXInKTtcblxuICB2YXIgaW1nUGF0aCA9ICQoJyonKS5tYXAoZnVuY3Rpb24gKG5keCwgZWxlbWVudCkge1xuICAgIHZhciBiYWNrZ3JvdW5kID0gJChlbGVtZW50KS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnKSxcbiAgICAgIGltZyA9ICQoZWxlbWVudCkuaXMoJ2ltZycpLFxuICAgICAgcGF0aCA9ICcnO1xuXG4gICAgLy8gaWYgKGJhY2tncm91bmQgIT0gJ25vbmUnKSB7XG4gICAgLy8gICBwYXRoID0gYmFja2dyb3VuZC5yZXBsYWNlKCd1cmwoXCInLCAnJykucmVwbGFjZSgnXCIpJywgJycpO1xuICAgIC8vIH1cblxuICAgIGlmIChpbWcpIHtcbiAgICAgIHBhdGggPSAkKGVsZW1lbnQpLmF0dHIoJ3NyYycpO1xuICAgIH1cblxuICAgIGlmIChwYXRoKSByZXR1cm4gcGF0aFxuXG4gIH0pO1xuXG4gIHZhciBzZXRQZXJjZW50cyA9IGZ1bmN0aW9uICh0b3RhbCwgY3VycmVudCkge1xuICAgIHZhciBwZXJzZW50cyA9IE1hdGguY2VpbChjdXJyZW50IC8gdG90YWwgKiAxMDApO1xuXG4gICAgJCgnLnByZWxvYWRlcl9fcGVyY2VudHMnKS50ZXh0KHBlcnNlbnRzICsgJyUnKTtcblxuICAgIGlmIChwZXJzZW50cyA+PSAxMDApIHtcbiAgICAgIHByZWxvYWRlci5mYWRlT3V0KCk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGxvYWRJbWFnZXMgPSBmdW5jdGlvbiAoaW1hZ2VzKSB7XG5cbiAgICBpZiAoIWltYWdlcy5sZW5ndGgpIHByZWxvYWRlci5mYWRlT3V0KCk7XG5cbiAgICBpbWFnZXMuZm9yRWFjaChmdW5jdGlvbiAoaW1nLCBpLCBpbWFnZXMpIHtcbiAgICAgIHZhciBmYWtlSW1hZ2UgPSAkKCc8aW1nPicsIHtcbiAgICAgICAgYXR0cjoge1xuICAgICAgICAgIHNyYzogaW1nXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBmYWtlSW1hZ2Uub24oJ2xvYWQgZXJyb3InLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHBlcmNlbnRzVG90YWwrKztcbiAgICAgICAgc2V0UGVyY2VudHMoaW1hZ2VzLmxlbmd0aCwgcGVyY2VudHNUb3RhbCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGltZ3MgPSBpbWdQYXRoLnRvQXJyYXkoKTtcbiAgICAgIGxvYWRJbWFnZXMoaW1ncyk7XG4gICAgfVxuICB9XG59KCkpO1xuJChmdW5jdGlvbiAoKSB7XG4gIHByZWxvYWRlci5pbml0KCk7XG59KTtcblxuLy9mbGlwXG4oZnVuY3Rpb24gKCl7XG4gICQoIFwiI2ZsaXAtdG8tYmFja1wiICkub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgJCgnLmZsaXAtY29udGFpbmVyJykuYWRkQ2xhc3MoJ3Zpc2libGUtYmFjaycpO1xuICAgICQoJyNmbGlwLXRvLWJhY2snKS5oaWRlKCk7XG4gIH0pO1xuXG4gICQoIFwiI2ZsaXAtdG8tZnJvbnRcIiApLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQoJy5mbGlwLWNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCd2aXNpYmxlLWJhY2snKTtcbiAgICAkKCcjZmxpcC10by1iYWNrJykuc2hvdygpO1xuICB9KTtcbn0oKSk7XG5cbi8vZnVsbHNjcmVlbiBtZW51ICsgaGFtYnVyZ2VyXG4oZnVuY3Rpb24gKCl7XG4gICQoIFwiLmhhbWJ1cmdlclwiICkuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICQoJy5mdWxsc2NyZWVuLW1lbnUnKS5mYWRlVG9nZ2xlKCdzbG93JywgJ2xpbmVhcicpO1xuICAgICQoJy5mdWxsc2NyZWVuLW1lbnVfX2JnJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICQoJy5mdWxsc2NyZWVuLW1lbnVfX25hdicpLnNsaWRlVG9nZ2xlKDUwMCk7XG4gICAgfSwgNzAwKTtcbiAgfSk7XG59KCkpOyJdfQ==
