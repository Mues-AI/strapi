import { baseConfig } from '../../../rollup.utils.mjs';

export default baseConfig({
  input: './src/index.tsx',
  outDir: './dist',
  rootDir: './src',
});
