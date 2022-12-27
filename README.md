# Bundling tests

This repo tests out some aspects of bundling javascript with [webpack](https://webpack.js.org/) vs [vite](https://vitejs.dev/)

## Tree-shaking a single file

ThreeJS's npm distribution includes a module output, [`three.module.js`](https://cdn.jsdelivr.net/npm/three@0.148.0/build/three.module.js) that is about 32,000 lines long.

**Question:** When bundling frontend code, if our source code uses ES Modules and we import just a single class from `three.module.js`, do we get all of `three.module.js`, or just the relevant portion of the file?

*Note: ThreeJS declares its package as `sideEffects: false`, which [webpack uses]() as a tree-shaking hint. See Webpack's [tree-shaking](https://webpack.js.org/guides/tree-shaking/) guide.*

**Answer:** Depends on the bundler. Vite does a much better job tree-shaking.

For example, when bundling
```js
// src/index.js
import { Color } from "three"

const color = new Color(0xff0000)
console.log(color)
```

webpack includes all ~32k lines of `three.module.js`, but Vite includes only the ~500 lines used to define `Color` and its dependencies. (See [vite_output](./vite_output) and [webpack_output](./webpack_output).)

## Try it yourself
First, clone the repo, install, and build:
```sh
git clone https://github.com/ChristopherChudzicki/bundling-tests
cd bundling-tests
npm install
npm run webpack
npm run vite
```
Inspect the two output directories, [vite_output](./vite_output) and [webpack_output](./webpack_output). You can also load the relevant html files under `html/`. 