<template>
  <div class="main">
    <header>
      <slot name="header"></slot>
    </header>
    <div class="main__content">
      <slot name="content"></slot>
    </div>

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      value: '123'
    }
  }
}
</script>

<style lang="scss">
.main {
  &__title {
    color: red;
  }

  &__content {
    border: 1px solid red;
    padding: 10px;
  }
}
</style>
