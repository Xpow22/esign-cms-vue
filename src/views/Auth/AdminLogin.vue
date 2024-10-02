<template>
  <v-container fluid class="d-flex align-center justify-center bg-cyan-lighten-1" style="min-height: 100vh;">
    <v-card class="pa-8" min-width="40vw">
      <!-- Logo Kemendagri and BSRE -->
      <div class="d-flex align-center justify-center mb-3">
        <img src="/src/assets/logo-kemendagri.png" alt="Kemendagri" width="100vw" />
        <img src="/src/assets/logo-bsre.png" alt="BSRE" width="200vw" class="ml-4" />
      </div>

      <!-- Title -->
      <v-card-title class="text-center">
        <span>Masuk | <strong style="color: orange">eSign</strong></span>
      </v-card-title>

      <!-- Login Form -->
      <v-card-text>
        <v-form @submit="onSubmit">
          <!-- Username Field -->
          <v-text-field v-model="username" label="NIK/Username" outlined dense required :error-messages="usernameError">
            <template #prepend-inner>
              <Icon icon="mdi:user" style="color: #9e9e9e" />
            </template>
          </v-text-field>

          <!-- Password Field -->
          <v-text-field v-model="password" label="Password" type="password" outlined dense required
            :error-messages="passwordError">
            <template #prepend-inner>
              <Icon icon="majesticons:lock" style="color: #9e9e9e" />
            </template>
          </v-text-field>

          <!-- Forgot Password Link -->
          <div class="d-block text-right mb-6" style="color: #007bff; cursor: pointer;">
            Lupa Password?
          </div>

          <!-- Submit Button -->
          <v-btn type="submit" color="#3E80D9" dark block>Masuk</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios'
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import { Icon } from '@iconify/vue';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';

const schema = yup.object({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
});

export default {
  name: 'AdminLogin',
  components: {
    Icon
  },
  setup() {
    const router = useRouter();
    const { handleSubmit } = useForm({
      validationSchema: schema
    });
    const { value: username, errorMessage: usernameError } = useField('username');
    const { value: password, errorMessage: passwordError } = useField('password');

    const onSubmit = handleSubmit(values => {
      axios
        .post('http://172.24.179.6:8000/api/manage-users/login', {
          username: values.username,
          password: values.password,
        })
        .then((logins) => {
          console.log(logins.data)
          localStorage.setItem('token', logins.data.token)
          router.push('/dashboard');
        })
        .catch((error) => {
          if (error) {
            Swal.fire({
              text: `Username dan Password yang Anda masukkan salah`,
              icon: 'error',
              confirmButtonText: 'OK'
            });
          }
        })
    });

    return {
      username,
      usernameError,
      password,
      passwordError,
      onSubmit
    };
  },
  mounted() {

  },
  methods: {

  }
};
</script>
