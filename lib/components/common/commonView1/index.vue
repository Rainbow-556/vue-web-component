<template>
  <div class="common-view1-root">
    common-view1
    <div class="msg">props.msg: {{ msg }}</div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';

defineOptions({
  name: 'CommonView1'
});
const props = defineProps({
  msg: String
});
const emit = defineEmits(['btn-click', 'update:msg']);
onMounted(() => {
  console.log('common-view1 onMounted');
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
    console.log('common-view1 watch props.msg changed', newVal, oldVal);
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

<style scoped lang="scss">
.common-view1-root {
  background-color: pink;
  margin-bottom: 10px;
  .msg {
    color: red;
  }
}
</style>
