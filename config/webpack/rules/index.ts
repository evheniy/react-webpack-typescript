/* istanbul ignore file */

import * as webpack from 'webpack';

import {
  js,
  ts,
  scss,
  css,
  cssDependencies,
  fonts,
  images,
} from './rules';

const rules: webpack.RuleSetRule[] = [
  js,
  ts,
  scss,
  css,
  cssDependencies,
  fonts,
  images,
];

export default rules;
