$(function () {
  $.extend({
    animateScroll: function (hash) {
      var navOuterHeight = $('nav').outerHeight();
      var offsetTop = 0;

      if (hash !== "#") {
        var $hash = $(hash);
        if ($hash.length > 0) {
          offsetTop = $hash.offset().top - navOuterHeight;
        }
      }

      $('html, body')
        .stop()
        .animate({ scrollTop: offsetTop }, 500);
    }
  });
});
