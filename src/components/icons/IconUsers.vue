<template>
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="svgClass"
  >
    <path
      d="M13.3332 14.6001V13.2668C13.3332 12.5595 13.0522 11.8812 12.5521 11.3811C12.052 10.881 11.3737 10.6001 10.6665 10.6001H5.33317C4.62593 10.6001 3.94765 10.881 3.44755 11.3811C2.94746 11.8812 2.6665 12.5595 2.6665 13.2668V14.6001"
      stroke-opacity="0.79"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.00016 7.93343C9.47292 7.93343 10.6668 6.73952 10.6668 5.26676C10.6668 3.794 9.47292 2.6001 8.00016 2.6001C6.5274 2.6001 5.3335 3.794 5.3335 5.26676C5.3335 6.73952 6.5274 7.93343 8.00016 7.93343Z"
      stroke-opacity="0.79"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup>
import '@/assets/styles/global/svg-colors.scss'

import { computed } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  color: {
    type: String,
    default: 'secondary',
    validator: (value) => ['primary', 'secondary', 'white'].includes(value)
  }
});

const svgClass = computed(() => {
  return `svg-${props.color}`;
});
</script>
