# BusinessHandler

BusinessHandler ist eine kleine, responsive Business-UI nach dem Figma-Design
„businesshandler“. Sie bietet drei klickbare Seiten — **Dashboard**, **Money
Management** und **Time Management** — als eigenständige HTML/CSS/JS-Bausteine,
komplett ohne Backend. Alle Beispieldaten liegen direkt im Code
(`data.js`). Die Oberfläche ist mobil-first (414 px) aufgebaut und skaliert bis
auf Desktop-Breite, ohne horizontales Scrollen oder Überlappungen.

## Tech-Stack

- **Markup:** HTML5
- **Styling:** CSS3 (responsive, mobile first, Design-Tokens aus `DESIGN.md`)
- **Logik:** Vanilla JavaScript (ES2020+), klassische Skripte ohne ES-Module
- **Runtime:** Browser — kein Build-Schritt, läuft auch über `file://`
- **Daten:** Beispieldaten als JavaScript-Objekte in `data.js`

## Installation

Keine Abhängigkeiten, kein Build. Repository klonen oder entpacken — fertig.

## So startest du die App

Zwei Möglichkeiten:

1. **Direkt öffnen:** `index.html` im Browser öffnen (funktioniert über
   `file://`, da alle Skripte als klassische Skripte eingebunden sind).
2. **Lokaler Server (empfohlen):**

   ```bash
   python -m http.server 8000
   ```

   Danach `http://localhost:8000` im Browser öffnen.

## Bedienung

Die Navigation (unten auf Mobil, oben ab 768 px) schaltet zwischen den drei
Seiten um:

- **Dashboard** — Kennzahlen und Menü (Umsatz, Ausgaben, Ersparnis, Arbeitszeit).
- **Money** — Money Management mit Einnahmen, Ausgaben, Budget und
  Transaktionen.
- **Zeit** — Time Management mit Zeiterfassung, Tages- und Wochenübersicht.

Ein Klick auf einen Navigationseintrag blendet den jeweiligen Seitenbereich ein
und die anderen aus; der aktive Eintrag wird farblich hervorgehoben.

## Feature-Liste

- Responsive Navigation (Bottom-Nav auf Mobil, Top-Nav ab 768 px)
- Drei per Klick erreichbare Seiten: Dashboard, Money Management, Time Management
- Design-Tokens (Farben, Schriften, Abstände, Radien) gemäß `DESIGN.md`
- Mobile-first Layout ohne horizontales Scrollen (414 px bis Desktop)
- Zentrale Beispieldaten in `window.AppData` (`data.js`)
- Modulare Struktur: jedes Feature bringt seine eigene JS- und CSS-Datei mit
  (`dashboard.js/.css`, `money.js/.css`, `time.js/.css`)

## Struktur

| Datei           | Zweck                                             |
| --------------- | ------------------------------------------------- |
| `index.html`    | App-Gerüst: Header, Navigation, drei Seitenbereiche |
| `styles.css`    | Gemeinsame Design-Tokens, Layout, Navigation, Typografie |
| `data.js`       | `window.AppData` — alle Beispieldaten             |
| `dashboard.js`  | `window.DashboardModule.init(container, data)`    |
| `money.js`      | `window.MoneyModule.init(container, data)`        |
| `time.js`       | `window.TimeModule.init(container, data)`         |
| `main.js`       | Verdrahtet Navigation und Modul-Initialisierung   |
| `*.css` (Modul) | Seiten-/Feature-spezifische Stile                 |
