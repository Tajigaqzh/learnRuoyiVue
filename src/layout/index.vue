<template>
  <!-- 给整个app动态绑定样式 -->
  <div :class="classObj" class="app-wrapper" :style="{'--current-color':theme}">
  
    <div v-if="device==='mobile' && sidebar.opened"></div>
  </div>
</template>

<script setup>
import useAppStore from '@/store/modules/app'
import useSettingsStore from '@/store/modules/settings'

const settingsStore = useSettingsStore()

const device = computed(() => useAppStore().device);
//设备
const sidebar = computed(() => useAppStore().sideBar);
// 侧边栏

const theme = computed(() => settingsStore.theme);
//设置app主题

const classObj = computed(() => ({
  hideSidebar: !sidebar.value.opened,
  openSidebar: sidebar.value.opened,
  withoutAnimation: sidebar.value.withoutAnimation,
  mobile: device.value === 'mobile'
}))
// class
</script>

<style scoped lang="less">

</style>
