<script setup lang="ts">

import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Details from '../components/view/Details.vue';
import TopSection from '@/components/layouts/TopSection.vue';
import Section from '../components/view/Section.vue';

import { useTemplate } from '../composables/useTemplate';

import IconLoaderPage from '@/components/icons/loader/IconLoaderPage.vue';

const route = useRoute();
const router = useRouter();

const {template, getTemplate} = useTemplate();
const templateId = computed(()=> route.params.id);



onMounted(() => {
  if(Number(templateId.value)){
    getTemplate(Number(templateId.value))
  }
})
</script>

<template>
  <section class="template" v-if="template">
    <TopSection title="Plantilla" text="Editar" @click="router.push({name:'templates-edit',params:{id:templateId}})" />
    <Details :template="template" />
    <template v-for="(section) in template.form_sections" :key="section.id" >
      <Section :section="section" />
    </template>
  </section>
  <section class="flex justify-center items-center" v-else>
    <IconLoaderPage />
  </section>
</template>
