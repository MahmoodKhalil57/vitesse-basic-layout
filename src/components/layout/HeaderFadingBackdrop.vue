<script setup>
import { onMounted } from 'vue'

const emit = defineEmits(['emitScrolled'])
const scrolled = $ref(false)
const emitScrolled = srcl => emit('emitScrolled', srcl)
const handleScroll = () => {
  if (scrolled && window.scrollY < 30) {
    // eslint-disable-next-line no-const-assign
    scrolled = false
    emitScrolled(scrolled)
  }
  else if (!scrolled && window.scrollY >= 30) {
  // eslint-disable-next-line no-const-assign
    scrolled = true
    emitScrolled(scrolled)
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <Transition name="custom-test">
    <div v-if="scrolled" absolute w-full h-full bg-cstm-lo />
  </Transition>
</template>

<style scoped>
.custom-test-enter-active, .custom-test-leave-active {
  transition: all 0.2s ease-in-out;
}
.custom-test-enter-from ,
.custom-test-leave-to {
  opacity: 0;
}
</style>
