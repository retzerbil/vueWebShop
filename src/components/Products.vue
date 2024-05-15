<script setup lang="ts">
import Product from '@/components/Product.vue';
import { IProduct } from '@/models/IProduct';
import Cart from './Cart.vue';
import { defineEmits, defineProps } from 'vue';
import { ICartItem } from '@/models/ICartItem';

interface ProductProps {
    products: IProduct[];
    cart: ICartItem[];
}
defineProps<ProductProps>();

defineEmits<{
    (e: "handleBuy", id:string):void;
}>();
</script>

<template>
    <section class=cart>
        <Cart :cart="cart"/>
    </section>
    <section class="products">
        <Product 
        v-for="product in products" 
        :product="product" 
        :key="product.id" 
        :on-checkout="false"
        @buy="(id:string)=>{$emit('handleBuy',id)}"/>
    </section>
</template>

<style scoped>
.products{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>