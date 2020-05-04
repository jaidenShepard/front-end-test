import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        galleryItems: []

    },
    mutations: {
        setGalleryItems: (state, galleryItems) => (state.galleryItems = galleryItems),
    },
    getters: {
        allGalleryItems: state => state.galleryItems,
        numberOfGalleryItems: state => state.galleryItems.length
    },
    actions: {

    },
});
