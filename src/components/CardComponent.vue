<script setup lang="ts">
import cardImage from '@/assets/img/pxfuel.jpg'
</script>

<template>
  <article class="card">
    <img :src="cardImage" alt="Painting image" class="card__img" />
    <div class="card__infos">
      <h3 class="card__title">La Joconde</h3>
      <p class="card__artist">Leonardo Da Vinci</p>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/scss/_base.scss';

.card {
  position: relative;
  aspect-ratio: 4/5;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 2px 5px var(--clr-brand-200);
  overflow: hidden;

  &__img {
    flex: 1;
  }

  &__infos {
    position: absolute;
    display: block;
    width: 100%;
    padding: 0.2em 1.3em;
    bottom: 0;
    background-color: hsla(0, 0%, 100%, 0.168);
  }

  &__title {
    font-size: 1.2rem;
    color: var(--clr-white);
  }
  &__artist {
    color: var(--clr-brand-200);
  }
}
</style>
