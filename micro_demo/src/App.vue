<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { registerMicroApps, start } from 'qiankun'
import microApps from '@/config/micro-apps'

const apps = computed(() => microApps.map((app:any) => ({
  ...app,
  entry: app.entry['development'],
  props: {
    // mainAppRouter,
    // mainAppStore,
  },
})))

console.log(apps.value)

registerMicroApps(apps.value)

onMounted(() => {
  start()
})
</script>

<template>
  <div id="micro-app-container" />
  <router-view></router-view>
</template>
