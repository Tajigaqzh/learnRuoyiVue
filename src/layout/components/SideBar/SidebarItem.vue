<template>
    <div v-if="!item.hidden">
        <template>
        </template>
    </div>
</template>
<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  isNest: {
    type: Boolean,
    default: false,
  },
  basePath: {
    type: String,
    default: "",
  },
});
</script>
