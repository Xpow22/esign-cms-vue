<template>
    <v-app>
        <NavbarMain :isCollapsed="isSidebarCollapsed" @toggle-sidebar="toggleSidebar" />
        <SidebarMain :isCollapsed="isSidebarCollapsed" />
        <v-main :class="{ 'main-collapsed': isSidebarCollapsed }">
            <v-container fluid class="pa-5 bg-white">
                <v-row no-gutters>
                    <v-col class="d-flex align-center pa-4">
                        <Icon icon="icons8:left-round" style="color: black" width='20px' />
                        <span class="font-weight-bold text-h6 ml-3">Reset Password</span>
                    </v-col>
                </v-row>
            </v-container>
            <v-container fluid class="my-3">
                <v-row>
                    <v-col>
                        <v-card class="pa-5" min-height="100%">
                            <v-row no-gutters class="d-flex justify-space-between">
                                <v-col class="d-flex align-center pa-4">
                                    <Icon icon="mdi:password" style="color: black" width='20px' />
                                    <span class="font-weight-bold text-h6 ml-2">Reset Password</span>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-form class="my-10">
                                <v-row class="d-flex flex-column align-center mx-5">
                                    <v-col cols="12">
                                        <div class="d-flex align-center mb-1">
                                            <label for="oldpwd" class="ml-2">Password Lama</label>
                                        </div>
                                        <v-text-field id="oldpwd" v-model="oldpwd" outlined
                                            :prepend-inner-icon="'uil:calendar'"></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <div class="d-flex align-center mb-1">
                                            <label for="newpwd" class="ml-2">Password Baru</label>
                                        </div>
                                        <v-text-field id="newpwd" v-model="newpwd" outlined
                                            :prepend-inner-icon="'uil:calendar'"></v-text-field>
                                    </v-col>

                                    <v-col cols="12">
                                        <div class="d-flex align-center mb-1">
                                            <label for="renewpwd" class="ml-2">Ulangi Password Baru</label>
                                        </div>
                                        <v-text-field id="renewpwd" v-model="renewpwd" outlined
                                            :prepend-inner-icon="'uil:calendar'"></v-text-field>
                                    </v-col>

                                    <v-col cols="12" class="text-center">
                                        <v-btn width="100vw" color="primary"
                                            class="mt-4 py-5 d-flex align-center">SIMPAN</v-btn>
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
.v-container.header-container {
    background-color: white;
    border-bottom: 1px solid #ddd;
}
</style>
