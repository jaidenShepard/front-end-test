<template>
  <div class="item">
    <div class="titleOverlay">New York</div>
    <img src="/img/city-01.jpg" width="481" height="272" />
    <i class="fas fa-check-circle fa-2x icon check" />
    <i class="fas fa-times-circle fa-2x icon cross"></i>
  </div>
</template>

<script>
export default {
  name: "GalleryItem",
  props: ["item"]
};
</script>

<style scoped>
.item {
  /* padding-top: 56.25%; */
  position: relative;
  /* background: blueviolet; */
  /* width: 50%; */
  /* max-width: 300px; */
}
.image {
  padding-top: 56.25%;
  display: contents;
  /* width: 100%; */
  height: auto;
}
.titleOverlay {
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  color: white;
  padding: 10px;
}
.icon {
  color: white;
  position: absolute;
  bottom: 20px;
}
.check {
  left: 30px;
}
.cross {
  right: 30px;
}
</style>
