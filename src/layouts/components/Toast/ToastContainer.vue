<template>
  <div class="toast-container">
    <Toast
      v-for="(t, i) in toasts"
      :key="i"
      :message="t.message"
      :type="t.type"
      :duration="t.duration"
      :top="`${20 + i * 60}px`"
    />
  </div>
</template>

<script setup lang="ts">
import Toast from "./Toast.vue";
import { useToast } from "@/composables/useToast";

const { toasts } = useToast();
</script>

<style scoped>
.toast-container {
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 9999;
}
</style>
