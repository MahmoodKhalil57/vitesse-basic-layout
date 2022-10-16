<script setup>
const drawerOpen = $ref(false)
// eslint-disable-next-line no-const-assign
const handleOpenDrawer = () => drawerOpen = true

const scrolled = $ref(false)
// eslint-disable-next-line no-const-assign
const handleScrolled = scr => scrolled = scr

const route = useRoute()
const isHome = computed(() => String(route.path) === '/')
</script>

<template>
  <main flex flex-col justify-between min-h-screen>
    <div v-if="!isHome" z-1 class="c-sticky -mt-3">
      <!-- Default header -->
      <div absolute w-full h-full bg-cstm-lo />
      <Header text-cstm-2 @emit-open="handleOpenDrawer" />
    </div>
    <div v-else z-1 fixed w-full class="-mt-3">
      <!-- Home header -->
      <HeaderFadingBackdrop @emit-scrolled="handleScrolled" />
      <Header :class="{ 'text-cstm-2': scrolled }" @emit-open="handleOpenDrawer" />
    </div>

    <!-- add container classes if home -->
    <div :class="{ 'flex justify-center grow-1 rounded-5 m-10 p-4 bg-cstm-2': !isHome }">
      <RouterView lt-sm="max-w-full" />
    </div>

    <Footer bg-cstm-lo text-cstm-2 />
    <SideMenu v-model="drawerOpen" z-2 text-cstm-2 />
  </main>
</template>

<style scoped>
.c-sticky{
  position: -webkit-sticky;
  position: sticky;
  top:0px
}
</style>
