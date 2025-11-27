<script setup lang="ts">
import IconLogin from '@/components/icons/login/IconLogin.vue';

</script>

<template>
  <div class="icon-grid">
    <IconLogin class="icon-item" style="grid-column: 2; grid-row: 1;" />
    <IconLogin class="icon-item" style="grid-column: 1; grid-row: 2;" />
    <IconLogin class="icon-item" style="grid-column: 2; grid-row: 2;" />
    <IconLogin class="icon-item" style="grid-column: 3; grid-row: 2;" />
    <IconLogin class="icon-item" style="grid-column: 4; grid-row: 3;" />
    <IconLogin class="icon-item" style="grid-column: 4; grid-row: 2;" />
    <IconLogin class="icon-item" style="grid-column: 5; grid-row: 4;" />
    <IconLogin class="icon-item" style="grid-column: 6; grid-row: 3;" />
    <IconLogin class="icon-item" style="grid-column: 6; grid-row: 4;" />
    <IconLogin class="icon-item" style="grid-column: 8; grid-row: 5;" />
    <IconLogin class="icon-item" style="grid-column: 9; grid-row: 4;" />
  </div>
</template>
<style lang="scss" scoped>
.icon-grid {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 20px;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
}
.icon-item {
  width: 200px;
  height: 200px;
  justify-self: center;
  align-self: center;
  transform: rotate(-15deg);
}
.icon-item:nth-child(1) {
  transform: rotate(20deg)  scale(1.2);

}
.icon-item:nth-child(2) {
  transform: rotate(30deg)  scale(1.2);
}
.icon-item:nth-child(3) {
  transform: rotate(30deg)  scale(1.2);
}
.icon-item:nth-child(4) {
  transform: rotate(-40deg) scale(1.1);
}
.icon-item:nth-child(5) {
  transform: rotate(-60deg) scale(1.1);
}
.icon-item:nth-child(6) {
  transform: rotate(-20deg) scale(1.1);
}

.icon-item:nth-child(5) {
  transform: rotate(-25deg) scale(1.25);
}
</style>
