<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()

const emit = defineEmits(['update:modelValue'])

const closeDrawer = () => {
  emit('update:modelValue', false)
}

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <Transition name="custom-slide">
    <div v-if="props.modelValue" fixed>
      <div absolute class="backdrop" @click="closeDrawer">
        <div h-screen w-screen bg-black op-80 />
      </div>
      <div w-60 absolute flex flex-col items-center justify-between h-screen bg-neutral-900 class="inner">
        <div flex flex-col w-full justify-center>
          <div flex flex-row justify-between w-full>
            <div icon-btn mt-2 mr-2 w-full i-maki-cross @click="closeDrawer" />
            <RouterLink ma-2 icon-btn to="/" :title="t('button.home')">
              <Logo />
            </RouterLink>
            <div w-full ml-2 flex justify-end />
          </div>
          <div b-b w-full h-1 />
        </div>

        <nav flex flex-col gap-4 pt-4 aria-label="Site menu">
          <RouterLink icon-btn mx-2 flex flex-row to="/" label="Home" :title="t('button.home')">
            <div i-carbon-campsite mr-3 /> <div>Home</div>
          </RouterLink>
          <div b-b w-full h-1 />
          <button icon-btn mx-2 flex flex-row class="!outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
            <div i="carbon-sun dark:carbon-moon" mr-3 /> <div>Theme</div>
          </button>
          <div b-b w-full h-1 />
          <a icon-btn mx-2 flex flex-row :title="t('button.toggle_langs')" @click="toggleLocales()">
            <div i-carbon-language mr-3 /> <div>Language</div>
          </a>
          <div b-b w-full h-1 />
          <RouterLink icon-btn mx-2 flex flex-row to="/about" :title="t('button.about')">
            <div i-carbon-dicom-overlay mr-3 /> <div>Vue content</div>
          </RouterLink>
        </nav>
        <div />
        <div />
        <nav flex flex-col gap-4 pb-4 aria-label="Git menu">
          <a icon-btn mx-2 flex flex-row rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank" title="GitHub">
            <div i-carbon-logo-github mr-3 /> <div>Vitesse Github</div>
          </a>
          <div b-b w-full h-1 />
          <a icon-btn mx-2 flex flex-row rel="noreferrer" href="https://github.com/MahmoodKhalil57/vitesse-basic-layout" target="_blank" title="GitHub">
            <div i-carbon-logo-github c-red-800 mr-3 /><div> Vitesse-Basic-Layout</div>
          </a>
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
  transition-delay: 0.35s;
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
