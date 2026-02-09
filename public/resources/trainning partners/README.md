# Website Resources & Asset Guidelines

This directory guides you on how to manage, replace, and optimize the visual assets (Images, Icons, Fonts) for the Auto Evolution Workshop website.

## 1. Favicons (Browser Tab Icons)

The website currently uses **Data URIs** (base64 strings) embedded directly in the HTML files for the favicon. This makes the site faster by reducing HTTP requests.

### How to Change the Favicon:

**Option A: The Professional Way (Recommended)**
1.  Create your logo icon (PNG or SVG).
2.  Name it `favicon.svg` or `favicon.ico`.
3.  Place the file in the root `public/` folder (create the folder if it doesn't exist).
4.  Open every `.html` file (`index.html`, `about.html`, etc.).
5.  Replace the `<link rel="icon" ...>` line with:
    ```html
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    ```

**Option B: The Quick Way (Data URI)**
1.  Go to a [Data URI Converter](https://dopiaza.org/tools/datauri/).
2.  Upload your icon.
3.  Copy the generated string.
4.  Paste it into the `href` attribute of the `<link rel="icon">` tag in all HTML files.

## 2. Images (Photos & Heroes)

The website is currently configured to use high-quality hosted images (Unsplash).

### Using Local Images:
If you have your own workshop photos:
1.  Create a folder named `images` inside the `public/` directory (e.g., create `public/images`).
2.  Place your photos there (e.g., `mechanic.jpg`).
3.  In your code (e.g., `pages/About.tsx`), reference the image like this:
    ```tsx
    <PageHero 
       mediaType="image"
       mediaSource="/images/mechanic.jpg" 
       title="About Us"
    />
    ```
    *Note: You do not need to import the image in React. Just use the string path starting with `/`.*

### Recommended Image Sizes:
*   **Hero Banners**: 1920x1080px (JPG, optimized, ~200KB)
*   **Blog Thumbnails**: 800x600px
*   **Team Photos**: 600x800px (Portrait)

## 3. Fonts

The project uses:
1.  **Montserrat** (Google Fonts) - Body text.
2.  **Space Grotesk** (Google Fonts) - Subheadings.
3.  **Akira Expanded** (Local/Webfont) - Main Headings.

### Adding a New Custom Font:
1.  Get the font files (`.woff2` or `.ttf`).
2.  Place them in the `fonts/` directory.
3.  Open `index.css`.
4.  Add a `@font-face` rule:
    ```css
    @font-face {
      font-family: 'MyNewFont';
      src: url('/fonts/MyNewFont.woff2') format('woff2');
      font-weight: normal;
    }
    ```
5.  Update `tailwind.config` in your HTML files to include the new font family.

## 4. Icons

The site uses **Remix Icon** (CDN).
To find new icons, visit [RemixIcon.com](https://remixicon.com/).

**Usage:**
```html
<i className="ri-wrench-fill"></i>
```
Just copy the class name from their website and put it in the `className` attribute.
