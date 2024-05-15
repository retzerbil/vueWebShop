<script setup lang="ts">
import { IProduct } from '@/models/IProduct';
import { defineEmits, defineProps } from 'vue';

interface ProductProps {
    product: IProduct;
    onCheckout: boolean;
}

defineProps<ProductProps>();

defineEmits<{
    (e: "buy", id:number):void;
}>();
</script>

<template>
<article class = "product">
    <h3>{{ product.title }}</h3>
    <div class="imageContainer">
        <img :src="product.image" :alt="product.title"/>
    </div>
    <p>{{ product.price }}</p>
    <button v-if="!onCheckout" @click="$emit('buy',product.id)">Add to cart</button>
</article>
</template>

<style scoped lang="scss">
.product{
    width: 30%;
    display:flex;
    flex-direction: column;
    align-items: center;
}

.imageContainer{
    width: 100%;

    img{
        width: 100%;
    }
}
</style>