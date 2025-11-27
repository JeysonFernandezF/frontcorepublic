<script setup lang="ts">
import TopSection from '@/components/layouts/TopSection.vue';

import { useRoute, useRouter } from 'vue-router';
import { usePrc } from '../composables/usePrc';
import { computed, onMounted } from 'vue';
import IconLoaderPage from '@/components/icons/loader/IconLoaderPage.vue';
import Details from '../components/Details.vue';

const router = useRouter();
const route = useRoute();

const {prc,loadingPrc, getPrcById} = usePrc();

const prcId = computed(()=> route.params?.id ?? null);

onMounted(()=> {
  console.log(prcId.value)
  if(prcId.value){
    getPrcById(Number(prcId.value));
  }
})
</script>
<template>
  <section v-if="prc && !loadingPrc">
    <TopSection title="Programa de registro conductual"
    secondText="Observaciones"
    :button="false"
    :secondButton="true"
    @click="router.push({name:'prc-edit',params:{id:route.params?.id}})"
    @second-click="router.push({name:'observations-list',params:{id:route.params?.id}})" />
    <Details :prc="prc" />
  </section>
  <section class="flex justify-center items-center" v-else>
    <IconLoaderPage />
  </section>
</template>
