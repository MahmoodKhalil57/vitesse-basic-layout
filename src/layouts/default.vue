<script setup>
const drawerOpen = $ref(false)

const route = useRoute()
const isHome = computed(() => String(route.path) === '/')
</script>

<template>
  <main flex flex-col justify-between min-h-screen>
    <div v-if="isHome" z-1 fixed w-full class="-mt-3">
      <HeaderFadingBackdrop />
      <Header v-model="drawerOpen" />
    </div>

    <div v-else z-1 class="c-sticky -mt-3">
      <div absolute w-full h-full class="c-lo-1" />
      <Header v-model="drawerOpen" />
    </div>

    <div :class="{ 'flex justify-center grow-1 rounded-5 m-10 p-4 c-bg-2': !isHome }">
      <RouterView lt-sm="max-w-full" />
    </div>

    <Footer class="c-lo-1" />
    <SideMenu v-model="drawerOpen" z-2 />
  </main>
</template>

<style scoped>
.c-sticky{
  position: -webkit-sticky;
  position: sticky;
  top:0px
}
</style>
