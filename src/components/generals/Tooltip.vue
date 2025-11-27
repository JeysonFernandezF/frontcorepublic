<template>
  <div
    class="tooltip-container"
    @mouseenter="show = true"
    @mouseleave="show = false"
  >
    <slot></slot>

    <transition name="fade">
      <div v-if="show" class="tooltip-content">
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(false);
</script>

<style scoped lang="scss">
.tooltip-container {
  position: relative;
  display: inline-block;
}

.tooltip-content {
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(to right, #0091D9, #235C78);
  color: white;
  padding: 2px 12px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  z-index: 100;


  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #1276A8 transparent transparent transparent;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
