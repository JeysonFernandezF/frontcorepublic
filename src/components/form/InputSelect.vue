<script setup lang="ts">
import '@/assets/styles/form/select.scss'
import { computed } from 'vue';
import type { SelectOption } from '@/types/select';
import IconSelect from '../icons/IconSelect.vue';


const props = defineProps({
  options: {
    type: Array as () => SelectOption[],
    required: true,
    validator: (value: any[]) => {
      return value.every(option => 'value' in option && 'label' in option);
    }
  },
  active:{
    type:Boolean,
    default:true
  },
  error:{
    type: Boolean,
    default: false
  }
});

const modelValue = defineModel<string | number>();

const selectedLabel = computed(() => {
  const selected = props.options.find(opt => opt.value === modelValue.value);
  // Devuelve la etiqueta de la opción seleccionada o un texto de marcador de posición
  return selected ? selected.label : 'Selecciona una opción...';
});
</script>

<template>
   <div class="custom-select-container">
    <select   :disabled="!active" v-model="modelValue">
      <option value="" disabled selected>Selecciona una opción...</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <div :class="`styled-select-display ${error ? 'select-error' : ''}`">
      <span>{{ selectedLabel }}</span>
      <span class="select-icon"><IconSelect /> </span>
    </div>
  </div>
</template>

