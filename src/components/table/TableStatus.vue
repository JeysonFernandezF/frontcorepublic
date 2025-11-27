
<script setup lang="ts">
import { STATUS, STATUS_LABELS } from '@/utils/enums/StatusEnum';
import { computed } from 'vue';
import IconCheck from '../icons/status/IconCheck.vue';
import IconPending from '../icons/status/IconPending.vue';
import IconWarning from '../icons/status/IconWarning.vue';
import IconValidation from '../icons/status/IconValidation.vue';


const props = defineProps({
  name:{
    type:String,
    required:true
  }
})

const currentStatus = computed(() => {

  if(STATUS.Active == props.name) return IconCheck
  if(STATUS.Pausado == props.name) return IconWarning
  if(STATUS.Pending == props.name) return IconPending
  if(STATUS.Editable == props.name) return IconPending
  if(STATUS.Terminado == props.name) return IconCheck

  return null;

});
</script>


<template>
  <div v-if="currentStatus"
    class="status-pill">
    <component :is="currentStatus" />
    {{ STATUS_LABELS[name as STATUS] }}
  </div>
</template>


<style lang="scss" scoped>
.status-pill{
  display: flex;
  justify-content: center;
  align-items: center;
  gap:5px;

  text-align: center;
  font-size: 16px;

  svg{
    height: 18px;
    width: 20px;
  }

}
  </style>
