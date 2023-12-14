<script setup lang="ts">
import MainComponent from '@/components/MainComponent.vue'
import CardComponent from '@/components/CardComponent.vue'
import axios, { type AxiosAdapter } from 'axios'
import { onMounted } from 'vue'
import { type Art, type ArtList } from '@/types/ArtType'
import { API_URL, fetchImage, getData } from '@/api/API'

//fecthing global art data
let artItems = null

const prom = Promise.resolve(getData())
prom.then((v) => {
  return v
})

console.log(prom);


/*
const getData = async () => {
  try {
    const response = await axios.get(API_URL)
  } catch (error) {
    console.log(error)
  }

}
console.log(artItems)
*/

</script>

<template>
  <MainComponent>
    <section class="gallery">
      <section class="gallery__nav">
        <div class="gallery__form">
          <form class="gallery__form--input">
            <input type="text" placeholder="Rechercher ..." />
          </form>
        </div>
      </section>
      <section class="gallery__grid">
        <div></div>
      </section>
    </section>
  </MainComponent>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_base.scss';

main {
  align-items: start;
}

.gallery {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  gap: 2em;
  margin-inline: 8em;
  margin-top: 2rem;

  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__form--input {
    & > input {
      width: 335px;
      height: 45px;
      background-color: var(--clr-white);
      color: var(--clr-input);
      padding-inline: 1em;
      border: var(--clr-brand-200) 1px solid;
      border-radius: 10px;

      &:focus-visible {
        box-shadow: 2px 4px 3px var(--clr-brand-200);
        outline: none;
      }

      &::placeholder {
        font-family: var(--ff-base), FontAwesome;
      }
    }
  }
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    gap: 1em;
  }
}
</style>
