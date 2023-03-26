<script setup lang="ts">
import { useProductsStore } from "~~/stores/products";
import { ProductType } from "~~/types";

const productData = useProductsStore();

// const { data, pending, error, refresh } = await useAsyncData<ProductType[]>(
//   "products",
//   () => $fetch("https://fakestoreapi.com/products")
// );

// if (data.value && !error.value) {
//   productData.$patch((state) => {
//     state.products = data.value as ProductType[];
//   });
// }

const result = await productData.getProductsData(
  "https://fakestoreapi.com/products"
);
console.log(productData.error);
</script>

<template>
  <div class="container mx-auto grid grid-cols-card gap-4 mt-7">
    <template v-if="!productData.error">
      <ProductCardGrid
        v-for="p in productData.products"
        :key="p.id"
        :product="p"
      />
    </template>

    <h2 class="text-2xl py-4" v-else>
      {{ productData.error }}
    </h2>
  </div>
</template>
