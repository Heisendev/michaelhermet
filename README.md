# Material UI - Vite example in TypeScript

## How to use

Download the example [or clone the repo](https://github.com/mui/material-ui):

<!-- #target-branch-reference -->

```bash
curl https://codeload.github.com/mui/material-ui/tar.gz/master | tar -xz --strip=2 material-ui-master/examples/material-ui-vite-ts
cd material-ui-vite-ts
```

Install it and run:

```bash
npm install
npm run dev
```

or:

<!-- #target-branch-reference -->

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/github/mui/material-ui/tree/master/examples/material-ui-vite-ts)

[![Edit on StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/mui/material-ui/tree/master/examples/material-ui-vite-ts)

## The idea behind the example

<!-- #host-reference -->

This example demonstrates how you can use Material UI with [Vite](https://vite.dev) in [TypeScript](https://github.com/Microsoft/TypeScript).
It includes `@mui/material` and its peer dependencies, including [Emotion](https://emotion.sh/docs/introduction), the default style engine in Material UI.

## What's next?

<!-- #host-reference -->

You now have a working example project.
You can head back to the documentation and continue by browsing the [templates](https://mui.com/material-ui/getting-started/templates/) section.

## Deploy on Vercel

This project includes a `vercel.json` configured for a Vite build and SPA route rewrites.

### Option 1: Vercel dashboard

1. Push this repository to GitHub/GitLab/Bitbucket.
2. In Vercel, click **Add New... → Project** and import the repository.
3. Keep the detected settings (or set manually):
	- Build Command: `npm run build`
	- Output Directory: `dist`
4. Click **Deploy**.

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

For production deployment:

```bash
vercel --prod
```
