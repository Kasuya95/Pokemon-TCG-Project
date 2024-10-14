<script setup>
import product from '@/components/product.vue'
import UserLayout from '@/layouts/UserLayout.vue'
import {ref, onMounted, computed, watch} from 'vue'
import {useRoute} from 'vue-router'
import { useProductStore } from '@/stores/user/product.js'
const productStore = useProductStore()

const route = useRoute()
const searchText = ref('')
onMounted(() => {
    if (route.query.q){
        searchText.value = route.query.q
    }
})
watch(() => route.query.q, (newSearchText) => {
    searchText.value = newSearchText
}, { immediate: true})
const filterProducts = computed(() => {
    return productStore.filterProducts(searchText.value)
})
</script>
<template>
    <UserLayout>
  <div class="text-3xl m-4">Search: <b>{{ searchText }}</b></div>
  <product 
  :products="filterProducts"></product>
    </UserLayout>
</template>