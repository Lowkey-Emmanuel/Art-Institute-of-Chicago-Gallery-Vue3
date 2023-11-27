<script setup lang="ts">
import MainComponent from '@/components/MainComponent.vue'
import Logo from '@/assets/img/logo_red.svg'
import Illustation from '@/assets/img/svg_login.svg'
</script>

<template>
  <MainComponent>
    <section class="left-section">
      <div class="left-section__wrapper">
        <img :src="Illustation" alt="Login illustration" />
      </div>
    </section>
    <section class="right-section">
<<<<<<< HEAD
      <div class="right-section__wrapper">
        <div class="right-section__header">
          <img class="right-section__logo" :src="Logo" alt="Logo image" />
          <h3 class="right-section__title">Hello! Welcome back</h3>
        </div>
        <form class="right-section__form" action="">
          <div class="form-field">
            <label for="email">Email</label>
            <i class="fa-solid fa-envelope"></i>
            <input type="email" class="email" placeholder="Enter your email adress" />
          </div>
          <div class="form-field">
            <label for="password">Password</label>
            <i class="fa-solid fa-lock"></i>
            <input type="password" class="password" placeholder="Enter your password" />
          </div>
          <div class="form-checkbox">
            <div class="form-checkbox__input">
              <input type="checkbox" class="form__pwd-save" />
              <label for="remember">Remember me</label>
            </div>
            <router-link to="/signup" class="form__pwd-reset">Reset password</router-link>
          </div>
          <button type="submit" class="submit__btn">Login</button>
        </form>
        <div class="text-bar"><span class="bar"></span>or<span class="bar"></span></div>
        <div class="right-section__redirect">
          <p>Don't have an account ?</p>
          <router-link to="/signup" class="right-section__footer--btn">Create account</router-link>
        </div>
=======
      <div class="right-section__header">
        <img class="right-section__logo" :src="Logo" alt="Logo image" />
        <h3 class="right-section__title">Hello! Welcome back</h3>
      </div>
      <form class="right-section__form" action="">
        <div class="form-field">
          <label for="email">Email</label>
          <input type="email" class="email" />
        </div>
        <div class="form-field">
          <label for="password">Password</label>
          <input type="password" class="password" />
        </div>
        <div class="form-field">
          <label for="remember">Remember me</label>
          <input type="checkbox" />
          <router-link to="/signup" class="right-section__footer--btn">Reset password</router-link>
        </div>
        <div class="form-field">
          <input type="button" class="errorPage__btn" value="Login" />
        </div>
      </form>
      <div class="text-bar"><span class="bar"></span>or<span class="bar"></span></div>
      <div class="right-section__redirect">
        <p>Don't have an account ?</p>
        <router-link to="/signup" class="right-section__footer--btn">Create account</router-link>
>>>>>>> df87c20e382804fb37f90c030bc95c28ffffd909
      </div>
    </section>
  </MainComponent>
</template>

<style lang="scss">
@import '@/assets/scss/_base.scss';
main {
  flex: 1;
  font-family: var(--ff-secondary);
  color: var(--clr-black);
}
.left-section {
  display: flex;
<<<<<<< HEAD
  flex-direction: column;
  flex: 1;
=======
  flex: 1;
  flex-direction: column;
>>>>>>> df87c20e382804fb37f90c030bc95c28ffffd909
  &__wrapper {
    position: relative;
    min-width: 100%;
    height: 75vh;
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
<<<<<<< HEAD
  display: flex;
  flex-direction: column;
  flex: 1;

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100%;
    min-height: 100%;
  }
=======
  width: 100%;
  min-height: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
>>>>>>> df87c20e382804fb37f90c030bc95c28ffffd909

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
<<<<<<< HEAD
    margin-bottom: 2rem;
=======
>>>>>>> df87c20e382804fb37f90c030bc95c28ffffd909
  }

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
    align-items: center;

    & label {
<<<<<<< HEAD
      font-weight: 600;
      font-size: 20px;
      margin-left: 1rem;
    }

    & input {
      width: 466px;
      height: 50px;
      background-color: var(--clr-white);
      padding-inline: 1em;
      border: var(--clr-brand-200) 1px solid;
      border-radius: 10px;

      &:focus-visible {
        box-shadow: 2px 4px 3px var(--clr-brand-200);
        outline: none;
      }

      &::placeholder {
        color: var(--clr-input);
        font-size: 1.2rem;
        font-weight: 600;
        letter-spacing: 0.5px;
      }
    }
    & .submit__btn {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 100%;
      height: 40px;
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
=======
      font-weight: 700;
      font-size: 20px;
      margin-left: 1rem;
    }
    & input {
      width: 466px;
      height: 45px;
      background-color: var(--clr-white);
      color: #1a000782;
      padding-inline: 1em;
      border: var(--clr-brand-200) 1px solid;
      border-radius: 10px;
    }
  }
  &__btn {
    display: block;
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
>>>>>>> df87c20e382804fb37f90c030bc95c28ffffd909
  text-bar {
    display: inline;
    text-align: center;
  }
  .bar {
    display: inline;
    min-width: 100%;
    height: 1px;
    background-color: var(--clr-brand-200);
  }
  &__redirect {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

<<<<<<< HEAD
  .form {
    &-field {
      display: flex;
      flex-direction: column;
      gap: 0.5em;
      margin-bottom: 1.5rem;
    }
    &-checkbox {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      & a {
        color: var(--clr-brand);
        text-decoration: none;
        font-weight: 600;
      }

      &__input {
        display: flex;
        align-items: center;
        & label {
          font-size: 1rem;
          margin: 0.5rem;
        }

        & > input[type='checkbox'] {
          margin: 0;
          width: 1rem;
        }
      }
    }
=======
  .form-field {
    display: flex;
    flex-direction: column;
>>>>>>> df87c20e382804fb37f90c030bc95c28ffffd909
  }
}
</style>
