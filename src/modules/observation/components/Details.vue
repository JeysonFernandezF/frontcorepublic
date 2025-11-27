<script setup lang="ts">
import { defineProps, type PropType } from 'vue';

import InputLayout from '@/components/form/InputLayout.vue';
import InputReadonly from '@/components/form/InputReadonly.vue';
import Form from './Form.vue';
import type { Observation } from '@/types/observation/observation';
import type { FormObservation } from '@/types/observation/form';
import dayjs from 'dayjs';

const props = defineProps({
  observation: {
    type: Object as PropType<Observation>,
    required:true
  },
  form:{
    type: Object as PropType<FormObservation>,
    required:true
  },
})


</script>

<template>
  <div class="card">
    <div class="form-prc">
      <h2 class="title-section">Información principal</h2>
        <div class="input-section">
          <InputLayout label="Observador">
            <InputReadonly :name="observation.user.name" />
          </InputLayout>
          <InputLayout label="Fecha de observación">
            <InputReadonly :name="dayjs(observation.observed_at).format('DD-MM-YYYY HH:MM')" />
          </InputLayout>
          <InputLayout label="Personas observadas">
            <InputReadonly :name="observation.people_observed.toString()" />
          </InputLayout>
          <!--<InputLayout label="Área de trabajo">
            <InputReadonly name="Área de trabajo" />
          </InputLayout>
          <InputLayout label="Riesgo crítico">
            <InputReadonly name="Riesgo crítico" />
          </InputLayout>---->
          <InputLayout label="Turno">
            <InputReadonly :name="observation.turn.name" />
          </InputLayout>
        </div>
      <h2 class="title-section">Información formulario</h2>
      <div class="form-section">
        <Form :form="form" />
      </div>
    </div>
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
  .form-section{
    width: 80%;
    margin: auto;
    margin-top: 36px;
    gap:10px;


  }

}
</style>
