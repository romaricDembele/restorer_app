<template>
  
  <v-btn @click="showDialog = true">Create Menu</v-btn>
  
  <v-dialog v-model="showDialog">
    <v-card>
      <v-card-title>Create a new Menu</v-card-title>
      <v-form @submit.prevent="createMenu">
        <v-text-field label="Menu Name" v-model="menu.name" required />
        <template v-for="article in articles" :key="article._id">
          <v-checkbox
            v-model="selectedArticles"
            :label="article.name"
            :value="article"
            color="primary"
          ></v-checkbox>
        </template>
        <v-text-field label="Price" v-model="menu.price" type="number" required />
        <!-- <v-file-input v-model="menu.image_url" label="Upload Image" @change="handleFileUpload"></v-file-input> -->
        <v-btn type="submit" color="primary">Create Menu</v-btn>
      </v-form>
    </v-card>
  </v-dialog>

</template>



<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Product, Article, Menu } from '@/utils/interfaces';
  import store from '@/store';

  export default defineComponent({
    data() {
      return {
        showDialog: ref(false),
        menu: ref<Menu>({
          name: '',
          articles: [],
          price: 0,
          image_url: '',
        }),
        articles: ref<Product[]>(store.state.products),
        selectedArticles: ref<Article[]>([])
      };
    },
    methods: {
      handleFileUpload(event: any) {
        // handle the file upload here, for example, by using the FileReader API
      },
      createMenu() {
        // Use the selected articles, menu name, price and image to create a menu
        // console.log(this.menu);
        this.showDialog = false;

        let articles_ids: any = []
        this.selectedArticles.forEach((element) => {
          // console.log(element._id);
          articles_ids.push(element._id)
        });

        console.log(articles_ids);
        console.log(this.menu.name)
        console.log(this.menu.price)
        store.dispatch('createMenu', {
            name: this.menu.name,
            articles: articles_ids,
            price: this.menu.price
        });
        this.$router.go(0);
      },
    },
  });
</script>



  

  