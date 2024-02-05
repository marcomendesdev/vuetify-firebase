<template>
  <v-card class="mx-auto px-6 py-8" max-width="344">
    <v-card-title>Sign up</v-card-title>
    <form>
      <v-text-field
        density="compact"
        v-model="state.email"
        :error-messages="v$.email.$errors.map((e) => e.$message)"
        label="E-mail"
        required
        @input="v$.email.$touch"
        @blur="v$.email.$touch"
      ></v-text-field>

      <v-text-field
        density="compact"
        v-model="state.password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        :error-messages="v$.password.$errors.map((e) => e.$message)"
        label="Password"
        required
        @input="v$.password.$touch"
        @blur="v$.password.$touch"
        @click:append="show1 = !show1"
        type="password"
      ></v-text-field>

      <div class="d-flex">
        <v-btn
          width="48%"
          color="primary"
          @click="register(state.email, state.password)"
        >
          submit
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn width="48%" @click="clear"> clear </v-btn>
      </div>
      <v-divider class="my-4"></v-divider>
      <v-btn block class="me-4" color="success" @click="signInWithGoogle">
        sign in with google
      </v-btn>
    </form>
  </v-card>
</template>
<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Swal from "sweetalert2";

const show1 = ref(false);

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

const initialState = {
  email: "",
  password: "",
};

const state = reactive({
  ...initialState,
});

const rules = {
  email: { required, email },
  password: { required },
};

const v$ = useVuelidate(rules, state);

function clear() {
  v$.value.$reset();

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value;
  }
}
</script>
