<template>
  <div class="item">
    <div class="titleOverlay">{{item.title}}</div>
    <img :src="getSrc(item.img)" width="481" height="272" />
    <i class="fas fa-check-circle fa-2x icon check" />
    <i class="fas fa-times-circle fa-2x icon cross"></i>
  </div>
</template>

<script>
export default {
    name: 'GalleryItem',
    props: ['item'],
    methods: {
        getSrc(name) {
            return `/img/${name}`;
        },
    },
};
</script>

<style scoped>
.item {
  position: relative;
}
.image {
  display: contents;
  height: auto;
}

.titleOverlay {
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.75);
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
