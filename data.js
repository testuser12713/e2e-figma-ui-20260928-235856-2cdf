(function () {
  "use strict";

  window.AppData = {
    dashboard: {
      accountBalance: {
        label: "Kontostand",
        value: "6.210,50 €",
        trend: "+2.850 €",
        trendType: "success"
      },
      income: {
        label: "Gesamtumsatz",
        value: "12.450 €",
        trend: "+8,2 %",
        trendType: "success"
      },
      expenses: {
        label: "Ausgaben",
        value: "4.320 €",
        trend: "−3,1 %",
        trendType: "danger"
      },
      timeOverview: {
        label: "Arbeitsstunden heute",
        value: "06:45 h",
        trend: "offen",
        trendType: "info"
      },
      menu: [
        { label: "Übersicht", target: "dashboard" },
        { label: "Money Management", target: "money" },
        { label: "Time Management", target: "time" }
      ]
    },

    money: {
      income: [
        {
          id: "tx-3",
          title: "Gehalt",
          category: "Einkommen",
          date: "25.09.2026",
          time: "08:00",
          amount: 2850.0,
          note: "Monatsgehalt"
        }
      ],
      expenses: [
        {
          id: "tx-1",
          title: "Edeka Einkauf",
          category: "Lebensmittel",
          date: "28.09.2026",
          time: "18:24",
          amount: -42.85,
          note: "Wocheneinkauf"
        },
        {
          id: "tx-2",
          title: "Café Kaffee & Co",
          category: "Gastronomie",
          date: "28.09.2026",
          time: "09:12",
          amount: -4.5,
          note: ""
        },
        {
          id: "tx-4",
          title: "Netflix Abo",
          category: "Abos",
          date: "24.09.2026",
          time: "03:00",
          amount: -12.99,
          note: "Monatsabo"
        },
        {
          id: "tx-5",
          title: "Tankstelle Aral",
          category: "Mobilität",
          date: "24.09.2026",
          time: "12:40",
          amount: -68.2,
          note: ""
        }
      ],
      budget: {
        period: "September 2026",
        categories: [
          { name: "Lebensmittel", spent: 420, limit: 600, status: "ok" },
          { name: "Mobilität", spent: 220, limit: 250, status: "near" },
          { name: "Freizeit", spent: 180, limit: 150, status: "over" },
          { name: "Abos", spent: 65, limit: 100, status: "ok" }
        ]
      },
      transactions: [
        {
          id: "tx-1",
          title: "Edeka Einkauf",
          category: "Lebensmittel",
          date: "28.09.2026",
          time: "18:24",
          amount: -42.85,
          note: "Wocheneinkauf"
        },
        {
          id: "tx-2",
          title: "Café Kaffee & Co",
          category: "Gastronomie",
          date: "28.09.2026",
          time: "09:12",
          amount: -4.5,
          note: ""
        },
        {
          id: "tx-3",
          title: "Gehalt",
          category: "Einkommen",
          date: "25.09.2026",
          time: "08:00",
          amount: 2850.0,
          note: "Monatsgehalt"
        },
        {
          id: "tx-4",
          title: "Netflix Abo",
          category: "Abos",
          date: "24.09.2026",
          time: "03:00",
          amount: -12.99,
          note: "Monatsabo"
        },
        {
          id: "tx-5",
          title: "Tankstelle Aral",
          category: "Mobilität",
          date: "24.09.2026",
          time: "12:40",
          amount: -68.2,
          note: ""
        }
      ]
    },

    time: {
      entries: [
        {
          id: "entry-1",
          title: "Website Redesign",
          category: "Design",
          date: "28.09.2026",
          duration: "03:20 h",
          minutes: 200,
          initials: "WR"
        },
        {
          id: "entry-2",
          title: "Sprint Review",
          category: "Meeting",
          date: "28.09.2026",
          duration: "01:15 h",
          minutes: 75,
          initials: "SR"
        },
        {
          id: "entry-3",
          title: "Konzeption",
          category: "Planung",
          date: "27.09.2026",
          duration: "02:05 h",
          minutes: 125,
          initials: "KO"
        },
        {
          id: "entry-4",
          title: "Dokumentation",
          category: "Schreiben",
          date: "26.09.2026",
          duration: "00:45 h",
          minutes: 45,
          initials: "DO"
        }
      ],
      dayOverview: {
        label: "Heute",
        duration: "06:45 h",
        minutes: 405
      },
      weekOverview: [
        { day: "Mo", minutes: 0 },
        { day: "Di", minutes: 90 },
        { day: "Mi", minutes: 180 },
        { day: "Do", minutes: 60 },
        { day: "Fr", minutes: 115 },
        { day: "Sa", minutes: 0 },
        { day: "So", minutes: 0 }
      ]
    }
  };
})();
