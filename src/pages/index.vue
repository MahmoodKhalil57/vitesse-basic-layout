<script setup lang="ts">
const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const { t } = useI18n()
</script>

<template>
  <div flex flex-col h-full w-full items-center>
    <section flex flex-col items-center justify-center h-screen w-full p-5 class="c-bg-1">
      <div text-4xl>
        <div i-fa6-solid-paint-roller inline-block />
      </div>
      <p>
        <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
          [Vitesse]
        </a>
      </p>
      <p>
        <a rel="noreferrer" href="https://github.com/MahmoodKhalil57/vitesse-basic-layout" target="_blank">
          [Vitesse Basic Layout]
        </a>
      </p>
      <p>
        <em text-sm opacity-75>{{ t('intro.desc') }}</em>
      </p>

      <div py-4 />

      <input
        id="input"
        v-model="name"
        :placeholder="t('intro.whats-your-name')"
        :aria-label="t('intro.whats-your-name')"
        type="text"
        autocomplete="false"
        p="x4 y2"
        w="250px"
        text="center"
        bg="transparent"
        border="~ rounded gray-200 dark:gray-700"
        outline="none active:none"
        @keydown.enter="go"
      >
      <label hidden for="input">{{ t('intro.whats-your-name') }}</label>

      <div>
        <button
          btn m-3 text-sm
          :disabled="!name"
          @click="go"
        >
          {{ t('button.go') }}
        </button>
      </div>
    </section>
    <section flex flex-col items-center justify-center h-100 w-full p-5 class="c-bg-2">
      <div text-4xl>
        <div i-fa6-solid-paint-roller inline-block />
      </div>
      <p>
        <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
          [Vitesse]
        </a>
      </p>
      <p>
        <a rel="noreferrer" href="https://github.com/MahmoodKhalil57/vitesse-basic-layout" target="_blank">
          [Vitesse Basic Layout]
        </a>
      </p>
      <p>
        <em text-sm opacity-75>{{ t('intro.desc') }}</em>
      </p>

      <div py-4 />

      <input
        id="input"
        v-model="name"
        :placeholder="t('intro.whats-your-name')"
        :aria-label="t('intro.whats-your-name')"
        type="text"
        autocomplete="false"
        p="x4 y2"
        w="250px"
        text="center"
        bg="transparent"
        border="~ rounded gray-200 dark:gray-700"
        outline="none active:none"
        @keydown.enter="go"
      >
      <label hidden for="input">{{ t('intro.whats-your-name') }}</label>

      <div>
        <button
          btn m-3 text-sm
          :disabled="!name"
          @click="go"
        >
          {{ t('button.go') }}
        </button>
      </div>
    </section>
  </div>
</template>
