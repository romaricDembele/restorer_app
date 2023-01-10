<template>

  <v-app>
    <v-app-bar app>
      <NavBar></NavBar>
    </v-app-bar>

    <SideBar></SideBar>

    <v-main>
      <router-view/>
    </v-main>

    <v-navigation-drawer location="right" width="150" color="grey-lighten-1" permanent>
    </v-navigation-drawer>

    <v-footer app></v-footer>
  </v-app>
  
</template>

<script setup lang="ts">
  import { defineComponent } from 'vue';
  import NavBar from '@/components/NavBar.vue';
  import SideBar from '@/components/SideBar.vue'

  defineComponent({
    components: {
      NavBar,
      SideBar,
    }
  });

</script>

<style>


</style>
