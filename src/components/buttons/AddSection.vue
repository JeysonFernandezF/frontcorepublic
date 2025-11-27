<script setup lang="ts">
import IconAdd from '../icons/IconAdd.vue';

const emit = defineEmits(['add']);

const scrollToBottom = () => {
  setTimeout(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight + 100,
      behavior: 'smooth'
    });
  }, 100);
};
const add = () =>{
  emit('add');
  scrollToBottom();
}
</script>

<template>
  <button @click="add" class="button-new-section">
    <IconAdd />
    Nueva sección
  </button>
</template>

<style lang="scss" scoped >
@use "../../assets/styles/global/colors.scss" as colors;
.button-new-section{
  display: flex;
  align-items: center;
  font-weight: bold;

  height: 36px;
  cursor: pointer;
  gap: 8px;
  padding: 10px;
  border: 2px solid transparent;
  border-radius: 15px;

  transition: all 0.3s ease;
}
.button-new-section:hover{
  border: 2px solid colors.$color-secondary;

}


</style>
