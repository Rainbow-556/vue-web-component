# web component 开发记录

## attribute 和 property

- attribute 是 HTML 元素的属性，property 是 JavaScript 对象的属性
- attribute 是组件的“外部接口”，只支持 string、boolean 等基本类型，直接在标签上设置即可，且是响应式的
- property 是组件的“内部状态”，支持任意类型，需要拿到组件 dom 后再设置，组件内部对外 expose 对应方法，组件外部可以通过组件实例调用这些方法来设置 property

## props

在 wc 内部通过 props 声明，支持所有类型

```js
const props = defineProps({
  msgText: String,
  objProperty: Object,
  arrayProperty: Array
});
```

### vue

- vue2/3 按照以下方式使用，响应式是完全保留的

```html
<wc-view :msgText.prop="msgText" :objProperty.prop="objProperty"></wc-view>
```

```js
// vue3 更新
msgText.value = 'new value';
objProperty.value = { a: 1 };
```

### react 待测试

- react 中使用，响应式是完全保留的

```html
<wc-view msgText="{msgText}" objProperty="{objProperty}"></wc-view>
```

```js
// 更新
setMsgText('new value');
setObjProperty({ a: 1 });
```

## 事件

- 组件内部可以通过 emit 方法触发事件，驼峰和中划线都支持，建议统一使用小驼峰，在 vue 中使用@submitBtnClick="handleClick"，在 react 中使用 onSubmitBtnClick={handleClick}

## 样式

- vite 中设置让所有.vue 文件都认为是自定义元素，.vue 文件的 style 需要加 scoped，避免样式冲突

## 插槽

- 支持默认、具名插槽，不支持作用域插槽

## 打包

- 使用 vite 多入口打包，对外提供的组件则为多入口，这些组件的公共依赖会被提取出来，形成一个单独的 js
