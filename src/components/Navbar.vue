<template>
  <nav>
    <div class="nav-left">
      <a href="/">
        <svg
          viewBox="0 0 111 30"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="default-ltr-cache-mv4tc2 eaitdun1 netflix"
        >
          <g>
            <path
              d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
            ></path>
          </g>
        </svg>
      </a>
    </div>
    <div class="nav-right">
      <div class="lang-select">
        <v-icon name="io-globe" class="globe" fill="white" />
        <select name="lang" id="lang" v-model="defLang">
          <option v-for="l in langs" :key="l.id" :value="l.name">
            {{ l.name }}
          </option>
        </select>
      </div>
      <button>sign in</button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const defLang = ref('english');
const langs = [
  { id: 1, name: 'english' },
  { id: 2, name: 'spanish' },
];
</script>

<style scoped lang="sass">
@import '../styles/_variables.sass'

nav
  width: 95%
  max-width: 1100px
  align-self: center
  display: flex
  align-items: center
  justify-content: space-between
  background-color: transparent
  height: 5.5rem
  position: sticky
  z-index: 1
  overflow: hidden

.nav-right
  width: fit-content
  height: inherit
  display: flex
  align-items: center
  justify-content: center
  gap: 1.5rem

  .lang-select
    display: flex
    align-items: center
    height: 2rem
    display: flex
    border: 0.5px solid #777
    padding: 0 0.75rem
    border-radius: 3px
    gap: 0.5rem

    select
      outline: none
      border: none
      font-weight: 600
      font-size: 15px
      color: $text-color-light
      background-color: transparent
      text-transform: capitalize

  button
    background-color: $primary-color
    color: $text-color-light
    border: none
    outline: none
    height: 2rem
    text-transform: capitalize
    font-weight: 600
    padding: 0 1rem
    border-radius: 5px
    cursor: pointer

    &:hover
      background-color: rgb(193,17,25)
      transition: all ease 0.5s

    &:not(:hover)
      background-color: $primary-color
      transition: all ease 0.5s

// util styles
.netflix
  fill: $primary-color
  width: 9.25rem
  height: 2.5rem

.globe
  width: 18px
  height: inherit

*:focus
  border: none
  outline: none

@media (max-width: 967px)
  .nav-left svg
    transform: scale(0.75)

@media (max-width:450px)
  nav
    flex-direction: column
    height: fit-content
    row-gap: 1rem
    padding-top: 1rem
</style>
