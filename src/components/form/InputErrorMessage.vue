import { default } from '../../common/views/NotFound.vue';
<script setup lang="ts">

defineProps({
  error: {
    type: String,
    default:""
  }
});

</script>
<template>

  <p v-if="error != ''">{{ error }}</p>

</template>

<style lang="scss" scoped>
@use "../../assets/styles/global/colors.scss" as colors;

p{
  max-width: 290px;
  font-size: 14px;
  color:  #{colors.$color-error};
}

</style>
