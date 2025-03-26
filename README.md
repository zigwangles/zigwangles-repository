# ZigWangles Portfolio

A modern, responsive portfolio website built with Next.js and React.

## Features

- Clean, minimal design
- Responsive layout (mobile, tablet, desktop)
- Light/dark mode theming
- Interactive UI components
- Mobile-friendly navigation
- Project showcase
- Contact form

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- CSS Variables - For theming and styling
- Font Awesome - For icons

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
/portfolio
  /app                # Next.js App Router files
    /about            # About page
    /components       # Shared components
    /contact          # Contact page
    /projects         # Projects page
    /ui               # UI components
    layout.tsx        # Root layout
    page.tsx          # Home page
  /public             # Static assets
  globals.css         # Global styles
  package.json        # Project dependencies
  tsconfig.json       # TypeScript configuration
```

## Customization

- Edit the content in the page components to personalize your portfolio
- Modify `globals.css` to change the color scheme and styling
- Update the components to match your design preferences

## Deployment

Deploy your portfolio using [Vercel](https://vercel.com/), the platform built by the creators of Next.js:

```bash
npm run build
# or
yarn build
```

## License

This project is open source and available under the [MIT License](LICENSE).
