import * as path from "node:path"
import type { Configuration } from "webpack"
import TerserPlugin from "terser-webpack-plugin"

const config: Configuration = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'webpack_output'),
  },
  mode: "production",
  devtool: false,
  optimization: {
      minimize: true,
      usedExports: true,
      sideEffects: false,
  }
};

export default config