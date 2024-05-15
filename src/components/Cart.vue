<script setup lang="ts">
import { ICartItem } from '@/models/ICartItem';



defineProps<{cart: ICartItem[]}>();
</script>

<template>
    <span>{{ cart.length }}</span>
</template>

<style scoped></style>