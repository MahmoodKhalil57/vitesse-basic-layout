<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()

const emit = defineEmits(['update:modelValue'])

const { t } = useI18n()

const toggleDrawer = () => {
  emit('update:modelValue', !props.modelValue)
}
</script>

<template>
  <Transition
    name="custom-slide"
  >
    <div v-if="props.modelValue" fixed>
      <div absolute class="backdrop" @click="toggleDrawer">
        <div h-screen w-screen bg-black op-80 />
      </div>
      <div absolute flex flex-col items-center h-screen bg-neutral-900 class="inner w-60">
        <div flex flex-row justify-between w-full>
          <div icon-btn ma-2 i-maki-cross @click="toggleDrawer" />
          <Logo ma-2 />
          <div icon-btn ma-2 i-maki-cross invisible />
        </div>
        <div b-b w-full h-1 />
        <nav flex flex-col text-xl gap-4 pt-4>
          <RouterLink class="icon-btn mx-2" to="/" :title="t('button.home')">
            <div>{{ t('button.home') }}</div>
          </RouterLink>
          <div b-b w-full h-1 />
          <RouterLink class="icon-btn mx-2" to="/products" :title="t('button.products')">
            <div>{{ t('button.products') }}</div>
          </RouterLink>
          <div b-b w-full h-1 />
          <RouterLink class="icon-btn mx-2" to="/about" :title="t('button.about')">
            <div>{{ t('button.about') }}</div>
          </RouterLink>
          <div b-b w-full h-1 />
          <RouterLink class="icon-btn mx-2" to="/contact" :title="t('button.contact')">
            <div>{{ t('button.contact') }}</div>
          </RouterLink>
          <div b-b w-full h-1 />
        </nav>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.custom-slide-enter-active, .custom-slide-leave-active {
  transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.custom-slide-leave-active {
  transition-delay: 0.25s;
}

.custom-slide-enter-from ,
.custom-slide-leave-to {
  opacity: 0;
}

/* we can also transition custom-slide elements using custom-slide selectors */
.custom-slide-enter-active .inner,
.custom-slide-leave-active .inner {
  transition: all 0.3s ease-in-out;
}
/* delay enter of custom-slide element */
.custom-slide-enter-active .inner {
  transition-delay: 0.25s;
}

.custom-slide-enter-from .inner,
.custom-slide-leave-to .inner {
  transform: translateX(-200px);
}
</style>
