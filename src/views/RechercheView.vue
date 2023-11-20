<script setup lang="ts"></script>

<template>
  <div class="gallery">
    <div class="gallery__nav">
      <div class="gallery__form">
        <form class="gallery__form--input">
          <input type="text" placeholder="Rechercher..." />
        </form>
      </div>
      <div class="gallery__form--pagination">paginating...</div>
    </div>
    <section class="gallery__grid"></section>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_base.scss';

.gallery {
  flex: 1;
  margin-inline: 5em;
  margin-top: 2rem;
  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__form--input > input {
    width: 335px;
    height: 45px;
    background-color: var(--clr-brand-100);
    padding-inline: 1em;

    border: var(--clr-brand-200) 1px solid;
    border-radius: 10px;
  }
}
</style>
