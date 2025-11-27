<script setup lang="ts">
import '@/assets/styles/auth/login.scss'
import '@/assets/styles/global/buttons.scss'

import {ref, computed, onMounted, watch} from 'vue';
import { RouterLink, useRouter } from 'vue-router';

import InputLayout from '@/components/form/InputLayout.vue';
import InputText from '@/components/form/InputText.vue';
import InputPassword from '@/components/form/InputPassword.vue';

import { useAuth } from '../composables/useAuth';
import InputErrorMessage from '@/components/form/InputErrorMessage.vue';
import IconLogin from '@/components/icons/login/IconLogin.vue';
import Button from '@/components/buttons/Button.vue';

import { useToast } from '@/composables/useToast';

const {showToast} = useToast();



const router = useRouter();

const {loading,errorIndemin, errorLogin, login,logout,checkRoleAdmin} = useAuth();

const name = ref<string>('');
const pin = ref<string>('');

const buttonDisabled = computed( ()=> {
  return loading.value
})

const submit = async () => {
  await login(name.value,pin.value, 'pin');
  if(!checkRoleAdmin()){
    showToast({message:'El usuario ingresado no posee permisos de administrador.',type:"info"})
    logout();
    router.push({name: 'login'})
  }
  if(errorLogin.value == ''){
    router.push({name: 'prc-list'})
  }
}

watch(()=>errorLogin.value,()=>{
  if(errorLogin.value != ''){
    showToast({message:errorLogin.value,type:"error"})
  }
})
watch(()=>errorIndemin.value,()=>{
  if(errorIndemin.value){
    showToast({message:"Hubo un error al iniciar sesión con el usuario Indemin. Intenta nuevamente con un usuario administrador.",type:"error"})
  }
})


onMounted(()=>{
  showToast({message:"Inicia sesión con usuario indemin!",type:"success"})
})

</script>

<template>
  <section class="login-section">
    <div class="header-section">
      <img src="../../../assets/images/indemin-logo.svg" />
      <h1 class="title">Inicio de sesión</h1>
      <h4 class="subtitle">¡Qué estupendo tenerte de vuelta!</h4>
    </div>
    <form class="form-login">
      <InputLayout label="Usuario">
        <InputText type="text" v-model="name"/>
        <InputErrorMessage :error="errorLogin" />
      </InputLayout>
      <InputLayout label="Pin">
        <InputPassword v-model="pin" />
      </InputLayout>
    </form>
    <button  @click="submit" :disabled="buttonDisabled" class="button button-login" >Inicar sesión</button>
    <div v-if="errorIndemin" class="w-full text-center mt-2">
      <RouterLink :to="{name:'login-admin'}"><IconPrc/>Ingresar con usuario administrador.</RouterLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>
