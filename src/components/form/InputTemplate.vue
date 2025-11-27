
<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  required: {
    type: Boolean,
    default:true
  },
  placeholder:{
    type: String,
    default: "Ingrese su correo electrónico..."
  },
  error:{
    type: Boolean,
    default: false
  },
  weight:{
    type:String,
    validator: (value: string) => ['bold','regular'].includes(value),
    default:'regular'
  },
  size: {
    type:String,
    validator: (value: string) => ['sm','md', 'lg'].includes(value),
    default:'sm'
  },
  padding: {
    type:Boolean,
    default:false
  }

});
const modelValue = defineModel<string>();

const sizeMap: Record<string, string> = {
  sm: '16px',
  lg: '24px'
};

const fontSize = computed(() => {
  return sizeMap[props.size] || '16px';
});

const weightMap: Record<string, string> = {
  regular: '500',
  bold: 'bold'
};

const fontWeight = computed(() => {
  return weightMap[props.weight];
})

const initialPadding= computed(() => {
  return props.padding ? '20px': '0px';
})
</script>
<template>

  <input
    type="text"
    :placeholder="placeholder"
    :required="required"
    :class="{'input-template-error':error}"
    v-model="modelValue"
  />

</template>

<style lang="scss" scoped>
input {
  height: 20px;
  font-size: v-bind(fontSize);
  font-weight: v-bind(fontWeight);
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: v-bind(initialPadding);
  border-color: transparent;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  transition: all 0.3s ease;
  margin: auto;
  width: 100%;
}
input:hover {
  border-color: #ccc;
  padding-left: 20px;
}
/* Combina :focus y :active para una regla más limpia */
input:focus,
input:active {
  padding-left: 20px;
  border-color: #ccc;
  outline: none;
}

.input-template-error{
  border: 1px solid #e53505;
  padding-left: 20px;
}
</style>
