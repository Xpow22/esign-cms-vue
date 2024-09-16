<template>
    <footer :class="['dashboard-footer mt-5 px-5', { 'footer-collapsed': isCollapsed }]">
        <div class="footer-content d-flex justify-end">
            <div class="text-footer bg-white rounded-xl px-5 py-2 mr-3">
                <span>Pusat Data dan Sistem Informasi | Kementerian Dalam Negeri</span>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    props: {
        isCollapsed: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style scoped>
.dashboard-footer {
    height: 60px;
    /* Adjust this based on the sidebar's width */
    transition: padding 0.3s;
    align-items: end;
}

.footer-collapsed {
    padding: 0 120px;
}

.footer-content {
    width: 100%;
    height: 100%;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #333;
}

.text-footer {
    font-size: medium;
}
</style>
