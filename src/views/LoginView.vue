<script setup lang="ts">
import MainComponent from '@/components/MainComponent.vue'
import Logo from '@/assets/img/logo_red.svg'
import Illustation from '@/assets/img/svg_login.svg'
</script>

<template>
  <MainComponent>
    <div class="wrapper">
      <section class="left-section">
        <div class="left-section__wrapper">
          <img :src="Illustation" alt="Login illustration" />
        </div>
      </section>
      <section class="right-section">
        <div class="right-section__wrapper">
          <div class="right-section__header">
            <img class="right-section__logo" :src="Logo" alt="Logo image" />
            <h3 class="right-section__title">Hello! Welcome back</h3>
          </div>
          <form class="right-section__form" action="">
            <div class="form-field">
              <label for="email">Email</label>
              <input type="email" class="email" placeholder="Enter your email adress" />
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div class="form-field">
              <label for="password">Password</label>
              <input type="password" class="password" placeholder="Enter your password" />
              <i class="fa-solid fa-lock"></i>
            </div>
            <div class="form-rememberme">
              <div>
                <input type="checkbox" />
                <label for="remember">Remember me</label>
              </div>
              <router-link to="/signup" class="form-rememberme__reset">Reset password</router-link>
            </div>
            <div class="form-field">
              <input type="button" class="loginbtn" value="Login" />
            </div>
          </form>
          <div class="text-bar">or</div>
          <div class="right-section__redirect">
            <p>Don't have an account ?</p>
            <router-link to="/signup" class="signupbtn">Create account</router-link>
          </div>
        </div>
      </section>
    </div>
  </MainComponent>
</template>

<style scoped lang="scss">
@import '@/assets/scss/_base.scss';
main {
  flex: 1;
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
  justify-content: center;
  align-items: center;

  &__wrapper {
    width: auto;

    padding: 0 10em;
  }

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;
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
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;

    & .form-field {
      position: relative;
      display: flex;
      flex-direction: column;

      & i {
        position: absolute;
        display: block;
        font-size: 1.5rem;
        left: 0;
        top: 40%;
        transform: translate(50%, 50%);
      }

      & label {
        font-weight: 700;
        font-size: 20px;
        margin-left: 1rem;
      }
      & input {
        width: 466px;
        height: 50px;
        font-size: 1.3rem;
        background-color: var(--clr-white);
        color: #1a000782;
        padding-left: 2em;
        border: var(--clr-brand-200) 1px solid;
        border-radius: 10px;
        padding-inline: 3.5em;
        outline: none;
        &::placeholder {
          font-family: var(--ff-secondary);
          font-weight: 700;
          color: var(--clr-input);
        }
        &:focus-visible {
          box-shadow: 2px 4px 3px var(--clr-brand-200);
          outline: none;
        }
      }

      & input[type='button'] {
        height: min-content;
        font-family: var(--ff-secondary);
        font-size: 1rem;
        background-color: var(--clr-brand);
        color: var(--clr-white);
        border: none;
        border-radius: 10px;
      }
    }
    & .form-rememberme {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.1rem;

      & > div {
        display: flex;
        align-items: center;
      }

      & input[type='checkbox'] {
        width: 1.3rem;
        height: 1.3rem;
        margin-right: 0.5rem;
        border: none;
        outline: none;
      }
      & label {
        font-size: 1rem;
        font-weight: 700;
        color: var(--clr-brand-900);
      }

      & a {
        font-size: 1rem;
        font-weight: 700;
        text-decoration: none;
        color: var(--clr-brand);
      }
    }
  }
  &__loginbtn {
    display: block;
    height: 30px;
    padding: 10px;
    font-size: 1rem;
    line-height: 24px;
    background-color: var(--clr-brand);
    color: var(--clr-white);
    border: none;
    border-radius: 10px;
  }
  .text-bar {
    position: relative;
    width: 100%;
    font-family: var(--ff-secondary);
    font-weight: 700;
    text-align: center;
    background-color: transparent;
    color: var(--clr-brand-200);
    margin-block: 1.5rem;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      height: 1px;
      width: 40%;
      background-color: var(--clr-brand-200);
      margin-inline: 1em;
    }
    &::before {
      left: 0;
    }
    &::after {
      right: 0;
    }
  }
  &__redirect {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    & p {
      font-size: 1rem;
      font-weight: 700;
      color: var(--clr-brand-900);
    }
    & a {
      font-size: 1rem;
      font-weight: 700;
      text-decoration: none;
      color: var(--clr-brand);
    }
  }
}
</style>
