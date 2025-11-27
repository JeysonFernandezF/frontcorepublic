<script setup lang="ts">

import IconEdit from '@/components/icons/IconEdit.vue';
import IconEye from '@/components/icons/IconEye.vue';
import TopSection from '@/components/layouts/TopSection.vue';
import Table from '@/components/table/Table.vue';
import TableButton from '@/components/table/TableButton.vue';
import { useUsers } from '../composables/useUsers';
import { computed, onMounted, ref, watch } from 'vue';
import ChangeRoleModal from '../components/modals/ChangeRoleModal.vue';
import type { ChangeRole, User } from '@/types/user';
import { useModal } from '@/composables/useModal';
import { useChangeRole } from '../composables/useChangeRole';
import { useToast } from '@/composables/useToast';
import type { SelectOption } from '@/types/select';
import Tooltip from '@/components/generals/Tooltip.vue';
import Pagination from '@/components/table/Pagination.vue';
import useMyUser from '../composables/useMyUser';

const {showToast} = useToast();
const {userList, pagination,prevPage, nextPage, otherPage, loading, getUsers} = useUsers();
const {roleList,loading: changeLoading, loadingConfirm, getRoles, handleRoleChange} = useChangeRole();
const {openModal, closeModal, isModalOpen } = useModal();
const {user} = useMyUser();

onMounted(()=> {getUsers(); getRoles()})

const columns = [
  { key: "name", label: "Nombre de usuario" },
  { key: "rol", label: "Rol" },
];

const rows = computed(() => {
  return userList.value.map(user => ({
    ...user,
    rol: user.role.name

  }));
});

const rolesOption = computed<SelectOption[]>(()=>{
  return roleList.value.map(role => ({
    value: role.id,
    label: role.name
  }));
})



const userSelected = ref<User|null>(null);
const openChangeRoleModal = (row:User) => {
  userSelected.value = row
  openModal('modal-update-role')
}
const confirmChangeRoleTemplate = (data:ChangeRole) => {
  if(changeLoading.value) return;
  handleRoleChange(data.id,data.roles);
}

watch(loadingConfirm,() =>{
  if(loadingConfirm.value) {
    closeModal('modal-update-role');
    showToast({message:"Rol modificado con éxito!",type:"success"})
  }
})
</script>
<template>
  <section>
      <TopSection title="Usuarios" :button="false" />
      <section>
        <Table :columns="columns" :rows="rows" :actions="true" :loading="loading">
          <template v-slot:actions="{ row }">
            <Tooltip v-if="user && row.id != user.id">
              <TableButton @click="openChangeRoleModal(row as User)" :last="true"><IconEdit /></TableButton>
              <template #content>
                Editar rol
              </template>
            </Tooltip>
          </template>
        </Table>
        <Pagination :pagination="pagination" @prevPage="prevPage" @nextPage="nextPage" @otherPage="otherPage" />
      </section>
      <ChangeRoleModal
        v-if="userSelected"
        @close="closeModal('modal-update-role')"
        @confirmEdit="confirmChangeRoleTemplate"
        :isOpen="isModalOpen('modal-update-role')"
        :data="userSelected"
        :roles="rolesOption"
        :loading="changeLoading"
      />
  </section>
</template>


