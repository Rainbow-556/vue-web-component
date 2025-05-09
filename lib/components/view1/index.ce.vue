<template>
  <div class="view1-root">
    view1
    <div>props.msg: {{ msg }}</div>
    <button @click="onClick">count is: {{ count }}</button>
    <sl-button variant="primary">按钮</sl-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import dayjs from 'dayjs';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/qr-code/qr-code.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';

defineOptions({
  name: 'WCView1'
});
const props = defineProps({
  msg: String
});
const emit = defineEmits(['btn-click', 'update:msg']);

const count = ref(0);

function onClick() {
  count.value++;
  emit('btn-click', count.value);
}
</script>

<style scoped>
.view1-root {
  background-color: gray;
  margin-bottom: 10px;
}
</style>
