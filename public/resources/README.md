# 🗂️ Public Resources Directory

This folder (`public/resources`) is the designated place for static assets that need to be served publicly by the web server.

## 📂 Structure Recommendations

To keep things organized, we recommend creating these subfolders as needed:

*   **`images/`**: For general website images, hero banners, and photography.
*   **`icons/`**: For favicons, logos, and UI icons.
*   **`videos/`**: For background videos or promotional clips.
*   **`media/`**: For other downloadable assets like PDFs.

## 🚀 How to Use

Files placed here are served from the root URL.

**Example:**
If you place a file at `public/resources/images/hero.jpg`, you reference it in your code like this:

```tsx
// Correct usage (start with /)
<img src="/resources/images/hero.jpg" alt="Hero Image" />
```

**Important:** Do not include `public` in the `src` path. Next.js maps the `public` folder directly to `/`.