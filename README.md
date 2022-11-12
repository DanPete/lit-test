
#  Monumental's Shopify Starter Theme

Collection of files and packages meant to be dropped into any new or existing projects to add TailwindCSS and JavaScript bundling support.

###  Includes

- [Parcel 2](https://v2.parceljs.org/)
- [Babel](https://babeljs.io/)
- [TailwindCSS](https://tailwindcss.com/)
- [Tailwinds JIT compiler via CDN](https://beyondco.de/blog/tailwind-jit-compiler-via-cdn) - since Shopify's live reload isn't that fast, this allows you to include tailwind JIT in the browser, which is nice for prototyping in the dev tools and adding tailwind classes.
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [TypeScript](https://www.typescriptlang.org/) - optional usage since Parcel 2 just [transpiles to JS](https://v2.parceljs.org/languages/typescript/) instead of type checking. This way VSCode can show errors and warnings in `.ts` files, but this setup doesn't actually use the typescript compiler(`tsc`).
- [postcss-preset-env](https://preset-env.cssdb.org/)

  

###  Commands

- Start development: `npm start`
  - uses parcel to watch and output js files and `.css` or `.scss` imports
  - uses tailwindcss cli to watch and output tailwind file using JIT compiler
- Build for production: `npm run build`
  - cleans `.parcel-cache` directory and files generated during development in `assets` folder so everything is fresh on each build
  - uses parcel to output minifed `js` and `css` files and uses babel on `js` files if [`browserslist`](https://v2.parceljs.org/getting-started/webapp/#browserslist) is configured in `package.json`
  - uses tailwindcss cli to check purge on `liquid` and `js` files and outputs optimized tailwind css

<sub> Note: development and production files are output to theme's `assets` folder<sub> 

### Getting started

1. Copy `mon.liquid` into snippets - located in `app/liquid-helpers`
2. Render `mon.liquid` in theme's `theme.liquid` - `{% render 'mon' %}`
3. Run `npm start` to watch changes to files in `app/scripts` and run tailwindcss JIT compiler
4. All `js` or `ts` files should have `.mon.` between the file name and file prefix. Example `theme.mon.js`. This allows `.gitignore` to ignore built files and `npm clean` to remove the correct files from the `assets` directory
5. Add `js` or `css` files to the `mon.liquid` file however you need to. For example, you might want a script or stylesheet to just load on one or select pages for peformance.
6. All files in `scripts` will by considered and entry files and create a new file in the `assets` directory. If that's not what you intended, put the file in `scripts/components` and then import it to a specific entry file. Or you can also create your own folder structures. For example, `scripts/helpers`
7. When ready to build files for production or staging use `npm run build`

### Shopify CLI Commands
Since Shopify is ending support for ThemeKit, I intentionally did not include any shortcut scripts in the `package.json`. Instead we should upload and download theme files as needed with the [Shopify CLI Theme commands](https://shopify.dev/themes/tools/cli).
