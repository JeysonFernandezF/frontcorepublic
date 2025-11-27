import { default } from '../../modules/landing/views/HomePage.vue';

<script setup lang="ts">

defineProps({
  first:{
    type:Boolean,
    default:false,
  },
  only:{
    type:Boolean,
    default:false,
  },
  last:{
    type:Boolean,
    default:false,
  },
})

</script>

<template>
  <button
  :class="['table-button',
    {
      'first-button':first,
      'only-button':only,
      'last-button':last
    }
  ]"


  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>

.table-button{
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5px 0px;


  cursor: pointer;


  ::v-deep(svg) {
    max-height: 20px !important;
  }
}

</style>
