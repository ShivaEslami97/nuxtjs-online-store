<script setup lang="ts">
import { useCartStore } from "~~/stores/cart";

const cart = useCartStore();
</script>

<template>
  <!-- Modal -->
  <div class="modal" v-show="cart.modalIsShow">
    <div class="modal__card">
      <div class="modal__content">
        <CartModalHeader />
        <CartProductList />
        <CartModalFooter />
      </div>
    </div>
  </div>
</template>
