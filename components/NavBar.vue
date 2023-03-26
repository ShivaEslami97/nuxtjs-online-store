<script setup lang="ts">
import { useCartStore } from "~~/stores/cart";

const cart = useCartStore();
</script>

<template>
  <!-- NAVBAR -->
  <header class="header">
    <nav class="nav">
      <div class="container mx-auto">
        <ul class="flex justify-between items-center z-50 relative">
          <li>
            <NuxtLink class="text-3xl font-mono text-primary font-bold" to="/"
              >Shopify</NuxtLink
            >
          </li>
          <li
            class="relative flex gap-2 items-center justify-center text-navDrk"
          >
            <button @click="cart.modalShowHandler">
              <Icon name="ph:handbag-simple-light" size="1.6em" />
            </button>
            <span>{{ cart.cartQty }}</span>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <!-- NAVBAR -->
</template>
