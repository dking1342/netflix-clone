<template>
  <section class="enjoy">
    <div class="enjoy-content-container">
      <h1>Enjoy your TV</h1>
      <p>
        Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
        players, and more.
      </p>
    </div>
    <div class="enjoy-video-container">
      <div class="tv-wrapper">
        <video
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
          autoplay
          playsinline
          muted
          loop
        ></video>
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          alt="television"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="sass">
@import '../styles/_variables.sass'
.enjoy
  height: fit-content
  width: 100%
  display: flex
  flex-wrap: wrap
  align-items: center
  justify-content: center
  align-self: center
  color: $text-color-light
  padding: 2rem 0
  border-bottom: 0.5rem solid rgb(35,35,35)
</style>
