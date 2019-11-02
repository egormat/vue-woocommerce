<template>
  <div>
    <div class="mask" v-if="confirmWindow"></div>
    <Header/>

    <div class="cart">
      <h1>Корзина</h1>
      <div class="cartItems">
        <div v-for="item in cartItems" :key="item.id" class="cartItems__item">
          <div class="item__image">
            <img :src="item.images[0].src" alt="">
          </div>
          <div class="item__name">
            {{item.name}}
          </div>
          <div class="item__quantity">
            <button class="minus-button" @click="decreaseQuantity(item)"> - </button>
             {{item.quantity}}
            <button class="plus-button" @click="increaseQuantity(item)"> + </button>
          </div>
          <div class="item__price">
            {{item.price * item.quantity}}р.
          </div>
          <div class="item__remove-button" @click="showConfirm(item)">
            X
          </div>
        </div>
      </div>
      <div class="total">
       Итого: {{totalPrice}}р.
      </div>

      <ConfirmWindow v-if="confirmWindow"
                    :item="clickedItem"
                    @confirm="removeFromCart(clickedItem)"
                    @cancel="hideConfirm"
                    class="confirmWindow"
                    />
    </div>
  </div>

</template>


<script>

  import '@/assets/fonts.scss'

  import Header from '@/components/Header'
  import ConfirmWindow from '@/components/ConfirmWindow'
  import { createNamespacedHelpers } from 'vuex'
  const { mapState, mapActions, mapGetters } = createNamespacedHelpers('cart')

  export default {
    components: {
      Header,
      ConfirmWindow
    },

    data() {
      return {
        clickedItem: null,
        confirmWindow: false
      }
    },

    computed: {
      ...mapGetters(['totalPrice']),
      ...mapState({
        cartItems: 'items'
      })
    },
    methods: {
      removeFromCart(item) {
        this.$store.dispatch('cart/removeFromCart', item)
        this.hideConfirm()
      },
      showConfirm(item) {
        this.clickedItem = item
        this.confirmWindow = true
      },
      hideConfirm() {
        this.clickedItem = null
        this.confirmWindow = false
      },
      decreaseQuantity(item) {
        if (item.quantity == 1) {
          this.showConfirm(item)
        } else {
          this.$store.dispatch('cart/decreaseQuantity', item)
        }
      },
      ...mapActions(['increaseQuantity'])
    }
  }

</script>

<style lang="scss" scoped>

  .cart {
    width: 100%;
    display: flex;
    flex-direction: column;
    // justify-content: space-around;
    font-family: 'TTCommons Regular';
  }

  .mask {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
  }

  h1 {
    margin-left: 3%;
  }

  .cartItems {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

    .cartItems__item {
      width: 100%;
      height: 200px;
      display: flex;
      align-items: center;
      .item__image {
        height: 100%;

        width: 15%;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .item__name {
        width: 30%;
      }

      .item__quantity {
        width: 25%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .item__price {
        width: 10%;
        text-align: center;
      }

      .plus-button,
      .minus-button {
        height: 30px;
        width: 30px;
        border: none;
        background: none;
        cursor: pointer;
      }
  }

  .total {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .confirmWindow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 200px;
    background: white;
    color: #00171f;
  }


</style>
