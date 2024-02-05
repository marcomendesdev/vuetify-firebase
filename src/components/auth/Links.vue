<template>
  <v-btn v-if="!isLogged" class="bg-primary mr-2" to="/login">Login</v-btn>
  <v-btn v-if="!isLogged" class="bg-green-darken-3" to="/signup">Signup</v-btn>
  <v-btn v-if="isLogged" class="bg-blue-grey-darken-1" @click="logout"
    >Logout</v-btn
  >
</template>

<script setup>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import Swal from "sweetalert2";

const isLogged = ref(false);
let auth;
const router = useRouter();

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLogged.value = true;
    } else {
      isLogged.value = false;
    }
  });
});

async function logout() {
  try {
    await signOut(auth).then(() => {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "You have successfully logged out!",
      });
      router.push("/login");
    });
  } catch (error) {
    console.error(error);
  }
}
</script>
