<script setup lang="ts">
import { useCartStore } from "~~/stores/cart";
import { ProductType } from "~~/types";

interface Props {
  product: ProductType;
}
const props = defineProps<Props>();

const cart = useCartStore();
const qty = ref(1);

const addToCartHandler = () => {
  cart.addToCart(props.product, qty.value);
};
</script>

<template>
  <div class="mt-3">
    <div class="grid grid-cols-twoCol gap-3 mt-3">
      <input
        class="border-2 border-[#e7e7e7] rounded text-center focus:outline-none"
        type="number"
        v-model="qty"
        min="1"
      />
      <button @click="addToCartHandler" class="bg-primary rounded px-2 py-2">
        Add to Cart {{ qty }}
      </button>
    </div>
  </div>
</template>
