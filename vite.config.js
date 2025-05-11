import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      // features: {
      //   // 所有的.vue文件都被视为自定义元素，现实情况是只在entry中定义的入口组件才需被视为自定义元素，所以显示的通过默认以特定文件名(.ce.vue)的方式来标识该组件是否被视为自定义元素
      //   customElement: true
      // },
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
      name: 'VueWebComponents',
      formats: ['es'],
      // 使用对象定义多个入口
      entry: {
        'wc-view1': 'lib/components/view1/index.js',
        'wc-view2': 'lib/components/view2/index.js'
      }
    },
    rollupOptions: {
      // 把dependencies中的依赖也打包进去，变成独立可运行的web component，防止与vue2、vue3等框架冲突
      external: ['@shoelace-style/shoelace']
    },
    outDir: 'dist',
    emptyOutDir: true,
    copyPublicDir: false
  }
});
