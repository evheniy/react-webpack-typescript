/* istanbul ignore file */

const devtool = process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-cheap-module-source-map';

export default devtool;
