<script setup lang="ts">
import { useCartStore } from "~~/stores/cart";

const cart = useCartStore();
</script>

<template>
  <div class="modal__header shadow-sm">
    <h5
      class="text-xl font-medium leading-normal text-neutral-800"
      id="exampleModalLabel"
    >
      Shopping Cart
    </h5>
    <button
      type="button"
      @click="cart.modalShowHandler"
      class="modal__close-icon"
      aria-label="Close"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
</template>
