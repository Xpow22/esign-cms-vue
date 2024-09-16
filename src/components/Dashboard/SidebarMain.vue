<template>
    <v-navigation-drawer app :width="isCollapsed ? '100' : '350'" :mini-variant="isCollapsed" mini-variant-width="100"
        class="sidebar" transition="width 0.3s ease">
        <v-list class="pt-0">
            <v-list-item class="d-flex align-center mb-4 my-1">
                <div class="d-flex align-center justify-space-between w-100">
                    <v-list-item-avatar>
                        <img src="/src/assets/logo-kemendagri.png" width="50vw" alt="KEMENDAGRI" />
                    </v-list-item-avatar>
                    <v-list-item-content v-if="!isCollapsed" class="ml-10">
                        <v-list-item-title class="font-weight-bold">Admin</v-list-item-title>
                    </v-list-item-content>
                </div>
            </v-list-item>
            <v-list-item-group>
                <template v-for="(item, index) in menuItems" :key="index">
                    <!-- Menu Utama -->
                    <v-list-item @click="toggleMenu(item.route)"
                        :class="['d-flex align-center my-2 py-3', { active: isActive(item.route) }]">
                        <div class="d-flex align-center">
                            <v-list-item-icon class="d-flex align-center">
                                <Icon :icon="item.icon" :style="{ width: '15px' }" />
                            </v-list-item-icon>
                            <v-list-item-content v-if="!isCollapsed" class="d-flex align-center">
                                <v-list-item-title class="mx-2">{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-icon v-if="item.submenu" class="ml-3 d-flex align-center">
                                <Icon icon="bytesize:chevron-bottom"
                                    :class="{ 'rotate-180': activeMenu === item.route }"
                                    :style="{ width: '10px', transition: 'transform 0.5s ease' }" />
                            </v-list-item-icon>
                        </div>
                    </v-list-item>
                    <!-- Submenu -->
                    <v-list-item-group v-if="item.submenu && activeMenu === item.route" class="submenu">
                        <v-list-item v-for="(subItem, subIndex) in item.submenu" :key="subIndex"
                            @click="navigate(subItem.route)"
                            :class="['d-flex align-center  ml-7 my-2 py-3', { active: isActive(subItem.route) }]">
                            <div class="d-flex align-center">
                                <v-list-item-icon>
                                    <Icon :icon="subItem.icon" />
                                </v-list-item-icon>
                                <v-list-item-content v-if="!isCollapsed">
                                    <v-list-item-title class="mx-2">{{ subItem.title }}</v-list-item-title>
                                </v-list-item-content>
                            </div>
                        </v-list-item>
                    </v-list-item-group>
                </template>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { useRoute } from 'vue-router';
import { Icon } from '@iconify/vue';

export default {
    name: "SidebarMain",
    components: {
        Icon
    },
    props: {
        isCollapsed: {
            type: Boolean,
            default: false,
        },
    },
    setup() {
        const route = useRoute();
        return { route };
    },
    data() {
        return {
            activeMenu: null,
            menuItems: [
                { title: "Dashboard", route: "/dashboard", icon: "mdi:view-dashboard" },
                {
                    title: "Kelola & Setting Pengguna",
                    route: "/settings",
                    icon: "mdi:account-cog",
                    submenu: [
                        { title: "Data & Setting User", route: "/manage-user", icon: "teenyicons:users-solid" },
                        { title: "Data Developer", route: "/manage-dev", icon: "material-symbols:developer-mode-tv-rounded" }
                    ]
                },
                {
                    title: "Master Data & Pengaturan",
                    route: "/data",
                    icon: "mdi:database",
                    submenu: [
                        { title: "Data Aplikasi Client", route: "/list-app", icon: "icon-park-outline:cube" },
                        { title: "Data Dokumen Surat / Setting DS", route: "/list-document", icon: "basil:document-outline" }
                    ]
                },
                { title: "Tanda Tangan Digital", route: "/manage-sign", icon: "mdi:feather" },
                { title: "Log Transaksi", route: "/manage-log", icon: "mdi:file-document" },
                { title: "Approval", route: "/approval-sign", icon: "mdi:approve" },
                { title: "Tanda Tangan Draft Digital", route: "/tte", icon: "fluent:signature-16-filled" },
            ],
        };
    },
    methods: {
        navigate(route) {
            this.$router.push(route);
            this.activeMenu = null;
        },
        isActive(route) {
            return this.route.path === route;
        },
        toggleMenu(route) {
            if (this.menuItems.some(item => item.route === route && item.submenu)) {
                this.activeMenu = this.activeMenu === route ? null : route;
            } else {
                this.activeMenu = null;
                this.navigate(route);
            }
        }
    }
};
</script>

<style scoped>
.sidebar {
    background-color: #2E3B55;
    color: white;
    transition: width 0.3s ease;
}

.collapsed .v-list-item-content {
    display: none;
}

.v-navigation-drawer {
    transition: width 0.3s ease;
}

.collapsed {
    width: 150px !important;
}

.submenu {
    transition: max-height 0.3s ease-out;
    overflow: hidden;
    max-height: 0;
}

.submenu.v-list-item-group {
    max-height: 500px;
}

.rotate-180 {
    transition: transform 0.5s ease;
    transform: rotate(180deg);
}
</style>
