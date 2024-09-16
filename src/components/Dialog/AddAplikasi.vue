<template>
    <v-dialog v-model="localVisible" width="50vw">
        <v-card>
            <!-- Tombol Tutup -->
            <v-card-title class="d-flex justify-end pa-0">
                <div class="ma-2 cursor-pointer" @click="closeModal">
                    <Icon icon="carbon:close-outline" style="color: #ff0000" width='30' />
                </div>
            </v-card-title>

            <!-- Header Section -->
            <v-card-title class="text-center">
                <h3>Tambah Aplikasi</h3>
                <p>Silahkan isi form dibawah ini untuk menambahkan aplikasi</p>
            </v-card-title>

            <!-- Form Section -->
            <v-card-text>
                <v-form @submit="onSubmit">
                    <v-row class="d-flex justify-center">
                        <v-col cols="11">
                            <!-- Label dan Pesan Kesalahan di Luar Text Field -->
                            <div class="d-flex align-center mb-1">
                                <label for="namaAplikasi" class="mr-2">Nama Aplikasi</label>
                                <span v-if="errors.namaAplikasi" class="text-error">{{ errors.namaAplikasi }}</span>
                            </div>

                            <!-- Text Field dengan Icon di Dalam Input -->
                            <v-text-field id="namaAplikasi" v-model="namaAplikasi" outlined rounded
                                :prepend-inner-icon="'uil:calendar'"
                                @blur="validateField('namaAplikasi')"></v-text-field>
                        </v-col>
                    </v-row>

                    <!-- Tombol Simpan -->
                    <div class="d-flex justify-center">
                        <v-btn type="submit" color="success" rounded>Simpan</v-btn>
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
            namaAplikasi: yup.string().required('*Kolom ini wajib diisi'),
        });

        const { handleSubmit, errors, validateField } = useForm({
            validationSchema,
        });

        const { value: namaAplikasi } = useField('namaAplikasi');

        const localVisible = ref(props.isVisible);

        watch(() => props.isVisible, (newVal) => {
            localVisible.value = newVal;
        });

        const onSubmit = handleSubmit(() => {
            console.log('Form Submitted:', {
                namaAplikasi: namaAplikasi.value,
            });
            closeModal();
        });

        const closeModal = () => {
            localVisible.value = false;
            emit('update:isVisible', false);
        };

        return {
            localVisible,
            namaAplikasi,
            handleSubmit,
            errors,
            validateField,
            onSubmit,
            closeModal,
        };
    },
};
</script>
