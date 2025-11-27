<script setup lang="ts">
import TopSection from '@/components/layouts/TopSection.vue';

import { useRoute, useRouter } from 'vue-router';
import { computed, onMounted, watch } from 'vue';
import IconLoaderPage from '@/components/icons/loader/IconLoaderPage.vue';
import Details from '../components/Details.vue';
import { useObservationForm } from '../composables/useObservationForm';
import { useObservation } from '../composables/useObservation';

const router = useRouter();
const route = useRoute();

const {observation, getObservation} = useObservation();
const {form, getFormByObservation} = useObservationForm();

const prcId = computed(()=> route.params?.id ?? null);
const observationId = computed(()=> route.params?.idObservation ?? null);

watch(observation,()=> {
  if(observation.value){
    getFormByObservation(observation.value.id);
  }
})


onMounted(()=> {
  if(observationId.value){
    getObservation(Number(observationId.value));
  }
})
</script>
<template>
  <section>
    <section>
      <TopSection title="Observación"
      :button="false" :buttonBack="true" :goRoute="{name:'observations-list',params:{id:prcId}}" />
    </section>
    <section v-if="observation && form" >
      <Details
        :observation="observation"
        :form="form"
      />
    </section>
    <section class="flex justify-center items-center" v-else>
      <IconLoaderPage />
    </section>
  </section>
</template>
