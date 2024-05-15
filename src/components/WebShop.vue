<script setup lang="ts">
import type { IWebShopState } from '@/models/IWebShopState';
import { getProducts } from '@/services/productService';
import { onMounted, ref } from 'vue';
import Products from '@/components/Products.vue';
import Checkout from './Checkout.vue';

const state = ref<IWebShopState>({
    products:[],
    cart: [],
    showCheckout: false
});

onMounted(async()=>{
    state.value.products = await getProducts();
})

const handleBuy = (id: number) => {
  console.log('id:', id);
  const index = state.value.cart.findIndex(
    (cartItem) => cartItem.product.id === id
  );
  console.log('index:', index);

  if (index >= 0) {
    state.value.cart[index].amount++;
    console.log('amount after increment:', state.value.cart[index].amount);
  } else {
    const productToAdd = state.value.products.find(
      (product) => product.id === id
    );
    if (productToAdd)
      state.value.cart.push({ product: productToAdd, amount: 1 });
  }
  console.log('cart:', state.value.cart);
};


    const handleChangeView = ()=>{
        state.value.showCheckout = !state.value.showCheckout;
    }


</script>

<template>
    <button @click="handleChangeView">Go to checkout</button>
    <Checkout v-if="state.showCheckout" :cart="state.cart"/>
<Products v-else :products="state.products" :cart="state.cart" @handle-buy="handleBuy"/>
</template>

<style scoped>

</style>
