<template>
    <h1>Welcome to the MENUS view!</h1>
    <Products product-type="menu" :products="menus"></Products>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Products from '@/components/Products.vue';
import store from '@/store';

export default defineComponent({
    name:'MenusView',
    components: {
        Products
    },
    computed: {
        menus(){
            return store.state.menus;
        },
    },
    mounted(){
        store.dispatch('fetchMenus')
    },

});

</script>

<style></style>