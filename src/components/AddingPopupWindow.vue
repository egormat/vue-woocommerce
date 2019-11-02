<template>

  <div class="addingPopupWindow" v-if="showed">
    <div class="info">
    {{lastItem.name}} был добавлен в вашу корзину
  </div>
    <router-link :to="{ name: 'cart', params: {} }"> В корзину -></router-link>
  </div>

</template>

<script>

  import '@/assets/fonts.scss'
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters({
      lastItem: 'cart/lastAddedItem',
      showed: 'modalWindow/showed'
    })
  }

</script>


<style lang="scss">

  .addingPopupWindow {
    padding: 15px;
    position: fixed;
    width: 350px;
    height: 200px;
    /* top: 100%; */
    top: calc(100% - 220px);
    left: calc(100% - 400px);
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    font-family: 'TTCommons Regular';
    background: #003459;
    color: white;

    a  {
    font-weight: 600;
    color: white;
    }
  }

</style>
