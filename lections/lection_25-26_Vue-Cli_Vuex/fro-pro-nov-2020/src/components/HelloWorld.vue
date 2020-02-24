<template>
<div class="hello">
  ({{$store.state.content}}) !!
  <Main> 
    <template v-slot:header>
      <div class="header__inner">
      шапка
      </div>
    </template>

    <template v-slot:content>
      <div class="contents__inner">
        Conetent
      </div>
    </template>
  </Main>
  <Navigation/>
</div>
</template>

<script>
import Main from './Main'
import Navigation from './Navigation'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Main: Main,
    Navigation: Navigation
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  display: flex;
}
</style>
