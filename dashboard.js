(function () {
  "use strict";

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) {
      node.className = className;
    }
    if (text != null) {
      node.textContent = text;
    }
    return node;
  }

  var BADGE_CLASS = {
    success: "badge--success",
    danger: "badge--danger",
    warning: "badge--warning",
    info: "badge--info"
  };

  function renderKpi(item) {
    var card = el("article", "card kpi");
    card.appendChild(el("span", "kpi__label", item.label));
    card.appendChild(el("span", "kpi__value", item.value));
    var foot = el("div", "kpi__foot");
    var badge = el("span", "badge " + (BADGE_CLASS[item.trendType] || "badge--info"));
    badge.textContent = item.trend;
    foot.appendChild(badge);
    card.appendChild(foot);
    return card;
  }

  function renderMenuItem(item) {
    var entry = el("li", "dashboard-menu__entry");
    var btn = el("button", "dashboard-menu__link");
    btn.type = "button";
    btn.setAttribute("aria-label", item.label);

    var label = el("span", "dashboard-menu__label", item.label);
    btn.appendChild(label);

    var arrow = el("span", "dashboard-menu__arrow", "\u203A");
    arrow.setAttribute("aria-hidden", "true");
    btn.appendChild(arrow);

    btn.addEventListener("click", function () {
      var nav = document.getElementById("nav-" + item.target);
      if (nav) {
        nav.click();
      }
    });

    entry.appendChild(btn);
    return entry;
  }

  window.DashboardModule = {
    init: function (container, data) {
      if (!container || !data) {
        return;
      }

      var existing = container.querySelector(".dashboard-content");
      if (existing) {
        existing.parentNode.removeChild(existing);
      }

      var root = el("div", "dashboard-content");

      var kpis = [
        data.accountBalance,
        data.income,
        data.expenses,
        data.timeOverview
      ];

      var kpiSection = el("section", "section");
      kpiSection.setAttribute("aria-label", "Kennzahlen");
      var grid = el("div", "kpi-grid");
      kpis.forEach(function (kpi) {
        if (kpi) {
          grid.appendChild(renderKpi(kpi));
        }
      });
      kpiSection.appendChild(grid);
      root.appendChild(kpiSection);

      if (data.menu && data.menu.length) {
        var menuSection = el("section", "section");
        menuSection.setAttribute("aria-label", "Menü");
        var header = el("div", "section__header");
        var headerText = el("div");
        headerText.appendChild(el("h2", "section__title", "Menü"));
        header.appendChild(headerText);
        menuSection.appendChild(header);

        var card = el("div", "card dashboard-menu");
        var list = el("ul", "dashboard-menu__list");
        data.menu.forEach(function (item) {
          list.appendChild(renderMenuItem(item));
        });
        card.appendChild(list);
        menuSection.appendChild(card);
        root.appendChild(menuSection);
      }

      container.appendChild(root);
    }
  };
})();
