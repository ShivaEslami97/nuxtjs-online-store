<script setup lang="ts">
interface Props {
  count: number;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="mt-3">
    <p>
      ONLY
      <span class="text-primary">{{ count }} </span>
      LEFT IN STOCK!
    </p>
  </div>
</template>
