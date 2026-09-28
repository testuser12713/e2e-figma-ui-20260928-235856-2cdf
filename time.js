(function () {
  "use strict";

  var AVATAR_COLORS = ["#FF6969", "#153E73", "#6CC57C", "#FFC648"];

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function formatMinutes(minutes) {
    var m = Math.max(0, Math.round(Number(minutes) || 0));
    var h = Math.floor(m / 60);
    var mm = m % 60;
    return h + ":" + (mm < 10 ? "0" + mm : String(mm)) + " h";
  }

  function renderDayOverview(day) {
    var minutes = day && day.minutes != null ? Number(day.minutes) || 0 : 0;
    var label = day && day.label ? day.label : "Heute";
    var duration = day && day.duration ? day.duration : formatMinutes(minutes);

    return (
      '<section class="card time__kpi" aria-label="Tagesübersicht">' +
      '<p class="kpi__label">' + esc(label) + "</p>" +
      '<p class="kpi__value">' + esc(duration) + "</p>" +
      '<p class="kpi__meta">' + esc(String(minutes)) + " Minuten erfasst</p>" +
      "</section>"
    );
  }

  function renderWeekOverview(week) {
    var days = Array.isArray(week) ? week : [];
    var maxMinutes = 1;
    days.forEach(function (d) {
      var m = Number(d && d.minutes) || 0;
      if (m > maxMinutes) {
        maxMinutes = m;
      }
    });

    var columns = days
      .map(function (d) {
        var minutes = Number(d && d.minutes) || 0;
        var height = Math.round((minutes / maxMinutes) * 100);
        var dayLabel = d && d.day ? d.day : "";
        var valueLabel = minutes > 0 ? formatMinutes(minutes).replace(" h", "") : "0:00";
        return (
          '<div class="week-chart__col">' +
          '<span class="week-chart__value">' + esc(valueLabel) + "</span>" +
          '<div class="week-chart__track">' +
          '<span class="week-chart__fill" style="height:' + height + '%"></span>' +
          "</div>" +
          '<span class="week-chart__day">' + esc(dayLabel) + "</span>" +
          "</div>"
        );
      })
      .join("");

    return (
      '<section class="card time__week" aria-label="Wochenübersicht">' +
      '<header class="time__head">' +
      '<h2 class="section__title">Wochenübersicht</h2>' +
      "</header>" +
      '<div class="week-chart" role="img" aria-label="Arbeitszeit je Wochentag">' +
      columns +
      "</div>" +
      "</section>"
    );
  }

  function renderEntries(entries) {
    if (!Array.isArray(entries) || entries.length === 0) {
      return (
        '<section class="card time__entries">' +
        '<header class="time__head">' +
        '<h2 class="section__title">Zeiterfassung</h2>' +
        "</header>" +
        '<p class="time__empty">Keine Einträge vorhanden.</p>' +
        "</section>"
      );
    }

    var items = entries
      .map(function (entry, index) {
        var title = entry && entry.title ? entry.title : "";
        var category = entry && entry.category ? entry.category : "";
        var date = entry && entry.date ? entry.date : "";
        var duration = entry && entry.duration ? entry.duration : formatMinutes(entry && entry.minutes);
        var initials = entry && entry.initials ? entry.initials : "–";
        var color = AVATAR_COLORS[index % AVATAR_COLORS.length];

        var categoryBadge = category
          ? '<span class="badge badge--info">' + esc(category) + "</span>"
          : "";

        return (
          '<li class="entry">' +
          '<span class="entry__avatar" style="background:' + color + '">' + esc(initials) + "</span>" +
          '<div class="entry__body">' +
          '<div class="entry__row">' +
          '<span class="entry__title">' + esc(title) + "</span>" +
          '<span class="entry__duration">' + esc(duration) + "</span>" +
          "</div>" +
          '<div class="entry__meta">' +
          categoryBadge +
          (date ? '<span class="entry__date">' + esc(date) + "</span>" : "") +
          "</div>" +
          "</div>" +
          "</li>"
        );
      })
      .join("");

    return (
      '<section class="card time__entries" aria-label="Zeiterfassung">' +
      '<header class="time__head">' +
      '<h2 class="section__title">Zeiterfassung</h2>' +
      "</header>" +
      '<ul class="entry-list">' + items + "</ul>" +
      "</section>"
    );
  }

  window.TimeModule = {
    init: function (container, data) {
      if (!container) {
        return;
      }

      var time = data || {};

      var html =
        '<div class="time">' +
        renderDayOverview(time.dayOverview) +
        renderWeekOverview(time.weekOverview) +
        renderEntries(time.entries) +
        "</div>";

      container.innerHTML = html;
    }
  };
})();
