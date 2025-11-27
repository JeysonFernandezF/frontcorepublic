<script setup lang="ts">
import IconExit from '@/components/icons/IconExit.vue';
import { useAuth } from '@/modules/auth/composables/useAuth';
import { useRouter } from 'vue-router';

const router = useRouter();

const {user, logout} = useAuth();

const goToLogin = () => {
  logout();
  router.push({name: 'login'})
}

</script>
<template>
  <header>
    {{ user?.name }}
    <IconExit color="white" @click="goToLogin" />
  </header>
</template>
<style scoped lang="scss">
header{
  height: 52px;

  background: linear-gradient(to right, #0091D9, #235C78);
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;

  padding-right: 20px;

  color: white;
}
</style>
