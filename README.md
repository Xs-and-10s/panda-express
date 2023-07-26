# The Silence of Barbenheimer

A Next.js app that uses [Panda](https://panda-css.com) instead of Tailwind

### _(like tailwindcss but perhaps better?)_
- typesafe css-in-jss 
- build time generated styles
- RSC (react server components / next.js) compatible
- multi-variant support
- reset
- base
- tokens
- recipes
- utilities

## Initial setup _(already done)_

1. Run the following scripts
```bash
pnpm dlx create-next-app@latest --use-pnpm
cd panda-express # or whatever you name the app
pnpm i -D @pandacss/dev
pnpm panda init --postcss
```

2. Create a `index.css` file in your project that contains:

```css
@layer reset, base, tokens, recipes, utilities;
```

3. Import the `index.css` file at the root of your project.

_(I just wrote over `globals.css`)_

4. Change the next.config.js file to the following:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
```

## Getting Started

If you haven't already, run 

```bash
pnpm i
```

After the dependencies have been installed, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
