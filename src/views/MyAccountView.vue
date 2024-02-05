<template>
  <div>
    <h1>My Account</h1>

    <UserCard v-if="user">
      <template #avatar>
        <div class="d-flex align-center px-4">
          <v-avatar size="40">
            <v-img
              :src="user.photoURL"
              alt="John"
            ></v-img>
          </v-avatar>
          <v-card-item>
            <v-card-title>{{ user.displayName }}</v-card-title>
            <v-card-subtitle>{{ user.email }}</v-card-subtitle>
          </v-card-item>
        </div>
        <v-divider :thickness="1" class="border-opacity-25"></v-divider>
      </template>

      <template #title>
        <v-card-title
          >Firebase doesn't provide too much info to render.<br> This is some custom content inside the user card.</v-card-title
        >
      </template>
      <template #text>
        <v-card-text
          >This is some custom content inside the user card.</v-card-text
        >
      </template>
    </UserCard>
  </div>
</template>

<script setup>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import UserCard from "../components/cards/UserCard.vue";
import { ref } from 'vue';

const auth = getAuth();
let user = ref(null);

onAuthStateChanged(auth, (currentUser) => {
  if (currentUser) {
    user.value = currentUser;
    console.log(user.value);
  } else {
    console.log('No user is signed in');
  }
});
</script>
