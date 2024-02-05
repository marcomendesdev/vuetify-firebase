<template>
  <v-app id="inspire">
    <TopNav @click="drawer = !drawer" />

    <DrawerNav v-model="drawer" temporary />

    <v-main class="bg-grey-lighten-1">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import DrawerNav from "../components/navigation/DrawerNav.vue";
import TopNav from "../components/navigation/TopNav.vue";
import { ref } from "vue";

const drawer = ref(null);
</script>
