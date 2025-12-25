# Setapp Clone - Next.js 16 Project

A professional, high-performance landing page clone built with Next.js 16, React 19, and Tailwind CSS 4. This project demonstrates modern web development practices, including dynamic sliders, custom typography, and a unified design system.

## 🚀 Teck Stack

- **Framework**: Next.js 16 (App Router)
- **Library**: React 19
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Slider/Carousel**: Embla Carousel
- **Typography**: Avenir Next Pro (Custom Fonts)
- **Asset Handling**: SVGR (SVGs as React Components)

## ✨ Key Features

- **Interactive Hero Section**: Dynamic background image sliders with floating tool icons and smooth transitions.
- **Custom Design System**: Centralized color palette and typography managed via CSS variables in `globals.css`.
- **Responsive Navigation**: Tailored header with dynamic link arrays.
- **Testimonial Sliders**: Professional video and text testimonial sliders using Embla Carousel.
- **Reusable Components**: Modular `Button` component with multiple variants (hero, store, dark, outline).
- **Newsletter Integration**: Styled newsletter signup section in the footer.
- **Project Refinement**: Fully refactored to use dynamic data mapping for footer links and testimonials.

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/asimshakoor11/setapp.git
   cd setapp
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Production Build

The project is configured to use Webpack for production builds to ensure consistent SVG transformation via SVGR.

To create a production build:

```bash
npm run build
```

The output will be generated in the `.next` folder.

## 📁 Project Structure

- `/app`: Next.js App Router pages and global styles.
- `/components`: Reusable UI components.
- `/public`: Static assets, including custom fonts and SVGs.
- `next.config.ts`: Enhanced configuration for Webpack and SVGR.
- `tailwind.config.ts`: Tailwind configuration with custom theme extensions.
