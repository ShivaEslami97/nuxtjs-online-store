<script setup lang="ts">
interface Props {
  title: string;
  category: string;
}
const props = defineProps<Props>();
</script>

<template>
  <!-- PRODUCT HERO -->
  <div
    class="relative z-10 h-[50vh] w-100 bg-no-repeat bg-cover bg-[center_top] bg-[url('https://cdn.shopify.com/s/files/1/0572/0145/9265/files/bread.jpg?v=1665052783&width=1920')]"
  >
    <div class="z-1 absolute w-full h-full bg-black opacity-70"></div>
    <div class="pt-32 container mx-auto z-50 relative">
      <h2 class="text-white text-3xl">PRODUCT</h2>
      <ul class="flex gap-2 text-white mt-3 text-lg">
        <li>Home /</li>
        <li>{{ category }} /</li>
        <li class="text-primary w-1/2">{{ title }}</li>
      </ul>
    </div>
  </div>
  <!-- PRODUCT HERO -->
</template>
