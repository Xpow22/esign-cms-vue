<template>
    <v-dialog v-model="localVisible" width="50vw">
        <v-card>
            <!-- Tombol Tutup -->
            <v-card-title class="d-flex justify-end pa-0">
                <v-btn icon class="ma-2" @click="closeModal">
                    <v-img :src="btnClose" alt="Close Button" width="24" height="24"></v-img>
                </v-btn>
            </v-card-title>

            <!-- Header Section -->
            <v-card-title class="pa-0">
                <v-row no-gutters>
                    <v-col cols="11" class="pa-0 bg-blue-darken-4 rounded-xl mx-auto">
                        <div class="d-flex align-center pa-2">
                            <!-- Kolom Teks -->
                            <v-col cols="6">
                                <h2 class="text-white mb-0">Lupa Kata Sandi?</h2>
                                <p class="text-white d-block text-wrap">
                                    *Tips & Trick Gunakan Kata Sandi yang mudah anda ingat
                                </p>
                            </v-col>
                            <!-- Kolom Gambar -->
                            <v-col cols="6">
                                <v-img :src="bgForgot" alt="Auth Illustration" width="100%"></v-img>
                            </v-col>
                        </div>
                    </v-col>
                </v-row>
            </v-card-title>

            <!-- Informasi Reset Kata Sandi -->
            <h3 class="text-center font-weight-bold my-2">Silahkan Hubungi Admin untuk merubah/reset katasandi anda</h3>
            <div class="d-flex justify-center">
                <v-btn type="button" class="light-blue-darken-4" rounded @click="closeModal">OK</v-btn>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
import { ref, watch } from 'vue';
import bgForgot from '@/assets/bg-forgot.svg';
import btnClose from '@/assets/close.svg';

export default {
    props: {
        isVisible: {
            type: Boolean,
            required: true,
        },
    },
    setup(props, { emit }) {
        const localVisible = ref(props.isVisible);

        // Watch prop changes and update local state
        watch(() => props.isVisible, (newVal) => {
            localVisible.value = newVal;
        });

        const closeModal = () => {
            localVisible.value = false;
            emit('update:isVisible', false); // Emit event to update visibility
        };

        return {
            bgForgot,
            btnClose,
            localVisible,
            closeModal,
        };
    },
};
</script>
