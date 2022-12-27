import * as path from "node:path"
import type { Configuration } from "webpack"

const config: Configuration = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'webpack_output'),
  },
  mode: "development",
  devtool: false
};

export default config