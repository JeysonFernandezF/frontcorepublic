<script setup lang="ts">
import InputTemplate from '@/components/form/InputTemplate.vue';
import IconAdd from '@/components/icons/IconAdd.vue';
import IconDelete from '@/components/icons/IconDelete.vue';
import { type SectionForm } from '@/types/template/template';
import { useFormError } from '../composables/validations/useFormError';
import { useFormErrorQuestion } from '../composables/validations/useFormErrorQuestion';

const props = defineProps<{
  section: SectionForm,
}>();

const addQuestion = () => {
  props.section.form_questions.push({
    id:new Date().toDateString(),
    error_question: false,
    question:''
  })
}

const deleteQuestion = (index:number) => {
  props.section.form_questions.splice(index,1)
}

useFormError(props.section, ['name'])
useFormErrorQuestion(props.section.form_questions, 'question', 'error_question')


</script>

<template>
  <div class="card card-template">
    <div class="flex gap-2">
      <InputTemplate size="sm" weight="bold" placeholder="Nueva sección"
        v-model="props.section.name" :error="props.section.error_name"
      />
      <slot name="delete-section"></slot>
    </div>
    <div @click="addQuestion" class="add-question">
      <p>Pregunta</p>
      <IconAdd class="transition-transform duration-200 hover:scale-110" />
    </div>
    <div class="flex gap-2" v-for="(question,index) in section.form_questions" :key="question.id">
      <p>{{ index + 1 }}.</p>
      <InputTemplate size="sm" placeholder="Nueva pregunta"
        v-model="question.question" :error="question.error_question"
      />
      <button v-if="section.form_questions.length > 1" @click="deleteQuestion(index)">
        <IconDelete />
      </button>
    </div>
  </div>
</template>
