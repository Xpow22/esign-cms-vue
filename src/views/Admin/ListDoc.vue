<template>
    <v-app>
        <NavbarMain :isCollapsed="isSidebarCollapsed" @toggle-sidebar="toggleSidebar" />
        <SidebarMain :isCollapsed="isSidebarCollapsed" />
        <v-main :class="{ 'main-collapsed': isSidebarCollapsed }">
            <v-container fluid class="pa-5 bg-white">
                <v-row no-gutters>
                    <v-col class="d-flex align-center pa-4">
                        <Icon icon="icons8:left-round" style="color: black" width='25px' />
                        <span class="font-weight-bold text-h6 ml-5">List Dokumen</span>
                    </v-col>
                </v-row>
            </v-container>
            <v-container fluid class="my-3">
                <v-row>
                    <v-col>
                        <v-card>
                            <v-card-title class="d-flex justify-space-between my-5">
                                <div class="d-flex align-center">
                                    <Icon icon="mdi:feather" style="color: black" width="24" />
                                    <div class="font-weight-bold ml-2">Data Dokumen/Surat</div>
                                </div>
                                <v-btn color="teal" dark @click="showAddDocDialog">
                                    <Icon icon="mdi:plus-circle" class="mr-2" />
                                    Tambah
                                </v-btn>
                            </v-card-title>
                            <v-data-table :headers="headers" :items="documents" class="elevation-1"
                                id="my_custom_table">
                                <template v-slot:item="{ item }">
                                    <tr>
                                        <td class='text-center'>{{ item.no }}</td>
                                        <td class='text-center'>{{ item.documentName }}</td>
                                        <td class='text-center'>{{ item.clientName }}</td>
                                        <td class='text-center'>
                                            <Icon icon="mi:delete" @click="showEditAlert(item.id)" width="25"
                                                height="25" style="color: #F10000;" class="cursor-pointer" />
                                            <Icon icon="mdi:pencil" @click="showEditAlert(item.id)" width="25"
                                                height="25" style="color: #01C45B; margin: 0 0.5rem;"
                                                class="cursor-pointer" />
                                            <Icon icon="material-symbols:info-outline" @click="handleInfo(item.id)"
                                                width="25" height="25" style="color: #41416E;" class="cursor-pointer" />
                                        </td>
                                    </tr>
                                </template>
                            </v-data-table>
                        </v-card>
                    </v-col>
                </v-row>
                <AddDoc :isVisible="isAddDoc" @update:isVisible="isAddDoc = $event" />
            </v-container>
        </v-main>
        <!-- Mengirim status collapse ke Footer -->
        <FooterMain :isCollapsed="isSidebarCollapsed" />
    </v-app>
</template>

<script>
import { ref } from 'vue';
import NavbarMain from '@/components/Dashboard/NavbarMain.vue';
import SidebarMain from '@/components/Dashboard/SidebarMain.vue';
import FooterMain from '@/components/Dashboard/FooterMain.vue';
import { Icon } from '@iconify/vue';
import AddDoc from '@/components/Dialog/AddDoc.vue';

export default {
    name: 'DashboardPage',
    components: {
        NavbarMain,
        SidebarMain,
        FooterMain,
        AddDoc,
        Icon
    },
    data() {
        return {
            isSidebarCollapsed: false,
            // showModalContent: false,
            headers: [
                { title: 'NO', align: 'center', key: 'no' },
                { title: 'Nama Dokumen/Surat', align: 'center', key: 'documentName' },
                { title: 'Nama Aplikasi Client', align: 'center', key: 'clientName' },
                { title: 'Aksi', align: 'center', key: 'action' }
            ],
            documents: [
                { no: 1, documentName: 'UNDANGAN', clientName: 'ESIGN KEMENDAGRI' },
                { no: 2, documentName: 'NOTA DINAS', clientName: 'ESIGN KEMENDAGRI' },
                { no: 3, documentName: 'SURAT TUGAS', clientName: 'ESIGN KEMENDAGRI' },
                { no: 4, documentName: 'LAPORAN', clientName: 'ESIGN KEMENDAGRI' },
                { no: 5, documentName: 'SURAT DENGAN LAMPIRAN', clientName: 'ESIGN KEMENDAGRI' }
            ]
        };
    },
    setup() {
        const isAddDoc = ref(false);

        const showAddDocDialog = () => {
            isAddDoc.value = true;
        };

        return {
            isAddDoc,
            showAddDocDialog,
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
