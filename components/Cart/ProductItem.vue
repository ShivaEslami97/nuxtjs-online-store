<script setup lang="ts">
import { useCartStore } from "~~/stores/cart";
import { CartItem } from "~~/types";
interface Props {
  product: CartItem;
}

const props = defineProps<Props>();
const emit = defineEmits(["update-quantity"]);

const cart = useCartStore();

const removeFromCart = (productId: number) => {
  cart.removeCartItem(productId);
};
//
const qtyUpdateHandler = (event: Event) => {
  const qty = Number((event.target as HTMLInputElement)?.value ?? null);
  emit("update-quantity", props.product.id, qty);
};
</script>

<template>
  <li class="flex py-6">
    <div
      class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-grayLtr"
    >
      <img
        :src="product.image"
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
            <NuxtLink
              :to="`/products/${product.id}`"
              @click.prevent="cart.modalShowHandler"
              >{{ product.title }}</NuxtLink
            >
          </h3>
          <p class="ml-4">${{ product.price }}</p>
        </div>
        <p class="mt-1 text-sm text-gray">{{ product.category }}</p>
      </div>
      <div class="flex flex-1 items-end justify-between text-sm">
        <div class="grid grid-cols-modalTwoCol gap-2 mt-2">
          <p class="text-gray">Qty {{ product.qty }}</p>
          <input
            class="border-2 border-[#e7e7e7] rounded text-center focus:outline-none"
            type="number"
            min="0"
            :value.number="product.qty"
            @change="qtyUpdateHandler($event)"
          />
        </div>

        <div class="flex">
          <button
            @click="removeFromCart(product.id)"
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
