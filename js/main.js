(function () {
  "use strict";

  const isMobile = {
    Android: () => navigator.userAgent.match(/Android/i),
    BlackBerry: () => navigator.userAgent.match(/BlackBerry/i),
    iOS: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),
    Opera: () => navigator.userAgent.match(/Opera Mini/i),
    Windows: () => navigator.userAgent.match(/IEMobile/i),
    any: () =>
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows(),
  };

  const fullHeight = () => {
    if (!isMobile.any()) {
      const setHeight = () =>
        $(".js-fullheight").css("height", $(window).height());
      setHeight();
      $(window).resize(setHeight);
    }
  };

  const counter = () => {
    $(".js-counter").countTo({
      formatter: (value, options) => value.toFixed(options.decimals),
    });
  };

  const counterWayPoint = () => {
    if ($("#colorlib-counter").length > 0) {
      $("#colorlib-counter").waypoint(
        function (direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            setTimeout(counter, 400);
            $(this.element).addClass("animated");
          }
        },
        { offset: "90%" }
      );
    }
  };

  const contentWayPoint = () => {
    $(".animate-box").waypoint(
      function (direction) {
        if (direction === "down" && !$(this.element).hasClass("animated")) {
          $(this.element).addClass("item-animate");
          setTimeout(() => {
            $("body .animate-box.item-animate").each(function (k) {
              const el = $(this);
              setTimeout(
                () => {
                  const effect = el.data("animate-effect");
                  el.addClass(`${effect} animated`).removeClass("item-animate");
                },
                k * 200,
                "easeInOutExpo"
              );
            });
          }, 100);
        }
      },
      { offset: "85%" }
    );
  };

  const burgerMenu = () => {
    $(".js-colorlib-nav-toggle").on("click", function (event) {
      event.preventDefault();
      const $this = $(this);
      const body = $("body");

      if (body.hasClass("offcanvas")) {
        $this.removeClass("active");
        body.removeClass("offcanvas");
      } else {
        $this.addClass("active");
        body.addClass("offcanvas");
      }
    });
  };

  const mobileMenuOutsideClick = () => {
    $(document).click((e) => {
      const container = $("#colorlib-aside, .js-colorlib-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        const body = $("body");
        if (body.hasClass("offcanvas")) {
          body.removeClass("offcanvas");
          $(".js-colorlib-nav-toggle").removeClass("active");
        }
      }
    });

    $(window).scroll(() => {
      const body = $("body");
      if (body.hasClass("offcanvas")) {
        body.removeClass("offcanvas");
        $(".js-colorlib-nav-toggle").removeClass("active");
      }
    });
  };

  const clickMenu = () => {
    $('#navbar a:not([class="external"])').click((event) => {
      const section = $(event.currentTarget).data("nav-section");
      const navbar = $("#navbar");

      if ($(`[data-section="${section}"]`).length) {
        $("html, body").animate(
          {
            scrollTop: $(`[data-section="${section}"]`).offset().top - 55,
          },
          500
        );
      }

      if (navbar.is(":visible")) {
        navbar.removeClass("in").attr("aria-expanded", "false");
        $(".js-colorlib-nav-toggle").removeClass("active");
      }

      event.preventDefault();
      return false;
    });
  };

  const navActive = (section) => {
    const $el = $("#navbar > ul");
    $el.find("li").removeClass("active");
    $el.each(function () {
      $(this)
        .find(`a[data-nav-section="${section}"]`)
        .closest("li")
        .addClass("active");
    });
  };

  const navigationSection = () => {
    const $section = $("section[data-section]");

    $section.waypoint(
      function (direction) {
        if (direction === "down") {
          navActive($(this.element).data("section"));
        }
      },
      { offset: "150px" }
    );

    $section.waypoint(
      function (direction) {
        if (direction === "up") {
          navActive($(this.element).data("section"));
        }
      },
      {
        offset: function () {
          return -$(this.element).height() + 155;
        },
      }
    );
  };

  const sliderMain = () => {
    $("#colorlib-hero .flexslider").flexslider({
      animation: "fade",
      slideshowSpeed: 5000,
      directionNav: true,
      start: function () {
        setTimeout(() => {
          $(".slider-text").removeClass("animated fadeInUp");
          $(".flex-active-slide")
            .find(".slider-text")
            .addClass("animated fadeInUp");
        }, 500);
      },
      before: function () {
        setTimeout(() => {
          $(".slider-text").removeClass("animated fadeInUp");
          $(".flex-active-slide")
            .find(".slider-text")
            .addClass("animated fadeInUp");
        }, 500);
      },
    });
  };

  const stickyFunction = () => {
    const setHeight = () => {
      const h = $(".image-content").outerHeight();
      $(".sticky-parent").css("height", h);
    };

    const handleResize = () => {
      setHeight();
      const windowWidth = $(window).width();
      if (windowWidth <= 992) {
        $("#sticky_item").trigger("sticky_kit:detach");
      } else {
        $(".sticky-parent").removeClass("stick-detach");
        $("#sticky_item").trigger("sticky_kit:detach");
        $("#sticky_item").trigger("sticky_kit:unstick");
        $("#sticky_item").stick_in_parent();
      }
    };

    $(window).resize(handleResize);
    handleResize();
  };

  $(function () {
    fullHeight();
    counter();
    counterWayPoint();
    contentWayPoint();
    burgerMenu();
    clickMenu();
    navigationSection();
    mobileMenuOutsideClick();
    sliderMain();
    stickyFunction();
    detectDayNightMode();
  });
})();

class Accordion {
  constructor(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
    const links = this.el.find(".link");
    links.on("click", { el: this.el, multiple: this.multiple }, this.dropdown);
  }

  dropdown(e) {
    const $el = e.data.el;
    const $this = $(this);
    const $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass("open");

    if (!e.data.multiple) {
      $el.find(".submenu").not($next).slideUp().parent().removeClass("open");
    }
  }
}

const accordion = new Accordion($("#accordion"), false);

const SixAm = 6;
const EightPm = 20;

function enableDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function detectDayNightMode() {
  const hours = new Date().getHours();
  if (!(hours > SixAm && hours < EightPm)) {
    enableDarkMode();
  }
}
