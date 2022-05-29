const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {DefinePlugin} = require('webpack')
const {VueLoaderPlugin} = require('vue-loader/dist/index')

module.exports = {
  target: 'web',
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: "js/bundle.js",
    publicPath: 'auto',
    clean: true
  },
  resolve: {
    extensions: ['.js', '.json', '.mjs', '.vue', '.ts', '.jsx', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      'js': path.resolve(__dirname, '../src/js')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // loader: 'css-loader'
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name]-[hash][ext][query]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name]-[hash][ext][query]'
        }
      },
      {
        test: /\.js$/i,
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     // plugins: [
        //     //   '@babel/plugin-transform-arrow-functions',
        //     //   '@babel/plugin-transform-block-scoping'
        //     // ]
        //     presets: [
        //       '@babel/preset-env'
        //     ]
        //   }
        // },
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: '哈哈哈哈'
    }),
    new DefinePlugin({
      BASE_URL: '"./"',
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new VueLoaderPlugin()
  ]
}
