const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/js/main.js`,

  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist/js`,
    // 出力ファイル名
    filename: "main.js"
  },
  
  module: {
    rules: [
      {
        // 拡張子 .js の場合
        test: /\.js$/,
        use: [
          {
            // Babel を利用する
            loader: "babel-loader",
            // Babel のオプションを指定する
            options: {
              presets: [
                // プリセットを指定することで、ES2021 を ES5 に変換
                "@babel/preset-env",
              ],
            },
          },
        ],
      },
    ],
  },
  // ES5(IE11等)向けの指定
  target: ["web", "es5"],

	mode: "production",
  //mode: "development",
  //devtool: false,

  // ライセンスファイルを生成しない
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  },
};