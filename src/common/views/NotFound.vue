
<script setup lang="ts">
import '@/assets/styles/notfound/notfound.scss'
import IconLeftLogin from '@/components/icons/login/IconLeftLogin.vue';
import BackgroundLogin from '@/layouts/components/BackgroundLogin.vue';
import Button from '@/components/buttons/Button.vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/modules/auth/composables/useAuth';

const router = useRouter()

const {logout} = useAuth();

const goToLogin = () => {
  logout();
  router.push({name: 'login'})
}
const goBack = () => {
  router.back();
};

</script>

<template>
  <main class="notfound-container">
    <BackgroundLogin />
    <section class="flex flex-col items-center justify-center" >
      <h1 class="">Página no encontrada.</h1>
      <div class="flex gap-4">
        <Button @click="goBack()" type="secondary" class="w-[200px] h-[26px] z-50">Volver</Button>
        <Button @click="goToLogin()"type="optional" class="w-[200px] h-[26px] z-50">Ir al login</Button>
      </div>
    </section>
  </main>
</template>


