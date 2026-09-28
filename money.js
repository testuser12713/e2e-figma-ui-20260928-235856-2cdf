(function () {
  "use strict";

  function formatMoney(amount) {
    var negative = amount < 0;
    var abs = Math.abs(amount);
    var fixed = abs.toFixed(2);
    var parts = fixed.split(".");
    var intPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return (negative ? "−" : "") + intPart + "," + parts[1] + " €";
  }

  function sum(items, key) {
    return items.reduce(function (acc, item) {
      return acc + (item[key] || 0);
    }, 0);
  }

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function amountClass(amount) {
    return amount < 0 ? "money-item__amount--neg" : "money-item__amount--pos";
  }

  function budgetStatusLabel(status) {
    switch (status) {
      case "over":
        return "Überschritten";
      case "near":
        return "Fast erreicht";
      default:
        return "Im Budget";
    }
  }

  function budgetBadgeClass(status) {
    switch (status) {
      case "over":
        return "badge--danger";
      case "near":
        return "badge--warning";
      default:
        return "badge--success";
    }
  }

  function budgetFillClass(status) {
    switch (status) {
      case "over":
        return "progress__fill--over";
      case "near":
        return "progress__fill--near";
      default:
        return "progress__fill--ok";
    }
  }

  function renderKpis(totalIncome, totalExpenses, budgetRemaining) {
    return (
      '<div class="money__kpis">' +
      '<div class="card card--kpi">' +
      '<span class="kpi__label">Einnahmen</span>' +
      '<span class="kpi__value">' + esc(formatMoney(totalIncome)) + "</span>" +
      "</div>" +
      '<div class="card card--kpi">' +
      '<span class="kpi__label">Ausgaben</span>' +
      '<span class="kpi__value kpi__value--neg">' + esc(formatMoney(totalExpenses)) + "</span>" +
      "</div>" +
      '<div class="card card--kpi">' +
      '<span class="kpi__label">Budget übrig</span>' +
      '<span class="kpi__value">' + esc(formatMoney(budgetRemaining)) + "</span>" +
      "</div>" +
      "</div>"
    );
  }

  function renderSegmented() {
    return (
      '<div class="segmented" role="tablist" aria-label="Übersicht">' +
      '<button type="button" class="segmented__segment is-active" role="tab" aria-selected="true" data-view="income">Einnahmen</button>' +
      '<button type="button" class="segmented__segment" role="tab" aria-selected="false" data-view="expenses">Ausgaben</button>' +
      '<button type="button" class="segmented__segment" role="tab" aria-selected="false" data-view="budget">Budget</button>' +
      "</div>"
    );
  }

  function renderList(items, kind) {
    if (!items.length) {
      return '<p class="money__empty">Keine Einträge vorhanden.</p>';
    }
    var rows = items
      .map(function (item) {
        var cls = kind === "income" ? "money-item__amount--pos" : "money-item__amount--neg";
        return (
          '<li class="money-item">' +
          '<div class="money-item__main">' +
          '<span class="money-item__title">' + esc(item.title) + "</span>" +
          '<span class="money-item__meta">' + esc(item.category) + " · " + esc(item.date) + "</span>" +
          "</div>" +
          '<span class="money-item__amount ' + cls + '">' + esc(formatMoney(item.amount)) + "</span>" +
          "</li>"
        );
      })
      .join("");
    return '<ul class="money-list">' + rows + "</ul>";
  }

  function renderIncomePanel(income) {
    return (
      '<div class="money__panel" data-panel="income" role="tabpanel">' +
      renderList(income, "income") +
      "</div>"
    );
  }

  function renderExpensesPanel(expenses) {
    return (
      '<div class="money__panel" data-panel="expenses" role="tabpanel" hidden>' +
      renderList(expenses, "expenses") +
      "</div>"
    );
  }

  function renderBudgetPanel(budget) {
    var categories = budget.categories || [];
    var rows;
    if (!categories.length) {
      rows = '<p class="money__empty">Keine Budgets vorhanden.</p>';
    } else {
      rows =
        '<ul class="budget-list">' +
        categories
          .map(function (cat) {
            var limit = cat.limit || 0;
            var spent = cat.spent || 0;
            var pct = limit > 0 ? Math.min(100, Math.round((spent / limit) * 100)) : 0;
            return (
              '<li class="budget-item">' +
              '<div class="budget-item__head">' +
              '<span class="budget-item__name">' + esc(cat.name) + "</span>" +
              '<span class="badge ' + budgetBadgeClass(cat.status) + '">' + esc(budgetStatusLabel(cat.status)) + "</span>" +
              "</div>" +
              '<div class="progress" role="progressbar" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100">' +
              '<div class="progress__fill ' + budgetFillClass(cat.status) + '" style="width:' + pct + '%"></div>' +
              "</div>" +
              '<div class="budget-item__foot">' +
              "<span>" + esc(formatMoney(spent)) + "</span>" +
              "<span>von " + esc(formatMoney(limit)) + "</span>" +
              "</div>" +
              "</li>"
            );
          })
          .join("") +
        "</ul>";
    }
    return (
      '<div class="money__panel" data-panel="budget" role="tabpanel" hidden>' +
      '<p class="money__period">' + esc(budget.period) + "</p>" +
      rows +
      "</div>"
    );
  }

  function renderTransactions(transactions) {
    if (!transactions.length) {
      return (
        '<section class="section">' +
        '<div class="section__header"><h2 class="section__title">Transaktionen</h2></div>' +
        '<p class="money__empty">Keine Transaktionen vorhanden.</p>' +
        "</section>"
      );
    }
    var rows = transactions
      .map(function (tx) {
        var detail =
          '<div class="tx-detail" hidden>' +
          '<dl class="tx-detail__grid">' +
          '<dt>Kategorie</dt><dd>' + esc(tx.category) + "</dd>" +
          "<dt>Datum</dt><dd>" + esc(tx.date) + "</dd>" +
          "<dt>Uhrzeit</dt><dd>" + esc(tx.time) + "</dd>" +
          "<dt>Notiz</dt><dd>" + (tx.note ? esc(tx.note) : "—") + "</dd>" +
          "</dl>" +
          "</div>";
        return (
          '<li class="tx-item">' +
          '<button type="button" class="tx-item__toggle" aria-expanded="false">' +
          '<span class="tx-item__title">' + esc(tx.title) + "</span>" +
          '<span class="tx-item__amount ' + amountClass(tx.amount) + '">' + esc(formatMoney(tx.amount)) + "</span>" +
          "</button>" +
          detail +
          "</li>"
        );
      })
      .join("");
    return (
      '<section class="section">' +
      '<div class="section__header"><h2 class="section__title">Transaktionen</h2></div>' +
      '<ul class="tx-list">' + rows + "</ul>" +
      "</section>"
    );
  }

  window.MoneyModule = {
    init: function (container, data) {
      if (!container || !data) {
        return;
      }

      var income = data.income || [];
      var expenses = data.expenses || [];
      var budget = data.budget || { period: "", categories: [] };
      var transactions = data.transactions || [];

      var totalIncome = sum(income, "amount");
      var totalExpenses = sum(expenses, "amount");
      var budgetLimit = sum(budget.categories || [], "limit");
      var budgetSpent = sum(budget.categories || [], "spent");
      var budgetRemaining = budgetLimit - budgetSpent;

      var root = document.createElement("div");
      root.className = "money";
      root.innerHTML =
        renderKpis(totalIncome, totalExpenses, budgetRemaining) +
        renderSegmented() +
        renderIncomePanel(income) +
        renderExpensesPanel(expenses) +
        renderBudgetPanel(budget) +
        renderTransactions(transactions);

      container.appendChild(root);

      var segments = root.querySelectorAll(".segmented__segment");
      var panels = root.querySelectorAll(".money__panel");

      function activate(view) {
        segments.forEach(function (seg) {
          var active = seg.getAttribute("data-view") === view;
          seg.classList.toggle("is-active", active);
          seg.setAttribute("aria-selected", active ? "true" : "false");
        });
        panels.forEach(function (panel) {
          var active = panel.getAttribute("data-panel") === view;
          panel.hidden = !active;
        });
      }

      segments.forEach(function (seg) {
        seg.addEventListener("click", function () {
          activate(seg.getAttribute("data-view"));
        });
      });

      root.querySelectorAll(".tx-item__toggle").forEach(function (toggle) {
        toggle.addEventListener("click", function () {
          var expanded = toggle.getAttribute("aria-expanded") === "true";
          toggle.setAttribute("aria-expanded", expanded ? "false" : "true");
          var detail = toggle.nextElementSibling;
          if (detail) {
            detail.hidden = expanded;
          }
        });
      });
    }
  };
})();
