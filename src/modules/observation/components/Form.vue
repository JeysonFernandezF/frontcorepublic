<script setup lang="ts">
import InputLayout from '@/components/form/InputLayout.vue';
import InputReadonly from '@/components/form/InputReadonly.vue';
import type { FormObservation } from '@/types/observation/form';
import type { PropType } from 'vue';
const props = defineProps({
  form:{
    type: Object as PropType<FormObservation>,
    required:true
  },
})
</script>

<template>
  <h1 class="form-name">{{ form.formulario.nombre}}</h1>
  <div class="section-question">
    <template v-for="seccion in form.formulario.secciones" :key="seccion.nombre">
      <p class="section">{{ seccion.nombre }}</p>
      <div v-for="(pregunta,index) in seccion.preguntas" :key="pregunta.nombre" class="question-section">
        <p class="question col-full">{{ index + 1 }} {{ pregunta.nombre }}</p>
        <InputLayout label="Conduta">
          <InputReadonly :name="pregunta.record_question.conducta ?? '-'" />
        </InputLayout>
        <InputLayout label="Barrera">
          <InputReadonly :name="pregunta.record_question.barrera ?? '-'" />
        </InputLayout>
        <InputLayout class="col-full" label="Comentarios">
          <InputReadonly :name="pregunta.record_question.notes ?? '-'" />
        </InputLayout>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped >
.form-name{
  font-weight: bold;
  font-size: 16px;
}

.section-question{
  .section{
    margin-top: 20px;
    font-weight: bold;
  }

  .question-section{
    margin-top: 10px;
    margin-bottom: 10px;
    display:grid;
    grid-template-columns: repeat(2,1fr);
    gap:10px;

    .col-full{
      grid-column: span 2;
    }
  }
}
</style>
