/* istanbul ignore file */

import * as webpack from 'webpack';

export const postcss: webpack.RuleSetRule = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
  },
};

export const css: webpack.RuleSetRule = {
  loader: 'css-loader',
  options: {
    sourceMap: true,
    importLoaders: 2,
    modules: {
      localIdentName: '[path][name]__[local]--[hash:base64:5]',
    },
  },
};

export const cssVendors: webpack.RuleSetRule = {
  loader: 'css-loader',
  options: {
    sourceMap: true,
  },
};

export const scss: webpack.RuleSetRule = {
  loader: 'sass-loader',
  options: {
    sourceMap: true,
  },
};

export const resolveUrl: webpack.RuleSetRule = {
  loader: 'resolve-url-loader',
};

export const babel: webpack.RuleSetRule = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    rootMode: 'upward',
  },
};

export const typescript: webpack.RuleSetRule = {
  loader: 'ts-loader',
};

export const file = (path: string): webpack.RuleSetRule => ({
  loader: 'file-loader',
  options: {
    name: '[name]_[hash].[ext]',
    outputPath: path,
  },
});

export const style: webpack.RuleSetRule = {
  loader: 'style-loader',
};

export const image: webpack.RuleSetRule = {
  loader: 'image-webpack-loader',
  options: {
    mozjpeg: {
      progressive: true,
      quality: 65,
    },
    optipng: {
      enabled: true,
    },
    pngquant: {
      quality: [0.65, 0.90],
      speed: 4,
    },
    gifsicle: {
      enabled: false,
      interlaced: false,
    },
  },
};
