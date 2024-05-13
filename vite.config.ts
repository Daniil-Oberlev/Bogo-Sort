import react from '@vitejs/plugin-react-swc'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import { defineConfig } from 'vite'
import vitePluginStylelint from 'vite-plugin-stylelint'

export default defineConfig({
  plugins: [
    react(),
    vitePluginStylelint(),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        cssnano({ preset: 'default' })
      ]
    }
  },
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
  server: {
    hmr: {
      overlay: false
    }
  }
});
