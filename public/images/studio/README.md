# Studio & community photos

Real photography of the Inner Spirit space and its community (brick walls, wood
floors, classes and circles). These replace the abstract SVG illustrations across
the site with authentic imagery.

## Files & where they are used

| File | Subject | Used in |
|------|---------|---------|
| `yoga-clase-grupal.jpg` | Group yoga on mats | `StudioSection` (pillar "Yoga"), `ClassesSection` card "Yoga" + booking modal |
| `danza-movimiento.jpg` | Group dance, motion | `StudioSection` (pillar "Danza"), `ClassesSection` card "Danza & Sound Healing" + booking modal |
| `capoeira-roda.jpg` | Capoeira roda with musicians | `StudioSection` (pillar "Capoeira") |
| `meditacion-mudra.jpg` | Seated meditation, gyan mudra | `ClassesSection` card "Meditación & Breathwork" + booking modal |
| `yoga-postura-ventanas.jpg` | Standing pose by the windows (vertical) | `AboutSection` (3:4 framed media) |

## Conventions

- Referenced from code as `/images/studio/<file>.jpg`.
- All current files are < 150 KB; keep new additions < 300 KB (WebP preferred).
- Always pass descriptive Spanish `alt` text and `loading="lazy"` in the component.
- The `BookingModal` shows `imageUrl` when provided and falls back to the SVG `Illustration`.
