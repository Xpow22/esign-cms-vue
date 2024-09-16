<template>
    <v-app>
        <NavbarMain :isCollapsed="isSidebarCollapsed" @toggle-sidebar="toggleSidebar" />
        <SidebarMain :isCollapsed="isSidebarCollapsed" />
        <v-main :class="{ 'main-collapsed': isSidebarCollapsed }">
            <v-container fluid class="pa-5 bg-white">
                <v-row no-gutters>
                    <v-col class="d-flex align-center pa-4">
                        <Icon icon="icons8:left-round" style="color: black" width='25px' />
                        <span class="font-weight-bold text-h6 ml-5">Kelola Pengguna - Data Developer</span>
                    </v-col>
                </v-row>
            </v-container>
            <v-container fluid class="my-3">
                <v-row>
                    <v-col>
                        <v-card class="pa-5" min-height="100vh">
                            <v-row no-gutters class="d-flex justify-space-between">
                                <v-col class="d-flex align-center pa-4">
                                    <Icon icon="iconoir:developer" style="color: black" width='30px' />
                                    <span class="font-weight-bold text-h6 ml-2">Data Developer</span>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-form class="mt-10">
                                <v-row class="d-flex flex-column justify-start">
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
                                        <v-btn color="primary" class="">Cari</v-btn>
                                    </v-col>
                                </v-row>
                            </v-form>

                            <v-data-table :headers="headers" :items="users" item-value="no" class="rounded-lg my-10"
                                density="comfortable" id="my_custom_table">
                                <template v-slot:item="{ item }">
                                    <tr class="text-center">
                                        <td>{{ item.no }}</td>
                                        <td>{{ item.identity }}</td>
                                        <td>{{ item.email }}</td>
                                        <td>{{ item.app }}</td>
                                        <td>{{ item.set }}</td>
                                        <td>{{ item.abbreviation }}</td>
                                        <td>
                                            <span
                                                :class="item.status === 'Aktif' ? 'bg-blue px-5 rounded-xl white--text' : 'bg-red px-5 rounded-xl white--text'">
                                                {{ item.status }}
                                            </span>
                                        </td>
                                        <td>{{ item.createdAt }}</td>
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
            headers: [
                { title: 'NO', align: 'center', key: 'no' },
                { title: 'NAMA LENGKAP', align: 'center', key: 'identity' },
                { title: 'EMAIL', align: 'center', key: 'email' },
                { title: 'APLIKASI CLIENT', align: 'center', key: 'app' },
                { title: 'SET APLIKASI DI', align: 'center', key: 'set' },
                { title: 'SINGKATAN APLIKASI', align: 'center', key: 'abbreviation' },
                { title: 'Status', align: 'center', key: 'status' },
                { title: 'CreatedAt', align: 'center', key: 'createdAt' },
                { title: 'Aksi', align: 'center', key: 'aksi' },
            ],
            users: [
                {
                    no: 1,
                    identity: 'Ahmad Helmy',
                    email: 'esign101@gmail.com',
                    app: 'Sistem Informasi Mutasi Daerah',
                    set: 'SISTEM INFORMASI MUTASI DAERAH (SIMUDAH) - OTDA FKKPD',
                    abbreviation: 'simudah',
                    status: 'Aktif',
                    createdAt: '01/01/2023',
                },
                {
                    no: 2,
                    identity: 'Ahmad Helmy',
                    email: 'esign101@gmail.com',
                    app: 'Eperda',
                    set: 'EPERDA OTDA KEMENDAGRI',
                    abbreviation: 'eperda',
                    status: 'Inaktif',
                    createdAt: '01/01/2023',
                },
                {
                    no: 3,
                    identity: 'Ahmad Helmy',
                    email: 'esign101@gmail.com',
                    app: 'E-OFFICE KEMENDAGRI',
                    set: 'ESIGN KEMENDAGRI',
                    abbreviation: 'eoffice',
                    status: 'Inaktif',
                    createdAt: '01/01/2023',
                },
                {
                    no: 4,
                    identity: 'Ahmad Helmy',
                    email: 'esign101@gmail.com',
                    app: 'E-OFFICE KEMENDAGRI',
                    set: 'ESIGN KEMENDAGRI',
                    abbreviation: 'eoffice',
                    status: 'Aktif',
                    createdAt: '01/01/2023',
                },
                {
                    no: 5,
                    identity: 'Ahmad Helmy',
                    email: 'esign101@gmail.com',
                    app: 'E-OFFICE KEMENDAGRI',
                    set: 'ESIGN KEMENDAGRI',
                    abbreviation: 'eoffice',
                    status: 'Inaktif',
                    createdAt: '01/01/2023',
                },
            ],
            items: [
                { title: 'Edit User', icon: 'fa-solid:user-edit' },
                { title: 'Reset Password', icon: 'fluent:password-reset-48-filled' },
                { title: 'Setting User', icon: 'mingcute:user-setting-fill' },
            ],
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarCollapsed = !this.isSidebarCollapsed;
        },
    },
};
</script>
