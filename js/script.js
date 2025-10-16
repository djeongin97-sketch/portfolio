/*----------------------------
Page Scroll
------------------------------ */
var page_scroll = $('a.page-scroll');
page_scroll.on('click', function (event) {
  var $anchor = $(this);
  $('html, body').stop().animate({
    scrollTop: $($anchor.attr('href')).offset().top - 55
  }, 1500, 'easeInOutExpo');
  event.preventDefault();
});

// -------------------------------------------------------------
// More skill
// -------------------------------------------------------------
$('.more-skill').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
  if (visible) {
    $('.chart').easyPieChart({
      //your configuration goes here
      easing: 'easeOut',
      delay: 3000,
      barColor: '#68c3a3',
      trackColor: 'rgba(255,255,255,0.2)',
      scaleColor: false,
      lineWidth: 8,
      size: 140,
      animate: 2000,
      onStep: function (from, to, percent) {
        this.el.children[0].innerHTML = Math.round(percent);
      }

    });
    $(this).unbind('inview');
  }
});


$('a[href*="#"]:not([href="#"])').click(function () {
  if (
    location.pathname.replace(/^\//, "") ==
    this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        500
      ); //움직이는 시간 조정
      return false;
    }
  }
});

