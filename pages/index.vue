<script setup lang="ts">
import { ProductType } from "~~/types";

useHead({
  title: "Shopify",
});

// const productData = useProductStore();

// const { data, pending, error, refresh } = await useAsyncData<ProductType[]>(
//   "products",
//   () => $fetch("https://fakestoreapi.com/products")
// );

// if (data.value && !error.value) {
//   productData.$patch((state) => {
//     state.products = data.value as ProductType[];
//   });
// }
</script>

<template>
  <div>
    <!-- HOME HERO -->
    <HomeHero />
    <!-- HOME PRODUCTS-->
    <ProductCardsContainer />
  </div>
</template>
