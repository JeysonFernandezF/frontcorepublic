<script setup lang="ts">
import '@/assets/styles/form/switch.scss'

const props = defineProps({
  label: {
    type:String,
    default: "Label"
  }
})
const modelValue = defineModel<boolean>({
  default: false
});

</script>

<template>
  <div class="input-layout">
    <div class="flex gap-2">
      <label class="switch-container">
        <input
          type="checkbox"
          v-model="modelValue"
          role="switch"
        />
        <span class="slider round"></span>
      </label>
      <label for="">{{ label }}</label>
    </div>
  </div>
</template>
