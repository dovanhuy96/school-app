<script setup lang="ts">
    import HeaderView from '@/layout/Header.vue'
    import FooterView from '@/layout/Footer.vue'
</script>

<template>
    <div id="main">
        <HeaderView />
        <RouterView />
        <FooterView />
    </div>
</template>

