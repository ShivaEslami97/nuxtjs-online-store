<script setup lang="ts">
import { useCartStore } from "~~/stores/cart";

const cart = useCartStore();

const isEmptyCart = computed(() => {
  return cart.cartItems.length === 0;
});

const updateCartItemQuantity = (id: number, qty: number) => {
  cart.updateQuantity(id, qty);
  console.log(qty);
};
</script>

<template>
  <div class="relative p-4 h-96 overflow-y-auto modal__content-scroll">
    <div class="flex flex-col justify-between h-full" v-if="!isEmptyCart">
      <ul role="list" class="-my-6 divide-y divide-grayLtr">
        <CartProductItem
          v-for="product in cart.cartItems"
          :product="product"
          @update-quantity="updateCartItemQuantity"
        />
      </ul>
      <CartProductTotal :total="cart.cartTotal" />
    </div>
    <p v-else class="text-2xl text-center">Your cart is empty!</p>
  </div>
</template>

<style scoped>
.modal__content-scroll::-webkit-scrollbar {
  width: 4px;
}

.modal__content-scroll::-webkit-scrollbar-track {
  box-shadow: inset 0 0 2px #333;
  border-radius: 10px;
}
.modal__content-scroll::-webkit-scrollbar-thumb {
  background: rgb(181 116 64 / 70%);
  opacity: 0.6;
  border-radius: 10px;
}

.modal__content-scroll::-webkit-scrollbar-thumb:hover {
  background: rgb(181 116 64 / 70%);
}
</style>
