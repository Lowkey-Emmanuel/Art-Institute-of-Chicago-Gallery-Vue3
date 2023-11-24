<template>
  <main>
    <slot></slot>
  </main>
</template>

<style lang="scss">
@import '@/assets/scss/_base.scss';

main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
