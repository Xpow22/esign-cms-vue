<template>
    <v-app>
        <NavbarMain :isCollapsed="isSidebarCollapsed" @toggle-sidebar="toggleSidebar" />
        <SidebarMain :isCollapsed="isSidebarCollapsed" />
        <v-main :class="{ 'main-collapsed': isSidebarCollapsed }">
            <v-container fluid class="pa-5 bg-white">
                <v-row no-gutters>
                    <v-col class="d-flex align-center pa-4">
                        <Icon icon="icons8:left-round" style="color: black" width='25px' />
                        <span class="font-weight-bold text-h6 ml-5">Tanda Tangan Digital</span>
                    </v-col>
                </v-row>
            </v-container>
            <v-container fluid class="my-3">
                <v-row>
                    <v-col>
                        <v-card class="pa-5" min-height="100vh">
                            <v-row no-gutters class="d-flex justify-space-between">
                                <v-col class="d-flex align-center pa-4">
                                    <Icon icon="mdi:feather" style="color: black" width="24" />
                                    <span class="font-weight-bold text-h6 ml-2">Data Digital Signature</span>
                                </v-col>
                                <v-col class="d-flex align-center justify-end pa-4">
                                    <v-btn color="success" dark class="mx-2" @click="goToDS">
                                        <Icon icon="ri:computer-fill" class='mr-2' width='20px' />
                                        Generate DS
                                    </v-btn>
                                    <v-btn color="primary" dark class="mx-2" @click="goToDSCustom">
                                        <Icon icon="ri:computer-fill" class='mr-2' width='20px' />
                                        Generate Custom DS
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row no-gutters class="d-flex justify-end">
                                <v-col class="d-flex align-center pa-4">
                                    <Icon icon="iconoir:filter-solid" style="color: black" />
                                    <span class="font-weight-bold text-h6 ml-2">Filter</span>
                                </v-col>
                            </v-row>
                            <v-form class="mt-3">
                                <v-col cols='6'>
                                    <v-row>
                                        <v-col cols="6">
                                            <v-select label="Komponen" :items="['Option 1', 'Option 2', 'Option 3']"
                                                outlined dense></v-select>
                                        </v-col>
                                        <v-col cols="6">
                                            <v-select label="Unit Kerja" :items="['Unit 1', 'Unit 2', 'Unit 3']"
                                                outlined dense></v-select>
                                        </v-col>
                                        <v-col cols="6">
                                            <v-select label="Nama Aplikasi"
                                                :items="['Option 1', 'Option 2', 'Option 3']" outlined dense></v-select>
                                        </v-col>
                                        <v-col cols="6">
                                            <v-select label="Jenis Dokumen" :items="['Unit 1', 'Unit 2', 'Unit 3']"
                                                outlined dense></v-select>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field label="Keyword"
                                                placeholder="Masukan Keyword, Nama, jabatan / unit kerja, Jenis dokumen"
                                                outlined dense></v-text-field>
                                        </v-col>
                                        <v-col cols="12" class="text-left">
                                            <v-btn color="primary">Cari</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-form>
                            <v-row no-gutters class="d-flex justify-end mt-5">
                                <v-col class="d-flex align-center justify-end pa-4">
                                    <v-btn color="success" dark class="mx-2">
                                        <Icon icon="teenyicons:ms-excel-solid" style="color: white" width='20px'
                                            class="mr-2" />
                                        Download Excel
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-data-table :headers="headers" :items="users" item-value="no" class="rounded-lg"
                                density="comfortable" id="my_custom_table">
                                <template v-slot:item="{ item }">
                                    <tr class="text-center">
                                        <td>{{ item.no }}</td>
                                        <td>{{ item.transactiondate }}</td>
                                        <td>{{ item.code }}</td>
                                        <td>{{ item.signatory }}</td>
                                        <td>{{ item.position }}</td>
                                        <td>{{ item.app }}</td>
                                        <td>{{ item.document }}</td>
                                        <td>{{ item.ds }}</td>
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
    name: 'Manage-Sign',
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
                { title: 'TANGGAL TRANSAKSI', align: 'center', key: 'transactiondate' },
                { title: 'KODE TRANSAKSI', align: 'center', key: 'code' },
                { title: 'NAMA PENANDA TANGAN', align: 'center', key: 'signatory' },
                { title: 'JABATAN/UNIT KERJA', align: 'center', key: 'position' },
                { title: 'APLIKASI CLIENT', align: 'center', key: 'app' },
                { title: 'JENIS DOKUMEN', align: 'center', key: 'document' },
                { title: 'FILE DIGITAL SIGNATURE', align: 'center', key: 'ds' },
                { title: 'AKSI', align: 'center', key: 'aksi', sortable: false },
            ],
            users: [
                {
                    no: 1,
                    transactiondate: '01/01/2023 15:20:01',
                    code: 'X83OL6',
                    signatory: 'DISKA',
                    app: 'Sistem Informasi Mutasi Daerah',
                    position: 'TIM TEKNIS / SETJEN PUSDATIN',
                    document: 'UNDANGAN',
                    ds: 'Download/Preview',
                },
                {
                    no: 2,
                    transactiondate: '01/01/2023 15:20:01',
                    code: 'X83OL6',
                    signatory: 'PUSDATIN 1',
                    app: 'EPERDA OTDA KEMENDAGRI',
                    position: 'TIM TEKNIS / SETJEN PUSDATIN',
                    document: 'SK-MUTASI',
                    ds: 'Download/Preview',
                },
                {
                    no: 3,
                    transactiondate: '01/01/2023 15:20:01',
                    code: 'X83OL6',
                    signatory: 'DISKA',
                    app: 'E-OFFICE KEMENDAGRI',
                    position: 'TIM TEKNIS / SETJEN PUSDATIN',
                    document: 'SERTIFIKAT-L1',
                    ds: 'Download/Preview',
                },
                {
                    no: 4,
                    transactiondate: '01/01/2023 15:20:01',
                    code: 'X83OL6',
                    signatory: 'PUSDATIN 1',
                    app: 'E-OFFICE KEMENDAGRI',
                    position: 'TIM TEKNIS / SETJEN PUSDATIN',
                    document: 'SK-MUTASI',
                    ds: 'Download/Preview',
                },
                {
                    no: 5,
                    transactiondate: '01/01/2023 15:20:01',
                    code: 'X83OL6',
                    signatory: 'DISKA',
                    app: 'E-OFFICE KEMENDAGRI',
                    position: 'TIM TEKNIS / SETJEN PUSDATIN',
                    document: 'UNDANGAN',
                    ds: 'Download/Preview',
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

        function goToDS() {
            router.push('/digital-sign');
        }

        function goToDSCustom() {
            router.push('/digital-sign-custom');
        }

        return {
            goToDS,
            goToDSCustom
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarCollapsed = !this.isSidebarCollapsed;
        },
    },
};
</script>
