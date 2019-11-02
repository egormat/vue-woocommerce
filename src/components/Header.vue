<template>
  <div class="header">
        <div class="logo">
        <router-link :to="{ name: 'home', params: {} }">
          <img src="@/assets/img/iqos-white-logo.svg" alt="">
        </router-link>
        </div>
        <div class="nav">
      <router-link v-for="category in categories" :to="{ name: 'category', params: {id: category.id} }" :key="category.id">
        {{category.name}}
      </router-link>
    </div>
    <CartIcon class="cartIcon"/>
  </div>

</template>

<script>

  import '@/assets/fonts.scss'
  import CartIcon from '@/components/CartIcon'

  import { createNamespacedHelpers } from 'vuex'
  const { mapState, mapActions, mapGetters } = createNamespacedHelpers('categories')

  export default {
    name: 'Header',
    components: {
      CartIcon
    },

    computed: mapGetters({
      categories: 'categories'
    }),

    methods: mapActions(['getCategories']),


    mounted() {
      this.getCategories()
    }
  }

</script>

<style lang="scss">

  .header {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'TTCommons Regular';
    background: #003459;

    a {
      text-decoration: none;
      font-size: 18px;
      color: white;
    }

    .nav {
      width: 40%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .cartIcon {
      margin-right: 3%;
    }

    .logo {
      margin-left: 3%;
      height: 80%;
      width: 100px;
      a {
        width: 100%;
        height: 100%;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

</style>
