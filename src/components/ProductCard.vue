<template>

  <div class="productCard">

    <div class="product__image">
      <router-link :to="{ name: 'product', params: {id: product.id}}">
        <img :src="product.images[0].src" alt="">
      </router-link>
    </div>

    <div class="product__name">
      <router-link :to="{ name: 'product', params: {id: product.id}}">
        {{product.name}}
      </router-link>
    </div>

    <div class="product__actions">
      <div class="price">{{product.price}} руб.</div>
      <button @click="addToCart(product)" class="addToCartButton">В корзину</button>
    </div>
  </div>

</template>

<script>

  import '@/assets/fonts.scss'

  import { mapActions } from 'vuex'
  export default {
    name: 'ProductCard',
    props: {
      product: Object
    },

    methods: mapActions('cart', ['addToCart'])
  }

</script>

<style lang="scss">

  .productCard {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 8px;
    background: white;
    font-family: 'TTCommons Regular';

    & > div {
      margin-bottom: 10px;
    }
  }

  a {
    text-decoration: none;
  }
  .product__image {
    align-self: center;
    width: 60%;
    img {
      height: 100%;
      width: 100%;
    }
  }

  .product__name {
    // font-weight: 600;
    text-decoration: none;
    color: #00171f;

    &:hover {
      color: #003459;
    }
  }

  .product__actions {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .price {
    font-weight: 600;
    font-size: 24px;
    color: #003459;
  }

  .addToCartButton {
    width: 144px;
    height: 42px;
    border-radius: 5px;
    background: #003459;
    color: white;
    font-family: 'TTCommons Regular';
    border: none;
    // font-weight: 600;
    font-size: 16px;
    cursor: pointer;
  }

</style>
