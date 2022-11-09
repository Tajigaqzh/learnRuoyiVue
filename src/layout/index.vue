<template>
  <!-- 给整个app动态绑定样式 -->
  <div :class="classObj" class="app-wrapper" :style="{ '--current-color': theme }">
    <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <!-- 侧边栏 -->
    <side-bar v-if="!sidebar.hide" class="sidebar-container" />
    <div class="main-container">
      <div>
        <!-- 导航栏 -->
        <nav-bar />
        <!-- 任务标签 -->
        <tags-view />
      </div>
      <!-- 主体 -->
      <app-main />
      <!-- 设置 -->
      <settings />
    </div>
  </div>
</template>

<script setup>
import useAppStore from "@/store/modules/app";
import useSettingsStore from "@/store/modules/settings";
import { SideBar, NavBar, TagsView, AppMain, Settings } from "./components";
//设置相关
const settingsStore = useSettingsStore();

//设备
const device = computed(() => useAppStore().device);

// 侧边栏
const sidebar = computed(() => useAppStore().sideBar);

//设置app主题
const theme = computed(() => settingsStore.theme);

//sidebar等部分是否折叠以及设备信息
const classObj = computed(() => ({
  hideSidebar: !sidebar.value.opened,
  openSidebar: sidebar.value.opened,
  withoutAnimation: sidebar.value.withoutAnimation,
  mobile: device.value === "mobile",
}));

/**
 * 关闭侧边栏
 */
function handleClickOutside() {
  useAppStore().closeSideBar({ withoutAnimation: false });
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixin.scss";
@import "@/assets/styles/variables.module.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
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
