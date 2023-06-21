<template>
  <div class="hero-started-container">
    <div class="form-group">
      <input type="email" name="email" id="email" placeholder=" " />
      <label for="email" class="float-label">Email Address</label>
    </div>
    <button>
      get started
      <v-icon name="co-chevron-right" fill="white" />
    </button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="sass">
@import '../styles/_variables.sass'
.hero-started-container
  display: flex
  gap: 0.5rem
  flex-wrap: wrap
  width: 95%
  align-items: center
  justify-content: center

  .form-group
    height: 56px
    max-width: 400px
    width: 100%
    position: relative
    background: rgba(0,0,0,0.5)
    border: 0.5px solid #777
    border-radius: 5px

    .float-label
      position: absolute
      left: 10px
      top: 50%
      font-size: 20px
      transform: translateY(-50%)
      transition: 0.5s all ease

    input
      width: 100%
      position: absolute
      inset: 0
      background: transparent
      border: 0
      outline: 0
      padding-left: 10px
      color: $text-color-light
      font-size: 20px
      border-radius: 5px

      &:focus + .float-label,
      &:not(:placeholder-shown) + .float-label
        font-size: 12px
        top:8px
        transition: all ease 0.5s

      &:focus
        border: 1px solid #fff


  button
    height: 56px
    padding: 0 1.5rem
    background-color: $primary-color
    color:$text-color-light
    outline: none
    border: none
    border-radius: 5px
    text-transform: capitalize
    font-size: 1.5rem
    font-weight: 600
    display: flex
    align-items: center
    justify-content: center
    gap: 0.5rem
    cursor: pointer
    transition: all ease 0.5s

    &:hover
      background-color: rgb(193,17,25)
      transition: all ease 0.5s
</style>
