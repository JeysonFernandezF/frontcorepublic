<script setup lang="ts">
import { ref } from 'vue';



const showPassword = ref<boolean>(false)

const modelValue = defineModel();

</script>
<template>
  <div class="relative">
    <input
      class="!pr-[45px] input"

      :type="showPassword ? 'text':'password'"
      placeholder="Ingrese su contraseña..."
      required

      v-model="modelValue"
    />

    <img
      v-if="showPassword"
      class="absolute right-[20px] top-1/2 -translate-y-[15px] w-4 h-5 cursor-pointer"
      @click="showPassword = !showPassword"
      src="../../assets/icons/eye-show.svg"
    />
    <img
      v-else
      class="absolute right-[20px] top-1/2 -translate-y-[15px] w-4 h-5 cursor-pointer"
      @click="showPassword = !showPassword"
      src="../../assets/icons/eye-slash-show.svg"
    />
  </div>
</template>
