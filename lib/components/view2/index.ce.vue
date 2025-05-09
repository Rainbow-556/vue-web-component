<template>
  <div class="view2-root">
    view2
    <div>props.msg: {{ msg }}</div>
    <div>computedValue: {{ computedValue }}</div>
    <button @click="onClick">count is: {{ count }}</button>
    <button @click="onUpdateMsgClick">更新props.msg</button>
    <slot name="name">具名插槽</slot>
    <slot>默认插槽</slot>
    <sl-button variant="primary">按钮</sl-button>
    <sl-input maxlength="255" clearable placeholder="输入框" v-model="qrCode"></sl-input>
    <sl-qr-code :value="qrCode"></sl-qr-code>
    <WCView3 ref="view3" :msg="msg"></WCView3>
  </div>
</template>

<script setup>
// import '../shoelace.js';
import { ref, computed, watch, onMounted } from 'vue';
import dayjs from 'dayjs';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/qr-code/qr-code.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import WCView3 from '../view3/index.vue';

console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'));
defineOptions({
  name: 'WCView2'
});
const props = defineProps({
  msg: String
});
const emit = defineEmits(['btn-click', 'update:msg']);
onMounted(() => {
  console.log('view2 onMounted');
});
defineExpose({
  getCount() {
    return count.value;
  }
});

const qrCode = ref();

const count = ref(0);

const computedValue = computed(() => {
  return props.msg + '-' + count.value;
});

watch(
  () => props.msg,
  (newVal, oldVal) => {
    console.log('watch props.msg changed', newVal, oldVal);
  }
);

const view3 = ref();

function onClick() {
  count.value++;
  emit('btn-click', count.value);
  console.log('view3.value.getCount()', view3.value.getCount());
}

let i = 0;
function onUpdateMsgClick() {
  emit('update:msg', 'msg' + i++);
}
</script>

<style scoped>
.view2-root {
  background-color: gray;
  margin-bottom: 10px;
}
</style>
