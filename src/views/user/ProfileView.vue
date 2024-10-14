<script setup>
import UserLayout from '@/layouts/UserLayout.vue'</script>

<template>
    <UserLayout>
    <div class="max-w-2xl mx-auto border border-base-200 shadow-xl p-8">
       <div class="font-bold text-2xl">  Profile</div>

       <div class="flex flex-col item-center ">
            <div>
                <div class="avatar">
                    <div class="w-24 rounded-full">
                <img src="https://woodgreen.org.uk/wp-content/uploads/2021/11/hamster_advice_article-1536x0-c-default.webp">
                
                </div>
                <h3>username: Test</h3>
                </div>
            </div>
       </div>
    </div>
    </UserLayout>
</template>