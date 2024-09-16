<template>
    <v-app>
        <NavbarMain :isCollapsed="isSidebarCollapsed" @toggle-sidebar="toggleSidebar" />
        <SidebarMain :isCollapsed="isSidebarCollapsed" />
        <v-main :class="{ 'main-collapsed': isSidebarCollapsed }">
            <v-container fluid class="pa-5 bg-white">
                <v-row no-gutters>
                    <v-col class="d-flex align-center pa-4">
                        <Icon icon="icons8:left-round" style="color: black" width="25px" />
                        <span class="font-weight-bold text-h6 ml-5">Digital Signature</span>
                    </v-col>
                </v-row>
            </v-container>

            <v-container fluid class="my-3">
                <v-row>
                    <v-col>
                        <v-card class="pa-5 d-flex flex-column align-center" min-height="100%">
                            <v-col class="d-flex align-center pa-4">
                                <Icon icon="mdi:feather" style="color: black" width="24" />
                                <span class="font-weight-bold text-h6 ml-2">Data Digital Signature</span>
                            </v-col>
                            <v-card class="elevation-10 text-center " width="50vw">
                                <div class="my-10 d-flex flex-column align-center">
                                    <v-col cols="11">
                                        <div class="d-flex align-center mb-1">
                                            <label for="nik" class="ml-2">Pilih Aplikasi Client</label>
                                        </div>
                                        <v-select :items="['ESIGN', 'EPERDA', 'SISTEM INFORMASI MUTASI DAERAH']"
                                            outlined dense></v-select>
                                    </v-col>

                                    <v-col cols="11">
                                        <div class="d-flex align-center mb-1">
                                            <label for="nik" class="ml-2">Pilih Jenis Surat</label>
                                        </div>
                                        <v-select :items="['Unit 1', 'Unit 2', 'Unit 3']" outlined dense></v-select>
                                    </v-col>

                                    <v-col cols="11">
                                        <div class="d-flex align-center mb-1">
                                            <label for="nik" class="">File Document / Surat <span
                                                    class="font-italic">(Format yang diijinkan .doc, .docx, .pdf;
                                                    Maksimal ukuran 1 MB)</span></label>
                                        </div>
                                        <v-file-input :rules="[
                                            value => !value || ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf'].includes(value.type) || 'Format file tidak diizinkan',
                                            value => !value || value.size <= 1 * 1024 * 1024 || 'Ukuran file maksimal 1 MB'
                                        ]" accept=".doc,.docx,.pdf" label="Pilih file"
                                            placeholder="Pilih file"></v-file-input>
                                    </v-col>

                                    <v-col cols="11">
                                        <v-text-field v-model="formData.passphrase" label="Passphrase*" type="password"
                                            outlined dense></v-text-field>
                                        <v-btn color="green" class="white--text"
                                            @click="generateDocument">Generate</v-btn>
                                    </v-col>
                                </div>
                            </v-card>

                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
        <FooterMain :isCollapsed="isSidebarCollapsed" />
    </v-app>
</template>

<script>
import NavbarMain from '@/components/Dashboard/NavbarMain.vue';
import SidebarMain from '@/components/Dashboard/SidebarMain.vue';
import FooterMain from '@/components/Dashboard/FooterMain.vue';
import { Icon } from '@iconify/vue';

export default {
    name: 'DigitalSignCustom',
    components: {
        NavbarMain,
        SidebarMain,
        FooterMain,
        Icon
    },
    data() {
        return {
            isSidebarCollapsed: false,
            e1: 1, // current step
            formData: {
                application: '',
                documentType: '',
                file: null,
                defaultSetting: false,
                customSetting: false,
                passphrase: ''
            }
        };
    },
    computed: {
        disabled() {
            return this.e1 === 1 ? 'prev' : this.e1 === 4 ? 'next' : undefined;
        }
    },
    methods: {
        toggleSidebar() {
            this.isSidebarCollapsed = !this.isSidebarCollapsed;
        },
        generateDocument() {
        }
    }
};
</script>


<style scoped>
.error-border {
    border: 1px solid red !important;
}

.v-container.header-container {
    background-color: white;
    border-bottom: 1px solid #ddd;
}

.v-stepper-header {
    background-color: #f5f5f5;
    border-radius: 5px;
    padding: 20px;
}

.v-stepper-step {
    font-weight: 500;
}

.v-btn {
    margin: 10px;
}
</style>
