const path = require('path');
const webpack = require('webpack');

// O HtmlWebpackPlugin simplifica a criação de arquivos HTML para servir seus pacotes webpack.
const htmlWebpackPlugin = require('html-webpack-plugin');

// Este plugin usa uglify-js para minimizar seu JavaScript.
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');

// Prepare versões compactadas de ativos para servi-los com Content-Encoding.
const CompressionWebpackPlugin = require('compression-webpack-plugin');

// Ele move todos os *.css módulos necessários em blocos de entrada para um arquivo CSS separado. 
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextWebpackPlugin({
  filename: '[name].[contenthash:8].bundle.css',
  disable: false,
});

const minify = {
  collapseWhitespace: true,
  conservativeCollapse: true,
  removeComments: true,
};

const config = {
  entry: {
    form: './app/js/form',
    utils: './app/js/utils',
    confFirebase: './app/js/firebase',
    authFirebase: './app/js/auth',
  }, // Arquivos de entrada
  output: {
    path: path.join(__dirname, 'hosting/public'), // Diretorio de saída
    filename: '[name].[hash:8]bundle.js', // Arquivo de saída
    publicPath: '/', // Informa ao DevServe o diretorio do bundle
  },
  plugins: [
    // eslint-disable-next-line new-cap
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.[hash:8].bundle.js',
      minChunks: 2,
    }),
    // eslint-disable-next-line new-cap
    new htmlWebpackPlugin({
      template: path.join(__dirname, '/', 'index.html'),
      filename: 'index.html',
      chunks: ['form', 'confFirebase', 'commons', 'authFirebase', 'utils'],
      minify,
    }),
    extractSass,
    new UglifyJsWebpackPlugin(),
    new CompressionWebpackPlugin({
      asset: '[path].gz',
    }),
  ],
  module: {
    loaders: [ // ou rules
      {
        loader: 'html-es6-template-loader',
        test: /\.html$/,
        exclude(filePath) {
          return filePath === path.join(__dirname, 'app', 'index.html');
        },
        query: {
          transpile: true,
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          presets: [
            [
              'es2015', {
                modules: false,
              },
            ],
          ], // transpila para um JS mais recente
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(s[ca]ss)$/,
        loader: extractSass.extract({
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
          ],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.(jpe?g|png|gif|svg)/,
        use: [
          {
            loader: 'url-loader',
            query: {
              limit: 10000,
              name: '[name].[hash:8].[ext]',
            },
          },
          { loader: 'image-webpack-loader' },
        ],
      },
    ],
  },
};

// Valida se é desenvolvimento
if (process.env.NODE_ENV === 'development') {
  config.watch = true;
  config.devtool = 'source-map';
} else if (process.env.NODE_ENV === 'hot') {
  config.devtool = 'source-map';
  config.devServer = {
    hot: true, // recebe as atualizações sem recarregar a página
  };
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
