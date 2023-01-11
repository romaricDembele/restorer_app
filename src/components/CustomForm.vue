<template>
  <v-dialog>
    <v-card>
      <v-card-title>
        Add Article
      </v-card-title>
      <v-form @submit.prevent="submit" >
        <v-container>
          <v-row>
            <v-col>
              <v-text-field label="Name" v-model="name" :rules="nameRules" required />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field label="Quantity" v-model="quantity" :rules="quantityRules" type="number" required />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field label="Price" v-model="price" :rules="priceRules" type="number" required />
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn color="primary" type="submit" :disabled="!valid" >Submit</v-btn>
          <v-btn color="error" @click="close">Cancel</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>

</template>


<script lang="ts">

import { defineComponent, Prop } from 'vue';

interface FormData {
    name:string,
    quantity:number,
    price:number
}

export default defineComponent({
  props: {
    name: {
      type: String,
      default: ''
    },
    quantity: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      default: 0
    },
    showForm: {
      type: Boolean,
      default: false
    }
  },
  // data(): FormData {
  //   return {
  //     nameRules: [
  //       v => !!v || 'Name is required',
  //       v => (v && v.length <= 10) || 'Name must be less than 10 characters'
  //     ],
  //     quantityRules: [
  //       v => !!v || 'Quantity is required',
  //       v => (v && v > 0) || 'Quantity must be greater than 0'
  //     ],
  //     priceRules: [
  //       v => !!v || 'Price is required',
  //       v => (v && v > 0) || 'Price must be greater than 0'
  //     ],
  //   }
  // },
  // computed:{
  //   valid(): boolean {
  //       return !this.errors.items.filter(e => e.field == 'name').length && !this
  //   }
  // },
  methods:{
    close(): void {
      this.$emit("close")
    },
    submit(): void {
      // if(this.valid){
      //   this.$emit("submit",{name: this.name, quantity: this.quantity, price: this.price})
      // }
      this.$emit("submit",{name: this.name, quantity: this.quantity, price: this.price})
    }
  },
});

</script>