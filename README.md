# Moments Photography Portfolio

A modern, responsive, and high-performance portfolio website built with React and Vite.

## Project Structure

- **`src/components/`**: Reusable UI components (Navbar, Hero, Gallery, etc.).
- **`src/data.js`**: Configuration file for portfolio items. Easily add/remove images here.
- **`src/index.css`**: Global styles, variables, and typography.
- **`public/images/`**: Directory for storing image assets.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open the link provided (usually `http://localhost:5173`) to view the site.

3.  **Build for Production**:
    ```bash
    npm run build
    ```
    The output will be in the `dist/` folder, ready for deployment.

## Customization

- **Images**: Place new images in `public/images/` and update `src/data.js` to reference them.
- **Colors & Fonts**: Edit `src/index.css` to change CSS variables like `--color-accent` or `--font-heading`.
- **Content**: Edit the text directly in the component files (e.g., `src/components/Hero.jsx`).

## Deployment

This project is ready for deployment on platforms like Netlify, Vercel, or GitHub Pages.
- **Netlify/Vercel**: Connect your repository and it will automatically detect the Vite build settings.
