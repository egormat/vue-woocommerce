<template>
  <div>
    <Header/>
    <div class="products" v-if="products">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      class="products__item"
      />
    </div>

    <AddingPopupWindow/>
  </div>
</template>


<script>
import WooCommerce from '@/services/wooservice.js'
  import Header from '@/components/Header'
  import ProductCard from '@/components/ProductCard'
  import AddingPopupWindow from '@/components/AddingPopupWindow';
  import {mapState, mapActions} from 'vuex'

export default {
  name: 'CategoryPage',

  components: {
    Header,
    ProductCard,
    AddingPopupWindow,
  },

  data(){
    return {
      products: []
    }
  },
  methods: {
    getCategoryProducts(categoryId){
      WooCommerce.get('products', {category: categoryId})
      .then(response => {
        let result = response.data
        this.products = result
      });
    }
  },

  created(){
    this.getCategoryProducts(this.$route.params.id)
  },

  beforeRouteUpdate(to, from, next) {
    next()
    this.getCategoryProducts(this.$route.params.id)
  }
}

</script>

<style lang="scss" scoped>
</style>
