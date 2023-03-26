<script setup lang="ts">
interface Props {
  title: string;
  price: number;
  rate: number;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="flex flex-col gap-3 items-start">
    <h2 class="text-4xl">{{ title }}</h2>
    <h3 class="text-2xl text-primary">${{ price }} USD</h3>
    <button class="rounded-xl bg-primaryRgb px-2 py-1 text-zinc-800 font-bold">
      <Icon name="material-symbols:favorite-outline-rounded" size="1.6em" />
      {{ rate }}
    </button>
  </div>
</template>
