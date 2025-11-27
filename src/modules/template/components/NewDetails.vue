<script setup lang="ts">
import '@/assets/styles/global/card.scss'
import InputTemplate from '@/components/form/InputTemplate.vue';
import type { TemplateForm } from '@/types/template/template';
import { useFormError } from '../composables/validations/useFormError';

const props = defineProps<{
  newTemplate: TemplateForm
}>();
useFormError(props.newTemplate, ['name', 'description'])

</script>

<template>
  <div class="card card-template">
    <div>
      <InputTemplate size="sm" weight="bold"
        placeholder="Plantilla sin título..."
        v-model="props.newTemplate.name"
        :error="props.newTemplate.error_name"
      />
    </div>
    <div>
      <InputTemplate size="sm" weight="bold"
        placeholder="Plantilla sin descripción..."
        v-model="props.newTemplate.description"
        :error="props.newTemplate.error_description"
      />
    </div>
  </div>
</template>
