<template>
  <div class="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Header from './components/Header';
import json from '../public/json/item-list.json';

export default {
    name: 'App',
    components: { Header },
    methods: {
        ...mapMutations(['setGalleryItems']),
    },
    created() {
        this.setGalleryItems(json.items);
    },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Open Sans";
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
