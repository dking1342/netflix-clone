<template>
  <button @click="onClickDropDown">
    <span>{{ props.val.title }}</span>
    <span v-if="!props.val.isOpen">
      <PlusIcon />
    </span>
    <span v-else>
      <CloseIcon />
    </span>
  </button>
  <div>
    <p>{{ props.val.body }}</p>
  </div>
</template>

<script setup lang="ts">
import { FaqData } from '../../types/faqCard';
import CloseIcon from '../CloseIcon.vue';
import PlusIcon from '../PlusIcon.vue';

const props = defineProps<{
  val: FaqData;
}>();

const onClickDropDown = (e: any) => {
  if (props.val.isOpen) {
    e.target.nextElementSibling.style.maxHeight = '0px';
  } else {
    e.target.nextElementSibling.style.maxHeight = '500px';
  }
  setTimeout(() => {
    props.val.isOpen = !props.val.isOpen;
  }, 500);
};
</script>

<style scoped lang="sass">
@import '../../styles/_variables.sass'
button
  width: 100%
  height: 80px
  background-color: transparent
  display: flex
  align-items: center
  justify-content: space-between
  padding: 0 1.5rem
  font-weight: 700
  outline: 0
  border: 0
  background-color: rgb(45,45,45)
  cursor: pointer
  transition: background-color ease 0.25s

  &:hover
    background-color: rgb(78,78,78)

  svg
    path
      fill: #fff

  span
    color: $text-color-light
    font-size: 1.4rem
    pointer-events: none

    &:nth-child(2)
      font-size: 3rem
      font-weight: 500
      pointer-events: none

div
  width: 100%
  background: rgb(45, 45, 45)
  font-size: 1.4rem
  line-height: 1.5
  max-height: 0px
  overflow: hidden
  height: fit-content
  transition: 1.5s ease all


  p
    padding: 1rem 1.5rem
    white-space: break-spaces
</style>
