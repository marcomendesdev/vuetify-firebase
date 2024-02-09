<template>
  <ReusableForm
    :fields="fields"
    formName="Sign up"
    @submit="register"
    @useGoogle="signInWithGoogle"
    btnText="sign up with Google"
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
import ReusableForm from "../forms/ReusableForm.vue";
import { ref, computed } from "vue";

const router = useRouter();

const show1 = ref(false);

const fields = computed(() => [
  {
    label: "E-mail",
    model: "email",
    type: "email",
  },
  {
    label: "Password",
    model: "password",
    type: show1.value ? "text" : "password",
    appendIcon: show1.value ? "mdi-eye" : "mdi-eye-off",
    clickAppend: () => (show1.value = !show1.value),
  },
]);

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
