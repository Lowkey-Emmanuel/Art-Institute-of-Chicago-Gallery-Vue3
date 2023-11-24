<script setup lang="ts">
import MainComponent from '@/components/MainComponent.vue'
import errorImg from '@/assets/img/svg_404_error.svg'
</script>

<template>
  <MainComponent>
    <section class="errorPage">
      <h2 class="errorPage__msg">Sorry, page not found</h2>
      <router-link to="/" class="errorPage__btn">Get back</router-link>
      <div class="errorPage__img">
        <img :src="errorImg" alt="404 error image" />
      </div>
    </section>
  </MainComponent>
</template>

<style lang="scss">
@import '@/assets/scss/_base.scss';

main {
  justify-content: center;
  column-gap: 2em;
}

.errorPage {
  &__msg {
    text-align: center;
    font-size: 4rem;
    font-family: var(--ff-secondary);
    color: var(--clr-black);
  }

  &__btn {
    display: block;
    margin: 0 auto;
    padding: 0.5em 2em;
    font-size: 1rem;
    background-color: var(--clr-brand);
    color: var(--clr-white);
    text-decoration: none;
    text-align: center;
    border: none;
    border-radius: 10px;

    &:hover {
      font-weight: 600;
    }

    &:active {
      font-weight: 600;
      background-color: var(--clr-white);
      color: var(--clr-brand);
      border: var(--clr-brand-200) 1px solid;
    }
  }

  &__img {
    width: 826px;
    & > img {
      display: block;
      max-width: 100%;
    }
  }
}
</style>
