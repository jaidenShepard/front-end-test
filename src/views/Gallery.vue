<template>
  <div class="gallery">
    <div v-for="item in items" :key="item.id">
      <GalleryItem v-bind:item="item" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import GalleryItem from '../components/GalleryItem';

export default {
    name: 'Gallery',
    components: { GalleryItem },
    methods: {
        ...mapGetters(['allGalleryItems']),
    },
    props: ['items'],
    created() {
        this.items = this.allGalleryItems();
    },
};
</script>

<style lang="scss" scoped>
.gallery {
  background: rgb(2, 0, 40);
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: stretch;
  justify-content: space-evenly;
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
