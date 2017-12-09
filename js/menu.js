var openMenu = false;

/* Side menu */
var toggleSideNav = function (toggle) {
  var sideNav = $('.sidenav');
  if (toggle)
    sideNav.css('width', '100%');
  else
    sideNav.css('width', '0%');
  openMenu = toggle;
};

$(function () {

  $('nav').find('.open-menu').click(function () {
    toggleSideNav(!openMenu);
  });

});
