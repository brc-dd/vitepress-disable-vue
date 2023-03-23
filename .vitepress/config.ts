import { defineConfig } from 'vitepress'

export default defineConfig({
  markdown: {
    config: (md) => {
      const render = md.render
      md.render = function (src, env) {
        return `<div v-pre>${render.call(this, src, env)}</div>`
      }
    }
  }
})
