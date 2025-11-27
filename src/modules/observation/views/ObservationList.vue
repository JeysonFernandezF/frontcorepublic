<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

import IconEye from '@/components/icons/IconEye.vue';
import TopSection from '@/components/layouts/TopSection.vue';
import Table from '@/components/table/Table.vue';
import TableButton from '@/components/table/TableButton.vue';
import IconDelete from '@/components/icons/IconDelete.vue';
import Tooltip from '@/components/generals/Tooltip.vue';
import { useObservations } from '../composables/useObservations';
import { computed, ref } from 'vue';
import dayjs from 'dayjs';
import { useObservationDelete } from '../composables/useObservationDelete';
import DeleteModal from '../components/modals/DeleteModal.vue';
import type { Observation } from '@/types/observation/observation';
import { useModal } from '@/composables/useModal';
import Pagination from '@/components/table/Pagination.vue';

const router = useRouter();
const route = useRoute();

const prcId = computed(()=> route.params?.id ?? null);

const {openModal, closeModal, isModalOpen } = useModal();
const {observationList, loadingObservation, pagination, prevPage, nextPage, otherPage} = useObservations(Number(route.params.id));
const {deleteLoading,   deleteConfirm, deleteObservation}      = useObservationDelete();

const columns = [
  { key: "id", label: "ID" },
  { key: "user", label: "Observador" },
  { key: "people_observed", label: "Personas observadas", center:true },
  { key: "observed_at", label: "Fecha" },
];

const rows = computed(() => {
  return observationList.value.map(observation => ({
    ...observation,
    user: observation.user.name,
    observed_at: dayjs(observation.observed_at).format('DD-MM-YYYY')
  }));
});

const observationSelected = ref<Observation | null>(null);

const openDeleteModal = (row:Observation) => {
  observationSelected.value = row
  openModal('modal-delete-observation')
}
const confirmDeleteTemplate = (id:number) => {
  if(deleteLoading.value) return;
  deleteObservation(id);
}

</script>
<template>
  <section>
    <section>
      <TopSection title="Observaciones" :button="false" :buttonBack="true" :goRoute="{name:'prc-view',params:{id:prcId}}" />
      <Table :columns="columns" :rows="rows" :actions="true" :loading="loadingObservation">
        <template v-slot:actions="{ row }">
          <Tooltip>
            <TableButton @click="router.push({name:'observation-view',params:{id:route.params.id,idObservation:row.id}})"><IconEye /></TableButton>
            <template #content>
              Ver
            </template>
          </Tooltip>
          <Tooltip>
            <TableButton @click="openDeleteModal(row as Observation)"><IconDelete /></TableButton>
            <template #content>
              Eliminar
            </template>
          </Tooltip>
        </template>
      </Table>
      <Pagination :pagination="pagination" @prevPage="prevPage" @nextPage="nextPage" @otherPage="otherPage" />
    </section>
    <DeleteModal
      v-if="observationSelected"
      @close="closeModal('modal-delete-observation')"
      @confirmDelete="confirmDeleteTemplate"
      :isOpen="isModalOpen('modal-delete-observation')"
      :data="observationSelected"
    />
  </section>
</template>


