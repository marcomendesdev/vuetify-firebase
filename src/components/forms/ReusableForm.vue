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

      <v-divider class="my-4"></v-divider>
      <v-btn
        prepend-icon="custom:IconSVG"
        block
        class="me-4"
        color="success"
        @click="useGoogle"
      >
        {{ btnText }}
      </v-btn>
    </form>
  </v-card>
</template>

<script setup>
import { ref, reactive, defineEmits, computed, defineProps } from "vue";
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
});

const show1 = ref(false);

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

const emit = defineEmits(["submit", "useGoogle"]);

const submit = () => {
  emit("submit", state.email, state.password);
};

const useGoogle = () => {
  emit("useGoogle");
};
</script>
