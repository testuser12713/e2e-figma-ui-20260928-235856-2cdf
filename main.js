(function () {
  "use strict";

  var SECTIONS = ["dashboard", "money", "time"];

  var pages = {};
  var buttons = {};

  SECTIONS.forEach(function (key) {
    pages[key] = document.getElementById("page-" + key);
    buttons[key] = document.getElementById("nav-" + key);
  });

  function showPage(name) {
    SECTIONS.forEach(function (key) {
      var active = key === name;
      if (pages[key]) {
        pages[key].hidden = !active;
        pages[key].classList.toggle("is-active", active);
      }
      if (buttons[key]) {
        buttons[key].classList.toggle("is-active", active);
        if (active) {
          buttons[key].setAttribute("aria-current", "page");
        } else {
          buttons[key].removeAttribute("aria-current");
        }
      }
    });
  }

  function initModules() {
    if (window.DashboardModule && pages.dashboard) {
      window.DashboardModule.init(pages.dashboard, window.AppData.dashboard);
    }
    if (window.MoneyModule && pages.money) {
      window.MoneyModule.init(pages.money, window.AppData.money);
    }
    if (window.TimeModule && pages.time) {
      window.TimeModule.init(pages.time, window.AppData.time);
    }
  }

  SECTIONS.forEach(function (key) {
    if (buttons[key]) {
      buttons[key].addEventListener("click", function () {
        showPage(key);
      });
    }
  });

  initModules();
  showPage("dashboard");
})();
