<script setup>
const drawerOpen = $ref(false)
const toggleDrawer = () => {
  // eslint-disable-next-line no-const-assign
  drawerOpen = !drawerOpen
}
</script>

<template>
  <main flex flex-col justify-between min-h-screen class="c-bg-1">
    <div z-1 class="c-sticky -mt-3">
      <div absolute w-full h-full bg-blue-800 />
      <Header v-model="drawerOpen" />
    </div>

    <RouterView sm-p-10 lt-sm-mx-5 lt-sm-my-15 rounded-5 class="c-bg-2" />

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
</style>
