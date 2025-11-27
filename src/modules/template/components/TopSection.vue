
<script setup lang="ts">
import AddSection from '@/components/buttons/AddSection.vue';
import Button from '@/components/buttons/Button.vue';
import IconAdd from '@/components/icons/IconAdd.vue';
const props = defineProps({
  title: {
    type: String,
    required:true
  },
});



const emit = defineEmits<{
  (e:'addNewSection'):void,
  (e:'save'):void
}>();


</script>

<template>
  <div class="top-section">
    <h1>{{ title }}</h1>
    <div class="flex gap-10">
      <AddSection @click="emit('addNewSection')" />
      <Button @click="emit('save')" type="primary" size="sm">Guardar</Button>
    </div>
  </div>
</template>

<style scoped lang="scss" >

.top-section{
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  gap:10px;


  h1{
    display: flex;
    align-items: end;
    font-size: 24px;
    font-weight: bold;
    color: #4B4B4B;
  }

  button{
    margin-bottom: 5px;
  }
}
</style>
