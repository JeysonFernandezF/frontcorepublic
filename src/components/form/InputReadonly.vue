<script setup lang="ts">
import '@/assets/styles/form/input.scss'

const props = defineProps({
  name: {
    type:String,
    default:"-"
  }
});
</script>
<template>
  <div class="input flex items-center">
    {{ name }}
  </div>
</template>
