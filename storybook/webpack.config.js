const path = require("path");
const { resolveAbsolute } = require("./util");

const atoms = path.resolve(__dirname, "../atoms/");
const molecules = path.resolve(__dirname, "../molecules/");
const organisms = path.resolve(__dirname, "../organisms/");
const ecosystems = path.resolve(__dirname, "../ecosystems/");
const theme = path.resolve(__dirname, "../theme/");

const componentPaths = [
  atoms,
  molecules,
  organisms,
  ecosystems,
  path.resolve(__dirname, "./stories/")
];

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    modules: ["node_modules", resolveAbsolute("./")],
    alias: {
      theme,
      components: path.resolve(__dirname, "../")
    }
  },
  module: {
    rules: [
      {
        test: /\.ts|\.tsx$/,
        loaders: ["babel-loader", "ts-loader"],
        include: componentPaths
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/,
        include: [
          ...componentPaths,
          theme
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg|webm)$/i,
        use: "url-loader"
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/i,
        use: "file-loader"
      }
    ]
  }
}
