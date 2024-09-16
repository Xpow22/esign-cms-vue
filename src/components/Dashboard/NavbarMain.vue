<template>
  <v-app-bar app color="#3E80D9" flat height="70" class="px-5">
    <v-toolbar-title class="white--text d-flex align-center">
      <span class="font-weight-bold font-italic" :class="{ 'text-collapsed': isCollapsed }"
        style="color: yellow">eSign</span>
      <span class="ml-2" :class="{ 'text-collapsed': isCollapsed }" style="color: white">KEMENDAGRI</span>
      <v-btn icon class="white--text" @click="toggleSidebar">
        <Icon icon="mdi:menu" width="24" height="24" />
      </v-btn>
    </v-toolbar-title>
    <v-menu offset-y transition="scale-transition">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" class="text-black d-flex align-center">
          <v-icon left>
            <img src="/src/assets/logo-kemendagri.png" width="30vw" alt="KEMENDAGRI" />
          </v-icon>
          <div class="text-white mx-5 text-uppercase">Hi, Admin</div>
          <v-icon right size="15">
            <Icon icon="bytesize:chevron-bottom" style="color: white" />
          </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="ResetPassword">
          <div class="d-flex align-center">
            <Icon icon="mdi:password" style="color: black" />
            <v-list-item-title class="ml-2">Ubah Password</v-list-item-title>
          </div>
        </v-list-item>
        <v-list-item @click="EditProfile">
          <div class="d-flex align-center">
            <Icon icon="iconamoon:profile-circle-fill" style="color: black" />
            <v-list-item-title class="ml-2">Edit Profile</v-list-item-title>
          </div>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="logout">
          <div class="d-flex align-center">
            <Icon icon="hugeicons:logout-04" style="color: black" />
            <v-list-item-title class="ml-2">Logout</v-list-item-title>
          </div>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
import { useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';

export default {
  name: "NavbarMain",
  components: {
    Icon,
  },
  props: {
    isCollapsed: {
      type: Boolean,
      default: false,
    },
  },
  setup(_, { emit }) {
    const router = useRouter();

    const logout = () => {
      router.push('/');
    };

    const EditProfile = () => {
      router.push('/edit-user');
    };

    const ResetPassword = () => {
      router.push('/reset-password');
    };

    const toggleSidebar = () => {
      emit('toggle-sidebar');
    };

    return {
      logout,
      EditProfile,
      ResetPassword,
      toggleSidebar,
    };
  },
};
</script>
