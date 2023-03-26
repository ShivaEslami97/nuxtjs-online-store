<script setup lang="ts">
import { useCartStore } from "~~/stores/cart";

const cart = useCartStore();
</script>

<template>
  <div class="modal__footer">
    <button
      type="button"
      @click="cart.modalShowHandler"
      class="modal__btn-close"
    >
      Close
    </button>
    <button type="button" class="modal__btn-checkout">Checkout</button>
  </div>
</template>
