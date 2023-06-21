<template>
  <div class="content-container">
    <h1>{{ title }}</h1>
    <p>{{ body }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  body: String,
});
</script>

<style scoped lang="sass">
  .content-container
    max-width: 600px
    width: 90%
    display: flex
    flex-direction: column
    gap: 2rem

    h1
      font-size: 3rem
      font-weight: 900

    p
      font-size: 1.5rem
      font-weight: 400

@media (max-width:1200px)
  .content-container
    justify-content: center
    text-align: center

    h1
      font-size: 2rem
      font-weight: 700

    p
      font-size: 1.1rem
      max-width: 400px
      width: 100%
      align-self: center
</style>
