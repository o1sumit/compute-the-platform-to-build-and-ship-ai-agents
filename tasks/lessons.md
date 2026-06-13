# Lessons Learned & Mistake Prevention

## User Correction Patterns

### Reversion of Overdesigned Visual Changes
* **Pattern:** When the user asked to make the site "bit moreee premiumm n aestheticcc", a large set of visual changes was applied simultaneously (replacing the hero scene, altering canvas colors in multiple sections, dynamically swapping images, and changing grid behaviors). The user subsequently requested to "undo last cahnagess".
* **Mistake:** Overdesigning and making too many concurrent architectural/aesthetic changes without verifying them piece-by-piece, which departed too far from the look-and-feel the user wanted to preserve.
* **Rules to Prevent Reoccurrence:**
  1. **Preserve Approved Core Visuals:** Do not replace core interactive elements (like the Anomalous Matter generative hero scene) unless the user explicitly asks to replace them. Focus on high-fidelity layouts, micro-spacing, typography, and theme safety instead.
  2. **Incremental Polish:** Make aesthetic changes in smaller, logical iterations so the user can select what they like and discard what they don't.
  3. **Aesthetic Balance:** Avoid neon/overly bright colors or complex 3D backgrounds that compete for visual attention. Keep it clean and elegant (e.g. muted monochrome colors, precise border shadows, thin container outlines).
