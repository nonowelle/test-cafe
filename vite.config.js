import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { componentTagger } from 'lovable-tagger'

// Use a factory so we can conditionally import plugins safely
export default defineConfig(async () => {
  const plugins = [vue()]

  // Only include devtools and componentTagger in dev mode
  if (process.env.NODE_ENV === 'development') {
    const { default: vueDevTools } = await import('vite-plugin-vue-devtools')
    plugins.push(vueDevTools())
    plugins.push(componentTagger())
  }

  return {
    plugins,
    server: {
      port: 8080,
      proxy: {
        '/form': 'http://localhost:3000'
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
  }
})