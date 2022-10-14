<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()

const emit = defineEmits(['update:modelValue'])

const { t, availableLocales, locale } = useI18n()

const toggleDrawer = () => {
  emit('update:modelValue', !props.modelValue)
}

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <div fixed class="flex flex-row w-full justify-between pt-4 pb-1 bg-blue">
    <div class="pl-4 pr-2 w-25 sm-hidden">
      <div i-fa6-solid-bars-staggered icon-btn @click="toggleDrawer" />
    </div>
    <div class="sm-pl-4 sm-pr-2 w-25">
      <div />
      <RouterLink class="icon-btn mx-2" to="/" :title="t('button.home')">
        <Logo />
      </RouterLink>
    </div>
    <nav text-xl class="lt-sm-hidden">
      <RouterLink class="icon-btn mx-2" to="/" :title="t('button.home')">
        <div>{{ t('button.home') }}</div>
      </RouterLink>

      <RouterLink class="icon-btn mx-2" to="/" :title="t('button.products')">
        <div>{{ t('button.products') }}</div>
      </RouterLink>

      <RouterLink class="icon-btn mx-2" to="/" :title="t('button.about')">
        <div>{{ t('button.about') }}</div>
      </RouterLink>

      <RouterLink class="icon-btn mx-2" to="/" :title="t('button.contact')">
        <div>{{ t('button.contact') }}</div>
      </RouterLink>
    </nav>
    <div class="pl-2 pr-4 w-25">
      <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
        <div i="carbon-sun dark:carbon-moon" />
      </button>
      <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales()">
        <div i-carbon-language />
      </a>
    </div>
  </div>
</template>
