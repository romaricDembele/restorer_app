<template>
    <v-row class="pa-12  ">
        <v-col cols="10" offset="1">
            <v-row>
                <v-col cols="4" v-for="product in products">
                    <Product :product="product" :key="product.product_id"></Product>

                    <!-- <RouterLink v-bind:to="{ name:'detail', params: { product: JSON.stringify(product) } }" >
                        <Product :product="product" :key="product.product_id"></Product>
                    </RouterLink> -->
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import Product from '@/components/Product.vue'
    import products from '@/products'
    import { RouterLink } from 'vue-router'
    export default defineComponent({
        data(){
            return {
                products,
            }
        },
        components: {
            Product
        }
    })
</script>

<style>
    .justify-content-center {
        justify-content: center;
    }
</style>