<script setup lang="ts">
import TopSection from '@/components/layouts/TopSection.vue';
import Form from '../components/Form.vue';
import { usePrcForm } from '../composables/usePrcForm.ts';
import { computed, onMounted, watch } from 'vue';
import { usePrc } from '../composables/usePrc.ts';
import { useRoute } from 'vue-router';
import { TypeFormPrc } from '@/utils/enums/TypeFormPrc.ts';


const route = useRoute();

const {catalogPrc,templatesPrc,loadingCatalog,loadingTemplates, formPrc, getCatalogPrc, getTemplatesPrc} = usePrcForm();

const {prc,loadingPrc, getPrcById} = usePrc();

const prcId = computed(()=> route.params?.id ?? null);

onMounted(()=> {
  if(prcId.value){
    getPrcById(Number(prcId.value));
  }
})

watch(prc, (newVal) => {
  if(newVal) {
    formPrc.value.type = TypeFormPrc.EDIT,
    formPrc.value.name = newVal.name
    formPrc.value.template_form_id = newVal.form?.id
    formPrc.value.start_date = newVal.start_date
    formPrc.value.program_detail.activity_id = newVal.program_detail.activity.id;
    formPrc.value.program_detail.company_id = newVal.program_detail.company.id;
    formPrc.value.program_detail.department_id = newVal.program_detail.department.id;
    formPrc.value.program_detail.equipment_id = newVal.program_detail.equipment.id;
    formPrc.value.program_detail.management_id = newVal.program_detail.management.id;
    formPrc.value.program_detail.observed_task_id = newVal.program_detail.observed_task.id;
    formPrc.value.program_detail.position_id = newVal.program_detail.position.id;
    formPrc.value.program_detail.worksite_id = newVal.program_detail.worksite.id;
  }
})

const save = () =>{
  console.log('save');
}
const cancel = () => {
  console.log('cancel');
}

onMounted(async ()=>{
  await getTemplatesPrc();
  await getCatalogPrc();
})
</script>
<template>
<div>
  <TopSection title="Editar PRC" text="Guardar" @click="save()" />
  <Form
    v-if="!loadingCatalog && !loadingTemplates"
    :formPrc="formPrc"
    :templatesPrc="templatesPrc"
    :catalogPrc="catalogPrc"

    @save="save()"
    @cancel="cancel()"
  />
</div>
</template>
