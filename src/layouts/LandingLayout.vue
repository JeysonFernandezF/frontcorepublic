<script setup lang="ts">
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';


</script>

<template>
  <main class="main">
    <Header />
    <section class="right-section">
      <Sidebar class="sidebar" />
      <RouterView class="content"/>
    </section>
  </main>

</template>

<style scoped lang="scss">


.main {
  position: relative;
  .right-section{
    position: relative;

    .sidebar{
      position: fixed;
      top: 20px;
      left: 20px;
    }
    .content{
      margin-left: 290px;
      padding: 32px 24px;
    }
  }

}
</style>
