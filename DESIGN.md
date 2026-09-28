# Design — Project Identity

> This document is project-long-lived. Tokens are not changed without
> the Architect's approval. Developers MUST use these tokens
> instead of improvising their own colors/spacings.

## Style Direction

Helle, datengetriebene Business-UI im Figma-Stil: weiße Karten auf hellem Grund, dunkles Navy (#23233C) für Text, kräftiges Korallenrot (#FF6969) als Primärakzent, unterstützt von Grün/Gelb/Rot für Statuswerte; Aleo für Headings, Inter für Fließtext, Poppins für Labels.

## Colors

- `--color-bg`: **#FFFFFF**
- `--color-fg`: **#23233C**
- `--color-accent`: **#FF6969**
- `--color-border`: **#BBC7DB**
- `--color-muted`: **#2F2E41**
- `--color-danger`: **#ED2B2B**
- `--color-danger_strong`: **#FF4343**
- `--color-success`: **#5E8E11**
- `--color-success_soft`: **#6CC57C**
- `--color-warning`: **#FFC648**
- `--color-warning_soft`: **#FFE3A6**
- `--color-info`: **#153E73**
- `--color-ink`: **#192534**
- `--color-black`: **#000000**

## Typography

- `font_family`: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif
- `heading_font_family`: Aleo, Georgia, 'Times New Roman', serif
- `label_font_family`: Poppins, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- `heading_weight`: 700
- `body_weight`: 400
- `size_scale`: xs: 9px; sm: 12px; md: 14px; lg: 16px; xl: 18px; display: 24px

## Spacing Scale

- `--space-0`: 4px
- `--space-1`: 8px
- `--space-2`: 12px
- `--space-3`: 16px
- `--space-4`: 24px
- `--space-5`: 32px
- `--space-6`: 48px

## Border-Radii

- `--radius-sm`: 5px
- `--radius-md`: 8px
- `--radius-lg`: 14px
- `--radius-xl`: 15px
- `--radius-pill`: 999px

## Components

### Button

Primary: min-height 44px (mobile tap), padding 12px 24px, radius 8px (md), border none, bg #FF6969, color #FFFFFF, font Inter 16px/19px 400; hover bg #ED2B2B; active bg #ED2B2B + translateY(1px); focus-visible outline 2px #153E73 offset 2px; disabled bg #BBC7DB, color #FFFFFF, opacity 0.6, cursor not-allowed. Secondary: bg #FFFFFF, color #23233C, border 1px #BBC7DB; hover border #23233C; active bg #BBC7DB; disabled opacity 0.5. Danger: bg #ED2B2B, color #FFFFFF; hover bg #FF4343; active bg #ED2B2B.

### Card

bg #FFFFFF, border 1px #BBC7DB, radius 14px (lg), padding 16px, shadow 0 2px 8px rgba(35,35,60,0.06). KPI-Variante: Label Poppins 11px/18px 400 mit letter-spacing 0.38px in #2F2E41, Wert Aleo 24px/28px 700 in #23233C.

### BottomNavigation

Mobile: position fixed bottom 0, height 64px, bg #FFFFFF, border-top 1px #BBC7DB; Item min tap target 44px, Icon 24px, Label Poppins 11px/18px 400 in #2F2E41; aktiver Zustand #FF6969. Ab 768px als horizontale Top-Navigation mit gleicher Farb-/Zustandslogik.

### Input

min-height 44px, padding 12px 16px, radius 8px (md), border 1px #BBC7DB, bg #FFFFFF, color #23233C, font Inter 16px/19px 400; placeholder #2F2E41; focus border #FF6969, box-shadow 0 0 0 2px rgba(255,105,105,0.25); error border #ED2B2B.

### SegmentedControl

bg #FFFFFF, border 1px #BBC7DB, radius pill; Segment min-height 44px, padding 8px 16px, font Inter 14px/18px 400, color #2F2E41; active bg #23233C, color #FFFFFF, radius pill; inactive hover bg rgba(187,199,219,0.2).

### TransactionItem

padding 12px 16px, border-bottom 1px #BBC7DB, flex; Titel Inter 14px/18px 400 #23233C, Betrag Aleo 14px/17px 700; positiv #5E8E11, negativ #ED2B2B; Metadaten Inter 12px/14px 400 #2F2E41.

### Badge

padding 4px 10px, radius pill, font Inter 12px/14px 400; success bg #6CC57C color #192534; warning bg #FFE3A6 color #192534; danger bg #FF6969 color #FFFFFF; info bg #BBC7DB color #23233C.

### Sheet

bg #FFFFFF, radius 15px (xl) oben (mobile bottom sheet), padding 24px, overlay rgba(25,37,52,0.5); Header Aleo 16px/19px 700 #23233C, Close-Icon min 44px.

### ProgressBar

height 8px, radius pill, bg #BBC7DB; fill bg #71AA21 (im Budget), #FFC648 (nahe Budgetgrenze), #ED2B2B (über Budget); Label Inter 12px/14px 400 #2F2E41.

## Layout Principles

- Container max-width 1120px, zentriert, padding 16px mobile / 24px ab 768px; kein horizontales Scrollen.
- Breakpoints: 414px Basis, 640px, 768px (Tablet, Bottom-Nav wird Top-Nav), 1024px (Desktop), 1280px (wide).
- Mobile einspaltig; KPI-/Statistik-Karten ab 768px 2-spaltig, ab 1024px 3-spaltig per CSS Grid.
- Sektionsabstand 24px mobile, 32px ab 768px; Kartenabstand 16px.
- Alle Touch-Ziele mindestens 44px; Übergänge 150–200ms für Navigation, Slider und Zustandswechsel.

## Source Frames

This design was taken from the Figma frames below. They are the reference; the tokens above were read from them.

- **Money Management** · businesshandler — `design/figma/money-management.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-2446
- **Money Management 2** · businesshandler — `design/figma/money-management-2.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-2573
- **Money Management 3** · businesshandler — `design/figma/money-management-3.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-2673
- **Time Management** · businesshandler — `design/figma/time-management.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-803
- **Time Management - 2** · businesshandler — `design/figma/time-management-2.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-3047
- **Time Management - 3** · businesshandler — `design/figma/time-management-3.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-1029
- **Login** · businesshandler — `design/figma/login.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-81
- **Login Slide** · businesshandler — `design/figma/login-slide.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-20
- **Login Slide 2** · businesshandler — `design/figma/login-slide-2.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-208
- **Dashboard** · businesshandler — `design/figma/dashboard.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-681
- **Dashboard Menu** · businesshandler — `design/figma/dashboard-menu.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-2973
- **Dashboard Stats** · businesshandler — `design/figma/dashboard-stats.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-900
