<template>
  <div class="main">
    Main
    <header>
      <slot name="header"></slot>
    </header>
    <div class="main__content">
      <slot name="content"></slot>
    </div>
     {{$store.state.name}}
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
  width: 500px;
  height: 300px;
  border: 1px solid green;
  &__title {
    color: red;
  }

  &__content {
    padding: 10px;
  }
}
</style>
