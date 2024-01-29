<template>
    <div>
        <div  id="micro-demo1"> </div>
    </div>
</template>

<script setup lang="ts">
import { shallowRef,ref,onActivated, onMounted } from 'vue'
import { loadMicroApp } from 'qiankun'

const initProps = ref({})
const microApp = shallowRef()

const loadApp = () => {
  microApp.value = loadMicroApp({
    name: 'micro-demo1',
    entry: 'http://192.168.1.22:6661',
    container: '#micro-demo1',
    props: initProps.value,
  })
}

onMounted(() => {
  loadApp()
  if (microApp.value?.update) {
    microApp.value.update(initProps.value)
  }
})

</script>

<style scoped>

</style>