<template>
    <div @click="logHello" class="pl-6 pt-9 ">
        <!-- <AddButton @click="showForm = true" buttonText="Add Article"></AddButton> -->
        <!-- <CustomForm :showForm="showForm" @submit="onSubmit" :name="name"  @close="showForm = false"></CustomForm> -->
        <!-- <CustomForm @submit="onSubmit" v-model="name" :quantity="quantity" :price="price" v-if="showForm" @close="showForm = false"></CustomForm> -->
        <Form ></Form>
    </div>
    
    <Products></Products>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

import AddButton from '@/components/AddButton.vue';
import CustomForm from '@/components/CustomForm.vue';
import Form from '@/components/Form.vue';

import Products from '@/components/Products.vue';



interface FormData {
    name:string,
    quantity:number,
    price:number
}

export default defineComponent({
    name:'ArticlesView',
    data(){
        return {
            showForm: false,
            name: '',
            quantity: 0,
            price: 0
        }
    },
    methods: {
        logHello(){
            console.log('HELLO');
        },
        onSubmit(data: FormData){
            console.log(data)
        }
    },
    components: {
        Products,
        AddButton,
        CustomForm,
        Form
    }
});

</script>


<style></style>