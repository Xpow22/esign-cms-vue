<template>
    <v-app>
        <NavbarMain :isCollapsed="isSidebarCollapsed" @toggle-sidebar="toggleSidebar" />
        <SidebarMain :isCollapsed="isSidebarCollapsed" />
        <v-main :class="{ 'main-collapsed': isSidebarCollapsed }">
            <v-container fluid class="pa-5 bg-white">
                <v-row no-gutters>
                    <v-col class="d-flex align-center pa-4">
                        <Icon icon="icons8:left-round" style="color: black" width='20px' />
                        <span class="font-weight-bold text-h6 ml-5">Tambah Pengguna</span>
                    </v-col>
                </v-row>
            </v-container>
            <v-container fluid class="my-3">
                <v-row>
                    <v-col>
                        <v-card class="pa-5" min-height="100%">
                            <v-row no-gutters class="d-flex justify-space-between">
                                <v-col class="d-flex align-center pa-4">
                                    <Icon icon="mdi:people-add" style="color: black" width='20px' />
                                    <span class="font-weight-bold text-h6 ml-2">Tambah Pengguna</span>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-form class="my-10">
                                <v-row class="d-flex flex-column align-center mx-5">

                                    <v-col cols="12">
                                        <div class="d-flex align-center mb-1">
                                            <label for="nik" class="ml-2">NIK</label>
                                        </div>
                                        <v-text-field id="nik" v-model="nik" outlined
                                            :prepend-inner-icon="'uil:calendar'"></v-text-field>
                                    </v-col>

                                    <v-col cols="12">
                                        <div class="d-flex align-center mb-1">
                                            <label for="nik" class="ml-2">NIP</label>
                                        </div>
                                        <v-text-field id="nik" v-model="nik" outlined
                                            :prepend-inner-icon="'uil:calendar'"></v-text-field>
                                    </v-col>

                                    <v-col cols="12">
                                        <div class="d-flex align-center mb-1">
                                            <label for="nik" class="ml-2">Nama Lengkap</label>
                                        </div>
                                        <v-text-field id="nik" v-model="nik" outlined
                                            :prepend-inner-icon="'uil:calendar'"></v-text-field>
                                    </v-col>

                                    <v-col cols="12">
                                        <div class="d-flex align-center mb-1">
                                            <label for="nik" class="ml-2">Email</label>
                                        </div>
                                        <v-text-field id="nik" v-model="nik" outlined
                                            :prepend-inner-icon="'uil:calendar'"></v-text-field>
                                    </v-col>

                                    <v-col cols="12">
                                        <div class="d-flex align-center mb-1">
                                            <label for="nik" class="ml-2">No. HP/Telepon</label>
                                        </div>
                                        <v-text-field id="nik" v-model="nik" outlined
                                            :prepend-inner-icon="'uil:calendar'"></v-text-field>
                                    </v-col>

                                    <v-col cols="12">
                                        <div class="d-flex align-center mb-1">
                                            <label for="nik" class="ml-2">Pilih Provinsi</label>
                                        </div>
                                        <v-select :items="['Unit 1', 'Unit 2', 'Unit 3']" outlined dense></v-select>
                                    </v-col>

                                    <v-col cols="12">
                                        <div class="d-flex align-center mb-1">
                                            <label for="nik" class="ml-2">Pilih Kota</label>
                                        </div>
                                        <v-select :items="['Unit 1', 'Unit 2', 'Unit 3']" outlined dense></v-select>
                                    </v-col>

                                    <v-col cols="12">
                                        <div class="d-flex align-center mb-1">
                                            <label for="nik" class="ml-2">Jabatan</label>
                                        </div>
                                        <v-text-field id="nik" v-model="nik" outlined
                                            :prepend-inner-icon="'uil:calendar'"></v-text-field>
                                    </v-col>

                                    <v-col cols="12">
                                        <div class="d-flex align-center mb-1">
                                            <label for="nik" class="ml-2">Komponen</label>
                                        </div>
                                        <v-select :items="['Unit 1', 'Unit 2', 'Unit 3']" outlined dense></v-select>
                                    </v-col>

                                    <v-col cols="12">
                                        <div class="d-flex align-center mb-1">
                                            <label for="nik" class="ml-2">Unit Kerja</label>
                                        </div>
                                        <v-select :items="['Unit 1', 'Unit 2', 'Unit 3']" outlined dense></v-select>
                                    </v-col>

                                    <v-col cols="12">
                                        <div class="d-flex align-center mb-1">
                                            <label for="nik" class="ml-2">Pangkat</label>
                                        </div>
                                        <v-select :items="['Unit 1', 'Unit 2', 'Unit 3']" outlined dense></v-select>
                                    </v-col>

                                    <v-col cols="12">
                                        <div class="d-flex align-center mb-1">
                                            <label for="nik" class="">Gambar TTD <span class="font-italic">(Format yang
                                                    diijinkan image/png, image/jpeg, image/bmp)</span></label>
                                        </div>
                                        <v-file-input :rules="rules" accept="image/png, image/jpeg, image/bmp"
                                            label="Avatar" placeholder="Pick an avatar"></v-file-input>
                                    </v-col>

                                    <v-col cols="12">
                                        <div class="d-flex align-center mb-1">
                                            <label for="nik" class="">KTP<span class="font-italic">(Format yang
                                                    diijinkan image/png, image/jpeg, image/bmp)</span></label>
                                        </div>
                                        <v-file-input :rules="rules" accept="image/png, image/jpeg, image/bmp"
                                            label="Avatar" placeholder="Pick an avatar"></v-file-input>
                                    </v-col>

                                    <v-col cols="12">
                                        <div class="d-flex align-center mb-1">
                                            <label for="nik" class="">Surt Rekomendasi<span class="font-italic">(Format
                                                    yang
                                                    diijinkan image/png, image/jpeg, image/bmp)</span></label>
                                        </div>
                                        <v-file-input :rules="rules" accept="image/png, image/jpeg, image/bmp"
                                            label="Avatar" placeholder="Pick an avatar"></v-file-input>
                                    </v-col>

                                    <v-col cols="12">
                                        <div class="d-flex align-center mb-1">
                                            <label for="nik" class="ml-2">Password</label>
                                        </div>
                                        <v-text-field id="nik" v-model="nik" outlined
                                            :prepend-inner-icon="'uil:calendar'"></v-text-field>
                                    </v-col>

                                    <v-col cols="12">
                                        <div class="d-flex align-center mb-1">
                                            <label for="nik" class="ml-2">Ulangi Password</label>
                                        </div>
                                        <v-text-field id="nik" v-model="nik" outlined
                                            :prepend-inner-icon="'uil:calendar'"></v-text-field>
                                    </v-col>

                                    <v-col cols="12" class="text-center">
                                        <v-btn width="100vw" color="primary"
                                            class="mt-4 py-5 d-flex align-center">Cari</v-btn>
                                    </v-col>

                                </v-row>

                                <!-- Cari Button -->
                                <v-row>

                                </v-row>
                            </v-form>
                        </v-card>

                    </v-col>
                </v-row>
            </v-container>
        </v-main>
        <!-- Mengirim status collapse ke Footer -->
        <FooterMain :isCollapsed="isSidebarCollapsed" />
    </v-app>
</template>

<script>
import NavbarMain from '@/components/Dashboard/NavbarMain.vue';
import SidebarMain from '@/components/Dashboard/SidebarMain.vue';
import FooterMain from '@/components/Dashboard/FooterMain.vue';
import { Icon } from '@iconify/vue';

export default {
    name: 'DashboardPage',
    components: {
        NavbarMain,
        SidebarMain,
        FooterMain,
        Icon
    },
    data() {
        return {
            isSidebarCollapsed: false,
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarCollapsed = !this.isSidebarCollapsed;
        },
    },
};
</script>

<style scoped>
.v-main {
    background-color: #F5F5F5;
    transition: margin-left 0.3s ease;
}


.v-container.header-container {
    background-color: white;
    border-bottom: 1px solid #ddd;
}

.v-icon {
    color: black;
}
</style>
