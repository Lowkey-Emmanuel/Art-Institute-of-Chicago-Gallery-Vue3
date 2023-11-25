<script setup lang="ts">
import MainComponent from '@/components/MainComponent.vue'
import CardComponent from '@/components/CardComponent.vue'
</script>

<template>
  <MainComponent>
    <section class="gallery">
      <section class="gallery__nav">
        <div class="gallery__form">
          <form class="gallery__form--input">
            <input type="text" placeholder="&#61442; Rechercher ..." />
          </form>
        </div>
        <div class="gallery__form--pagination">
          <b-pagination
            v-model="l"
            :total-rows="0"
            :per-page="1"
            aria-controls="my-table"
          ></b-pagination>
        </div>
      </section>
      <section class="gallery__grid">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
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

  &__form--input > input {
    width: 335px;
    height: 45px;
    background-color: var(--clr-white);
    color: #1a000782;
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
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    gap: 1em;
  }
}
</style>
