<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useProductStore } from "~~/stores/product";

const route = useRoute();
const productDetail = useProductStore();
const { product, error } = storeToRefs(productDetail);

const id = route.params.id;

useHead({
  title: `Product ${id}`,
});

const result = await productDetail.getProductsData(
  `https://fakestoreapi.com/products/${id}`
);
</script>

<template>
  <DetailProductHero :category="product.category" :title="product.title" />
  <div class="container mx-auto px-4 my-12">
    <div class="grid gap-12 grid-cols-detail" v-if="!error">
      <NuxtImg
        :src="product.image"
        class="w-1/2 mx-auto"
        :alt="product.title"
      />
      <div>
        <DetailProductAttributes
          :title="product.title"
          :rate="product.rating.rate"
          :price="product.price"
        />
        <DetailProductDescription :description="product.description" />
        <DetailProductCount :count="product.rating.count" />
        <DetailProductAction />
        <DetailProductCategory :category="product.category" />
      </div>
    </div>
    <h2 class="text-xl py-4" v-else>
      {{ error }}
    </h2>
  </div>
</template>
