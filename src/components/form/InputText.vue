<script setup lang="ts">
import '@/assets/styles/form/input.scss'

const props = defineProps({
  required: {
    type: Boolean,
    default:false
  },
  type: {
    type:String,
    default:"text"
  },
  placeholder:{
    type: String,
    default: "Ingrese su correo electrónico..."
  },
  active: {
    type:Boolean,
    default:true
  },
  error:{
    type:Boolean,
    default:false
  }
});
const modelValue = defineModel<string>();

</script>
<template>

  <input
    :class="`input ${error ? 'input-error' : ''}`"
    :type="type"
    :placeholder="placeholder"
    :disabled="!active"

    v-model="modelValue"
  />

</template>
