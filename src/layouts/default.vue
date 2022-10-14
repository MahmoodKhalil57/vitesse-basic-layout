<script setup>
const drawerOpen = $ref(false)
const toggleDrawer = () => {
  // eslint-disable-next-line no-const-assign
  drawerOpen = !drawerOpen
}
</script>

<template>
  <main class="flex flex-col justify-between min-h-screen">
    <div />
    <div>
      <RouterView />
    </div>

    <Header v-model="drawerOpen" background-class="bg-blue-800" />
    <Footer />
    <SideMenu v-model="drawerOpen" class="test" />
  </main>
</template>
