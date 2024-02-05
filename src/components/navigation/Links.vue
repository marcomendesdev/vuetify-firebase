<template>
  <v-list density="compact" nav>
    <v-list-item
      v-for="item in listItems"
      :prepend-icon="item.icon"
      :title="item.title"
      :key="item.value"
      :to="item.path"
    />

    <v-list-group prepend-icon="mdi-email-outline" value="messages">
      <template v-slot:activator="{ props }">
        <v-list-item v-bind="props" title="Messages" />
      </template>

      <v-list-item
        v-for="item in messageItems"
        :prepend-icon="item.icon"
        :title="item.title"
        :key="item.value"
        :to="item.path"
      />
    </v-list-group>
  </v-list>
</template>

<script setup>
import { ref } from "vue";

const listItems = ref([
  {
    icon: "mdi-view-dashboard-outline",
    title: "Dashboard",
    value: "dashboard",
    path: "/dashboard",
  },
  {
    icon: "mdi-account",
    title: "My Account",
    value: "account",
    path: "/my-account",
  },
  {
    icon: "mdi-account-group-outline",
    title: "Users",
    value: "users",
    path: "/users",
  },
]);

const messageItems = ref([
  {
    icon: "mdi-inbox-arrow-down",
    title: "Inbox",
    value: "inbox",
    path: "/inbox",
  },
  {
    icon: "mdi-send",
    title: "Send",
    value: "send",
    path: "/send",
  },
  {
    icon: "mdi-alert-octagon",
    title: "Spam",
    value: "spam",
    path: "/spam",
  },
  {
    icon: "mdi-delete",
    title: "Trash",
    value: "trash",
    path: "/trash",
  },
]);
</script>

<style scoped></style>
