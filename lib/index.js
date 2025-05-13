// shoelace的css独立成index.css
import { initShoelace } from './shoelace.js';
export { default as registerView1 } from './components/view1/index.js';
export { default as registerView2 } from './components/view2/index.js';
export * from './service.js';

initShoelace();
