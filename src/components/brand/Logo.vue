<template>
  <div class="flex no-wrap">
    <!-- fixing red apple issue -->
    <svg c-red class="tr-apl sc-apl" viewBox="0 0 448 512"><path fill="currentColor" d="M224 112c-8.8 0-16-7.2-16-16V80c0-44.2 35.8-80 80-80h16c8.8 0 16 7.2 16 16v16c0 44.2-35.8 80-80 80h-16zM0 288c0-76.3 35.7-160 112-160c27.3 0 59.7 10.3 82.7 19.3c18.8 7.3 39.9 7.3 58.7 0c22.9-8.9 55.4-19.3 82.7-19.3c76.3 0 112 83.7 112 160c0 128-80 224-160 224c-16.5 0-38.1-6.6-51.5-11.3c-8.1-2.8-16.9-2.8-25 0c-13.4 4.7-35 11.3-51.5 11.3C80 512 0 416 0 288z" /></svg>
    <!-- <div i-fa6-solid-apple-whole c-red class="tr-apl" /> -->
    <div i-fa6-solid-leaf c-green />
    <div i-fa6-solid-carrot c-orange class="tr-org" />
  </div>
</template>

<style lang="css" scoped>
  .tr-apl{
    transform: translate(0.55rem, 0.2rem) rotate(-45deg);
  }
  .sc-apl{
    width:1.2em;
    height: 1.2em;
  }
  .tr-org{
    transform: translate( -0.65rem, 0.2rem);
  }
</style>
