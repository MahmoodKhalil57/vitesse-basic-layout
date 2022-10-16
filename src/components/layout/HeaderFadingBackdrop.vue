<script setup>
import { onMounted } from 'vue'

const scrolled = $ref(false)
const handleScroll = () => {
  // eslint-disable-next-line no-const-assign
  scrolled = window.scrollY >= 30
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <Transition name="custom-test">
    <div v-if="scrolled" absolute w-full h-full class="c-lo-1" />
  </Transition>
</template>

<style scoped>
.custom-test-enter-active, .custom-test-leave-active {
  transition: all 0.2s ease-in-out;
  transition-delay: 0.25s;
}
.custom-test-enter-from ,
.custom-test-leave-to {
  opacity: 0;
}
</style>
