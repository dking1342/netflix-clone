<template>
  <main>
    <Navbar />
    <HeroHome />
    <section class="enjoy promo">
      <ContentContainer
        title="Enjoy your TV"
        body="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
      />
      <MediaContainer
        video-src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
        img-src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        video-width="85%"
        video-height="70%"
        video-top="20%"
        video-left="13%"
      />
    </section>
    <section class="watch promo">
      <MediaContainer
        video-src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
        img-src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
        video-width="63%"
        video-height="100%"
        video-top="15%"
        video-left="17%"
      />
      <ContentContainer
        title="Watch everywhere"
        body="Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV."
      />
    </section>
    <section class="kids promo">
      <ContentContainer
        title="Create profiles for kids"
        body="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
      />
      <div class="media-container">
        <div class="tv-wrapper">
          <img
            src="https://occ-0-7-1723.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
            alt="kids promo pic"
          />
        </div>
      </div>
    </section>
    <section class="download promo">
      <div class="media-container">
        <div class="tv-wrapper">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="stranger things promo"
            class="download-promo-img"
          />
          <div class="download-media-container">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              alt="stranger things small promo"
            />
            <div class="download-menu">
              <h1 class="download-menu-title">Stranger Things</h1>
              <p class="download-menu-body">Downloading...</p>
            </div>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
              alt="download gif"
              class="download-img-gif"
            />
          </div>
        </div>
      </div>
      <ContentContainer
        title="Download your shows to watch offline"
        body="Only available on ad-free plans."
      />
    </section>
    <section class="faq promo">
      <h1>Frequently Asked Questions</h1>
      <FaqCards :faq-data="faqData.value" />
    </section>
    <section class="started promo">
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div class="promo-started">
        <div class="form-group">
          <input type="email" name="email" id="email" placeholder=" " />
          <label for="email" class="float-label">Email Address</label>
        </div>
        <button>
          get started
          <v-icon name="co-chevron-right" fill="white" />
        </button>
      </div>
    </section>
    <HomeFooter />
  </main>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import HeroHome from '../components/HeroHome.vue';
import ContentContainer from '../components/ContentContainer.vue';
import MediaContainer from '../components/MediaContainer.vue';
import FaqCards from '../components/cards/FaqCards.vue';
import { reactive } from 'vue';
import HomeFooter from '../components/HomeFooter.vue';

const faqData = reactive({
  value: [
    {
      id: 1,
      title: 'What is Netflix?',
      body: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\n\n You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
      isOpen: false,
    },
    {
      id: 2,
      title: 'How much does Netflix cost?',
      body: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $6.99 to $19.99 a month. No extra costs, no contracts.',
      isOpen: false,
    },
    {
      id: 3,
      title: 'Where can I watch?',
      body: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\n\n You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
      isOpen: false,
    },
    {
      id: 4,
      title: 'How do I cancel?',
      body: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
      isOpen: false,
    },
    {
      id: 5,
      title: 'What can I watch on Netflix?',
      body: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
      isOpen: false,
    },
    {
      id: 6,
      title: 'Is Netflix good for kids?',
      body: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.\n\n Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.',
      isOpen: false,
    },
  ],
});
</script>

<style scoped lang="sass">
@import '../styles/_variables.sass'

main
  background-color: $main-bg
  height: fit-content
  min-height: 100vh
  display: flex
  flex-direction: column
  gap: 2.5rem

.promo
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

.kids
  height: fit-content
  .media-container
    max-width: 600px
    width: 100%
    height: 400px
  .tv-wrapper
    position: relative
    width: 100%
    height: 100%
    display: flex
    align-items: center
    justify-content: center

    img
      width: 100%
      height: auto
      max-height: 100%

.download
  height: fit-content

  .media-container
    max-width: 600px
    width: 100%
    height: 400px

    .tv-wrapper
      position: relative
      width: 100%
      height: 100%

      .download-promo-img
        width: 100%
        height: 100%
        position: absolute
        inset: 0
        object-fit: cover

      .download-media-container
        width: 90%
        height: 120px
        position: absolute
        bottom: 0px
        left: 50%
        transform: translateX(-50%)
        display: flex
        align-items: center
        justify-content: space-around
        background: #000
        border: 1px solid #fff
        border-radius: 10px
        padding: 1rem 0

        img
          height: 100%

        .download-img-gif
          height: 50%

        .download-menu
          display: flex
          flex-direction: column
          gap: 0.5rem
          align-items: flex-start
          overflow: hidden

          h1
            font-weight: 800
            font-size: 1.3rem

          p
            font-size: 1rem
            color: #0071eb

.faq
  h1
    font-size: 3rem
    font-weight: 900
    max-width: 1100px
    width: 95%
    text-align: center

.started
  display: flex
  flex-direction: column
  gap:2rem

  p
    font-size: 1.25rem
    font-weight: 400
    text-align: center
    max-width: 800px
    width: 95%

  .promo-started
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

@media (max-width:1200px)
  .watch,
  .download
    .media-container
      order:2
</style>
