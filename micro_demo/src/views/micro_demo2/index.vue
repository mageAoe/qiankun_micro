<template>
    <div>
        <div id="micro-demo3"></div>
    </div>
</template>

<script setup lang="ts">
import { shallowRef,ref,onActivated, onMounted } from 'vue'
import { loadMicroApp } from 'qiankun'

const initProps = ref({
  name: '123',
  value: '1213131'
})
const microApp = shallowRef()

const loadApp = () => {
  microApp.value = loadMicroApp({
    name: 'micro-demo3',
    entry: 'http://192.168.1.22:6663',
    container: '#micro-demo3',
    props: initProps.value,
  })
}

onMounted(() => {
  loadApp()
  if (microApp.value?.update) {
    microApp.value.update(initProps.value)
  }
})

// 开启keep-alive

// onActivated(() => {
//   loadApp()
//   if (microApp.value?.update) {
//     microApp.value.update(initProps.value)
//   }
// })

</script>

<style scoped>

</style>