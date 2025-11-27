<script setup lang="ts">
import '@/assets/styles/form/input.scss'
import dayjs from 'dayjs';

const props = defineProps({
  required: {
    type: Boolean,
    default: false
  },
  active:{
    type:Boolean,
    default:true
  },
  error:{
    type:Boolean,
    default:false
  },
  min:{
    type: String,
    default: dayjs().format('YYYY-MM-DD')
  }
});

const modelValue = defineModel<string>();

</script>

<template>
  <input
    :class="`input ${error ? 'input-error' : ''}`"
    type="date"
    v-model="modelValue"
    :min="min"
    :disabled="!active"
  />
</template>
