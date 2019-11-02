<template>

  <router-link :to="{ name: 'cart', params: {} }">
    <font-awesome-icon :icon="['fa', 'shopping-cart']"
                       size="lg"
                       class="cartIcon" />

    <div class="numberOfItems">
      {{numberOfItems}}
    </div>
  </router-link>

</template>


<script>

  import { createNamespacedHelpers } from 'vuex'
  const { mapState, mapActions, mapGetters } = createNamespacedHelpers('cart')

  export default {
    computed: mapGetters({
      totalPrice: 'totalPrice',
      numberOfItems: 'numberOfItems'
    })
  }

</script>

<style lang="scss" scoped>
  .cartIcon {
    // margin-right: 3%;
    color: white;
    height: 25px;
    width: 25px;
  }

  .numberOfItems {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 10px;
    color: white;
    /* border: 1px solid; */
    background-color: black;
    line-height: 17px;
    font-size: 10px;
    text-align: center;
    position: relative;
    top: -40px;
    left: 25px;
  }

</style>
