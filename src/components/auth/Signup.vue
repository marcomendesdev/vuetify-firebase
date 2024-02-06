<template>
  <ReusableForm
    formName="Sign up"
    @submit="register"
    @useGoogle="signInWithGoogle"
  />
</template>

<script setup>
import { useRouter } from "vue-router";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Swal from "sweetalert2";
import ReusableForm from "../forms/ReusableForm.vue"; // adjust the path as necessary

const router = useRouter();

const auth = getAuth();

async function register(email, password) {
  try {
    await createUserWithEmailAndPassword(auth, email, password).then((data) => {
      console.log("Success in register");
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "You have successfully signed up!",
      });
      router.push("/");
    });
  } catch (error) {
    console.error(error);
  }
}

async function signInWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
  } catch (error) {
    console.error(error);
  }
}
</script>
