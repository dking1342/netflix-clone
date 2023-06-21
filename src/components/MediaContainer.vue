<template>
  <div class="media-container">
    <div class="tv-wrapper">
      <video :src="videoSrc" autoplay playsinline muted loop></video>
      <img :src="imgSrc" alt="television" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  videoSrc: String,
  imgSrc: String,
  videoWidth: String,
  videoHeight: String,
  videoTop: String,
  videoLeft: String,
});
</script>

<style scoped lang="sass">
.media-container
  max-width: 600px
  width: 100%
  height: 400px

  .tv-wrapper
    position: relative
    width: 100%
    height: 100%

    video
      position: absolute
      width: 100%
      max-width: v-bind(videoWidth)
      max-height: v-bind(videoHeight)
      top: v-bind(videoTop)
      left: v-bind(videoLeft)

    img
      width: 100%
      height: inherit
      position: absolute
      inset: 0
</style>
