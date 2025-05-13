<template>
  <div class="view2-root">
    view2
    <div class="msg">props.msgText: {{ msgText }}</div>
    <div>computedValue: {{ computedValue }}</div>
    <div>arrayProperty: {{ arrayProperty }}</div>
    <div>objProperty: {{ objProperty }}</div>
    <button @click="onClick">count is: {{ count }}</button>
    <button @click="onUpdateMsgClick">更新props.msgText</button>
    <slot name="name">具名插槽</slot>
    <slot>默认插槽</slot>
    <sl-button variant="primary" @click="dialog.show()">按钮</sl-button>
    <sl-input maxlength="255" clearable placeholder="输入框" v-model="qrCode"></sl-input>
    <sl-qr-code :value="qrCode"></sl-qr-code>
    <CommonView1 ref="commonView1" :msgText="msgText"></CommonView1>
    <sl-dialog ref="dialog" label="Dialog" class="dialog-width" style="--width: 50vw">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <sl-button slot="footer" variant="primary" @click="dialog.hide()">Close</sl-button>
    </sl-dialog>
    <sl-input type="date" placeholder="Date"></sl-input>
    <sl-carousel class="aspect-ratio" navigation pagination style="--aspect-ratio: 3/2">
      <sl-carousel-item>
        <img alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)" src="" />
      </sl-carousel-item>
      <sl-carousel-item>
        <img alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)" src="" />
      </sl-carousel-item>
    </sl-carousel>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, provide } from 'vue';
import dayjs from 'dayjs';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/qr-code/qr-code.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/carousel/carousel.js';
import CommonView1 from '../common/commonView1/index.vue';
import { add } from '../utils/counter.js';
import { service } from '../../service.js';
service.getName();

console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'));
defineOptions({
  name: 'WCView2'
});
const props = defineProps({
  msgText: String,
  objProperty: Object,
  arrayProperty: Array
});
const emit = defineEmits(['btnClick', 'update:msgText']);
onMounted(() => {
  console.log('view2 onMounted');
});
defineExpose({
  getCount() {
    return count.value;
  }
});

const objPros = ref({
  name: 'objPros'
});
const arrayPros = ref(['arrayPros']);

const qrCode = ref();

const count = ref(0);

const computedValue = computed(() => {
  return props.msgText + '-' + count.value;
});

watch(
  () => props.msgText,
  (newVal, oldVal) => {
    console.log('watch props.msgText changed', newVal, oldVal);
  }
);

const commonView1 = ref();

function onClick() {
  count.value++;
  emit('btnClick', count.value);
  console.log('common-view1 getCount()', commonView1.value.getCount());
  console.log('view2 counter.add()', add());
  provideVal.value = 'provideVal' + count.value;
}

let i = 0;
function onUpdateMsgClick() {
  emit('update:msgText', 'msgText' + i++);
}

const provideVal = ref('provideVal');

// 提供数据
provide('provideVal', provideVal);

const dialog = ref();
</script>

<style scoped lang="scss">
.view2-root {
  background-color: gray;
  margin-bottom: 10px;
  .msg {
    color: blue;
  }
}
</style>
