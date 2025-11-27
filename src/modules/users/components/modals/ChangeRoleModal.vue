<template>
  <Modal :is-open="isOpen" @close="closeModal">
    <div class="content">
      <h1 class="title">Modificar Rol</h1>
      <form class="form-prc">
        <div class="input-section">
          <InputLayout label="Rol">
            <InputSelect
              v-model="newRole"
              :options="roles"
            />
          </InputLayout>
        </div>
    </form>
      <div class="buttons-modal">
        <Button :loading="loading" @click="closeModal" type="cancel" size="md">Cancelar</Button>
        <Button :loading="loading" @click="changeRole" type="primary" size="md">Sí, modificar</Button>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import Button from '@/components/buttons/Button.vue';
import InputLayout from '@/components/form/InputLayout.vue';
import InputSelect from '@/components/form/InputSelect.vue';
import Modal from '@/layouts/components/Modal.vue';

import type { SelectOption } from '@/types/select';
import type { ChangeRole, User } from '@/types/user';
import { defineProps, defineEmits, ref, watch, onMounted } from 'vue';


const props = defineProps<{
  isOpen: boolean;
  data: User;
  roles: SelectOption[];
  loading: boolean;
}>();


const newRole = ref<number>(props.data.role.id);

const emit = defineEmits(['close', 'confirm-edit']);

const closeModal = () => {
  emit('close');
};

const changeRole = () => {
  const nameRole = props.roles.filter(role => role.value == newRole.value).map(role=> role.label);
  emit('confirm-edit', {id:props.data.id, roles: nameRole} as ChangeRole);
};

watch(
  () => props.data,
  (newVal) => {
    if (newVal) {
      newRole.value = newVal.role.id;
    }
  },
);
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
