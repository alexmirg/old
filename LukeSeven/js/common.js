$(document).ready(function () {

  var $gallery = $('.gallery').imagesLoaded(function () {
    $gallery.masonry({
      columnWidth: '.gallery-sizer',
      itemSelector: '.gallery-item',
      gutter: 10,
      percentPosition: true,
      singleMode: false,
      isResizable: true,
      isAnimated: true,
      animationOptions: {
        queue: false,
        duration: 500
      }
    });

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollpos = window.pageYOffset;
      if (prevScrollpos > currentScrollpos) {
        document.getElementById("header").style.top = "0";
      } else {
        document.getElementById('header').style.top = "-60px";
      }
      prevScrollpos = currentScrollpos;
    }

  });
});