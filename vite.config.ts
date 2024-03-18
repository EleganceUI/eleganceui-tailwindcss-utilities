import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import packageJson from './package.json'

export default defineConfig({
  plugins: [tsconfigPaths()],
  build: {
    copyPublicDir: false,
    lib: {
      entry: 'src/index.ts',
      name: '@eleganceui/tailwind-utilities',
      formats: ['es', 'umd', 'cjs'],
      fileName: (format: any) => `index.${format}.js`
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)]
    }
  }
})
