<script setup lang="ts">
import { useCartStore } from "~~/stores/cart";
import { ProductType } from "~~/types";

interface Props {
  product: ProductType;
}

const props = defineProps<Props>();

const cart = useCartStore();
</script>

<template>
  <!-- CAR CARD -->
  <div class="card">
    <div class="card__media">
      <NuxtImg :src="product.image" :alt="product.title" class="card__img" />
      <div class="card__img-overlay">
        <NuxtLink class="card__link" :to="`/products/${product.id}`">
          <Icon name="material-symbols:attachment" size="1.5em" />
        </NuxtLink>
      </div>
    </div>

    <div class="p-4 flex flex-col gap-3">
      <div
        class="text-center space-y-1"
        @click="navigateTo(`/products/${product.id}`)"
      >
        <h1 :title="product.title" class="card__title">
          {{ truncateText(product.title, 25) }}
        </h1>
        <p class="text-sm text-gray-700">
          {{ truncateText(product.description, 30) }}
        </p>
      </div>
      <hr class="text-grayLtr" />
      <div class="flex justify-between">
        <p class="mt-auto text-2xl font-bold text-primary tex">
          ${{ product.price }}
        </p>
        <button
          @click="cart.addToCart(product)"
          class="border w-10 h-10 border-[#6e6e6ea1] rounded-full transition-all duration-300 hover:bg-primary hover:border-primary hover:text-white"
        >
          <Icon name="material-symbols:shopping-cart-outline" size="1.5em" />
        </button>
      </div>
    </div>
  </div>
</template>
