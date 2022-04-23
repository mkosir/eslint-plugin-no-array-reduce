import { defineConfig } from 'tsup';

const tsupConfig = defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  minify: true,
  clean: true,
  tsconfig: 'tsconfig.prod.json',
});

// eslint-disable-next-line
export default tsupConfig;
