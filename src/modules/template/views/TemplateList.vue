<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

import type { Template } from '@/types/template/template';

import Tooltip from '@/components/generals/Tooltip.vue';
import TopSection from '@/components/layouts/TopSection.vue';
import Table from '@/components/table/Table.vue';
import TableButton from '@/components/table/TableButton.vue';
import DeleteModal from '../components/modals/DeleteModal.vue';

import { useToast } from '@/composables/useToast';
import { useTemplates } from '../composables/useTemplates';
import { useModal } from '@/composables/useModal';

import IconEye from '@/components/icons/IconEye.vue';
import IconDelete from '@/components/icons/IconDelete.vue';
import IconEdit from '@/components/icons/IconEdit.vue';
import Pagination from '@/components/table/Pagination.vue';


const {showToast} = useToast();
const router = useRouter()

const {templateList,loadingTemplates, pagination, nextPage,prevPage,otherPage, getTemplates,deleteTemplate, deleteConfirm, deleteLoading} = useTemplates();
const {openModal, closeModal, isModalOpen } = useModal();

const columns = [
  { key: "name", label: "Nombre" },
  { key: "uses", label: "Usos",center:true },
  { key: "status", label: "Estado", center:true },
];

const rows = computed(() => {
  return templateList.value.map(template => ({
    ...template
  }));
});


const templateSelected = ref<Template | null>(null);

const openDeleteModal = (row:Template) => {
  templateSelected.value = row
  openModal('modal-delete-template')
}
const confirmDeleteTemplate = (id:number) => {
  if(deleteLoading.value) return;
  deleteTemplate(id);
}

onMounted( () => {
  getTemplates();
})

watch(deleteConfirm,() =>{
  if(deleteConfirm.value) {
    closeModal('modal-delete-template');
    showToast({message:"Plantilla eliminada",type:"success"})
  }
})

</script>
<template>
  <section>
    <section>
      <TopSection title="Lista de plantillas" @click="router.push({name:'templates-new'})" />
      <Table :columns="columns" :rows="rows" :actions="true" :loading="loadingTemplates">
        <template v-slot:actions="{ row }">
          <Tooltip>
            <TableButton @click="router.push({name:'templates-view', params:{id: row.id}})"><IconEye /></TableButton>
            <template #content>
              Ver
            </template>
          </Tooltip>
          <Tooltip>
            <TableButton @click="router.push({name:'templates-edit', params:{id: row.id}})"><IconEdit /></TableButton>
            <template #content>
              Editar
            </template>
          </Tooltip>
          <Tooltip>
            <TableButton @click="openDeleteModal(row as Template)"><IconDelete /></TableButton>
            <template #content>
              Eliminar
            </template>
          </Tooltip>
        </template>
      </Table>
      <Pagination :pagination="pagination" @prevPage="prevPage" @nextPage="nextPage" @otherPage="otherPage" />
    </section>
    <DeleteModal
      v-if="templateSelected"
      @close="closeModal('modal-delete-template')"
      @confirmDelete="confirmDeleteTemplate"
      :isOpen="isModalOpen('modal-delete-template')"
      :data="templateSelected"
    />
  </section>
</template>


