<template>
  <!-- 给整个app动态绑定样式 -->
  <div :class="classObj" class="app-wrapper" :style="{'--current-color':theme}">
  
    <div v-if="device==='mobile' && sidebar.opened" class="drawer-bg"></div>
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

//sidebar等部分是否折叠以及设备信息
const classObj = computed(() => ({
  hideSidebar: !sidebar.value.opened,
  openSidebar: sidebar.value.opened,
  withoutAnimation: sidebar.value.withoutAnimation,
  mobile: device.value === 'mobile'
}))
// class
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixin.scss";
@import "@/assets/styles/variables.module.scss";
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
</style>
