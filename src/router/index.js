import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '@/views/Admin/DashboardPage.vue'
import AdminLogin from '../views/Auth/AdminLogin.vue'
import ManageUser from '@/views/Admin/ManageUser.vue'
import AddUser from '@/views/Admin/AddUser.vue'
import ManageDev from '@/views/Admin/ManageDev.vue'
import ListApp from '@/views/Admin/ListApp.vue'
import ListDoc from '@/views/Admin/ListDoc.vue'
import ManageSign from '@/views/Admin/ManageSign.vue'
import ManageLog from '@/views/Admin/ManageLog.vue'
import EditUser from '@/views/Admin/EditUser.vue'
import ResetPassword from '@/views/Admin/ResetPassword.vue'
import DigitalSignCustom from '@/views/Admin/DigitalSignCustom.vue'
import DigitalSign from '@/views/Admin/DigitalSign.vue'
import ApprovalSign from '@/views/Signatory/ApprovalSign.vue'
import TTE from '@/views/Signatory/Tte.vue'
import ApprovalTrack from '@/views/Signatory/ApprovalTrack.vue'
import TteTrack from '@/views/Signatory/TteTrack.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'adminlogin',
      component: AdminLogin
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardPage
    },
    {
      path: '/manage-user',
      name: 'Manage-User',
      component: ManageUser
    },

    {
      path: '/manage-dev',
      name: 'Manage-Dev',
      component: ManageDev
    },
    {
      path: '/manage-sign',
      name: 'Manage-Sign',
      component: ManageSign
    },
    {
      path: '/manage-log',
      name: 'Manage-Log',
      component: ManageLog
    },
    {
      path: '/list-app',
      name: 'List-App',
      component: ListApp
    },
    {
      path: '/list-document',
      name: 'List-Document',
      component: ListDoc
    },
    {
      path: '/add-user',
      name: 'Add-User',
      component: AddUser
    },
    {
      path: '/edit-user',
      name: 'Edit-User',
      component: EditUser
    },
    {
      path: '/reset-password',
      name: 'Reset-Password',
      component: ResetPassword
    },
    {
      path: '/digital-sign',
      name: 'Digital-Sign',
      component: DigitalSign
    },
    {
      path: '/digital-sign-custom',
      name: 'Digital-Sign-Custom',
      component: DigitalSignCustom
    },
    {
      path: '/approval-sign',
      name: 'Approval-Sign',
      component: ApprovalSign
    },
    {
      path: '/approval-track',
      name: 'Approval-Track',
      component: ApprovalTrack
    },
    {
      path: '/tte',
      name: 'TTE',
      component: TTE
    },
    {
      path: '/tte-track',
      name: 'Tte-Track',
      component: TteTrack
    }
  ]
})

export default router
