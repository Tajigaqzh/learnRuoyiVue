<template>
  <div
    :class="{ 'has-logo': showLogo }"
    :style="{
      backgroundColor:
        sideTheme === 'theme-dark'
          ? variables.menuBackground
          : variables.menuLightBackground,
    }"
  >
    <Logo v-if="!showLogo" :collapse="isCollapse" />
    <!-- logo props：是否展示，是否折叠-->
    <el-scrollbar :class="sideTheme" wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="
          sideTheme === 'theme-dark'
            ? variables.menuBackground
            : variables.menuLightBackground
        "
        :text-color="
          sideTheme === 'theme-dark' ? variables.menuColor : variables.menuLightColor
        "
        :unique-opened="true"
        :active-text-color="theme"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="(route, index) in sidebarRouters"
          :key="route.path + index"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script setup>
import useSettingsStore from "@/store/modules/settings";
import useAppStore from "@/store/modules/app";
import usePermissionStore from '@/store/modules/permission'
// variables css
import variables from "@/assets/styles/variables.module.scss";
import Logo from "./Logo.vue";
import SidebarItem from "./SidebarItem.vue";

const settingsStore = useSettingsStore();
const permissionStore = usePermissionStore()
const appStore = useAppStore();
const route = useRoute();
//是否展示Logo
const showLogo = computed(() => settingsStore.sidebarLogo);
// 侧边栏主题
const sideTheme = computed(() => settingsStore.sideTheme);
//是否折叠logo
const isCollapse = computed(() => appStore.sideBar.opened);
//主题
const theme = computed(() => settingsStore.theme);

const sidebarRouters =  computed(() => permissionStore.sidebarRouters);
// 侧边栏bar
/**
 * 页面加载时默认激活的菜单
 * default-active
 */
const activeMenu = computed(() => {
  const { meta, path } = route;
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});
</script>
