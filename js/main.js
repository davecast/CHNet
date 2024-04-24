const OPTION_SLIDER_HOME = {
  type: "loop",
  drag: "free",
  pauseOnHover: false,
  pauseOnFocus: false,
  snap: true,
  arrows: false,
  perPage: 1,
  pagination: true,
  autoplay: true,
  easing: "cubic-bezier(.35,0,.97,.6)",
  focus: 0,
  omitEnd: true,
  interval: 6000,
};
const OPTION_SLIDER_RESIDENTIALS = {
  type: "loop",
  drag: false,
  pauseOnHover: false,
  pauseOnFocus: false,
  snap: false,
  arrows: false,
  perPage: 3,
  pagination: false,
  autoplay: false,
  easing: "cubic-bezier(.35,0,.97,.6)",
  focus: 0,
  omitEnd: true,
  interval: 6000,
  gap: "2.5rem",
  breakpoints: {
    1080: {
      drag: "free",
      perPage: 1,
      snap: true,
      arrows: true,
    },
  },
};
const OPTION_SLIDER_CORPORATION = {
  type: "loop",
  drag: false,
  pauseOnHover: false,
  pauseOnFocus: false,
  snap: false,
  arrows: false,
  perPage: 3,
  pagination: false,
  autoplay: false,
  easing: "cubic-bezier(.35,0,.97,.6)",
  focus: 0,
  omitEnd: true,
  interval: 6000,
  gap: "2.5rem",
  breakpoints: {
    1080: {
      drag: "free",
      perPage: 1,
      snap: true,
      arrows: true,
    },
  },
};

document.addEventListener("DOMContentLoaded", function () {
  const splideBanner = document.getElementById("splideBanner");

  if (!!splideBanner) {
    const splide = new Splide("#splideBanner", OPTION_SLIDER_HOME);
    splide.mount();
  }

  const splidePlansResidential = document.getElementById(
    "splidePlansResidential"
  );

  if (!!splidePlansResidential) {
    const splide = new Splide(
      "#splidePlansResidential",
      OPTION_SLIDER_RESIDENTIALS
    );
    splide.mount();
  }
  const splidePlansCorporation = document.getElementById(
    "splidePlansCorporation"
  );

  if (!!splidePlansCorporation) {
    const splide = new Splide(
      "#splidePlansCorporation",
      OPTION_SLIDER_CORPORATION
    );
    splide.mount();
  }

  const header = document.getElementById("header");

  function headerStiky() {
    if (window.pageYOffset >= 100) {
      header.classList.add("is--stiky");
      header.classList.remove("no--stiky");
    } else {
      header.classList.remove("is--stiky");
      header.classList.add("no--stiky");
    }
  }

  window.onscroll = function () {
    headerStiky();
  };

  //MENU ACTIONS

  const menuClose = document.getElementById("menuClose");
  const menuBar = document.getElementById("menuBar");
  const menu = document.getElementById("menu");
  const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");

  const toogleMenu = (e) => {
    menuClose.classList.toggle("mobile_menu_active");
    menuBar.classList.toggle("mobile_menu_active");
    menu.classList.toggle("show_menu");
    menu.classList.toggle("hidden_menu");
    mobileMenuOverlay.classList.toggle("mobile_menu_overlay_active");
  };

  menuClose.addEventListener("click", toogleMenu);
  menuBar.addEventListener("click", toogleMenu);
  mobileMenuOverlay.addEventListener("click", toogleMenu);
});
