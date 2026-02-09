# Custom Fonts

Place your local font files (e.g., `.woff2`, `.ttf`, `.otf`) in this folder.

## How to use:

1. Copy your font file here (e.g., `MyCustomFont-Bold.woff2`).
2. Open `../styles/fonts.css`.
3. Uncomment and update the example `@font-face` rule to point to your file.

Example:

```css
@font-face {
  font-family: 'MyCustomFont';
  src: url('../fonts/MyCustomFont-Bold.woff2') format('woff2');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
```

Once defined, you can use `font-family: 'MyCustomFont', sans-serif;` in your CSS or Tailwind config.
