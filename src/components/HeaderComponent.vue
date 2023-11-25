<script setup lang="ts">
import mainLogo from '@/assets/img/logo_red.svg'
</script>

<template>
  <header class="header">
    <div class="header-left">
      <img :src="mainLogo" alt="Main logo" />
    </div>
    <div class="header-right">
      <nav>
        <ul class="header__links">
          <li class="home active"><router-link to="/">Acceuil</router-link></li>
          <li class="search"><router-link to="/recherche">Recherche</router-link></li>
          <li class="about"><router-link to="/apropos">A propos</router-link></li>
        </ul>
      </nav>
      <router-link to="/login" class="header__loginBtn">Connexion</router-link>
    </div>
  </header>
</template>

<style lang="scss">
@import '@/assets/scss/_base.scss';

.header {
  width: 100%;
  height: 103px;
  padding-inline: 8em;
  background-color: var(--clr-brand-900);
  color: var(--clr-white);

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  &-left {
    width: 80px;
    aspect-ratio: 1/1;

    & img {
      max-width: 100%;
      display: block;
    }
  }

  &-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15em;
  }

  &__links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3em;

    & li > .active-link {
      position: relative;
      font-weight: 600;
      border-bottom: 4px var(--clr-white) solid;
    }
  }

  & li > * {
    display: block;
    color: var(--clr-white);
    text-decoration: none;
  }

  &__loginBtn {
    display: block;
    text-decoration: none;
    padding: 0.5em;
    background-color: var(--clr-brand);
    color: var(--clr-white);
    text-align: center;
    border: none;
    border-radius: 10px;

    &:hover {
      font-weight: 600;
    }

    &:active {
      transform: scale(1);
      font-weight: 600;
      background-color: var(--clr-white);
      color: var(--clr-brand);
      border: var(--clr-brand-200) 1px solid;
    }
  }
}
</style>
