<template>
  <div class="view2-root">
    view3
    <div>props.msg: {{ msg }}</div>
  </div>
</template>

<script setup>
// import '../shoelace.js';
import { ref, computed, watch, onMounted } from 'vue';

defineOptions({
  name: 'WCView3'
});
const props = defineProps({
  msg: String
});
const emit = defineEmits(['btn-click', 'update:msg']);
onMounted(() => {
  console.log('view3 onMounted');
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
    console.log('view3 watch props.msg changed', newVal, oldVal);
  }
);

function onClick() {
  count.value++;
  emit('btn-click', count.value);
}

let i = 0;
function onUpdateMsgClick() {
  emit('update:msg', 'msg' + i++);
}
</script>

<style scoped>
.view3-root {
  background-color: gray;
  margin-bottom: 10px;
}
</style>
