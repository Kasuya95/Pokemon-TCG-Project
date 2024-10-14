<script setup>
import UserLayout from '@/layouts/UserLayout.vue'
import { useProductStore } from '@/stores/user/product.js'
import product from '@/components/product.vue';
const productStore = useProductStore()
</script>
<template>
    <UserLayout>
        <product 
        :products="productStore.list"></product>
    </UserLayout>
</template>