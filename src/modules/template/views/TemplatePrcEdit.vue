<script setup lang="ts">
import { computed, onMounted, reactive,ref,watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import { type TemplateForm } from '@/types/template/template';

import { useTemplatePrc } from '../../../composables/prc-template/useTemplatePrc';
import { useTemplate } from '../composables/useTemplate';
import { useToast } from '@/composables/useToast';

import TopSection from '../components/TopSection.vue';
import NewSection from '../components/NewSection.vue';
import NewDetails from '../components/NewDetails.vue';

import IconDelete from '@/components/icons/IconDelete.vue';
import IconLoaderPage from '@/components/icons/loader/IconLoaderPage.vue';
import { useTemplateValidation } from '../composables/validations/useTemplateValidation';
import AddSection from '@/components/buttons/AddSection.vue';
import { createNewSection } from '../helpers/createNewSection';
import { createNewTempleForm } from '../helpers/createNewTempleForm';


const route = useRoute();
const router = useRouter();

const {template: oldTemplate, getTemplate} = useTemplate();
const {template: newtemplatePrc, editTemplate, checKTemplateId, setTemplateId ,editSuccess } = useTemplatePrc();
const {validateTemplate} = useTemplateValidation()

const {showToast} = useToast();
const templateId = computed(()=> route.params.id);
const template = ref<TemplateForm|null>(null);

onMounted(async () => {
  if(Number(templateId.value)){
    if(!checKTemplateId(Number(templateId.value))) {

      template.value = newtemplatePrc.value ? newtemplatePrc.value : null;
      return;
    }
    await getTemplate(Number(templateId.value))
    setTemplateId(Number(templateId.value));
    template.value = oldTemplate.value ? oldTemplate.value as TemplateForm : null;
  }
})

watch(template, (newVal) => {
  if(newVal) {
    newTemplate.id = newVal.id
    newTemplate.name = newVal.name
    newTemplate.description = newVal.description
    newTemplate.form_sections = newVal.form_sections
  }
})

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
  editTemplate(newTemplate as TemplateForm);
}
watch(editSuccess, () => {
  if(editSuccess.value){
    showToast({message:'Plantilla editada con éxito!',type:'success',duration:3000})
    router.push({name:'prc-new'});
  }
})

</script>

<template>
  <section class="template" v-if="template">
    <TopSection title="Editar plantilla" @save="save" @add-new-section="addNewSection" />
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
  <section class="flex justify-center items-center" v-else>
    <IconLoaderPage />
  </section>
</template>


