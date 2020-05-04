<template>
  <header class="header">
    <div id="nav">
      <router-link to="/" exact>Home</router-link>
      <router-link to="/gallery" exact>Gallery</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
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
