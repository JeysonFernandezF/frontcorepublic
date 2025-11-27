<script setup lang="ts">
import { type Section } from '@/types/template/template';

const props = defineProps<{
  section: Section,
}>();
</script>

<template>
  <div class="card card-template">
    <div>
      <p class="font-bold">{{section.name}}</p>
    </div>
    <div class="flex gap-2" v-for="(question,index) in section.form_questions" :key="question.id">
      <p>{{ index + 1 }}.</p>
      <p>{{ question.question }}</p>
    </div>
  </div>
</template>
