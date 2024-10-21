<script setup>
import { defineProps } from 'vue';

defineProps({
    products: Array
})
</script>


<template>
    <section class="grid grid-cols-1  sm:grid-cols-2 md:sm:grid-cols-3 lg:sm:grid-cols-4 gap-5 my-4">
        <div v-for="product in products" class="card bg-base-100 w-auto shadow-xl ">
  <div class="card-body">
    <h2 class="card-title">ID: {{product.Id}}</h2>
    
  </div>
  <figure>
    <img
      :src="product.imageUrl"
      class="transition duration-150 ease-in-out hover:scale-110"
      />
  </figure>
</div>
</section>
</template>