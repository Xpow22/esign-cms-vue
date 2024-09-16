<template>
    <v-app>
        <NavbarMain :isCollapsed="isSidebarCollapsed" @toggle-sidebar="toggleSidebar" />
        <SidebarMain :isCollapsed="isSidebarCollapsed" />
        <v-main :class="{ 'main-collapsed': isSidebarCollapsed }">
            <v-container fluid class="pa-5 bg-white">
                <v-row no-gutters>
                    <v-col class="d-flex align-center pa-4">
                        <Icon icon="icons8:left-round" style="color: black" width='25px' />
                        <span class="font-weight-bold text-h6 ml-5">Dashboard </span>
                    </v-col>
                </v-row>
            </v-container>

            <v-container fluid class="my-3">
                <v-row>
                    <v-col>
                        <v-card class="pa-5" min-height="100vh">
                            <v-card class="pa-5 mt-3 border-sm">
                                <v-card-title class="my-4">Info Akun Anda</v-card-title>
                                <v-card-text>
                                    <div>
                                        Status:
                                        <v-chip color="red" dark>NIK anda kosong, mohon update profil anda</v-chip>
                                    </div>
                                </v-card-text>
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
