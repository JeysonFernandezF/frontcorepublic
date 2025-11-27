<script setup lang="ts">
import dayjs from 'dayjs';

import { useRouter } from 'vue-router';


import IconEdit from '@/components/icons/IconEdit.vue';
import IconEye from '@/components/icons/IconEye.vue';
import TopSection from '@/components/layouts/TopSection.vue';
import Table from '@/components/table/Table.vue';
import TableButton from '@/components/table/TableButton.vue';
import IconList from '@/components/icons/IconList.vue';
import IconDelete from '@/components/icons/IconDelete.vue';
import Tooltip from '@/components/generals/Tooltip.vue';
import { usePrcs } from '../composables/usePrcs';
import { computed, onMounted, ref, watch } from 'vue';
import DeleteModal from '../components/modals/DeleteModal.vue';
import type { Prc } from '@/types/prc/prc';
import { useModal } from '@/composables/useModal';
import { useToast } from '@/composables/useToast';
import { usePrcForm } from '../composables/usePrcForm';
import Pagination from '@/components/table/Pagination.vue';
import ChangeStatusModal from '../components/modals/ChangeStatusModal.vue';
import usePrcChangeStatus from '../composables/usePrcChangeStatus';
import { STATUS } from '@/utils/enums/StatusEnum';

const {showToast} = useToast();
const {openModal, closeModal, isModalOpen } = useModal();

const router = useRouter();

const {prcList, loadingPrcList,pagination,nextPage,prevPage,otherPage,deleteLoading,deleteConfirm,getPrcs, deletePrc} = usePrcs();
const {resetForm} = usePrcForm();
const {updateLoading,
    updateConfirm,
    handleStatusChange} = usePrcChangeStatus();

const rows = computed(() => {
  return prcList.value.map(prc => ({
    ...prc,
    start_date: dayjs(prc.start_date).format('DD-MM-YYYY')
  }));
});

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Programa registro conductual" },
  { key: "start_date", label: "Fecha inicio" },
  { key: "status", label: "Estado", center:true },
];

onMounted(async ()=> {
  await getPrcs();
})

const pcrSelected = ref<Prc | null>(null);

const openDeleteModal = (row:Prc) => {
  pcrSelected.value = row
  openModal('modal-delete-prc')
}
const confirmDeleteTemplate = (id:number) => {
  if(deleteLoading.value) return;
  deletePrc(id);
}

const newPrc = () => {
  resetForm();
  router.push({name:'prc-new'})
}

const openChangeStatusModal = (row:Prc) => {
  pcrSelected.value = row
  openModal('modal-update-status')
}
const confirmUpdateStatus = () => {
  if(updateLoading.value) return;
  handleStatusChange(pcrSelected.value!.id, STATUS.Terminado);
}

watch(updateConfirm,() =>{
  if(updateConfirm.value) {
    closeModal('modal-update-status');
    showToast({message:"Rol modificado con éxito!",type:"success"})
  }
})

watch(deleteConfirm,() =>{
  if(deleteConfirm.value) {
    closeModal('modal-delete-prc');
    showToast({message:"Prc eliminado",type:"success"})
  }
})
</script>
<template>
  <section>
    <section>
      <TopSection title="Programa de registros conductuales" @click="newPrc()" />
      <Table :columns="columns" :rows="rows" :actions="true" :loading="loadingPrcList">
        <template v-slot:actions="{ row }">
          <Tooltip>
            <TableButton @click="router.push({name:'prc-view',params:{id:row.id}})"><IconEye /></TableButton>
            <template #content>
              Ver
            </template>
          </Tooltip>
          <Tooltip>
            <TableButton @click="router.push({name:'observations-list',params:{id:row.id}})"><IconList/> </TableButton>
            <template #content>
              Observaciones
            </template>
          </Tooltip>
          <!--<Tooltip>
            <TableButton @click="router.push({name:'prc-edit',params:{id:row.id}})"><IconEdit /></TableButton>
            <template #content>
              Editar
            </template>
          </Tooltip>-->
          <Tooltip v-if="row.status !== STATUS.Terminado">
            <TableButton @click="openChangeStatusModal(row as Prc)" :last="true"><IconEdit /></TableButton>
            <template #content>
              Finalizar
            </template>
          </Tooltip>
          <Tooltip>
            <TableButton @click="openDeleteModal(row as Prc)"><IconDelete /></TableButton>
            <template #content>
              Eliminar
            </template>
          </Tooltip>
        </template>
      </Table>
      <Pagination :pagination="pagination" @prevPage="prevPage" @nextPage="nextPage" @otherPage="otherPage" />
    </section>
    <DeleteModal
      v-if="pcrSelected"
      @close="closeModal('modal-delete-prc')"
      @confirmDelete="confirmDeleteTemplate"
      :isOpen="isModalOpen('modal-delete-prc')"
      :data="pcrSelected"
    />
    <ChangeStatusModal
      v-if="pcrSelected"
      @close="closeModal('modal-update-status')"
      @confirmUpdate="confirmUpdateStatus"
      :isOpen="isModalOpen('modal-update-status')"
      :data="pcrSelected"
    />
  </section>
</template>


