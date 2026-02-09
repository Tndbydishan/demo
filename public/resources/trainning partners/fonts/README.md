# 🔤 Font Management Guide

Welcome to the **Fonts Directory**! This folder (`public/fonts`) is where you store custom, local font files that cannot be loaded via Google Fonts.

## 🎨 Current Font Setup

This project uses a hybrid approach for maximum performance:

1.  **Primary Font (Headings & Display)**: `Akira Expanded`
    *   **Type**: Local Custom Font.
    *   **File Location**: Inside this folder (`AkiraExpanded-SuperBold.otf`).
    *   **Tailwind Class**: `font-display` or `font-akira`.
    *   **Defined In**: `app/globals.css`.

2.  **Secondary Font (Body Text)**: `Montserrat`
    *   **Type**: Google Font (Optimized).
    *   **File Location**: Loaded automatically via code (no file needed here).
    *   **Tailwind Class**: `font-sans`.
    *   **Defined In**: `app/layout.tsx` using `next/font/google`.

---

## 🛠 How to Add a New Local Font

Follow these steps if you have a font file (like `.ttf`, `.otf`, or `.woff2`) that you want to add.

### Step 1: Add the File
Drag and drop your font file into this folder (`public/fonts/`).
*   *Example file:* `MyCoolFont.woff2`

### Step 2: Register in Global CSS
Open `app/globals.css` and tell the browser where to find the font.

```css
/* app/globals.css */

@font-face {
  font-family: 'MyCoolFont';
  /* ⚠️ IMPORTANT: Path starts with /fonts, NOT /public/fonts */
  src: url('/fonts/MyCoolFont.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}
```

### Step 3: Add to Tailwind Config
Open `tailwind.config.ts` to create a class name for it.

```typescript
// tailwind.config.ts

theme: {
  extend: {
    fontFamily: {
      // Now you can use className="font-cool"
      cool: ['MyCoolFont', 'sans-serif'],
    },
  },
}
```

### Step 4: Use It
You can now use your new font in any component:

```tsx
<h1 className="font-cool text-2xl">
  This text uses the new font!
</h1>
```

---

## ⚠️ Common Pitfalls

1.  **Wrong URL Path**: When referencing files in CSS, never include `public`.
    *   ❌ Wrong: `url('/public/fonts/file.otf')`
    *   ✅ Correct: `url('/fonts/file.otf')`
2.  **Browser Caching**: If you replace a font file with the exact same name, you might not see changes immediately. Hard refresh your browser (`Ctrl+Shift+R`).
