<script setup>
import { onMounted } from 'vue'

const drawerOpen = $ref(false)
const toggleDrawer = () => {
  // eslint-disable-next-line no-const-assign
  drawerOpen = !drawerOpen
}

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
  <main flex flex-col justify-between min-h-screen>
    <div z-1 fixed w-full class="-mt-3">
      <Transition name="custom-test">
        <div v-if="scrolled" absolute w-full h-full bg-gray-800 />
      </Transition>
      <Header v-model="drawerOpen" />
    </div>

    <RouterView />

    <Footer />
    <SideMenu v-model="drawerOpen" z-2 />
  </main>
</template>

<style scoped>
.c-sticky{
  position: -webkit-sticky;
  position: sticky;
  top:0px
}
.custom-test-enter-active, .custom-test-leave-active {
  transition: all 0.2s ease-in-out;
}
/* delay leave of parent element */
.custom-test-leave-active {
  transition-delay: 0.25s;
}

.custom-test-enter-from ,
.custom-test-leave-to {
  opacity: 0;
}
</style>
