<template>
    <v-app>
        <NavbarMain :isCollapsed="isSidebarCollapsed" @toggle-sidebar="toggleSidebar" />
        <SidebarMain :isCollapsed="isSidebarCollapsed" />
        <v-main :class="{ 'main-collapsed': isSidebarCollapsed }">
            <v-container fluid class="pa-5 bg-white">
                <v-row no-gutters>
                    <v-col class="d-flex align-center pa-4">
                        <Icon icon="icons8:left-round" style="color: black" width='25px' />
                        <span class="font-weight-bold text-h6 ml-5">Draft - TTE</span>
                    </v-col>
                </v-row>
            </v-container>
            <v-container fluid class="my-3">
                <v-row>
                    <v-col>
                        <v-card class="pa-5" min-height="100vh">
                            <v-row no-gutters class="d-flex justify-space-between">
                                <v-col class="d-flex align-center pa-4">
                                    <Icon icon="ri:draft-line" style="color: black" width="24" />
                                    <span class="font-weight-bold text-h6 ml-2">Scenario</span>
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
                                            <v-select label="Nama Aplikasi"
                                                :items="['Option 1', 'Option 2', 'Option 3']" outlined dense></v-select>
                                        </v-col>
                                        <v-col cols="6">
                                            <v-select label="Jenis Dokumen" :items="['Unit 1', 'Unit 2', 'Unit 3']"
                                                outlined dense></v-select>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field label="Search" placeholder="Cari disini..." outlined
                                                dense></v-text-field>
                                        </v-col>
                                        <v-col cols="12" class="text-left">
                                            <v-btn color="primary">Cari</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-form>
                            <v-data-table :headers="headers" :items="users" item-value="code" class="rounded-lg"
                                density="comfortable" id="my_custom_table">
                                <template v-slot:item="{ item }">
                                    <tr class="text-center">
                                        <td><v-btn color="primary">{{ item.code }}</v-btn></td>
                                        <td>{{ item.scenario }}</td>
                                        <td>{{ item.document }}</td>
                                        <td>{{ item.flow }}</td>
                                        <td>{{ item.approval }}</td>
                                        <td>{{ item.tte }}</td>
                                        <td>{{ item.keterangan }}</td>
                                        <!-- <td>{{ item.ds }}</td> -->
                                        <td>
                                            <v-menu transition="scale-transition">
                                                <template v-slot:activator="{ props }">
                                                    <v-btn color="success" v-bind="props">
                                                        TTE
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
                { title: 'KODE', align: 'center', key: 'code' },
                { title: 'NAMA SKENARIO', align: 'center', key: 'scenario' },
                { title: 'DOKUMEN', align: 'center', key: 'document' },
                { title: 'FLOW', align: 'center', key: 'flow' },
                { title: 'APPROVAL', align: 'center', key: 'approval' },
                { title: 'TTE', align: 'center', key: 'tte' },
                { title: 'KETERANGAN', align: 'center', key: 'keterangan' },
                // { title: 'FILE DIGITAL SIGNATURE', align: 'center', key: 'ds' },
                { title: 'AKSI', align: 'center', key: 'aksi', sortable: false },
            ],
            users: [
                {
                    code: 1,
                    scenario: 'SERTIFIKAT 1 Des',
                    document: 'SERTIFIKAT - L1',
                    flow: 'TTE',
                    approval: 'TIM TEKNIS / SETJEN PUSDATIN',
                    tte: 'PUSDATIN 1',
                    keterangan: '000/003/KEMENDAGRI',
                    // ds: 'Download/Preview',
                },
                {
                    code: 2,
                    scenario: 'Testing KPU 2021',
                    document: 'KOMITMEN BERSAMA',
                    flow: 'TTE',
                    tte: 'PUSDATIN 2',
                    approval: 'TIM TEKNIS / SETJEN PUSDATIN',
                    keterangan: 'SK-MUTASI',
                    // ds: 'Download/Preview',
                },
                {
                    code: 3,
                    scenario: 'ULA - PENYAMPAIAN DATA EKSISTING',
                    document: 'KEMENLU - KAPUSFASKER',
                    flow: 'TTE',
                    approval: 'TIM TEKNIS / SETJEN PUSDATIN',
                    tte: 'PUSDATIN 2',
                    keterangan: 'SERTIFIKAT-L1',
                    // ds: 'Download/Preview',
                },
                {
                    code: 4,
                    scenario: 'BPSDM - Pelatihan SDM Makasar',
                    document: 'SERTIFIKAT - L1',
                    flow: 'TTE',
                    approval: 'TIM TEKNIS / SETJEN PUSDATIN',
                    tte: 'PUSDATIN 1',
                    keterangan: 'SERTIFIKAT F-1 TAHUN 2020',
                    // ds: 'Download/Preview',
                },
                {
                    code: 5,
                    scenario: 'NOTA PENGAJUAN KONSEP',
                    document: 'RENCANA AKSI',
                    flow: 'TTE',
                    approval: 'TIM TEKNIS / SETJEN PUSDATIN',
                    tte: 'PUSDATIN 3',
                    keterangan: 'Tahun 2020 *Revisi',
                    // ds: 'Download/Preview',
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
