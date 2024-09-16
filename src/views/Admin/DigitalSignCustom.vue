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
                        <v-card class="pa-5" min-height="100%">
                            <v-col class="d-flex align-center pa-4">
                                <Icon icon="mdi:feather" style="color: black" width="24" />
                                <span class="font-weight-bold text-h6 ml-2">Data Digital Signature</span>
                            </v-col>
                            <v-stepper v-model="e1">
                                <template v-slot:default="{ prev, next }">
                                    <v-stepper-header>
                                        <!-- Step 1 -->
                                        <v-stepper-item :complete="e1 > 1" step="1" :value="1">
                                            PILIH APLIKASI
                                        </v-stepper-item>
                                        <v-divider></v-divider>

                                        <!-- Step 2 -->
                                        <v-stepper-item :complete="e1 > 2" step="2" :value="2">
                                            File Document/Surat
                                        </v-stepper-item>
                                        <v-divider></v-divider>

                                        <!-- Step 3 -->
                                        <v-stepper-item :complete="e1 > 3" step="3" :value="3">
                                            Setting Dokumen
                                        </v-stepper-item>
                                        <v-divider></v-divider>

                                        <!-- Step 4 -->
                                        <v-stepper-item step="4" :value="4">
                                            Passphrase
                                        </v-stepper-item>
                                    </v-stepper-header>

                                    <v-stepper-window>
                                        <!-- Step 1 Content -->
                                        <v-stepper-window-item :value="1">
                                            <v-row>
                                                <v-col cols="6">
                                                    <v-select v-model="formData.application"
                                                        :items="['Aplikasi 1', 'Aplikasi 2']" label="Aplikasi Client*"
                                                        outlined dense>
                                                    </v-select>
                                                </v-col>
                                                <v-col cols="6">
                                                    <v-select v-model="formData.documentType"
                                                        :items="['Jenis Surat 1', 'Jenis Surat 2']"
                                                        label="Pilih Jenis Surat*" outlined dense>
                                                    </v-select>
                                                </v-col>
                                            </v-row>
                                        </v-stepper-window-item>

                                        <!-- Step 2 Content -->
                                        <v-stepper-window-item :value="2">
                                            <v-row>
                                                <v-col>
                                                    <v-file-input v-model="formData.file"
                                                        label="Upload File Document/Surat*" accept=".docx, .pdf"
                                                        outlined dense>
                                                    </v-file-input>
                                                </v-col>
                                            </v-row>
                                        </v-stepper-window-item>

                                        <!-- Step 3 Content -->
                                        <v-stepper-window-item :value="3">
                                            <v-row>
                                                <v-col>
                                                    <v-checkbox v-model="formData.defaultSetting" label="Default"
                                                        value="default" />
                                                    <v-checkbox v-model="formData.customSetting" label="Setting Sendiri"
                                                        value="custom" />
                                                    <p class="text-caption">
                                                        Setting dokumen ini untuk mengatur posisi Tanda Tangan dan
                                                        QRCode sesuai keinginan. Apabila tidak maka Generate Dokumen
                                                        posisi akan menjadi posisi Default.
                                                    </p>
                                                </v-col>
                                            </v-row>
                                        </v-stepper-window-item>

                                        <!-- Step 4 Content -->
                                        <v-stepper-window-item :value="4">
                                            <v-row>
                                                <v-col>
                                                    <v-text-field v-model="formData.passphrase" label="Passphrase*"
                                                        type="password" outlined dense>
                                                    </v-text-field>
                                                    <v-btn color="green" class="white--text"
                                                        @click="generateDocument">Generate</v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-stepper-window-item>
                                    </v-stepper-window>

                                    <!-- Navigation Buttons -->
                                    <v-stepper-actions :disabled="disabled" @click:next="next" @click:prev="prev">
                                        <v-btn text color="primary" @click="prev">Previous</v-btn>
                                        <v-btn text color="primary" @click="next">Next</v-btn>
                                    </v-stepper-actions>
                                </template>
                            </v-stepper>
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
