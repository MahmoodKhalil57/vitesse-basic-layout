<script setup>
const drawerOpen = $ref(false)
const toggleDrawer = () => {
  // eslint-disable-next-line no-const-assign
  drawerOpen = !drawerOpen
}
</script>

<template>
  <main flex flex-col justify-between min-h-screen>
    <div />
    <div>
      <RouterView />
    </div>

    <Header v-model="drawerOpen" />
    <Footer />
    <SideMenu v-model="drawerOpen" />
  </main>
</template>
