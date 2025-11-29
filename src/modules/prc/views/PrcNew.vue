<script setup lang="ts">
import TopSection from '@/components/layouts/TopSection.vue';
import Form from '../components/Form.vue';
import { usePrcForm } from '../composables/usePrcForm.ts';
import { onMounted, ref, watch } from 'vue';
import IconLoaderPage from '@/components/icons/loader/IconLoaderPage.vue';
import { useToast } from '@/composables/useToast.ts';
import { useRouter } from 'vue-router';
import type { ErrorPrc } from '@/types/prc/errorPrc.ts';
import { usePrcValidationForm } from '../composables/usePrcValidationForm.ts';
import { useTemplatePrc } from '@/composables/prc-template/useTemplatePrc.ts';
import { useTemplatePrc as useTemplateByPrc } from '../composables/getData/useTemplatePrc.ts';
import { useCatalogPrc } from '../composables/getData/useCatalogPrc.ts';

const router = useRouter();

const {showToast} = useToast();
const {formPrc,createSuccess,addPrc} = usePrcForm();
const {catalogPrc,loadingCatalog,getCatalogPrc} = useCatalogPrc();
const {templatesPrc,loadingTemplates,getTemplatesPrc} = useTemplateByPrc();
const {validation} = usePrcValidationForm()
const {setTemplate} = useTemplatePrc();

const save = () =>{
  if(hasValidationErrors()) return;
  addPrc();
}
const hasValidationErrors = (): boolean => {
  errors.value = validation(formPrc.value);
  if(errors.value.length > 0) return true;

  return false;
}
watch(()=>formPrc.value.template_form_id, ()=>{
  setTemplate(formPrc.value.template_form_id, templatesPrc.value);
})

const errors = ref<ErrorPrc[]>([]);

const cancel = () => {
  router.push({name:'prc-list'})
}

watch(createSuccess, ()=> {
  if(createSuccess.value){
    showToast({message:"Nuevo PRC creado",type:"success"})
    router.push({name:'prc-list'})
  }
})

onMounted(async ()=>{
  await getTemplatesPrc();
  await getCatalogPrc();
})
</script>
<template>
<div>
  <TopSection title="Nuevo PRC" :button="false" />
  <Form
    v-if="!loadingCatalog && !loadingTemplates"
    :formPrc="formPrc"
    :templatesPrc="templatesPrc"
    :catalogPrc="catalogPrc"
    :errors="errors"

    @save="save()"
    @cancel="cancel()"
  />
  <div class="flex justify-center" v-else>
    <IconLoaderPage />
  </div>
</div>
</template>
