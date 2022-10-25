<template>
    <div :class="{'has-logo':showLogo}" :style="{ backgroundColor: sideTheme === 'theme-dark' ? variables.menuBackground : variables.menuLightBackground }">
        <Logo v-if="!showLogo" :collapse="isCollapse"/>
        <!-- logo props：是否展示，是否折叠-->
    </div>
</template>
<script setup name="sidebar">
import useSettingsStore from '@/store/modules/settings'
import useAppStore from '@/store/modules/app'
// variables css
import variables from '@/assets/styles/variables.module.scss'
import Logo from './Logo'
const settingsStore = useSettingsStore()
const appStore = useAppStore()
//是否展示Logo
const showLogo = computed(() => settingsStore.sidebarLogo);
// const showLogo = true
// 侧边栏主题
// const sideTheme = computed(() => settingsStore.sideTheme);
const sideTheme = true
//是否折叠logo
const isCollapse = computed(() => appStore.sideBar.opened);
console.log("sidebar page !")
console.log(import.meta.env.VITE_API);

</script>

