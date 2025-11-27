
<script setup lang="ts">
import Button from '@/components/buttons/Button.vue';
import { useRouter } from 'vue-router';
import IconChevronLeft from '../icons/IconChevronLeft.vue';
import { type PropType } from 'vue';
import type { RouterData } from '@/types/routerData.ts';

defineProps({
  title:{
    type:String,
    required:true
  },
  text:{
    type:String,
    default:'Nuevo'
  },
  secondText:{
    type:String,
    default:'Nuevo'
  },
  button: {
    type:Boolean,
    default:true
  },
  secondButton: {
    type:Boolean,
    default:false
  },
  buttonBack: {
    type:Boolean,
    default:false
  },
  goRoute: {
    type: Object as  PropType<RouterData>,
    default:''
  }
})

const router = useRouter();

const emit = defineEmits<{
  (e:'click'):void,
  (e:'secondClick'):void
}>();


</script>

<template>
  <div v-if="buttonBack" @click="router.back()" class="flex gap-2 items-center mb-2 cursor-pointer">
    <IconChevronLeft class="h-[18px]"/>
    <p> Volver</p>
  </div>
  <div class="top-section">
    <h1>{{ title }}</h1>
    <div class="flex gap-5">
      <Button v-if="secondButton" @click="emit('secondClick')" type="secondary" size="sm">{{ secondText }}</Button>
      <Button v-if="button" @click="emit('click')" type="primary" size="sm">{{ text }}</Button>
    </div>
  </div>
</template>

<style scoped lang="scss" >

.top-section{
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;


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
