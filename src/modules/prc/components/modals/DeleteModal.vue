<template>
  <Modal :is-open="isOpen" @close="closeModal">
    <div class="content">
      <h1 class="title">Eliminar PRC</h1>
      <p class="content-text">¿Estás seguro que desea eliminar el PRC: {{ data.name }}?</p>
      <div class="buttons-modal">
        <Button @click="closeModal" type="cancel" size="md">Cancelar</Button>
        <Button @click="deleteTemplate" type="error" size="md">Sí, eliminar</Button>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import Button from '@/components/buttons/Button.vue';
import Modal from '@/layouts/components/Modal.vue';
import type { Prc } from '@/types/prc/prc';
import { defineProps, defineEmits } from 'vue';


const props = defineProps<{
  isOpen: boolean;
  data: Prc;
}>();

const emit = defineEmits(['close', 'confirm-delete']);

const closeModal = () => {
  emit('close');
};

const deleteTemplate = () => {
  emit('confirm-delete', props.data.id);
};
</script>

<style lang="scss" scope >
.content{

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap:20px;

  .title{
    font-size: 28px;
    text-align: center;
  }
  .content-text{
    font-size: 21px;
  }

  .buttons-modal{
    display: flex;
    justify-content: center;
    align-items: center;
    gap:15px;

    margin-top: 10px;
  }
}

</style>
