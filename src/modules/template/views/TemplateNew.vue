<script setup lang="ts">
import { reactive, watch } from 'vue';
import { useRouter } from 'vue-router';

import TopSection from '../components/TopSection.vue';
import NewDetails from '../components/NewDetails.vue';
import NewSection from '../components/NewSection.vue';
import IconDelete from '@/components/icons/IconDelete.vue';

import {type Template, type TemplateForm } from '@/types/template/template';

import { useToast } from '@/composables/useToast';
import { useTemplates } from '../composables/useTemplates';
import {useTemplateValidation} from '../composables/validations/useTemplateValidation';
import AddSection from '@/components/buttons/AddSection.vue';
import { createNewSection } from '../helpers/createNewSection';
import { createNewTempleForm } from '../helpers/createNewTempleForm';

const router = useRouter();

const {createSuccess, addTemplate} = useTemplates();
const {validateTemplate} = useTemplateValidation()

const {showToast} = useToast();


const newTemplate =reactive<TemplateForm>(createNewTempleForm());
const addNewSection = () => {
  newTemplate.form_sections.push(createNewSection())
}

const deleteSection = (index:number) => {
  newTemplate.form_sections.splice(index,1);
}

const save = () => {
  if(validateTemplate(newTemplate)) {
    showToast({message:'Algunos campos de la plantilla estan vacíos.',type:'error',duration:3000})
    return;
  }
  addTemplate(newTemplate as Template);
}
watch(createSuccess, () => {
  if(createSuccess.value){
    showToast({message:'Plantilla creada',type:'success',duration:3000})
    router.push({name: 'templates-list'})
  }
})
</script>

<template>
  <section class="template">
    <TopSection title="Nueva plantilla" @save="save" @add-new-section="addNewSection" />
    <NewDetails :newTemplate="newTemplate" />
    <template v-for="(section,index) in newTemplate.form_sections" :key="section.id" >
      <NewSection :section="section">
        <template #delete-section>
          <button @click="deleteSection(index)">
            <IconDelete />
          </button>
        </template>
      </NewSection>
    </template>
    <div class="mx-auto">
      <AddSection @add="addNewSection" />
    </div>
  </section>
</template>
