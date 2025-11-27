<script setup lang="ts">
import '@/assets/styles/global/buttons.scss'

import { computed, type PropType } from 'vue';




const props = defineProps({
  type:{
    type:String,
    default:'primary'
  },
  typeButton: {
    type: String as PropType<'submit' | 'reset' | 'button'>,
    default: 'submit'
  },
  size:{
    type:String,
    default:'lg'
  },
  loading:{
    type:Boolean,
    default:false
  }
})

const classButton = computed(()=>{
  if(props.type == 'primary')   return 'button-primary';
  if(props.type == 'secondary') return 'button-secondary';
  if(props.type == 'optional') return 'button-optional';
  if(props.type == 'error') return 'button-error';
  if(props.type == 'cancel') return 'button-cancel';
  if(props.type == 'login') return 'button-login';
})

const size = computed(() =>{
  if(props.size == 'sm')  return 'button-sm';
  if(props.size == 'md')  return 'button-md';
  return 'button-lg'
})

</script>
<template>
  <button :disabled="loading" :type="typeButton" :class="['button',classButton,size]">
    <slot></slot>
  </button>
</template>


