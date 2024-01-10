<script setup lang="ts">

import CustomButton from "@/components/CustomButton.vue";

const props = defineProps({
  isShow: Boolean,
})

</script>

<template>
  <div class="modal" :class="{open: isShow}" @click="$emit('changeIsShowModal')">
    <div class="modal-content" @click.stop>
      <custom-button @click="$emit('changeIsShowModal')">x</custom-button>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    z-index: -1;
  }

  &-content {
    position: relative;
    z-index: 2;
    background: var(--color-background);
    padding: 3rem 2rem 3rem;
    border-radius: 1rem;
    width: 100%;
    max-width: 600px;
    text-align: center;
  }

  &.open {
    display: flex;
  }

  button {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
}
</style>