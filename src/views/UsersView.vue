<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="user in users"
        :key="user.id"
        cols="12"
        sm="6"
        md="6"
        lg="3"
      >
        <UserCard>
          <template #avatar>
            <div class="d-flex align-center px-4">
              <v-avatar size="40">
                <v-img
                  :src="user.image"
                  alt="John"
                ></v-img>
              </v-avatar>
              <v-card-item>
                <v-card-title>{{ user.maidenName }}</v-card-title>
                <v-card-subtitle>{{ user.firstName }} {{ user.lastName }}</v-card-subtitle>
              </v-card-item>
            </div>
            <v-divider :thickness="1" class="border-opacity-25"></v-divider>
          </template>

          <template #title>
            <v-container>
              <div class="d-flex flex-column">
                <v-card-subtitle
                  ><b>City:</b> {{ user.address.city }}</v-card-subtitle
                >
                <v-card-subtitle
                  ><b>Department:</b>
                  {{ user.company.department }}</v-card-subtitle
                >
                <v-card-subtitle
                  ><b>Role:</b> {{ user.company.title }}</v-card-subtitle
                >
                <v-card-subtitle
                  ><b>Phone:</b> {{ user.phone }}</v-card-subtitle
                >
                <v-card-subtitle
                  ><b>Email:</b> {{ user.email }}</v-card-subtitle
                >
              </div>
            </v-container>
          </template>
        </UserCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useUsersStore } from "../store/app";
import UserCard from "../components/cards/UserCard.vue";

const store = useUsersStore();

onMounted(async () => {
  await store.fetchUsers();
});

const users = computed(() => store.users);

console.log("Users: ", users.value);
</script>
