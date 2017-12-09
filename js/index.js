$(function () {

  var nav = $('nav'),
      menuLinks = nav.find('.navigation-links').find('.pure-menu-link'),
      navOuterHeight = nav.outerHeight();

  var animateScroll = function (hash) {
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
  };

  /* scroll to the top */
  window.scrollTo(0, 0);
  /* animate scroll */
  animateScroll(window.location.hash);

  menuLinks.click(function (evnt) {
    var regex = new RegExp("(#[a-z\-]*)", "gi"),
        href = regex.exec($(this).attr('href'))[0];

    if (href) {
      evnt.preventDefault();
      toggleSideNav(false);
      animateScroll(href);
    }
  });

  $('.ribbon').find('.info').viewportChecker({
    classToAdd: 'animation-visible animated fadeInUp',
    classToRemove: 'animation-hidden',
    offset: 100
  });
});

$(window).on("load", function () {
  $('.header-full').find('.brand, .subbrand').viewportChecker({
    classToAdd: 'animation-visible animated fadeIn',
    classToRemove: 'animation-hidden'
  });
});
