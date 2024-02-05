<template>
  <v-navigation-drawer
    class="bg-indigo-darken-4"
    :rail="rail"
    @click="rail = false"
  >
    <v-list-item
      :prepend-avatar="user?.photoURL ? user.photoURL : 'https://i.pravatar.cc/150?img=66'"
      :title="user?.displayName ? user.displayName : 'No user is signed in'"
      nav
    >
      <template v-slot:append>
        <v-btn
          variant="text"
          icon="mdi-chevron-left"
          @click.stop="rail = !rail"
        ></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <Links />
  </v-navigation-drawer>
</template>

<script setup>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Links from "./Links.vue";
import { ref } from "vue";

const rail = ref(true);

const auth = getAuth();
let user = ref(null);

onAuthStateChanged(auth, (currentUser) => {
  if (currentUser) {
    user.value = currentUser;
    console.log(user.value);
  } else {
    console.log("No user is signed in");
  }
});
</script>

<style scoped></style>
