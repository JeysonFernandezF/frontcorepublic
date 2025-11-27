<script setup lang="ts">
import IconDashboard from '@/components/icons/IconDashboard.vue';
import IconPrc from '@/components/icons/IconPrc.vue';
import IconTemplate from '@/components/icons/IconTemplate.vue';
import IconUsers from '@/components/icons/IconUsers.vue';

</script>

<template>
  <aside>
      <nav class="navbar">
        <img class="w-[90%] mx-auto" src="../../assets/images/indemin-logo.svg" />
        <!--<RouterLink to="/s">
          <IconDashboard />
          Dashboard
        </RouterLink>-->
        <RouterLink :to="{name:'prc'}"><IconPrc/>PRC</RouterLink>
        <RouterLink :to="{name:'templates'}"><IconTemplate/>Plantillas</RouterLink>
        <RouterLink :to="{name:'users-list'}"><IconUsers/>Usuarios</RouterLink>
      </nav>
    </aside>
</template>

<style scoped lang="scss">
aside{
  width: 270px;
  height: 100dvh;
  height: 100vh;
  background-color: white;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  .navbar{
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 10px;
    a{
      height: 45px;
      border-radius: 4px;

      display: flex;
      align-items: center;
      gap:11px;

      padding-left: 11px;

      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;

      font-size: 14px;

      transition: 0.2s ease-in-out;
    }

    a:hover{
      background-color: #F6F9FC;

      color: #4B4B4B;
      font-weight: bold;
    }

    a.router-link-active{
      background-color: #F6F9FC;

      color: #4B4B4B;
      font-weight: bold;
    }

  }
}
</style>
