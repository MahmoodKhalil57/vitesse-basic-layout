<script setup lang="ts">
const emit = defineEmits(['emitOpen'])
const toggleDrawer = () => {
  emit('emitOpen')
}

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <div flex flex-row w-full justify-center pt-4 pb-1>
    <div pl-4 pr-2 w-full sm="hidden">
      <div i-fa6-solid-bars-staggered icon-btn @click="toggleDrawer" />
    </div>
    <div sm="pl-4 pr-2 w-full">
      <RouterLink icon-btn op-100 to="/" :title="t('button.home')">
        <Logo />
      </RouterLink>
    </div>
    <nav text-xl flex no-wrap lt-sm="hidden">
      <RouterLink icon-btn mx-2 to="/" :title="t('button.home')">
        <div i-carbon-campsite />
      </RouterLink>

      <button icon-btn mx-2 class="!outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
        <div i="carbon-sun dark:carbon-moon" />
      </button>

      <a icon-btn mx-2 :title="t('button.toggle_langs')" @click="toggleLocales()">
        <div i-carbon-language />
      </a>

      <RouterLink icon-btn mx-2 to="/about" :title="t('button.about')">
        <div i-carbon-dicom-overlay />
      </RouterLink>

      <a icon-btn mx-2 rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank" title="GitHub">
        <div i-carbon-logo-github />
      </a>

      <a icon-btn mx-2 rel="noreferrer" href="https://github.com/MahmoodKhalil57/vitesse-basic-layout" target="_blank" title="GitHub">
        <div i-carbon-logo-github c-red-800 />
      </a>
    </nav>
    <div pl-2 pr-4 w-full flex justify-end no-wrap>
      <button icon-btn mx-2 class="!outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
        <div i="carbon-sun dark:carbon-moon" />
      </button>
      <a icon-btn mx-2 :title="t('button.toggle_langs')" @click="toggleLocales()">
        <div i-carbon-language />
      </a>
    </div>
  </div>
</template>
