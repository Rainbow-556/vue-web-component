<template>
  <div class="view2-root">
    view2
    <div class="msg">props.msg: {{ msg }}</div>
    <div>computedValue: {{ computedValue }}</div>
    <button @click="onClick">count is: {{ count }}</button>
    <button @click="onUpdateMsgClick">更新props.msg</button>
    <slot name="name">具名插槽</slot>
    <slot>默认插槽</slot>
    <sl-button variant="primary">按钮</sl-button>
    <sl-input maxlength="255" clearable placeholder="输入框" v-model="qrCode"></sl-input>
    <sl-qr-code :value="qrCode"></sl-qr-code>
    <CommonView1 ref="commonView1" :msg="msg"></CommonView1>
  </div>
</template>

<script setup>
// import '../shoelace.js';
import { ref, computed, watch, onMounted } from 'vue';
import dayjs from 'dayjs';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/qr-code/qr-code.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import CommonView1 from '../common/commonView1/index.vue';

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

const commonView1 = ref();

function onClick() {
  count.value++;
  emit('btn-click', count.value);
  console.log('common-view1 getCount()', commonView1.value.getCount());
}

let i = 0;
function onUpdateMsgClick() {
  emit('update:msg', 'msg' + i++);
}
</script>

<style lang="scss">
.view2-root {
  background-color: gray;
  margin-bottom: 10px;
  .msg {
    color: blue;
  }
}
</style>
