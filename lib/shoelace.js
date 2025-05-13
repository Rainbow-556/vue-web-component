import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';

export function initShoelace() {
  setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/');
  // 国际化
  const locale = 'zh-cn';
  document.documentElement.lang = locale;
  import(`@shoelace-style/shoelace/dist/translations/zh-cn.js`).catch(e => {
    console.log(`shoelace ${locale} err`, e);
  });
}
