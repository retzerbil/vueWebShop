<script setup lang="ts">
import { ICartItem } from '@/models/ICartItem';
import Product from './Product.vue';
import { defineProps } from 'vue';

defineProps<{cart:ICartItem[]}>()
</script>

<template>
<section class="products">
    <Product v-for="item in cart":product="item.product":on-checkout="true"/>
</section>
</template>

<style scoped></style>