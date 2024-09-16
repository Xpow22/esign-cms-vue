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
                            <div class="d-flex align-center mb-1">
                                <label for="namaDoc" class="mr-2">Nama Dokumen</label>
                                <span v-if="errors.namaDoc" class="text-error">{{ errors.namaDoc }}</span>
                            </div>
                            <v-text-field id="namaDoc" v-model="namaDoc" outlined rounded
                                :prepend-inner-icon="'uil:calendar'" @blur="validateField('namaDoc')"></v-text-field>
                        </v-col>

                        <v-col cols="11">
                            <div class="d-flex align-center mb-1">
                                <label for="namaApp" class="mr-2">Nama Aplikasi Client</label>
                                <span v-if="errors.namaApp" class="text-error">{{ errors.namaApp }}</span>
                            </div>
                            <v-select id="namaApp" v-model="namaApp" outlined rounded
                                :prepend-inner-icon="'uil:calendar'" @blur="validateField('namaApp')"></v-select>
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
            namaDoc: yup.string().required('*Kolom ini wajib diisi'),
            namaApp: yup.string().required('*Kolom ini wajib diisi'),
        });

        const { handleSubmit, errors, validateField } = useForm({
            validationSchema,
        });

        const { value: namaDoc } = useField('namaDoc');
        const { value: namaApp } = useField('namaApp');

        const localVisible = ref(props.isVisible);

        watch(() => props.isVisible, (newVal) => {
            localVisible.value = newVal;
        });

        const onSubmit = handleSubmit(() => {
            console.log('Form Submitted:', {
                namaDoc: namaDoc.value,
                namaApp: namaApp.value,
            });
            closeModal();
        });

        const closeModal = () => {
            localVisible.value = false;
            emit('update:isVisible', false);
        };

        return {
            localVisible,
            namaDoc,
            namaApp,
            handleSubmit,
            errors,
            validateField,
            onSubmit,
            closeModal,
        };
    },
};
</script>
