<template>
<div class="home">
    <Header/>
    <section class="products">
      <ProductCard
        class="products__item"
        v-for="product in products"
        :key="product.id"
        :product="product"
        />
    </section>
    <AddingPopupWindow/>
</div>
</template>

<script>

import { mapState, mapActions } from 'vuex';

import ProductCard from  '@/components/ProductCard'
import Header from '@/components/Header'
import AddingPopupWindow from '@/components/AddingPopupWindow'



export default {
  name: 'HomePage',


  components : {
    ProductCard,
    Header,
    AddingPopupWindow,
  },

  computed: mapState({
    products: state => state.products.products,
  }),

  methods: mapActions('products',[
   'getProducts'
 ]),


  created(){
    this.getProducts();
  }
}
</script>



<style lang="scss">

.home {
  width:100%;
  display: flex;
  flex-direction: column;
}
.products {
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
  background: #cdcdcd;
}

.products__item {
  width: 22%;
  margin-bottom: 3%;
}
</style>
