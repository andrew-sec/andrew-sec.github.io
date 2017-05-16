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
  $("#flip-to-back").on('click', function () {
    $('.flip-container').addClass('visible-back');
    $('#flip-to-back').hide();
  });
  $("#flip-to-front").on('click', function () {
    $('.flip-container').removeClass('visible-back');
    $('#flip-to-back').show();
  });
}());

/////////////////////// fullscreen menu + hamburger ///////////////////////
(function () {
  $(".hamburger").click(function () {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gcGFyYWxsYXggb24gbW91c2Vtb3ZlIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5pZigkKCcjcGFyYWxsYXgnKS5sZW5ndGgpIHtcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyYWxsYXhDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyYWxsYXgnKSxcbiAgICAgIGxheWVycyA9IHBhcmFsbGF4Q29udGFpbmVyLmNoaWxkcmVuO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHBhZ2VYID0gZS5wYWdlWCxcbiAgICAgICAgICBwYWdlWSA9IGUucGFnZVksXG4gICAgICAgICAgaW5pdGlhbFggPSAod2luZG93LmlubmVyV2lkdGggLyAyKSAtIHBhZ2VYLFxuICAgICAgICAgIGluaXRpYWxZID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpIC0gcGFnZVk7XG4gICAgICBbXS5zbGljZS5jYWxsKGxheWVycykuZm9yRWFjaChmdW5jdGlvbiAobGF5ZXIsIGkpIHtcbiAgICAgICAgdmFyXG4gICAgICAgICAgZGl2aWRlciA9IGkgLyAxMDAsXG4gICAgICAgICAgYm90dG9tUG9zaXRpb24gPSAod2luZG93LmlubmVySGVpZ2h0IC8gMikgKiBkaXZpZGVyLFxuICAgICAgICAgIHBvc2l0aW9uWCA9IGluaXRpYWxYICogZGl2aWRlcixcbiAgICAgICAgICBwb3NpdGlvblkgPSBpbml0aWFsWSAqIGRpdmlkZXIsXG4gICAgICAgICAgbGF5ZXJTdHlsZSA9IGxheWVyLnN0eWxlLFxuICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyA9ICd0cmFuc2xhdGUzZCgnICsgcG9zaXRpb25YICsgJ3B4LCcgKyBwb3NpdGlvblkgKyAncHgsIDApJztcbiAgICAgICAgICBsYXllclN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcbiAgICAgICAgICBsYXllclN0eWxlLmJvdHRvbSA9ICctJyArIGJvdHRvbVBvc2l0aW9uICsgJ3B4JztcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KCkpOyBcbn1cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBwYXJhbGxheCBvbnNjcm9sbCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG52YXIgcGFyYWxsYXggPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgYmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyX19iZycpO1xuICB2YXIgdXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1ib3gnKTtcbiAgdmFyIHNlY3Rpb25UZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlX2ltYWdlX3RyYW5zcGFyZW50Jyk7XG4gIC8vIHZhciBiZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2JnJyk7XG4gIC8vIHZhciB1c2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLWJveCcpO1xuICAvLyB2YXIgc2VjdGlvblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGVfaW1hZ2VfdHJhbnNwYXJlbnQnKTtcbiAgZnVuY3Rpb24gbW92ZSAoYmxvY2ssIHdpbmRvd1Njcm9sbCwgc3RyYWZlQW1vdW50KSB7XG4gICAgdmFyIHN0cmFmZSA9IHdpbmRvd1Njcm9sbCAvIC1zdHJhZmVBbW91bnQgKyAnJSc7XG4gICAgdmFyIHRyYW5zZm9ybVN0cmluZyA9ICd0cmFuc2xhdGUzZCgwLCAnICsgc3RyYWZlICsgJywgMCknO1xuICAgIHZhciBzdHlsZSA9IGJsb2NrLnN0eWxlO1xuICAgIHN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcbiAgICBzdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBmdW5jdGlvbiAod1Njcm9sbCkge1xuICAgICAgbW92ZShiZywgd1Njcm9sbCwgNzApO1xuICAgICAgbW92ZShzZWN0aW9uVGV4dCwgd1Njcm9sbCwgMTUpO1xuICAgICAgbW92ZSh1c2VyLCB3U2Nyb2xsLCAxMCk7XG4gICAgfVxuICB9XG59KCkpO1xud2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICB2YXIgd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgcGFyYWxsYXguaW5pdCh3U2Nyb2xsKTtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gcHJlbG9hZGVyIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbnZhciBwcmVsb2FkZXIgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcGVyY2VudHNUb3RhbCA9IDAsXG4gICAgICBwcmVsb2FkZXIgPSAkKCcucHJlbG9hZGVyJyk7XG4gIHZhciBpbWdQYXRoID0gJCgnKicpLm1hcChmdW5jdGlvbiAobmR4LCBlbGVtZW50KSB7XG4gICAgdmFyIGJhY2tncm91bmQgPSAkKGVsZW1lbnQpLmNzcygnYmFja2dyb3VuZC1pbWFnZScpLFxuICAgICAgICBpbWcgPSAkKGVsZW1lbnQpLmlzKCdpbWcnKSxcbiAgICAgICAgcGF0aCA9ICcnO1xuICAgIGlmIChiYWNrZ3JvdW5kICE9ICdub25lJykge1xuICAgICAgcGF0aCA9IGJhY2tncm91bmQucmVwbGFjZSgndXJsKFwiJywgJycpLnJlcGxhY2UoJ1wiKScsICcnKTtcbiAgICB9XG4gICAgaWYgKGltZykge1xuICAgICAgcGF0aCA9ICQoZWxlbWVudCkuYXR0cignc3JjJyk7XG4gICAgfVxuICAgIGlmIChwYXRoKSByZXR1cm4gcGF0aFxuICB9KTtcbiAgdmFyIHNldFBlcmNlbnRzID0gZnVuY3Rpb24gKHRvdGFsLCBjdXJyZW50KSB7XG4gICAgdmFyIHBlcnNlbnRzID0gTWF0aC5jZWlsKGN1cnJlbnQgLyB0b3RhbCAqIDEwMCk7XG4gICAgJCgnLnByZWxvYWRlcl9fcGVyY2VudHMnKS50ZXh0KHBlcnNlbnRzICsgJyUnKTtcbiAgICBpZiAocGVyc2VudHMgPj0gMTAwKSB7XG4gICAgICBwcmVsb2FkZXIuZmFkZU91dCgpO1xuICAgIH1cbiAgfVxuICB2YXIgbG9hZEltYWdlcyA9IGZ1bmN0aW9uIChpbWFnZXMpIHtcbiAgICBpZiAoIWltYWdlcy5sZW5ndGgpIHByZWxvYWRlci5mYWRlT3V0KCk7XG4gICAgaW1hZ2VzLmZvckVhY2goZnVuY3Rpb24gKGltZywgaSwgaW1hZ2VzKSB7XG4gICAgICB2YXIgZmFrZUltYWdlID0gJCgnPGltZz4nLCB7XG4gICAgICAgIGF0dHI6IHtcbiAgICAgICAgICBzcmM6IGltZ1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGZha2VJbWFnZS5vbignbG9hZCBlcnJvcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcGVyY2VudHNUb3RhbCsrO1xuICAgICAgICBzZXRQZXJjZW50cyhpbWFnZXMubGVuZ3RoLCBwZXJjZW50c1RvdGFsKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB7XG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGltZ3MgPSBpbWdQYXRoLnRvQXJyYXkoKTtcbiAgICAgIGxvYWRJbWFnZXMoaW1ncyk7XG4gICAgfVxuICB9XG59KCkpO1xuJChmdW5jdGlvbiAoKSB7XG4gIHByZWxvYWRlci5pbml0KCk7XG59KTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gZmxpcCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4oZnVuY3Rpb24gKCkge1xuICAkKFwiI2ZsaXAtdG8tYmFja1wiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnLmZsaXAtY29udGFpbmVyJykuYWRkQ2xhc3MoJ3Zpc2libGUtYmFjaycpO1xuICAgICQoJyNmbGlwLXRvLWJhY2snKS5oaWRlKCk7XG4gIH0pO1xuICAkKFwiI2ZsaXAtdG8tZnJvbnRcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICQoJy5mbGlwLWNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCd2aXNpYmxlLWJhY2snKTtcbiAgICAkKCcjZmxpcC10by1iYWNrJykuc2hvdygpO1xuICB9KTtcbn0oKSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIGZ1bGxzY3JlZW4gbWVudSArIGhhbWJ1cmdlciAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuKGZ1bmN0aW9uICgpIHtcbiAgJChcIi5oYW1idXJnZXJcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAkKCcuZnVsbHNjcmVlbi1tZW51JykuZmFkZVRvZ2dsZSgnc2xvdycsICdsaW5lYXInKTtcbiAgICAkKCcuZnVsbHNjcmVlbi1tZW51X19iZycpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCcuYXNpZGUsIC5zZWN0aW9uX2NvbnRlbnQnKS5yZW1vdmVDbGFzcygnZml4ZWRfb25fcGhvbmUnKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJy5mdWxsc2NyZWVuLW1lbnVfX25hdicpLnNsaWRlVG9nZ2xlKDUwMCk7XG4gICAgfSwgNzAwKTtcbiAgfSk7XG59KCkpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBzbGlkZS1tZW51IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4kKGZ1bmN0aW9uICgpIHtcbiAgJCgnLm1lbnUtdHJpZ2dlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdtZW51LXRyaWdnZXJfYWN0aXZlJyk7XG4gICAgJCgnLmFzaWRlLCAuc2VjdGlvbl9jb250ZW50JykudG9nZ2xlQ2xhc3MoJ2ZpeGVkX29uX3Bob25lJyk7XG4gIH0pO1xufSgpKTsiXX0=
