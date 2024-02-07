<template>
  <ReusableForm
    formName="Log in"
    :fields="fields"
    @submit="login"
    @useGoogle="signInWithGoogle"
    btnText="sign in with Google"
  />
</template>

<script setup>
import { ref } from "vue";
import ReusableForm from "../forms/ReusableForm.vue";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";

const router = useRouter();

const fields = ref([
  {
    label: "E-mail",
    model: "email",
    type: "email",
  },
  {
    label: "Password",
    model: "password",
    type: "password",
  },
]);

const auth = getAuth();

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    Swal.fire("Success", "Logged in successfully", "success");
    router.push("/");
  } catch (error) {
    Swal.fire("Error", error.message, "error");
  }
};

const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    Swal.fire("Success", "Signed in with Google successfully", "success");
    router.push("/");
  } catch (error) {
    Swal.fire("Error", error.message, "error");
  }
};
</script>
