<template>
    <div :class="{'has-logo':showLogo}" :style="{ backgroundColor: sideTheme === 'theme-dark' ? variables.menuBackground : variables.menuLightBackground }">
        <Logo/>
    </div>
</template>
<script setup>
import useSettingsStore from '@/store/modules/settings'
// variables css
import variables from '@/assets/styles/variables.module.scss'
import Logo from './Logo'
const settingsStore = useSettingsStore()

//是否展示Logo
const showLogo = computed(() => settingsStore.sidebarLogo);
// 侧边栏主题
const sideTheme = computed(() => settingsStore.sideTheme);
</script>

