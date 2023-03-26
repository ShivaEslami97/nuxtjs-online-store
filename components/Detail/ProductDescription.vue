<script setup lang="ts">
interface Props {
  description: string;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="border-t pt-3 border-grayLtr mt-3">
    <p class="text-gray">{{ description }}</p>
  </div>
</template>
