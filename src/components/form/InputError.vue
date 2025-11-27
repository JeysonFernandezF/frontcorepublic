<script setup lang="ts">
import '@/assets/styles/form/input.scss'

const props = defineProps({
  text: {
    type: String,
    default:true
  },
});
</script>
<template>

  <p class="text-error">*{{text}}</p>

</template>

