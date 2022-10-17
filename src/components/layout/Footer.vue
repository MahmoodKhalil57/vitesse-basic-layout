<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div flex justify-center pt-2 gap-3 overflow-hidden sm="flex-row pb-2" lt-sm="flex-col">
    <div flex w-full sm="ml-10 mt-8" lt-sm="justify-center">
      <RouterLink icon-btn lt-sm="scale-150" sm="scale-250" to="/" :title="t('button.home')">
        <Logo class="sm--mt-2" />
      </RouterLink>
    </div>

    <div flex flex-col items-center text-3 lt-sm="pb-3">
      <a text-center min-w-70 href="mailto:mahmoodihabk@gmail.com">
        mahmoodihabk@gmail.com
      </a>
      <a text-center min-w-70 href="https://github.com/MahmoodKhalil57">
        https://github.com/MahmoodKhalil57
      </a>

      <div flex flex-row>
        <div i-fa6-solid-location-dot pr-8 class="-ml-8" /> Giza, Egypt
      </div>
    </div>

    <div ml-10 mt-5 w-full sm="justify-end flex" lt="sm-hidden" />
  </div>
</template>
