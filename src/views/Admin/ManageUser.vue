<template>
    <v-app>
        <NavbarMain :isCollapsed="isSidebarCollapsed" @toggle-sidebar="toggleSidebar" />
        <SidebarMain :isCollapsed="isSidebarCollapsed" />
        <v-main :class="{ 'main-collapsed': isSidebarCollapsed }">
            <v-container fluid class="pa-5 bg-white">
                <v-row no-gutters>
                    <v-col class="d-flex align-center pa-4">
                        <Icon icon="icons8:left-round" style="color: black" width='25px' />
                        <span class="font-weight-bold text-h6 ml-5">Kelola Pengguna - Data Pengguna</span>
                    </v-col>
                </v-row>
            </v-container>
            <v-container fluid class="my-3">
                <v-row>
                    <v-col>
                        <v-card class="pa-5" min-height="100vh">
                            <v-row no-gutters class="d-flex justify-space-between">
                                <v-col class="d-flex align-center pa-4">
                                    <Icon icon="fluent:people-team-48-filled" style="color: black" />
                                    <span class="font-weight-bold text-h6 ml-2">Kelola Pengguna</span>
                                </v-col>
                                <v-col class="d-flex align-center justify-end pa-4">
                                    <v-btn color="teal" dark @click="goToAddUser">
                                        <Icon icon="mdi:plus-circle" class="mr-2" />
                                        Tambah
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-form class="mt-10">
                                <v-row class="d-flex flex-column justify-start mb-5">
                                    <v-col cols="6">
                                        <v-select label="Komponen" :items="['Option 1', 'Option 2', 'Option 3']"
                                            outlined dense></v-select>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-select label="Unit Kerja" :items="['Unit 1', 'Unit 2', 'Unit 3']" outlined
                                            dense></v-select>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-text-field label="Keyword" placeholder="Masukan Keyword, Nama/Username"
                                            outlined dense></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="6" class="text-left">
                                        <v-btn color="primary" class="mt-4">Cari</v-btn>
                                    </v-col>
                                </v-row>
                            </v-form>
                            <v-data-table :headers="headers" :items="users" class="rounded-lg my-10"
                                density="comfortable" id="my_custom_table" table-column-padding table-border>
                                <template v-slot:item="{ item }">
                                    <tr>
                                        <td>{{ item.no }}</td>
                                        <td>
                                            <v-table density="comfortable">
                                                <template v-slot:default>
                                                    <tbody>
                                                        <tr>
                                                            <td>Nama Lengkap</td>
                                                            <td>:{{ item.fullName }}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>NIK</td>
                                                            <td>:{{ item.nik }}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>NIP</td>
                                                            <td>:{{ item.nip }}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Email</td>
                                                            <td>:{{ item.email }}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Hp</td>
                                                            <td>:{{ item.phone }}</td>
                                                        </tr>
                                                    </tbody>
                                                </template>
                                            </v-table>
                                        </td>
                                        <td>{{ item.position }}</td>
                                        <td>KTP</td>
                                        <td>TTD</td>
                                        <td>Surat Rekomendasi</td>
                                        <td>
                                            <span
                                                :class="item.registrationType === 'Pribadi' ? 'bg-red px-5 rounded-xl white--text' : 'bg-blue px-5 rounded-xl white--text'">
                                                {{ item.registrationType }}
                                            </span>
                                        </td>
                                        <td>{{ item.createdAt }}</td>
                                        <td>
                                            <span
                                                :class="item.status === 'Aktif' ? 'bg-blue px-5 rounded-xl white--text' : 'bg-red px-5 rounded-xl white--text'">
                                                {{ item.status }}
                                            </span>
                                        </td>
                                        <td>
                                            <v-menu transition="scale-transition">
                                                <template v-slot:activator="{ props }">
                                                    <v-btn color="primary" v-bind="props">
                                                        <Icon icon="ep:menu" style="color: white" />
                                                    </v-btn>
                                                </template>
                                                <v-list>
                                                    <v-list-item v-for="(menuItem, i) in items" :key="i">
                                                        <div class='d-flex align-center'>
                                                            <v-list-item-icon>
                                                                <Icon :icon="menuItem.icon" style="color: black" />
                                                            </v-list-item-icon>
                                                            <v-list-item-title class="ml-2">{{ menuItem.title
                                                                }}</v-list-item-title>
                                                        </div>
                                                    </v-list-item>
                                                </v-list>
                                            </v-menu>
                                        </td>
                                    </tr>
                                </template>
                            </v-data-table>
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
import { useRouter } from 'vue-router';

export default {
    name: 'DashboardPage',
    components: {
        NavbarMain,
        SidebarMain,
        FooterMain,
        Icon,
    },
    data() {
        return {
            isSidebarCollapsed: false,
            headers: [
                { title: 'NO', align: 'center', key: 'no' },
                { title: 'IDENTITAS PENGGUNA', align: 'center', key: 'identity' },
                { title: 'JABATAN/UNIT KERJA', align: 'center', key: 'position' },
                { title: 'KTP', align: 'center', key: 'ktp' },
                { title: 'GAMBAR TTD', align: 'center', key: 'signature' },
                { title: 'SURAT REKOMENDASI', align: 'center', key: 'recommendation' },
                { title: 'TIPE PENDAFTARAN USER', align: 'center', key: 'registrationType' },
                { title: 'CreatedAt', align: 'center', key: 'createdAt' },
                { title: 'Status', align: 'center', key: 'status' },
                { title: 'Aksi', align: 'center', key: 'aksi' },
            ],
            users: [
                {
                    no: 1,
                    fullName: 'Ahmad Helmy',
                    nik: '2222333344441111',
                    nip: '2222333344441111',
                    email: 'esign101@gmail.com',
                    phone: '087783032662',
                    position: 'Sekjen',
                    registrationType: 'Pribadi',
                    createdAt: '01/01/2023',
                    status: 'Aktif',
                },
                {
                    no: 2,
                    fullName: 'Test User',
                    nik: '123456789',
                    nip: '987654321',
                    email: 'testuser@gmail.com',
                    phone: '08123456789',
                    position: 'Tim Teknis',
                    registrationType: 'Admin',
                    createdAt: '02/01/2023',
                    status: 'Inaktif',
                },
                {
                    no: 3,
                    fullName: 'Dina Arsyad',
                    nik: '3333444455556666',
                    nip: '3333444455556666',
                    email: 'dina.arsyad@gmail.com',
                    phone: '087889998877',
                    position: 'Dukcapil',
                    registrationType: 'Pribadi',
                    createdAt: '03/01/2023',
                    status: 'Aktif',
                },
                {
                    no: 4,
                    fullName: 'Fajar Sutrisno',
                    nik: '4444555566667777',
                    nip: '4444555566667777',
                    email: 'fajar.sutrisno@gmail.com',
                    phone: '082233445566',
                    position: 'Mentri',
                    registrationType: 'Admin',
                    createdAt: '04/01/2023',
                    status: 'Inaktif',
                },
                {
                    no: 5,
                    fullName: 'Ayu Lestari',
                    nik: '5555666677778888',
                    nip: '5555666677778888',
                    email: 'ayu.lestari@gmail.com',
                    phone: '085567890123',
                    position: 'Sekjen',
                    registrationType: 'Pribadi',
                    createdAt: '05/01/2023',
                    status: 'Aktif',
                },
            ],
            items: [
                { title: 'Edit User', icon: 'fa-solid:user-edit' },
                { title: 'Reset Password', icon: 'fluent:password-reset-48-filled' },
                { title: 'Setting User', icon: 'mingcute:user-setting-fill' },
            ],
        };
    },
    setup() {
        const router = useRouter();

        function goToAddUser() {
            router.push('/add-user');
        }

        return {
            goToAddUser,
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarCollapsed = !this.isSidebarCollapsed;
        },
    },
};
</script>
