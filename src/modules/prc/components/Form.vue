<script setup lang="ts">
import { computed, defineProps, type PropType } from 'vue';

import Button      from '@/components/buttons/Button.vue';
import InputDate   from '@/components/form/InputDate.vue';
import InputLayout from '@/components/form/InputLayout.vue';
import InputSelect from '@/components/form/InputSelect.vue';
import InputText   from '@/components/form/InputText.vue';

import { usePrcDataForm } from '../composables/usePrcDataForm';

import type { CatalogPrc } from '../../../types/prc/catalogPrc';
import type { FormPrc } from '@/types/prc/prcForm';
import type { Template } from '@/types/template/template';
import type { ErrorPrc } from '@/types/prc/errorPrc';

import IconEdit from '@/components/icons/IconEdit.vue';
import Tooltip from '@/components/generals/Tooltip.vue';
import { useRouter } from 'vue-router';
import { TypeFormPrc } from '@/utils/enums/TypeFormPrc';
import InputError from '@/components/form/InputError.vue';
import { useTemplatePrc } from '@/composables/prc-template/useTemplatePrc';


const router = useRouter();
const props = defineProps({
  catalogPrc: {
    type: Object as PropType<CatalogPrc>,
    required:true
  },
  templatesPrc: {
    type: Object as PropType<Template[]>,
    required:true
  },
  formPrc: {
    type: Object as PropType<FormPrc>,
    required:true
  },
  errors:{
    type: Object as PropType<ErrorPrc[]>,
    required:false
  }
})
const {
  templates,
  activities,
  companies,
  departments,
  equipments,
  managements,
  observedTasks,
  positions,
  worksites
} = usePrcDataForm(props.catalogPrc, props.templatesPrc)

const getError = (name: string) => {
  const err = props.errors?.find(e => e.name === name)
  return err ? err.error : ''
}

const enableEditButton = computed( () => {
  return props.formPrc.template_form_id > 0 && props.formPrc.type == TypeFormPrc.CREATE
})

const emit = defineEmits<{
  (e:'save'):void,
  (e:'cancel'):void
}>();
</script>

<template>
  <div class="card">
    <form class="form-prc"  @submit.prevent="emit('save')">
      <h2 class="title-section">Información principal</h2>
      <div class="input-section">
        <InputLayout label="Nombre">
          <InputText placeholder="Ingrese el nombre..." v-model="formPrc.name" :error="!!getError('name')" />
          <InputError v-if="getError('name')" :text="getError('name')" />
        </InputLayout>
        <InputLayout label="Plantilla">
          <div  class="flex gap-2 items-end">
            <InputSelect v-model="formPrc.template_form_id" :options="templates" :error="!!getError('template_form_id')" />
            <Tooltip v-if="enableEditButton">
              <button @click="router.push({name:'prc-template-edit',params:{id:formPrc.template_form_id}})" type="button" class="pb-[10px] cursor-pointer"><IconEdit /></button>
              <template #content>
                Editar plantilla
              </template>
            </Tooltip>
          </div>
          <InputError v-if="getError('template_form_id')" :text="getError('template_form_id')" />
        </InputLayout>
        <InputLayout label="Fecha de inicio">
          <InputDate v-model="formPrc.start_date" :error="!!getError('start_date')"/>
          <InputError v-if="getError('start_date')" :text="getError('start_date')" />
        </InputLayout>
        <InputLayout label="Faena">
          <InputSelect
            v-model="formPrc.program_detail.worksite_id"
            :options="worksites"
            :error="!!getError('worksite_id')"
          />
          <InputError v-if="getError('worksite_id')" :text="getError('worksite_id')" />
        </InputLayout>
        <InputLayout label="Gerencia">
          <InputSelect
            v-model="formPrc.program_detail.management_id"
            :options="managements"
            :error="!!getError('management_id')"
          />
          <InputError v-if="getError('management_id')" :text="getError('management_id')" />
        </InputLayout>
        <InputLayout label="Tarea observada">
          <InputSelect
            v-model="formPrc.program_detail.observed_task_id"
            :options="observedTasks"
            :error="!!getError('observed_task_id')"
          />
          <InputError v-if="getError('observed_task_id')" :text="getError('observed_task_id')" />
        </InputLayout>
        <InputLayout label="Departamento">
          <InputSelect
            v-model="formPrc.program_detail.department_id"
            :options="departments"
            :error="!!getError('department_id')"
          />
          <InputError v-if="getError('department_id')" :text="getError('department_id')" />
        </InputLayout>
        <InputLayout label="Compañia">
          <InputSelect
            v-model="formPrc.program_detail.company_id"
            :options="companies"
            :error="!!getError('company_id')"
          />
          <InputError v-if="getError('company_id')" :text="getError('company_id')" />
        </InputLayout>
        <InputLayout label="Actividad que se observa">
          <InputSelect
            v-model="formPrc.program_detail.activity_id"
            :options="activities"
            :error="!!getError('activity_id')"
          />
          <InputError v-if="getError('activity_id')" :text="getError('activity_id')" />
        </InputLayout>
        <InputLayout label="Equipo">
          <InputSelect
            v-model="formPrc.program_detail.equipment_id"
            :options="equipments"
            :error="!!getError('equipment_id')"
          />
          <InputError v-if="getError('equipment_id')" :text="getError('equipment_id')" />
        </InputLayout>
        <InputLayout label="Cargo a observar">
          <InputSelect
            v-model="formPrc.program_detail.position_id"
            :options="positions"
            :error="!!getError('position_id')"
          />
          <InputError v-if="getError('position_id')" :text="getError('position_id')" />
        </InputLayout>
      </div>
      <div class="flex gap-5 justify-center items-center mt-5">
        <Button typeButton="button" @click="emit('cancel')" type="cancel" size="sm">Cancelar</Button>
        <Button type="primary" size="sm">Guardar</Button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped >
.form-prc{
  margin-bottom: 40px;
  .title-section{
    padding: 32px 28px 24px 28px;
    border-bottom: 2px solid #DEE2E6;
    font-weight: bold;
    font-size: 16px;
  }
  .input-section{
    width: 80%;
    margin: auto;
    margin-top: 36px;
    display:grid;
    grid-template-columns: repeat(2,1fr);
    gap:10px;
  }

}
</style>
