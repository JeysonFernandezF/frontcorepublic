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

  padding: 10px 12px;

  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  cursor: pointer;


  ::v-deep(svg) {
    max-height: 16px !important;
  }
}

.table-button:hover{
  background-color: rgba(244, 244, 244,0.8);
}

.first-button {
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
}

.only-button {
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

.last-button {
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}

.table-button:not(.last-button):not(.last-button) {
  position: relative;
}

.table-button:not(.last-button)::after {
  content: "";
  position: absolute;
  right: 0;
  top: 25%;
  bottom: 25%;
  width: 1px;
  background: rgba(0, 0, 0, 0.2);
}



</style>
