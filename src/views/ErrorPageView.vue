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

.errorPage {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;

  &__msg {
    text-align: center;
    font-size: 64px;
    font-weight: 700;
    font-family: var(--ff-secondary);
    color: var(--clr-black);
  }

  &__btn {
    width: 233px;
    height: 44px;
    padding: 10px;
    font-size: 1rem;
    line-height: 24px;
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
    width: 1024px;
    & > img {
      display: block;
      max-width: 100%;
    }
  }
}
</style>
