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
    // $('body').toggleClass('fix-scroll');
    $('.fullscreen-menu').fadeToggle('slow', 'linear');
    $('.fullscreen-menu__bg').toggleClass('active');
    $('.aside, .section_content').removeClass('fixed_on_phone');
    setTimeout(function () {
      $('.fullscreen-menu__nav').slideToggle(500);
    }, 700);
  });
}());

// (function(){
// $('body').on({
//     'mousewheel': function(e) {
//       if (e.target.id == 'no-scroll') {
//       e.preventDefault();
//       e.stopPropagation();
//     }
//   }
// })
// }());

/////////////////////// down&top scroll arrows ///////////////////////
$(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
    }
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
  $('#button_submit').on('click', function (e){
    e.preventDefault();
    if ($('#login').val() == '') { 
      $('.error-popup_login').show();
    } else if ($('#password').val() == '') { 
      $('.error-popup_pass').show(); 
    } else if (!$('#login' && '#password').val() == '') { 
      $('#form_welcome').submit();
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
    } else if (!$('#form_name' && '#form_email').val() == '') { 
      $('#form_works').submit();
    }
  });
  $( '#form_name, #form_email' ).focus(function() {
    $('.error-popup_name, .error-popup_email').hide();
  });
}());

///////////////////// slider ///////////////////////
var Slider = function (container) {
  var nextBtn = container.find('.slider__link_up'),
      prevBtn = container.find('.slider__link_down'),
      nextSliderItems = nextBtn.find('.slider__item'),
      prevSliderItems = prevBtn.find('.slider__item'),
      itemsLength = nextSliderItems.length,
      display = container.find('.slider__img_big'),
      title = container.find('.slider__title'),
      technology = container.find('.cources__text'),
      link = container.find('.slider__button_link'),
      duration = 500,
      isAnimate = false;
      this.counter = 0;
  this.moveSlide = function (direction) {
    var _that = this;
        directions = {
      next: function () {
        if (_that.counter < itemsLength - 1) {
          _that.counter++;
        } else {
          _that.counter = 0;
        }
      },
      prev: function () {
        if (_that.counter > 0) {
          _that.counter--;
        } else {
          _that.counter = itemsLength - 1;
        }
      }
    };
    directions[direction]();
    if(!isAnimate){
      isAnimate = true;
      nextSlide(_that.counter);
      prevSlide(_that.counter);
      changeData(_that.counter);
    }
  };
  var prevSlide = function (counter) {
    var reqItem = prevSliderItems.eq(counter - 1)
        activeItem = prevSliderItems.filter('.active-slide');
      animateSlide(activeItem, reqItem, 'prev');
  }
  var nextSlide = function (counter) {
      var activeItem = nextSliderItems.filter('.active-slide');
        reqSlide = counter + 1;
    if (reqSlide > itemsLength - 1) {
      reqSlide = 0;
    }
    var reqItem = nextSliderItems.eq(reqSlide);
    animateSlide(activeItem, reqItem, 'next');
  };
  var animateSlide = function (active, req, direction) {
    var _direction = direction == 'prev' ? 100 : -100;
    active.animate({
        'top': _direction + '%'
      }, duration, function() {
        $(this)
          .removeClass('active-slide')
          .css('top', -_direction + '%')
      });
    req.animate({
        'top': '0%'
      }, duration, function () {
        $(this).addClass('active-slide');
        isAnimate = false;
      });
  };
  var getData = function () {
    var dataObj = {
      images : [],
      title : [],
      technology : [],
      links : []
    }
    prevSliderItems.each( function () {
      var $this = $(this);
      dataObj.images.push($this.data('src'));
      dataObj.title.push($this.data('title'));
      dataObj.technology.push($this.data('tech'));
      dataObj.links.push($this.data('link'));
    });
    return dataObj;
  };
  var changeData = function (counter) {
    var data = getData();
    display.stop(true, true)
      .fadeOut(duration, function () {
        $(this).attr('src', data.images[counter]);
      }).stop(true, true)
      .fadeIn(duration);
    title.stop(true, true)
      .fadeOut(duration, function () {
        $(this).text(data.title[counter]);
      }).stop(true, true)
      .fadeIn(duration);
    technology.stop(true, true)
      .fadeOut(duration, function () {
        $(this).text(data.technology[counter]);
      }).stop(true, true)
      .fadeIn(duration);
    link.attr('href', data.links[counter]);
  };
};
var slider = new Slider($('.slider'));
$('.slider__link_up').on('click', function (e) {
  e.preventDefault();
  slider.moveSlide('next');
});
$('.slider__link_down').on('click', function (e) {
  e.preventDefault();
  slider.moveSlide('prev');
});

///////////////////// tabs ///////////////////////
$(function () {  
  $('.tabs__item').click(function(){
    var tab_id = $(this).attr('data-tab');
    $('.tabs__item').removeClass('current');
    $('.tabs__content').removeClass('current');
    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
	})
}());
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gcGFyYWxsYXggb24gbW91c2Vtb3ZlIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5pZigkKCcjcGFyYWxsYXgnKS5sZW5ndGgpIHtcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyYWxsYXhDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyYWxsYXgnKSxcbiAgICAgIGxheWVycyA9IHBhcmFsbGF4Q29udGFpbmVyLmNoaWxkcmVuO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHBhZ2VYID0gZS5wYWdlWCxcbiAgICAgICAgICBwYWdlWSA9IGUucGFnZVksXG4gICAgICAgICAgaW5pdGlhbFggPSAod2luZG93LmlubmVyV2lkdGggLyAyKSAtIHBhZ2VYLFxuICAgICAgICAgIGluaXRpYWxZID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpIC0gcGFnZVk7XG4gICAgICBbXS5zbGljZS5jYWxsKGxheWVycykuZm9yRWFjaChmdW5jdGlvbiAobGF5ZXIsIGkpIHtcbiAgICAgICAgdmFyXG4gICAgICAgICAgZGl2aWRlciA9IGkgLyAxMDAsXG4gICAgICAgICAgYm90dG9tUG9zaXRpb24gPSAod2luZG93LmlubmVySGVpZ2h0IC8gMikgKiBkaXZpZGVyLFxuICAgICAgICAgIHBvc2l0aW9uWCA9IGluaXRpYWxYICogZGl2aWRlcixcbiAgICAgICAgICBwb3NpdGlvblkgPSBpbml0aWFsWSAqIGRpdmlkZXIsXG4gICAgICAgICAgbGF5ZXJTdHlsZSA9IGxheWVyLnN0eWxlLFxuICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyA9ICd0cmFuc2xhdGUzZCgnICsgcG9zaXRpb25YICsgJ3B4LCcgKyBwb3NpdGlvblkgKyAncHgsIDApJztcbiAgICAgICAgICBsYXllclN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcbiAgICAgICAgICBsYXllclN0eWxlLmJvdHRvbSA9ICctJyArIGJvdHRvbVBvc2l0aW9uICsgJ3B4JztcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KCkpOyBcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIHBhcmFsbGF4IG9uc2Nyb2xsIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbnZhciBwYXJhbGxheCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciBiZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJfX2JnJyk7XG4gIHZhciB1c2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLWJveCcpO1xuICB2YXIgc2VjdGlvblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVfaW1hZ2VfdHJhbnNwYXJlbnQnKTtcbiAgZnVuY3Rpb24gbW92ZSAoYmxvY2ssIHdpbmRvd1Njcm9sbCwgc3RyYWZlQW1vdW50KSB7XG4gICAgdmFyIHN0cmFmZSA9IHdpbmRvd1Njcm9sbCAvIC1zdHJhZmVBbW91bnQgKyAnJSc7XG4gICAgdmFyIHRyYW5zZm9ybVN0cmluZyA9ICd0cmFuc2xhdGUzZCgwLCAnICsgc3RyYWZlICsgJywgMCknO1xuICAgIHZhciBzdHlsZSA9IGJsb2NrLnN0eWxlO1xuICAgIHN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcbiAgICBzdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBmdW5jdGlvbiAod1Njcm9sbCkge1xuICAgICAgbW92ZShiZywgd1Njcm9sbCwgNzApO1xuICAgICAgbW92ZShzZWN0aW9uVGV4dCwgd1Njcm9sbCwgMTUpO1xuICAgICAgbW92ZSh1c2VyLCB3U2Nyb2xsLCAxMCk7XG4gICAgfVxuICB9XG59KCkpO1xud2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICB2YXIgd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgcGFyYWxsYXguaW5pdCh3U2Nyb2xsKTtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gcHJlbG9hZGVyIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbnZhciBwcmVsb2FkZXIgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcGVyY2VudHNUb3RhbCA9IDAsXG4gICAgICBwcmVsb2FkZXIgPSAkKCcucHJlbG9hZGVyJyk7XG4gIHZhciBpbWdQYXRoID0gJCgnKicpLm1hcChmdW5jdGlvbiAobmR4LCBlbGVtZW50KSB7XG4gICAgdmFyIGJhY2tncm91bmQgPSAkKGVsZW1lbnQpLmNzcygnYmFja2dyb3VuZC1pbWFnZScpLFxuICAgICAgICBpbWcgPSAkKGVsZW1lbnQpLmlzKCdpbWcnKSxcbiAgICAgICAgcGF0aCA9ICcnO1xuICAgIGlmIChiYWNrZ3JvdW5kICE9ICdub25lJykge1xuICAgICAgcGF0aCA9IGJhY2tncm91bmQucmVwbGFjZSgndXJsKFwiJywgJycpLnJlcGxhY2UoJ1wiKScsICcnKTtcbiAgICB9XG4gICAgaWYgKGltZykge1xuICAgICAgcGF0aCA9ICQoZWxlbWVudCkuYXR0cignc3JjJyk7XG4gICAgfVxuICAgIGlmIChwYXRoKSByZXR1cm4gcGF0aFxuICB9KTtcbiAgdmFyIHNldFBlcmNlbnRzID0gZnVuY3Rpb24gKHRvdGFsLCBjdXJyZW50KSB7XG4gICAgdmFyIHBlcnNlbnRzID0gTWF0aC5jZWlsKGN1cnJlbnQgLyB0b3RhbCAqIDEwMCk7XG4gICAgJCgnLnByZWxvYWRlcl9fcGVyY2VudHMnKS50ZXh0KHBlcnNlbnRzICsgJyUnKTtcbiAgICBpZiAocGVyc2VudHMgPj0gMTAwKSB7XG4gICAgICBwcmVsb2FkZXIuZmFkZU91dCgpO1xuICAgIH1cbiAgfVxuICB2YXIgbG9hZEltYWdlcyA9IGZ1bmN0aW9uIChpbWFnZXMpIHtcbiAgICBpZiAoIWltYWdlcy5sZW5ndGgpIHByZWxvYWRlci5mYWRlT3V0KCk7XG4gICAgaW1hZ2VzLmZvckVhY2goZnVuY3Rpb24gKGltZywgaSwgaW1hZ2VzKSB7XG4gICAgICB2YXIgZmFrZUltYWdlID0gJCgnPGltZz4nLCB7XG4gICAgICAgIGF0dHI6IHtcbiAgICAgICAgICBzcmM6IGltZ1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGZha2VJbWFnZS5vbignbG9hZCBlcnJvcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcGVyY2VudHNUb3RhbCsrO1xuICAgICAgICBzZXRQZXJjZW50cyhpbWFnZXMubGVuZ3RoLCBwZXJjZW50c1RvdGFsKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB7XG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGltZ3MgPSBpbWdQYXRoLnRvQXJyYXkoKTtcbiAgICAgIGxvYWRJbWFnZXMoaW1ncyk7XG4gICAgfVxuICB9XG59KCkpO1xuJChmdW5jdGlvbiAoKSB7XG4gIHByZWxvYWRlci5pbml0KCk7XG59KTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gZmxpcCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4oZnVuY3Rpb24gKCkge1xuICAkKCcjZmxpcC10by1iYWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICQoJy5mbGlwLWNvbnRhaW5lcicpLmFkZENsYXNzKCd2aXNpYmxlLWJhY2snKTtcbiAgICAkKCcjZmxpcC10by1iYWNrJykuaGlkZSgpO1xuICB9KTtcbiAgJCgnI2ZsaXAtdG8tZnJvbnQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnLmZsaXAtY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ3Zpc2libGUtYmFjaycpO1xuICAgICQoJyNmbGlwLXRvLWJhY2snKS5zaG93KCk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKXtcbiAgICAgICQoJ2lucHV0LCB0ZXh0YXJlYScpLnZhbCgnJyk7XG4gICAgfSwgMzAwKVxuICB9KTtcbn0oKSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIGZ1bGxzY3JlZW4gbWVudSArIGhhbWJ1cmdlciAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuKGZ1bmN0aW9uICgpIHtcbiAgJCgnLmhhbWJ1cmdlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgLy8gJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdmaXgtc2Nyb2xsJyk7XG4gICAgJCgnLmZ1bGxzY3JlZW4tbWVudScpLmZhZGVUb2dnbGUoJ3Nsb3cnLCAnbGluZWFyJyk7XG4gICAgJCgnLmZ1bGxzY3JlZW4tbWVudV9fYmcnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnLmFzaWRlLCAuc2VjdGlvbl9jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2ZpeGVkX29uX3Bob25lJyk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcuZnVsbHNjcmVlbi1tZW51X19uYXYnKS5zbGlkZVRvZ2dsZSg1MDApO1xuICAgIH0sIDcwMCk7XG4gIH0pO1xufSgpKTtcblxuLy8gKGZ1bmN0aW9uKCl7XG4vLyAkKCdib2R5Jykub24oe1xuLy8gICAgICdtb3VzZXdoZWVsJzogZnVuY3Rpb24oZSkge1xuLy8gICAgICAgaWYgKGUudGFyZ2V0LmlkID09ICduby1zY3JvbGwnKSB7XG4vLyAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfSlcbi8vIH0oKSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIGRvd24mdG9wIHNjcm9sbCBhcnJvd3MgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiQoZnVuY3Rpb24oKXtcbiAgJChcImFcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5oYXNoICE9PSBcIlwiKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIGhhc2ggPSB0aGlzLmhhc2g7XG4gICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgIHNjcm9sbFRvcDogJChoYXNoKS5vZmZzZXQoKS50b3BcbiAgICAgIH0sIDgwMCk7XG4gICAgfVxuICB9KTtcbn0oKSk7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBzbGlkZS1tZW51IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4kKGZ1bmN0aW9uICgpIHtcbiAgJCgnLm1lbnUtdHJpZ2dlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdtZW51LXRyaWdnZXJfYWN0aXZlJyk7XG4gICAgJCgnLmFzaWRlLCAuc2VjdGlvbl9jb250ZW50JykudG9nZ2xlQ2xhc3MoJ2ZpeGVkX29uX3Bob25lJyk7XG4gIH0pO1xufSgpKTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gd2VsY29tZSBmb3JtIHZhbGlkYXRpb24gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiQoZnVuY3Rpb24gKCkgeyAgXG4gICQoJyNidXR0b25fc3VibWl0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoJCgnI2xvZ2luJykudmFsKCkgPT0gJycpIHsgXG4gICAgICAkKCcuZXJyb3ItcG9wdXBfbG9naW4nKS5zaG93KCk7XG4gICAgfSBlbHNlIGlmICgkKCcjcGFzc3dvcmQnKS52YWwoKSA9PSAnJykgeyBcbiAgICAgICQoJy5lcnJvci1wb3B1cF9wYXNzJykuc2hvdygpOyBcbiAgICB9IGVsc2UgaWYgKCEkKCcjbG9naW4nICYmICcjcGFzc3dvcmQnKS52YWwoKSA9PSAnJykgeyBcbiAgICAgICQoJyNmb3JtX3dlbGNvbWUnKS5zdWJtaXQoKTtcbiAgICB9XG4gIH0pO1xuICAkKCAnI2xvZ2luLCAjcGFzc3dvcmQnICkuZm9jdXMoZnVuY3Rpb24oKSB7XG4gICAgJCgnLmVycm9yLXBvcHVwX2xvZ2luLCAuZXJyb3ItcG9wdXBfcGFzcycpLmhpZGUoKTtcbiAgfSk7XG59KCkpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyB3b3JrcyBmb3JtIHZhbGlkYXRpb24gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiQoZnVuY3Rpb24gKCkgeyAgXG4gICQoJyNmb3JtX3NlbmQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICgkKCcjZm9ybV9uYW1lJykudmFsKCkgPT0gJycpIHsgXG4gICAgICAkKCcuZXJyb3ItcG9wdXBfbmFtZScpLnNob3coKTtcbiAgICB9IGVsc2UgaWYgKCQoJyNmb3JtX2VtYWlsJykudmFsKCkgPT0gJycpIHsgXG4gICAgICAkKCcuZXJyb3ItcG9wdXBfZW1haWwnKS5zaG93KCk7IFxuICAgIH0gZWxzZSBpZiAoISQoJyNmb3JtX25hbWUnICYmICcjZm9ybV9lbWFpbCcpLnZhbCgpID09ICcnKSB7IFxuICAgICAgJCgnI2Zvcm1fd29ya3MnKS5zdWJtaXQoKTtcbiAgICB9XG4gIH0pO1xuICAkKCAnI2Zvcm1fbmFtZSwgI2Zvcm1fZW1haWwnICkuZm9jdXMoZnVuY3Rpb24oKSB7XG4gICAgJCgnLmVycm9yLXBvcHVwX25hbWUsIC5lcnJvci1wb3B1cF9lbWFpbCcpLmhpZGUoKTtcbiAgfSk7XG59KCkpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8gc2xpZGVyIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG52YXIgU2xpZGVyID0gZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuICB2YXIgbmV4dEJ0biA9IGNvbnRhaW5lci5maW5kKCcuc2xpZGVyX19saW5rX3VwJyksXG4gICAgICBwcmV2QnRuID0gY29udGFpbmVyLmZpbmQoJy5zbGlkZXJfX2xpbmtfZG93bicpLFxuICAgICAgbmV4dFNsaWRlckl0ZW1zID0gbmV4dEJ0bi5maW5kKCcuc2xpZGVyX19pdGVtJyksXG4gICAgICBwcmV2U2xpZGVySXRlbXMgPSBwcmV2QnRuLmZpbmQoJy5zbGlkZXJfX2l0ZW0nKSxcbiAgICAgIGl0ZW1zTGVuZ3RoID0gbmV4dFNsaWRlckl0ZW1zLmxlbmd0aCxcbiAgICAgIGRpc3BsYXkgPSBjb250YWluZXIuZmluZCgnLnNsaWRlcl9faW1nX2JpZycpLFxuICAgICAgdGl0bGUgPSBjb250YWluZXIuZmluZCgnLnNsaWRlcl9fdGl0bGUnKSxcbiAgICAgIHRlY2hub2xvZ3kgPSBjb250YWluZXIuZmluZCgnLmNvdXJjZXNfX3RleHQnKSxcbiAgICAgIGxpbmsgPSBjb250YWluZXIuZmluZCgnLnNsaWRlcl9fYnV0dG9uX2xpbmsnKSxcbiAgICAgIGR1cmF0aW9uID0gNTAwLFxuICAgICAgaXNBbmltYXRlID0gZmFsc2U7XG4gICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICB0aGlzLm1vdmVTbGlkZSA9IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICB2YXIgX3RoYXQgPSB0aGlzO1xuICAgICAgICBkaXJlY3Rpb25zID0ge1xuICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoYXQuY291bnRlciA8IGl0ZW1zTGVuZ3RoIC0gMSkge1xuICAgICAgICAgIF90aGF0LmNvdW50ZXIrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhhdC5jb3VudGVyID0gMDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByZXY6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGF0LmNvdW50ZXIgPiAwKSB7XG4gICAgICAgICAgX3RoYXQuY291bnRlci0tO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGF0LmNvdW50ZXIgPSBpdGVtc0xlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGRpcmVjdGlvbnNbZGlyZWN0aW9uXSgpO1xuICAgIGlmKCFpc0FuaW1hdGUpe1xuICAgICAgaXNBbmltYXRlID0gdHJ1ZTtcbiAgICAgIG5leHRTbGlkZShfdGhhdC5jb3VudGVyKTtcbiAgICAgIHByZXZTbGlkZShfdGhhdC5jb3VudGVyKTtcbiAgICAgIGNoYW5nZURhdGEoX3RoYXQuY291bnRlcik7XG4gICAgfVxuICB9O1xuICB2YXIgcHJldlNsaWRlID0gZnVuY3Rpb24gKGNvdW50ZXIpIHtcbiAgICB2YXIgcmVxSXRlbSA9IHByZXZTbGlkZXJJdGVtcy5lcShjb3VudGVyIC0gMSlcbiAgICAgICAgYWN0aXZlSXRlbSA9IHByZXZTbGlkZXJJdGVtcy5maWx0ZXIoJy5hY3RpdmUtc2xpZGUnKTtcbiAgICAgIGFuaW1hdGVTbGlkZShhY3RpdmVJdGVtLCByZXFJdGVtLCAncHJldicpO1xuICB9XG4gIHZhciBuZXh0U2xpZGUgPSBmdW5jdGlvbiAoY291bnRlcikge1xuICAgICAgdmFyIGFjdGl2ZUl0ZW0gPSBuZXh0U2xpZGVySXRlbXMuZmlsdGVyKCcuYWN0aXZlLXNsaWRlJyk7XG4gICAgICAgIHJlcVNsaWRlID0gY291bnRlciArIDE7XG4gICAgaWYgKHJlcVNsaWRlID4gaXRlbXNMZW5ndGggLSAxKSB7XG4gICAgICByZXFTbGlkZSA9IDA7XG4gICAgfVxuICAgIHZhciByZXFJdGVtID0gbmV4dFNsaWRlckl0ZW1zLmVxKHJlcVNsaWRlKTtcbiAgICBhbmltYXRlU2xpZGUoYWN0aXZlSXRlbSwgcmVxSXRlbSwgJ25leHQnKTtcbiAgfTtcbiAgdmFyIGFuaW1hdGVTbGlkZSA9IGZ1bmN0aW9uIChhY3RpdmUsIHJlcSwgZGlyZWN0aW9uKSB7XG4gICAgdmFyIF9kaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT0gJ3ByZXYnID8gMTAwIDogLTEwMDtcbiAgICBhY3RpdmUuYW5pbWF0ZSh7XG4gICAgICAgICd0b3AnOiBfZGlyZWN0aW9uICsgJyUnXG4gICAgICB9LCBkdXJhdGlvbiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcylcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1zbGlkZScpXG4gICAgICAgICAgLmNzcygndG9wJywgLV9kaXJlY3Rpb24gKyAnJScpXG4gICAgICB9KTtcbiAgICByZXEuYW5pbWF0ZSh7XG4gICAgICAgICd0b3AnOiAnMCUnXG4gICAgICB9LCBkdXJhdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtc2xpZGUnKTtcbiAgICAgICAgaXNBbmltYXRlID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfTtcbiAgdmFyIGdldERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRhdGFPYmogPSB7XG4gICAgICBpbWFnZXMgOiBbXSxcbiAgICAgIHRpdGxlIDogW10sXG4gICAgICB0ZWNobm9sb2d5IDogW10sXG4gICAgICBsaW5rcyA6IFtdXG4gICAgfVxuICAgIHByZXZTbGlkZXJJdGVtcy5lYWNoKCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgZGF0YU9iai5pbWFnZXMucHVzaCgkdGhpcy5kYXRhKCdzcmMnKSk7XG4gICAgICBkYXRhT2JqLnRpdGxlLnB1c2goJHRoaXMuZGF0YSgndGl0bGUnKSk7XG4gICAgICBkYXRhT2JqLnRlY2hub2xvZ3kucHVzaCgkdGhpcy5kYXRhKCd0ZWNoJykpO1xuICAgICAgZGF0YU9iai5saW5rcy5wdXNoKCR0aGlzLmRhdGEoJ2xpbmsnKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGFPYmo7XG4gIH07XG4gIHZhciBjaGFuZ2VEYXRhID0gZnVuY3Rpb24gKGNvdW50ZXIpIHtcbiAgICB2YXIgZGF0YSA9IGdldERhdGEoKTtcbiAgICBkaXNwbGF5LnN0b3AodHJ1ZSwgdHJ1ZSlcbiAgICAgIC5mYWRlT3V0KGR1cmF0aW9uLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuYXR0cignc3JjJywgZGF0YS5pbWFnZXNbY291bnRlcl0pO1xuICAgICAgfSkuc3RvcCh0cnVlLCB0cnVlKVxuICAgICAgLmZhZGVJbihkdXJhdGlvbik7XG4gICAgdGl0bGUuc3RvcCh0cnVlLCB0cnVlKVxuICAgICAgLmZhZGVPdXQoZHVyYXRpb24sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS50ZXh0KGRhdGEudGl0bGVbY291bnRlcl0pO1xuICAgICAgfSkuc3RvcCh0cnVlLCB0cnVlKVxuICAgICAgLmZhZGVJbihkdXJhdGlvbik7XG4gICAgdGVjaG5vbG9neS5zdG9wKHRydWUsIHRydWUpXG4gICAgICAuZmFkZU91dChkdXJhdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnRleHQoZGF0YS50ZWNobm9sb2d5W2NvdW50ZXJdKTtcbiAgICAgIH0pLnN0b3AodHJ1ZSwgdHJ1ZSlcbiAgICAgIC5mYWRlSW4oZHVyYXRpb24pO1xuICAgIGxpbmsuYXR0cignaHJlZicsIGRhdGEubGlua3NbY291bnRlcl0pO1xuICB9O1xufTtcbnZhciBzbGlkZXIgPSBuZXcgU2xpZGVyKCQoJy5zbGlkZXInKSk7XG4kKCcuc2xpZGVyX19saW5rX3VwJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBzbGlkZXIubW92ZVNsaWRlKCduZXh0Jyk7XG59KTtcbiQoJy5zbGlkZXJfX2xpbmtfZG93bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgc2xpZGVyLm1vdmVTbGlkZSgncHJldicpO1xufSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLyB0YWJzIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4kKGZ1bmN0aW9uICgpIHsgIFxuICAkKCcudGFic19faXRlbScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHRhYl9pZCA9ICQodGhpcykuYXR0cignZGF0YS10YWInKTtcbiAgICAkKCcudGFic19faXRlbScpLnJlbW92ZUNsYXNzKCdjdXJyZW50Jyk7XG4gICAgJCgnLnRhYnNfX2NvbnRlbnQnKS5yZW1vdmVDbGFzcygnY3VycmVudCcpO1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ2N1cnJlbnQnKTtcbiAgICAkKFwiI1wiK3RhYl9pZCkuYWRkQ2xhc3MoJ2N1cnJlbnQnKTtcblx0fSlcbn0oKSk7Il19
