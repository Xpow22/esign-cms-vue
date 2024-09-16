<template>
    <v-dialog v-model="localVisible" width="50vw">
        <v-card>
            <!-- Tombol Tutup -->
            <v-card-title class="d-flex justify-end pa-0">
                <div icon class="ma-2" @click="closeModal">
                    <v-img :src="btnClose" alt="Close Button" width="24" height="24"></v-img>
                </div>
            </v-card-title>

            <!-- Header Section -->
            <v-card-title class="pa-0">
                <v-row no-gutters>
                    <v-col cols="11" class="pa-0 bg-blue-darken-4 rounded-xl mx-auto">
                        <div class="d-flex align-center pa-2">
                            <!-- Kolom Teks -->
                            <v-col cols="6">
                                <h2 class="text-white mb-0">Hallo!</h2>
                                <p class="text-white d-block text-wrap">
                                    Silahkan login untuk lanjut menggunakan SIE
                                </p>
                            </v-col>
                            <!-- Kolom Gambar -->
                            <v-col cols="6">
                                <v-img :src="bgLogin" alt="Auth Illustration" width="100%"></v-img>
                            </v-col>
                        </div>
                    </v-col>
                </v-row>
            </v-card-title>

            <!-- Form Section -->
            <v-card-text>
                <h3 class="text-center font-weight-bold my-1">Form Login</h3>
                <v-form @submit="onSubmit">
                    <v-text-field v-model="username" label="Username" outlined rounded :error-messages="errors.username"
                        @blur="validateField('username')"></v-text-field>

                    <v-text-field v-model="password" :type="showPassword ? 'text' : 'password'" label="Password"
                        outlined rounded :append-inner-icon="showPassword ? mdiEyeOff : mdiEye"
                        @click:append="togglePasswordVisibility" :error-messages="errors.password"
                        @blur="validateField('password')"></v-text-field>

                    <!-- Validasi Error Message -->
                    <div v-if="showError" class="text-red text-center mb-3">
                        Ups! Username/NIK Anda Tidak Ditemukan
                    </div>
                    <div v-else class="mb-2 text-center">
                        <a class="text-decoration-none text-black">Lupa Password Masuk?
                            <span class="text-red ml-1 cursor-pointer" @click="showForgotPasswordModal">Klik
                                Disini</span>
                        </a>
                    </div>

                    <!-- Footer Section -->
                    <div class="d-flex justify-center">
                        <v-btn type="submit" color="success" rounded>Masuk</v-btn>
                    </div>
                </v-form>
            </v-card-text>
        </v-card>

        <!-- Modal Lupa Password -->
        <ForgotPassword :isVisible="isForgotPasswordVisible" @update:isVisible="handleForgotPasswordModalVisibility" />
    </v-dialog>
</template>

<script>
import { ref, watch } from 'vue';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import bgLogin from '@/assets/bg-login.svg';
import btnClose from '@/assets/close.svg';
import ForgotPassword from '@/components/Auth/ForgotPassword.vue';
import { mdiEye, mdiEyeOff } from '@mdi/js';
import { useRouter } from 'vue-router';

export default {
    components: {
        ForgotPassword,
    },
    props: {
        isVisible: {
            type: Boolean,
            required: true,
        },
    },
    setup(props, { emit }) {
        const router = useRouter();
        const validationSchema = yup.object({
            username: yup.string().required('Username/NIK tidak boleh kosong'),
            password: yup.string().min(6, 'Password minimal 6 karakter').required('Password tidak boleh kosong'),
        });

        const { handleSubmit, errors, validateField } = useForm({
            validationSchema,
        });

        const { value: username } = useField('username');
        const { value: password } = useField('password');

        const showError = ref(false);
        const localVisible = ref(props.isVisible);
        const isForgotPasswordVisible = ref(false);
        const showPassword = ref(false);
        watch(() => props.isVisible, (newVal) => {
            localVisible.value = newVal;
        });

        const onSubmit = handleSubmit(() => {
            if (username.value === 'admin' && password.value === 'admin123') {
                router.push('/infografis');
                console.log('Login berhasil');
                showError.value = false;
                closeModal();
            } else {
                showError.value = true;
            }
        });

        const togglePasswordVisibility = () => {
            showPassword.value = !showPassword.value;
        };

        const showForgotPasswordModal = () => {
            isForgotPasswordVisible.value = true;
        };

        const handleForgotPasswordModalVisibility = (visible) => {
            isForgotPasswordVisible.value = visible;
        };

        const closeModal = () => {
            showError.value = false;
            localVisible.value = false;
            emit('update:isVisible', false);
        };

        return {
            bgLogin,
            btnClose,
            localVisible,
            username,
            password,
            handleSubmit,
            errors,
            validateField,
            showError,
            closeModal,
            onSubmit,
            mdiEye,
            mdiEyeOff,
            showPassword,
            togglePasswordVisibility,
            isForgotPasswordVisible,
            showForgotPasswordModal,
            handleForgotPasswordModalVisibility,
        };
    },
};
</script>
