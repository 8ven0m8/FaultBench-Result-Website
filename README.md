# FaultBench-Industrial Research Documentation Site

Static HTML site generated from the supplied research notes.

## Structure
- `index.html` — main page
- One HTML file per major research page
- One fault overview HTML page for each of the five faults
- One HTML file for every fault × duration × recovery mechanism combination (5 × 2 × 4 = 40 experiment pages)
- `assets/wiki.css` — Wikipedia-inspired restrained styling
- `assets/wiki.js` — sidebar and light/dark appearance controls

## UI
- Wikipedia-like article layout
- Serif article typography and restrained sans-serif navigation chrome
- Toggleable sidebar
- Nested fault → permanent/transient → recovery mechanism navigation
- Light/dark mode persisted in localStorage
- No animated blinking dots, gradients, glassmorphism, or dashboard cards

## Graphs
The experiment pages contain neutral graph placeholders. Replace each placeholder with the actual graph image/HTML generated from the corresponding experiment.

## Source basis
The terminology and experimental matrix follow the supplied ToDo and research proposal. The proposal specifies five fault classes, four recovery paradigms, four evaluation metrics, and multiple seeds for statistical reporting.
