<template>
  <ul>
    <li v-for="item in props.faqData">
      <FaqCard :val="item" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { FaqData } from '../../types/faqCard';
import FaqCard from '../cards/FaqCard.vue';

const props = defineProps<{
  faqData: FaqData[];
}>();
</script>

<style scoped lang="sass">
ul
  max-width: 1100px
  width: 95%
  margin: 2rem auto 0
  padding: 0
  display: flex
  flex-direction: column
  gap: 1rem

  li
    width: 100%
    display: flex
    flex-direction: column
    gap: 0.2rem
</style>
