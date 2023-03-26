<script setup lang="ts">
import { useCartStore } from "~~/stores/cart";
interface Props {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  qty: number;
}

defineProps<Props>();

const cart = useCartStore();
const removeFromCart = (productId: number) => {
  cart.removeCartItem(productId);
};
</script>

<template>
  <li class="flex py-6">
    <div
      class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-grayLtr"
    >
      <img
        :src="image"
        alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
        class="h-full w-full object-contain object-center"
      />
    </div>

    <div class="ml-4 flex flex-1 flex-col">
      <div>
        <div
          class="flex justify-between text-base font-medium text-neutral-900"
        >
          <h3>
            <a href="#">{{ title }}</a>
          </h3>
          <p class="ml-4">${{ price }}</p>
        </div>
        <p class="mt-1 text-sm text-gray">{{ category }}</p>
      </div>
      <div class="flex flex-1 items-end justify-between text-sm">
        <p class="text-gray">Qty {{ qty }}</p>
        <div class="flex">
          <button
            @click="removeFromCart(id)"
            type="button"
            class="font-medium text-primaryDrk hover:text-primary"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </li>
</template>
