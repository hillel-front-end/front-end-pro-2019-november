<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>x

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created() {
    console.log('worked');
    console.log(this.$router);
    console.log(this.$route)
    // setTimeout(() =>  this.$router.push({path:'about'}), 3000);
  }
}
</script>
