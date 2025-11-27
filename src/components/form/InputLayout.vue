<script setup lang="ts">

const props = defineProps({
  label: {
    type:String,
    default: "Label"
  }
})

</script>

<template>
  <div class="input-layout">
    <label for="">{{ label }}</label>
    <slot></slot>
  </div>
</template>
