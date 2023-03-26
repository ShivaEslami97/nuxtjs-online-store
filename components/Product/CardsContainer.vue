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
  <div class="container mx-automt-7">
    <template v-if="!productData.error">
      <h2 class="text-2xl font-bold my-10 text-center">BEST SELLER</h2>
      <div class="grid grid-cols-card gap-4">
        <ProductCardGrid
          v-for="p in productData.products"
          :key="p.id"
          :product="p"
        />
      </div>
    </template>

    <h2 class="text-2xl py-4" v-else>
      {{ productData.error }}
    </h2>
  </div>
</template>
