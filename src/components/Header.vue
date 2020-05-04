<template>
  <header class="header">
    <div id="nav">
      <router-link to="/" exact>Home</router-link>
      <router-link to="/gallery" exact>Gallery</router-link>
    </div>
    <span>{{(numberOfItemsMessage())}}</span>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  methods: {
    numberOfItemsMessage() {
      if (this.numberOfGalleryItems == 1) {
        return "There is 1 item";
      } else {
        return `There are ${this.numberOfGalleryItems} items`;
      }
    }
  },
  computed: mapGetters(["numberOfGalleryItems"])
};
</script>

<style scoped>
.router-link-active {
  color: #fff;
  font-weight: bold;
}
a {
  color: #cbcbcb;
}
span {
  color: #fff;
  font-weight: bold;
}
.header {
  background: linear-gradient(
    45deg,
    rgba(17, 17, 51, 1),
    rgba(19, 207, 245, 1)
  );
  text-align: center;
  padding: 10px;
}
.nav {
  align-content: center;
}
.header a {
  padding: 40px;
  text-decoration: none;
}
</style>
