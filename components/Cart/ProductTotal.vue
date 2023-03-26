<script setup lang="ts">
interface Props {
  total: number;
}
defineProps<Props>();
</script>

<template>
  <div class="flex flex-1 items-end justify-between mt-7 text-2xl">
    <p class="">Order Total</p>
    <p class="font-bold">${{ total }}</p>
  </div>
</template>
