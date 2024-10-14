<script setup>
import UserLayout from '@/layouts/UserLayout.vue'
import { useProductStore } from '@/stores/user/product.js'
import product from '@/components/product.vue';
const productStore = useProductStore()
</script>
<template>
    <UserLayout>
        <div class="hero bg-base-200 min-h-screen">
  <div class="hero-content flex-col lg:flex-row">
    <img
      src="https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_6-2x.png"
      class="max-w-sm rounded-lg shadow-2xl ,transition duration-150 ease-in-out hover:scale-110" />
    <div>
      <h1 class="text-4xl font-bold h-20">Welcome to Pokemon TCG </h1>
      <p class="">
        Pokémon Trading Card Game (TCG) เป็นเกมการ์ดสะสมที่ให้ผู้เล่นเข้าสู่โลกแห่งโปเกมอนในรูปแบบของการ์ด โดยคุณจะได้สร้างเด็คของตัวเองที่ประกอบไปด้วยโปเกมอน, การ์ดพลังงาน (Energy), และการ์ดสนับสนุนต่างๆ เพื่อเผชิญหน้ากับผู้เล่นคนอื่นในสนามแข่ง เป้าหมายคือการเอาชนะคู่ต่อสู้ด้วยการใช้ทักษะเชิงกลยุทธ์ การวางแผน และการรู้จักจัดการทรัพยากรในเด็คของคุณ
      </p>

    </div>
  </div>
</div>
<!-- product -->
<div class="carousel rounded-box  max-w-90">
  <div class="carousel-item w-1/2">
    <img
      src="https://dz3we2x72f7ol.cloudfront.net/expansions/obsidian-flames/en-us/SV03_EN_79-2x.png"
      class="w-full" />
  </div>
  <div class="carousel-item w-1/2">
    <img
      src="https://dz3we2x72f7ol.cloudfront.net/expansions/obsidian-flames/en-us/SV03_EN_33-2x.png"
      class="w-full" />
  </div>
  <div class="carousel-item w-1/2">
    <img
      src="https://dz3we2x72f7ol.cloudfront.net/expansions/obsidian-flames/en-us/SV03_EN_164-2x.png"
      class="w-full" />
  </div>
  <div class="carousel-item w-1/2">
    <img
      src="https://dz3we2x72f7ol.cloudfront.net/expansions/obsidian-flames/en-us/SV03_EN_211-2x.png"
      class="w-full" />
  </div>
  <div class="carousel-item w-1/2">
    <img
      src="https://dz3we2x72f7ol.cloudfront.net/expansions/obsidian-flames/en-us/SV03_EN_200-2x.png"
      class="w-full" />
  </div>
  <div class="carousel-item w-1/2">
    <img
      src="https://dz3we2x72f7ol.cloudfront.net/expansions/obsidian-flames/en-us/SV03_EN_224-2x.png"
      class="w-full" />
  </div>
  <div class="carousel-item w-1/2">
    <img
      src="https://dz3we2x72f7ol.cloudfront.net/expansions/obsidian-flames/en-us/SV03_EN_206-2x.png"
      class="w-full" />
  </div>
</div>
    </UserLayout>
</template>