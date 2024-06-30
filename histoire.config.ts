import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  setupFile: './histoire.setup.ts',
  plugins: [HstVue()],
  routerMode: 'hash',
  outDir: 'docs',
  vite: {
    base: process.env.HISTOIRE_BASE || '/',
  },
  defaultStoryProps: {
    autoPropsDisabled: true,
  },
})
