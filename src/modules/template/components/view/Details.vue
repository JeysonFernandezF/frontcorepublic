<script setup lang="ts">
import '@/assets/styles/global/card.scss'
import type { Template } from '@/types/template/template';

const props = defineProps<{
  template: Template
}>();


</script>

<template>
  <div class="card card-template">
    <div>
      <p class="font-bold">{{ template.name }}</p>
    </div>
    <div>
      <p>{{ template.description }}</p>
    </div>
  </div>
</template>
