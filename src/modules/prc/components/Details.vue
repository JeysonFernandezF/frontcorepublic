<script setup lang="ts">
import { defineProps, type PropType } from 'vue';

import dayjs from 'dayjs';

import InputLayout from '@/components/form/InputLayout.vue';
import type { Prc } from '@/types/prc/prc';
import InputReadonly from '@/components/form/InputReadonly.vue';

const props = defineProps({
  prc: {
    type: Object as PropType<Prc>,
    required:true
  }
})
</script>

<template>
  <div class="card">
    <form class="form-prc">
      <h2 class="title-section">Información principal</h2>
        <div class="input-section">
          <InputLayout label="Nombre">
            <InputReadonly :name="prc.name" />
          </InputLayout>
          <InputLayout label="Plantilla">
            <InputReadonly :name="prc.form?.name" />
          </InputLayout>
          <InputLayout label="Fecha de inicio">
            <InputReadonly :name="dayjs(prc.start_date).format('DD-MM-YYYY') " />
          </InputLayout>
          <InputLayout label="Faena">
            <InputReadonly :name="prc.program_detail.worksite.name" />
          </InputLayout>
          <InputLayout label="Gerencia">
            <InputReadonly :name="prc.program_detail.management.name" />
          </InputLayout>
          <InputLayout label="Tarea observada">
            <InputReadonly :name="prc.program_detail.observed_task.name" />
          </InputLayout>
          <InputLayout label="Departamento">
            <InputReadonly :name="prc.program_detail.department.name" />
          </InputLayout>
          <InputLayout label="Compañia">
            <InputReadonly :name="prc.program_detail.company.name" />
          </InputLayout>
          <InputLayout label="Actividad que se observa">
            <InputReadonly :name="prc.program_detail.activity.name" />
          </InputLayout>
          <InputLayout label="Equipo">
            <InputReadonly :name="prc.program_detail.equipment.name" />
          </InputLayout>
          <InputLayout label="Cargo a observar">
            <InputReadonly :name="prc.program_detail.position.name" />
          </InputLayout>
        </div>
      <!--<h2 class="title-section">Información opcional</h2>
      <div class="input-section">
        <InputSwitch label="Área" v-model="formPrc.area">
        </InputSwitch>
        <InputSwitch label="Riesgo crítico" v-model="formPrc.critical_risk">
        </InputSwitch>
        <InputSwitch label="Turno" v-model="formPrc.turn">
        </InputSwitch>

      </div> -->
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
