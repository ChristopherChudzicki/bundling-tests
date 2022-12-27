import * as path from "node:path"
import type { Configuration } from "webpack"

const config: Configuration = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'webpack_output'),
  },
  mode: "production",
  devtool: false,
  optimization: {
      minimize: false,
      usedExports: true,
  }
};

export default config