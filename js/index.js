$(function () {
    $('.sousuo').on('click', function () {
        $('.nav-content').addClass('searcing');

    })
    $('.button').on('click', function () {
        $('.nav-content').removeClass('searcing');
    })
    $('.columns-section h3').on('mousedown', false);
//  slides = $('.banner .banner-box a');
//  link = $('.banner .link-box li');
//  var f = true;
//  moveTo = function (el, dir) {
//      if (dir === 'left') {
//          if (!f) {
//              return;
//          }
//          f = false;
//          slides.filter('.active')
//              .removeClass('active')
//              .addClass('leave')
//              .delay(1000).queue(function () {
//              $(this).removeClass('leave').dequeue();
//              f = true;
//          })
//          $(el)
//              .addClass('active')
//              .addClass('right');
//          $(el).get(0).offsetWidth;
//          $(el).removeClass('right');
//          link.filter('active').removeClass('active');
//          $(el).addClass('active')
//      }
//      if (dir === 'right') {
//          if (!f) {
//              return;
//          }
//          f = false;
//          slides.filter('.active')
//              .removeClass('active')
//              .addClass('enter')
//              .delay(1000)
//              .queue(function () {
//                  $(this).removeClass('enter').dequeue();
//                  f = true;
//              })
//          $(el)
//              .addClass('active')
//              .addClass('you')
//          $(el).get(0).offsetWidth;
//          $(el).removeClass('you');
//      }
//      link.filter('.active').removeClass('active');
//      link.eq($(el).index()).addClass('active');
//  }
//  link.on('click', function () {
//      var m = slides.index(slides.filter('.active'));
//      var n = $(this).index();
//      if (m == n) return;
//      if (m < n) {
//          moveTo(slides.eq(n), 'left')
//      } else {
//          moveTo(slides.eq(n), 'right')
//      }
//      link.removeClass('active');
//      $(this).addClass('active');
//  })
//  moveRight = function () {
//      var active = slides.filter('.active');
//      var el = active.prev().length ? active.prev() : slides.eq(-1);
//      moveTo(el, 'right');
//  }
//  moveLeft = function () {
//      var active = slides.filter('.active');
//      var el = active.next().length ? active.next() : slides.eq(0);
//      moveTo(el, 'left');
//  }
//  setInterval(moveLeft, 2000);
//  var w = $(window).width();
//  $('.btn-left').on('click', function () {
//      moveRight();
//  })
//  $('.btn-right').on('click', function () {
//      moveLeft();
//  })
    $('.menu-icon').on('click', function () {
        $('.nav-list-small').slideToggle("slow");
        $('body').toggleClass("hidden");
    })
    $('.small-columns-section h3').on('mousedown', false)
    $('.small-columns-section h3').on('click', function () {
        $(this).next().slideToggle("slow");
        $(this).toggleClass('check');
    })
    $('.zhuan').on('click', function () {
        $(this).find('.menu-icon').toggleClass('dong');
    })
})