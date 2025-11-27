
<script setup lang="ts">
import '@/assets/styles/auth/auth.scss'
import IconLeftLogin from '@/components/icons/login/IconLeftLogin.vue';
import BackgroundLogin from './components/BackgroundLogin.vue';

</script>

<template>
  <main class="main-container">
    <BackgroundLogin />
    <section class="flex items-center justify-start" >
      <div class="icon-section">
        <IconLeftLogin />
        <h1>Seguridad e Innovación al <br> Servicio de tus Procesos</h1>
        <h2>Automatizamos la protección de tus operaciones para que<br> tu empresa sea más eficiente, segura y sostenible.</h2>
      </div>
    </section>
    <section class="flex items-center justify-center">
      <div class="form-section">
        <RouterView />
      </div>
    </section>
  </main>
</template>


