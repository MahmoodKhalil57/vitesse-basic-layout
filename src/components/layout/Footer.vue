<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div w-screen flex sm-flex-row lt-sm-flex-col justify-center pt-2 sm-pb-2 gap-3 bg-blue-800 overflow-hidden>
    <div flex lt-sm-justify-center sm-ml-10 sm-mt-8 w-full>
      <RouterLink icon-btn sm-scale-250 lt-sm-scale-150 to="/" :title="t('button.home')">
        <Logo class="sm--mt-2" />
      </RouterLink>
    </div>

    <div lt-sm-pb-3 flex flex-col items-center text-3>
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

    <div ml-10 mt-5 w-full sm-flex sm-justify-end lt-sm-hidden />
  </div>
</template>
