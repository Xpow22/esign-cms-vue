<template>
    <v-dialog v-model="localVisible" width="50vw">
        <v-card>
            <!-- Tombol Tutup -->
            <v-card-title class="d-flex justify-end pa-0">
                <div class="ma-2" @click="closeModal">
                    <Icon :icon="'mdi:close'" width="24" height="24" />
                </div>
            </v-card-title>

            <!-- Header Section -->
            <v-card-title class="text-center">
                <h3>Tambah Jam Tayang</h3>
                <p>Silahkan isi form dibawah ini untuk membuat jam tayang</p>
            </v-card-title>

            <!-- Form Section -->
            <v-card-text>
                <v-form @submit="onSubmit">
                    <v-row>
                        <v-col cols="6">
                            <!-- Label dan Pesan Kesalahan di Luar Text Field -->
                            <div class="d-flex align-center mb-1">
                                <label for="namaKonten" class="mr-2">Nama Konten</label>
                                <span v-if="errors.namaKonten" class="text-error">{{ errors.namaKonten }}</span>
                            </div>

                            <!-- Text Field dengan Icon di Dalam Input -->
                            <v-text-field id="namaKonten" v-model="namaKonten" outlined rounded
                                :prepend-inner-icon="'uil:calendar'" @blur="validateField('namaKonten')"></v-text-field>
                        </v-col>

                        <v-col cols="6">
                            <!-- Label dan Pesan Kesalahan di Luar Text Field -->
                            <div class="d-flex align-center mb-1">
                                <label for="jamTayang" class="mr-2">Jam Tayang</label>
                                <span v-if="errors.jamTayang" class="text-error">{{ errors.jamTayang }}</span>
                            </div>

                            <!-- Text Field dengan Icon di Dalam Input -->
                            <v-text-field id="jamTayang" v-model="jamTayang" outlined rounded
                                :prepend-inner-icon="'uil:calendar'" @blur="validateField('jamTayang')"></v-text-field>
                        </v-col>

                        <v-col cols="6">
                            <!-- Label dan Pesan Kesalahan di Luar Text Field -->
                            <div class="d-flex align-center mb-1">
                                <label for="tanggalJamTayang" class="mr-2">Tanggal Jam Tayang</label>
                                <span v-if="errors.tanggalJamTayang" class="text-error">{{ errors.tanggalJamTayang
                                    }}</span>
                            </div>

                            <!-- Text Field dengan Icon di Dalam Input -->
                            <v-text-field id="tanggalJamTayang" v-model="tanggalJamTayang" outlined rounded
                                :prepend-inner-icon="'uil:calendar'"
                                @blur="validateField('tanggalJamTayang')"></v-text-field>
                        </v-col>

                        <v-col cols="6">
                            <!-- Label dan Pesan Kesalahan di Luar Text Field -->
                            <div class="d-flex align-center mb-1">
                                <label for="durasiTayang" class="mr-2">Durasi Tayang</label>
                                <span v-if="errors.durasiTayang" class="text-error">{{ errors.durasiTayang }}</span>
                            </div>

                            <!-- Text Field dengan Icon di Dalam Input -->
                            <v-text-field id="durasiTayang" v-model="durasiTayang" outlined rounded
                                :prepend-inner-icon="'uil:calendar'"
                                @blur="validateField('durasiTayang')"></v-text-field>
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
            namaKonten: yup.string().required('*Kolom ini wajib diisi'),
            jamTayang: yup.string().required('*Kolom ini wajib diisi'),
            tanggalJamTayang: yup.string().required('*Kolom ini wajib diisi'),
            durasiTayang: yup.string().required('*Kolom ini wajib diisi'),
        });

        const { handleSubmit, errors, validateField } = useForm({
            validationSchema,
        });

        const { value: namaKonten } = useField('namaKonten');
        const { value: jamTayang } = useField('jamTayang');
        const { value: tanggalJamTayang } = useField('tanggalJamTayang');
        const { value: durasiTayang } = useField('durasiTayang');

        const localVisible = ref(props.isVisible);
        const durasiOptions = ref(['5 Menit', '10 Menit', '15 Menit']);

        watch(() => props.isVisible, (newVal) => {
            localVisible.value = newVal;
        });

        const onSubmit = handleSubmit(() => {
            // Logika untuk submit data
            console.log('Form Submitted:', {
                namaKonten: namaKonten.value,
                jamTayang: jamTayang.value,
                tanggalJamTayang: tanggalJamTayang.value,
                durasiTayang: durasiTayang.value,
            });
            closeModal();
        });

        const closeModal = () => {
            localVisible.value = false;
            emit('update:isVisible', false);
        };

        return {
            localVisible,
            namaKonten,
            jamTayang,
            tanggalJamTayang,
            durasiTayang,
            handleSubmit,
            errors,
            validateField,
            onSubmit,
            closeModal,
            durasiOptions,
        };
    },
};
</script>
