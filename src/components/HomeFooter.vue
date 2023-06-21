<template>
  <footer>
    <h4>Questions? Call <a href="tel:1-844-505-2993">1-844-505-2993</a></h4>
    <ul>
      <li v-for="item in footerLinks" :key="item.id">
        <router-link :to="item.link">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<script setup lang="ts">
const footerLinks = [
  {
    id: 1,
    name: 'FAQ',
    link: '#',
  },
  {
    id: 2,
    name: 'Media Center',
    link: '/media-center',
  },
  {
    id: 3,
    name: 'Netflix Shop',
    link: '#',
  },
  {
    id: 4,
    name: 'Ways to Watch',
    link: '#',
  },
  {
    id: 5,
    name: 'Cookie Preference',
    link: '#',
  },
  {
    id: 6,
    name: 'Speed Test',
    link: '#',
  },
  {
    id: 7,
    name: 'Help Center',
    link: '#',
  },
  {
    id: 8,
    name: 'Investor Relations',
    link: '#',
  },
  {
    id: 9,
    name: 'Redeem Gift Cards',
    link: '#',
  },
  {
    id: 10,
    name: 'Terms of Use',
    link: '#',
  },
  {
    id: 11,
    name: 'Corporate Information',
    link: '#',
  },
  {
    id: 12,
    name: 'Legal Notices',
    link: '#',
  },
  {
    id: 13,
    name: 'Account',
    link: '#',
  },
  {
    id: 14,
    name: 'Jobs',
    link: '#',
  },
  {
    id: 15,
    name: 'Buy Gift Cards',
    link: '#',
  },
  {
    id: 16,
    name: 'Privacy',
    link: '#',
  },
  {
    id: 17,
    name: 'Contact Us',
    link: '#',
  },
  {
    id: 18,
    name: 'Only on Netflix',
    link: '#',
  },
  {
    id: 19,
    name: 'Do Not Sell or Share My Personal Information',
    link: '#',
  },
];
</script>

<style scoped lang="sass">
footer
  color: rgba(255,255,255,0.7)
  max-width: 1500px
  width: 95%
  margin: 0 auto
  display: flex
  flex-direction: column
  gap: 1.5rem
  padding-bottom:3rem

  h4
    font-size: 1rem
    font-weight: 500

  a
    text-decoration: underline

  ul
    height: 100%
    width: 100%
    display: grid
    grid-template-columns: repeat(auto-fill,minmax(350px,1fr))
    gap:0.5rem
</style>
