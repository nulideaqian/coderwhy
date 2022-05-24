const path = equire('path')

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, './build'),
    filename: "bundle.js"
  }
}
