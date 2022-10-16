<script setup>
const emit = defineEmits(['emitScrolled'])
const scrolled = $ref(false)
const emitScrolled = srcl => emit('emitScrolled', srcl)
const handleScroll = () => {
  const currentScrolled = window.scrollY >= 30
  if (scrolled && !currentScrolled) {
    // eslint-disable-next-line no-const-assign
    scrolled = false
    emitScrolled(false)
  }
  else if (!scrolled && currentScrolled) {
  // eslint-disable-next-line no-const-assign
    scrolled = true
    emitScrolled(true)
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
