<template>
  <div>
    <Header/>
  <div class="productCard" v-if="Object.keys(product).length">
    <div class="product__image">
      <img :src="product.images[0].src">
    </div>
    <div class="product__name">
        {{product.name}}
    </div>
    <div class="">
        {{product.short_description.substr(3).slice(0, -5)}}
    </div>
    <div class="price">{{product.price}}</div>
    <button @click="addToCart(product)">В корзину</button>
  </div>

</div>
</template>


<script>

import WooCommerce from '@/services/wooservice.js'
import Header from '@/components/Header'
import { mapActions } from 'vuex';


export default {
    name: 'ProductPage',

    components: {
      Header
    },

    data() {
      return {
        product: {},
      }
    },

      methods: {
        ...mapActions('cart', [
          'addToCart'
        ]),
        getProduct(id){
          WooCommerce.get('products/' + id)
          .then(response => {
            this.product = response.data
            console.log(this.product)
        })
      }
    },

    created(){
        this.getProduct(this.$route.params.id)

      }
}

</script>
