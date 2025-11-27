
<script setup lang="ts">
import IconCheck from "@/components/icons/status/IconCheck.vue";
import IconValidation from "@/components/icons/status/IconValidation.vue";
import IconWarning from "@/components/icons/status/IconWarning.vue";
import { ref,computed, onMounted } from "vue";

const props = defineProps<{
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
  top?: string | number;
}>();

const show = ref(false);

const typeClass = computed(() => {

  if(props.type == "success") return IconCheck
  if(props.type == "error") return IconWarning
  if(props.type == "info") return IconValidation
  return null;
});

onMounted(() => {
  show.value = true;
  setTimeout(() => {
    show.value = false;
  }, props.duration || 3000);
});
</script>

<template>
  <transition name="slide">
    <div v-if="show" class="toast" >
      <component :is="typeClass" />
      {{ message }}
    </div>
  </transition>
</template>


<style scoped>
.toast {
  position: fixed;
  top: v-bind('typeof props.top === "number" ? props.top + "px" : props.top');
  right: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  background-color: white;
  font-weight: bold;
  z-index: 9999;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);

  display: flex;
  justify-content: center;
  align-items: center;
  gap:10px
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
