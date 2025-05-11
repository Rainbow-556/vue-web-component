# wc 开发记录

## 样式

- .ce.vue 文件的 style 不需要加 scoped。被 wc 组件引用的公共.vue 文件的 style 需要加 scoped，避免样式冲突
