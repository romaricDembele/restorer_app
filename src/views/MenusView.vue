<template>
    <h1>Welcome to the MENUS view!</h1>
    <Products></Products>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Products from '@/components/Products.vue';

export default defineComponent({
    name:'MenusView',
    components: {
        Products
    }

});

</script>

<style></style>