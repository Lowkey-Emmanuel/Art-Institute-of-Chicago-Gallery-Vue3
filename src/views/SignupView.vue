<script setup lang="ts">
import MainComponent from '@/components/MainComponent.vue'
import Logo from '@/assets/img/logo_red.svg'
import Illustation from '@/assets/img/svg-signup.svg'
import glass from '@/assets/icon/icon_glass.svg'
import lock from '@/assets/icon/icon_lock.svg'
import mail from '@/assets/icon/icon_mail.svg'
import user from '@/assets/icon/icon_user.svg'
</script>

<template>
  <MainComponent>
    <div class="wrapper">
      <div class="left-section">
        <div class="left-section__wrapper">
          <img :src="Illustation" alt="Login illustration" />
        </div>
      </div>
      <div class="right-section">
        <div class="right-section__wrapper">
          <img class="right-section__logo" :src="Logo" alt="Logo image" />
          <h3 class="right-section__title">Create an account</h3>
          <form class="right-section__form" action="">
            <div class="form-field">
              <label for="name">Name</label>
              <input type="name" class="name" />
            </div>
            <div class="form-field">
              <label for="email">Email</label>
              <input type="email" class="email" />
            </div>
            <div class="form-field">
              <label for="password">Password</label>
              <input type="password" class="password" />
            </div>
            <div class="form-field">
              <label for="password__confirmed">Confirm Password</label>
              <input type="password" class="password__confirmed" />
            </div>
            <div class="form-field">
              <router-link to="/login" class="errorPage__btn">Get back</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </MainComponent>
</template>

<style scoped lang="scss">
@import '@/assets/scss/_base.scss';
main {
  justify-content: space-around;
  font-family: var(--ff-secondary);
  color: var(--clr-black);
}
.wrapper {
  display: flex;
  min-width: 100%;
  height: 75vh;
}
.left-section {
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  width: 100%;
  background-color: var(--clr-brand-900);
  border-radius: 0px 30px 30px 0px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 50px;
    background-color: transparent;
  }

  &::before {
    top: -50px;
    border-bottom-left-radius: 30px;
    box-shadow: 0 30px 0 0 var(--clr-brand-900);
  }

  &::after {
    bottom: -50px;
    border-top-left-radius: 30px;
    box-shadow: 0 -30px 0 0 var(--clr-brand-900);
  }

  &__wrapper {
    & > img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 612px;
      height: 497px;
    }
  }
}
.right-section {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &__logo {
    width: 99px;
    height: 99px;
  }

  &__title {
    font-weight: 700;
    font-size: 24px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    align-items: start;

    & .form-field {
      display: flex;
      flex-direction: column;
      align-items: baseline;
    }

    & label {
      font-weight: 500;
      font-size: 20px;
    }
    & input {
      width: 335px;
      height: 45px;
      background-color: var(--clr-white);
      color: #1a000782;
      padding-inline: 1em;
      border: var(--clr-brand-200) 1px solid;
      border-radius: 10px;
    }

    .errorPage__btn {
      display: block;
      max-height: 100%;
    }
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
  }
}
</style>
