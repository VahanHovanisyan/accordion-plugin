// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');

// module.exports = {
//   mode: 'production',
//   optimization: {
//     minimizer: [CssMinimizerWebpackPlugin({})]
//   },
//   entry:{
//     main: './src/index.js'
//   },
//   output:{
//     filename: 'accordion.min.js'
//   } ,
//   module: {
//     rules: [
//       {
//         test: /\.m?js$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: "babel-loader",
//       },
//       {
//         test: /\.css$/i,
//         use: [
//           MiniCssExtractPlugin.loader,
//           'css-loader',
//         ],
//       },
//     ]
//   },
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: 'accordion.min.css'
//     })
//   ]
// }

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'accordion.min.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
      },
    ],
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'accordion.min.css'
  })],
};