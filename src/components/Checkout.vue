<script setup lang="ts">
import { ICartItem } from '@/models/ICartItem';
import Product from './Product.vue';
import { defineProps } from 'vue';

defineProps<{cart:ICartItem[]}>()
</script>

<template>
    <section class="products">
        <div v-for="item in cart">
            <Product v-for="amount in item.amount" :product="item.product" :on-checkout="true"/>
        </div>
    </section>
    </template>

<style scoped></style>