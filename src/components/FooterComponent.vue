<script setup lang="ts">
import footerLogo from '@/assets/img/logo_black.jpg'
</script>
<template>
  <footer class="footer">
    <div class="footer-left">
      <div class="footer__img">
        <img :src="footerLogo" alt="Footer logo" />
      </div>
      <p class="footer__text">ART INSTITVTE CHICAGO</p>
    </div>
    <div class="footer-right">
      <ul class="footer__items">
        <li>
          <a href="https://www.youtube.com/user/ArtInstituteChicago"
            ><i class="fa-brands fa-youtube"></i
          ></a>
        </li>
        <li>
          <a href="https://twitter.com/artinstitutechi"><i class="fa-brands fa-twitter"></i></a>
        </li>
        <li>
          <a href="https://www.instagram.com/artinstitutechi/"
            ><i class="fa-brands fa-instagram"></i
          ></a>
        </li>
        <li>
          <a href="https://www.facebook.com/artic"><i class="fa-brands fa-facebook"></i></a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss">
@import '@/assets/scss/_base.scss';

.footer {
  width: 100%;
  height: 66px;
  padding-inline: 8em;
  background-color: var(--clr-brand-900);
  color: var(--clr-white);

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  &-left {
    width: 100%;
    display: flex;
    justify-content: stretch;
    align-items: center;
    gap: 0.8em;
  }

  &__img {
    width: 30px;
    aspect-ratio: 1/1;

    & > img {
      color: var(--clr-white);
      max-width: 100%;
      display: block;
      border: var(--clr-white) 3px solid;
    }
  }

  &__text {
    font-size: 12px;
    line-height: 24px;
  }

  &__items {
    display: flex;
    justify-content: center;
    justify-items: center;
    gap: 1rem;
  }

  & li > a {
    display: block;
    color: inherit;
    text-decoration: none;
  }

  &__items {
    gap: 0.4em;
  }

  .fa-brands {
    display: block;
    border: var(--clr-white) 1px solid;
    padding: 0.3em;
    border-radius: 8px;
    &:hover {
      border: var(--clr-brand-200) 1px solid;
      color: var(--clr-brand-200);
      transform: scale(1.5);
    }
  }
}
</style>
