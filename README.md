# Proof of Concept : Vanilla-Extract within Next js in React

## Setup

This project was create from scratch, first as HTML with React elements, finally as moved from HTML to Nextjs with React components.

- HTML with React elements

1. `mkdir nextreact` & change directory
2. `touch index.html` & html skeleton
3. As html React needs 3 scripts to work: react, react-dom & babel.

- Nextjs with React components

1. npm init to create a package.json
2. react, react-dom & babel dependencies
3. remove all html markup
4. import react
5. change file extention -> index.js
6. Move the index.js file to a new folder called pages
7. `export default function HomePage() {...}` as the entrypoint of this page
8. Add a script to package.json to run the Next.js server `"scripts": {"dev": "next dev"}`

- Vanilla-Extract

1. Packages
   1. @vanilla-extract/css @vanilla-extract/babel-plugin @vanilla-extract/next-plugin
   2. typescript @types/react @types/node
2. Config files 1. next.config.js
   ```
   const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
   const withVanillaExtract = createVanillaExtractPlugin();
   const nextConfig = require("next").NextConfig;
   module.exports = withVanillaExtract(nextConfig);
   ```
