import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      features: {
        // 所有的.vue文件都被视为自定义元素，则会把样式内联到组件的<style>标签中
        customElement: true
      },
      template: {
        compilerOptions: {
          comments: false,
          isCustomElement: tag => /(wc|sl)\-/.test(tag)
        }
      }
    })
  ],
  build: {
    target: 'es2015',
    lib: {
      fileName: 'index',
      formats: ['es'],
      entry: 'lib/index.js'
    },
    rollupOptions: {
      // 把dependencies中的依赖也打包进去，变成独立可运行的web component，防止与vue2、vue3等框架冲突
      external: []
    },
    outDir: 'dist',
    emptyOutDir: true,
    copyPublicDir: false
  }
});
