import { defineCustomElement } from 'vue';
import View from './index.vue';

export default function register() {
  const tag = 'wc-view1';

  // Use defineCustomElement to convert the Vue component to a Custom Element class
  const ele = defineCustomElement(View);

  // Check if the custom element is already defined to prevent errors
  if (!customElements.get(tag)) {
    // Register the Custom Element with the browser
    customElements.define(tag, ele);
    console.log(`Custom Element ${tag} registered`);
  } else {
    console.warn(`Custom Element ${tag} already defined`);
  }
}
