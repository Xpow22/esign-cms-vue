<template>
    <v-dialog v-model="localVisible" width="50vw">
        <v-card>
            <!-- Tombol Tutup -->
            <v-card-title class="d-flex justify-end pa-0">
                <div class="ma-2" @click="closeModal">
                    <Icon icon="mdi:close" width="24" height="24" style="color: #F10000;" />
                </div>
            </v-card-title>

            <!-- Header Section -->
            <v-card-title class="text-center">
                <h3 class="font-weight-bold">Ubah Kata Sandi</h3>
            </v-card-title>

            <!-- Form Section -->
            <v-card-text>
                <v-form @submit="onSubmit">
                    <v-row class="d-flex justify-center">
                        <v-col cols="10">
                            <!-- Field Kata Sandi Baru -->
                            <div class="d-flex justify-space-between align-center mb-4">
                                <label for="newPassword" class="mr-2">Kata Sandi Baru*</label>
                                <v-text-field id="newPassword" v-model="newPassword" outlined rounded hide-details
                                    class="ml-2" style="max-width: 300px;">
                                </v-text-field>
                            </div>

                            <!-- Field Konfirmasi Kata Sandi -->
                            <div class="d-flex justify-space-between align-center mb-4">
                                <label for="confirmPassword" class="mr-2">Konfirmasi Kata Sandi*</label>
                                <v-text-field id="confirmPassword" v-model="confirmPassword" outlined rounded
                                    hide-details class="ml-2" style="max-width: 300px;">
                                </v-text-field>
                            </div>
                        </v-col>
                    </v-row>

                    <!-- Tombol Simpan -->
                    <div class="d-flex justify-center mt-4">
                        <v-btn type="submit" color="success" rounded>Ubah Kata Sandi</v-btn>
                    </div>
                </v-form>
            </v-card-text>

        </v-card>
    </v-dialog>
</template>

<script>
import { ref, watch } from 'vue';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import { Icon } from '@iconify/vue';

export default {
    components: {
        Icon,
    },
    props: {
        isVisible: {
            type: Boolean,
            required: true,
        },
    },
    setup(props, { emit }) {
        const validationSchema = yup.object({
            newPassword: yup.string().required('*Kolom ini wajib diisi'),
            confirmPassword: yup.string().required('*Kolom ini wajib diisi'),
        });

        const { handleSubmit, errors, validateField } = useForm({
            validationSchema,
        });

        const { value: newPassword } = useField('newPassword');
        const { value: confirmPassword } = useField('confirmPassword');

        const localVisible = ref(props.isVisible);

        watch(() => props.isVisible, (newVal) => {
            localVisible.value = newVal;
        });

        const onSubmit = handleSubmit(() => {
            // Logika untuk submit data
            console.log('Form Submitted:', {
                newPassword: newPassword.value,
                confirmPassword: confirmPassword.value,
            });
            closeModal();
        });

        const closeModal = () => {
            localVisible.value = false;
            emit('update:isVisible', false);
        };

        return {
            localVisible,
            newPassword,
            confirmPassword,
            handleSubmit,
            errors,
            validateField,
            onSubmit,
            closeModal,
        };
    },
};
</script>
