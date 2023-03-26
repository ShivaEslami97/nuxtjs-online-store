<script setup lang="ts">
interface Props {
  category: string;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="border-t pt-3 border-grayLtr my-3">
    <p>
      Category:
      <span class="text-gray cursor-pointer">{{ category }}</span>
    </p>
  </div>
</template>
