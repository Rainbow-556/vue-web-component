<template>
  <div class="common-view1-root">
    common-view1
    <div class="msg">props.msgText: {{ msgText }}</div>
    <div>provideVal: {{ provideVal }}</div>
    <sl-button variant="primary" @click="onClick">按钮</sl-button>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, inject } from 'vue';
import { add } from '../../utils/counter.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

defineOptions({
  name: 'CommonView1'
});
const props = defineProps({
  msgText: String
});
const emit = defineEmits(['btn-click', 'update:msgText']);

const provideVal = inject('provideVal');

onMounted(() => {
  console.log('common-view1 onMounted');
});
defineExpose({
  getCount() {
    return ++count.value;
  }
});

const count = ref(0);

watch(
  () => props.msgText,
  (newVal, oldVal) => {
    console.log('common-view1 watch props.msgText changed', newVal, oldVal);
  }
);

function onClick() {
  console.log('commonView1 counter.add()', add());
}
</script>

<style scoped lang="scss">
.common-view1-root {
  background-color: pink;
  margin-bottom: 10px;
  .msg {
    color: red;
  }
}
</style>
