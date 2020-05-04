<template>
  <div class="gallery">
    <GalleryItem />
    <GalleryItem />
    <GalleryItem />
    <GalleryItem />
    <GalleryItem />
  </div>
</template>

<script>
import GalleryItem from "../components/GalleryItem";
export default {
  name: "Gallery",
  components: { GalleryItem }
};
</script>

<style lang="scss" scoped>
.gallery {
  background: rgb(2, 0, 40);
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: space-evenly;
  height: 100vh;
}
@media (max-width: 576px) {
  .gallery {
    grid-template-columns: 1fr;
  }
}
@media (min-width: 1200px) {
  .gallery {
    grid-template-columns: 4fr;
  }
}
</style>
