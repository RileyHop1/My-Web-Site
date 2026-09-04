import { defineConfig } from 'vite'
import { fileURLToPath, URL} from 'node:url'
import vue from '@vitejs/plugin-vue'



export default defineConfig({
    root: 'App',
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./App', import.meta.url)),
        },
    },
})