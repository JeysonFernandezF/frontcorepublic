<script setup lang="ts">
import { ref } from 'vue';
import InputSwitch from './InputSwitch.vue';

const props = defineProps({
  label: {
    type:String,
    default: "Label"
  }
})


const activeInput = ref<boolean>(false);

</script>

<template>
  <div class="input-layout">
    <div class="flex gap-2">
      <label class="switch-container">
        <input
          type="checkbox"
          v-model="activeInput"
          role="switch"
        />
        <span class="slider round"></span>
      </label>
      <label for="">{{ label }}</label>
    </div>
    <slot :active="activeInput"></slot>
  </div>
</template>
