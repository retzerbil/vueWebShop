<script setup lang="ts">
import { ICartItem } from '@/models/ICartItem';
import { computed } from "vue";

const props = defineProps<{cart: ICartItem[]}>();

const totalItems = computed(() => {
  return props.cart.reduce((total, item) => total + item.amount, 0);
});
</script>

<template>
    <span>{{ totalItems }}</span>
</template>

<style scoped></style>