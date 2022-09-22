(function ($) {
  $(document).ready(function () {
    $("#shopify-section-header").css({
      height: $(".site-header").css("height"),
    });
  });
  $(window).scroll(function () {
    var nav = $(".site-header");
    if (
      $(window).scrollTop() >= parseInt(nav.css("height").replace("px", ""))
    ) {
      $("#shopify-section-header").css({ height: nav.css("height") });
    }
  });
})(jQuery);
