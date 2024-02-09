<!-- ReusableForm.vue -->
<template>
  <v-card class="mx-auto px-6 py-8" max-width="344">
    <v-card-title>{{ formName }}</v-card-title>
    <form>
      <v-text-field
        v-for="(field, index) in fields"
        :key="index"
        density="compact"
        v-model="state[field.model]"
        :error-messages="v$[field.model].$errors.map((e) => e.$message)"
        :label="field.label"
        required
        @input="v$[field.model].$touch"
        @blur="v$[field.model].$touch"
        :type="field.type"
        :append-icon="field.appendIcon"
        @click:append="field.clickAppend"
      ></v-text-field>

      <div class="d-flex">
        <v-btn width="48%" color="primary" @click="submit"> submit </v-btn>
        <v-spacer></v-spacer>
        <v-btn width="48%" @click="clear" color="grey-lighten-3"> clear </v-btn>
      </div>
      
      <v-card-item>
        <div class="d-flex align-center">
          <v-divider class="border-opacity-25" :thickness="1"></v-divider>
          <v-card-subtitle class="ma-4">or</v-card-subtitle>
          <v-divider class="border-opacity-25" :thickness="1"></v-divider>
        </div>
      </v-card-item>

      <v-btn
        prepend-icon="custom:IconSVG"
        block
        class="me-4"
        color="success"
        @click="useGoogle"
      >
        {{ btnText }}
      </v-btn>
      <v-card-item>
        <v-card-text v-if="formName === 'Sign up'">
          Already have an account?
          <router-link class="text-decoration-none" to="/login"
            ><b>Log in</b></router-link
          >
        </v-card-text>
        <v-card-text v-else>
          Don't have an account?
          <router-link class="text-decoration-none" to="/signup"
            ><b>Sign up</b></router-link
          >
        </v-card-text>
      </v-card-item>
    </form>
  </v-card>
</template>

<script setup>
import { reactive, defineEmits, computed, defineProps } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";

const props = defineProps({
  formName: {
    type: String,
    default: "Submit",
  },
  btnText: {
    type: String,
    default: "Submit",
  },
  fields: {
    type: Array,
    default: () => [],
  },
});

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

const emit = defineEmits(["submit", "useGoogle"]);

const submit = () => {
  emit("submit", state.email, state.password);
};

const useGoogle = () => {
  emit("useGoogle");
};
</script>
