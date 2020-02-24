<template>
  <div class="navigation">
    <span @click="onClick" class="navigation__button"> Главная </span>
    <span> Контакты </span>
    <span v-for="item in getFilterData">  {{item}} </span>
    {{getName}}
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex';

console.log(mapActions , 'mapMutations');

export default {
  name: 'navigation',
  data () {
    return {
      value: '123'
    }
  },
  computed: {
    ...mapGetters(['getName', 'getFilterData'])
  },
  methods: {
      ...mapMutations(['setData', 'setName']),
      ...mapActions(['asyncSetName']),
      onClick() {
          // this.$store.dispatch('asyncSetName', 'pety')
          // this.$store.commit('setName', 'Pety');
          this.setData([4,5,7]);
          this.setName('Pety');
          this.asyncSetName();
      }
  }
}
</script>

<style lang="scss">
.navigation {
    border: 1px solid red;
    width: 300px;
    height: 100px;
    &__button {
        display: inline-block;
        padding: 10px;
        border: 1px solid blue;
        border-radius: 10px;
    }
}
</style>
