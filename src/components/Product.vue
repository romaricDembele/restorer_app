<template>
    <v-hover v-slot="{isHovering, props}">
        <v-card
            class="mx-auto"
            max-width="344"
            :elevation="isHovering ? 16 : 2"
            :class="{ 'on-hover': isHovering }"
            v-bind="props"
        >
            <v-img
                :src="product.image_url"
                height="200px"
                cover
            ></v-img>
        
            <v-card-title>
                {{ product.product_name }}
            </v-card-title>
        
            <v-card-subtitle>
                Quantity: {{ product.product_quantity }}
            </v-card-subtitle>

            <v-card-subtitle>
                Prix: {{ product.product_price }}
            </v-card-subtitle>
        
            <v-card-actions>
                <v-btn
                color="red"
                variant="text"
                >
                    +
                </v-btn>
                <v-btn
                color="blue"
                variant="text"
                >
                    -
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-hover>

</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import type { PropType } from 'vue';
    interface Product {
        product_id: string,
        product_name: string,
        image_url: string,
        product_quantity: string,
        product_price: string,
    }
    // to use useStore we need to the setup() method.
    // import { useStore } from 'vuex-composition-helpers'
    export default defineComponent({
        name: 'Product',
        props: {
            product: {
                type: Object as PropType<Product>,
                default: function(){
                    return {
                        product_name: "",
                        image_url: '',
                        product_quantity: "00",
                        product_price: "00",
                    }
                }
            },
        },
        data(){
            return {
            }
        },
        methods: {
            addToCart (article: any){
            }
        }
    })
</script>