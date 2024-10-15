import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// export default defineConfig({
//   plugins: [vue()],
//   test: {
//     globals: true,
//     environment: 'happy-dom',
//     server: {
//       deps: {
//         inline: ['vuetify']
//       }
//     }
//   },
//   resolve: {
//     alias: {
//       '@': `${__dirname}/`
//     }
//   }
// })

// import AutoImport from 'unplugin-auto-import/vite'

// export default defineConfig({
//   test: {
//     globals: true,
//     environment: 'happy-dom',
//     server: {
//       deps: {
//         inline: ['vuetify']
//       }
//     }
//   },
//   resolve: {
//     alias: {
//       '@': `${__dirname}/`
//     }
//   },
//   plugins: [
//     AutoImport({
//       imports: [
//         'vue'
//         // could add 'vue-router' or 'vitest', whatever else you need.
//       ]
//     })
//   ]
// })

import { defineVitestConfig } from '@nuxt/test-utils/config'
export default defineVitestConfig({
  test: {
    environment: 'nuxt'
  }
})
