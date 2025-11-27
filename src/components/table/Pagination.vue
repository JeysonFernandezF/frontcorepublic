<script setup lang="ts">
import '@/assets/styles/global/pagination.scss'
import { defineProps, defineEmits } from 'vue'
import type { PropType } from 'vue'
import type { Meta } from '@/types/response'
import IconChevronLeft from '../icons/IconChevronLeft.vue'
import IconChevronRight from '../icons/IconChevronRight.vue'

const props = defineProps({
  pagination: {
    type: Object as PropType<Meta>,
    required: true,
  },
})

const emit = defineEmits(['prevPage', 'nextPage', 'otherPage'])
</script>

<template>
  <div v-if="pagination.last_page > 1" class="pagination-container">
    <button
      class="pagination-btn icon-btn"
      :disabled="pagination.current_page !== 1"
      @click="emit('prevPage')"
    >
      <IconChevronLeft />
    </button>

    <div class="pagination-pages">
      <button
        v-for="page in pagination.last_page"
        :key="page"
        @click="emit('otherPage', page)"
        class="pagination-btn"
        :class="{ active: page === pagination.current_page }"
      >
        {{ page }}
      </button>
    </div>

    <button
      class="pagination-btn icon-btn"
      :disabled="pagination.current_page === pagination.last_page"
      @click="emit('nextPage')"
    >
      <IconChevronRight />
    </button>
  </div>
</template>

