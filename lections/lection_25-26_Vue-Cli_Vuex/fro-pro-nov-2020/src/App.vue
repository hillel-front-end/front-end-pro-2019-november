<template>
  <div id="app">
    <header> 
      <router-link to="/">HelloWold</router-link>
      <br />
      <router-link to="/about">About</router-link>
    </header>
    <router-view> </router-view>
  </div>
</template>

<script>
import HelloWold from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWold: HelloWold
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
