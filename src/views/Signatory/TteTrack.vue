<template>
    <v-app>
        <NavbarMain :isCollapsed="isSidebarCollapsed" @toggle-sidebar="toggleSidebar" />
        <SidebarMain :isCollapsed="isSidebarCollapsed" />
        <v-main :class="{ 'main-collapsed': isSidebarCollapsed }">
            <v-container fluid class="pa-5 bg-white">
                <v-row no-gutters>
                    <v-col class="d-flex align-center pa-4">
                        <Icon icon="icons8:left-round" style="color: black" width='25px' />
                        <span class="font-weight-bold text-h6 ml-5">APPROVAL - TRACKING</span>
                    </v-col>
                </v-row>
            </v-container>

            <v-container fluid class="my-3">
                <v-row>
                    <v-col>
                        <v-card class="pa-5 mt-3 border-sm">
                            <v-card-title>
                                <v-col class="d-flex align-center pa-4">
                                    <Icon icon="mdi:approval" style="color: black" width="30px" />
                                    <span class="font-weight-bold text-h6 ml-2">User Approval</span>
                                </v-col>
                            </v-card-title>
                            <v-card class='border-md'>
                                <v-col cols='4'>
                                    <v-timeline align="start" side="end">
                                        <v-timeline-item v-for="(item, index) in timelineItems" :key="index"
                                            :dot-color="item.color" size="small">
                                            <div class="d-flex">
                                                <strong>{{ item.title }}</strong>
                                            </div>
                                            <div>
                                                <small>{{ item.description }}</small>
                                            </div>
                                            <small class="grey--text">{{ item.date }}</small>
                                        </v-timeline-item>
                                    </v-timeline>
                                </v-col>
                            </v-card>
                        </v-card>
                        <v-card class="pa-5 mt-3 border-sm">
                            <v-card-title>
                                <v-col class="d-flex align-center pa-4">
                                    <Icon icon="mdi:approval" style="color: black" width="30px" />
                                    <span class="font-weight-bold text-h6 ml-2">User TTE</span>
                                </v-col>
                            </v-card-title>
                            <v-card class='border-md'>
                                <v-col cols='4'>
                                    <v-timeline align="start" side="end">
                                        <v-timeline-item v-for="(item, index) in timelineItems" :key="index"
                                            :dot-color="item.color" size="small">
                                            <div class="d-flex">
                                                <strong>{{ item.title }}</strong>
                                            </div>
                                            <div>
                                                <small>{{ item.description }}</small>
                                            </div>
                                            <small class="grey--text">{{ item.date }}</small>
                                        </v-timeline-item>
                                    </v-timeline>
                                </v-col>
                            </v-card>
                        </v-card>
                        <v-card class="pa-5 mt-3 border-sm">
                            <v-card-title>
                                <v-col class="d-flex align-center pa-4" cols="auto">
                                    <Icon icon="mdi:feather" style="color: black" width="24" />
                                    <span class="font-weight-bold text-h6 ml-2">Approval</span>
                                </v-col>
                            </v-card-title>
                            <v-card class="d-flex flex-column align-center">
                                <v-col cols="8">
                                    <label for="passphrase" class="mb-2">Passphrase</label>
                                    <v-text-field id="passphrase" v-model="formData.passphrase" outlined class="mb-2">
                                    </v-text-field>
                                    <div class="d-flex align-center justify-center">
                                        <v-btn color="green" class="white--text d-flex justify-center"
                                            @click="generateDocument">
                                            <Icon icon="mdi:feather" style="color: white" width="24" />
                                            Generate
                                        </v-btn>
                                    </div>
                                </v-col>
                            </v-card>
                        </v-card>
                        <v-card class="pa-5 mt-3 border-sm">
                            <v-card-title class="d-flex align-center justify-space-between">
                                <v-col class=" pa-4">
                                    <Icon icon="icon-park-solid:doc-detail" style="color: black" />
                                    <span class="font-weight-bold text-h6 ml-2">Dokumen</span>
                                </v-col>
                                <v-btn color="primary" class="ml-auto" @click="refreshData">
                                    <Icon icon="mdi:refresh" style="color: white" />
                                    Refresh
                                </v-btn>
                            </v-card-title>
                            <v-card class='border-md'>
                                <v-data-table :items="documents" :headers="headers" id="my_custom_table"
                                    density="comfortable" class="elevation-1">
                                    <template v-slot:item="{ item }">
                                        <td class='text-center'>{{ item.id }}</td>
                                        <td class='text-center'>{{ item.namaDokumen }}</td>
                                        <td class='text-center pa-5'>
                                            <v-btn icon color="primary" @click="lihatDokumen(item)">
                                                <Icon icon="mdi:eye" style="color: white" />
                                            </v-btn>
                                        </td>
                                    </template>
                                </v-data-table>
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
            timelineItems: [
                {
                    title: 'Request Submitted',
                    description: 'John Doe submitted the request.',
                    date: '2024-09-10 10:00 AM',
                    color: 'pink'
                },
                {
                    title: 'Request Reviewed',
                    description: 'Jane Smith reviewed the request.',
                    date: '2024-09-11 02:30 PM',
                    color: 'blue'
                },
                {
                    title: 'Approval Granted',
                    description: 'Michael Johnson granted the approval.',
                    date: '2024-09-12 09:15 AM',
                    color: 'green'
                }
            ],
            trackingData: {
                kodeTransaksi: 'PCWQRL',
                posisiFlow: 'TTE',
                keterangan: 'SERTIFIKAT F-1 TAHUN 2020',
                namaScenario: 'BPSDM - Pelatihan SDM Makasar',
                userDrafter: 'Admin Drafter',
                updateTerakhir: '2021-03-01 09:49:57'
            },
            headers: [
                { title: 'No', align: 'center', key: 'id' },
                { title: 'Nama Dokumen', align: 'center', key: 'namaDokumen' },
                { title: 'Lihat', align: 'center', key: 'action', sortable: false }
            ],
            documents: [
                { id: 1, namaDokumen: 'bpsdm.pdf' },
            ],
            formData: {
                passphrase: ''
            }
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
.v-container.header-container {
    background-color: white;
    border-bottom: 1px solid #ddd;
}
</style>
