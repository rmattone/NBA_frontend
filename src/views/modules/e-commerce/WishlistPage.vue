<template>
  <div>
    <h4 class="mb-0">Your Wishlist</h4>
  </div>
  <b-row class="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 mt-4">
    <b-col class="" v-for="(item, index) in wishlist" :key="index">
      <wishlist-card :id="item.id" :name="item.name" :ratings="item.rating" :image="item.image" :amount="item.amount" :offer="item.offer" :likes="item.likes" @openShare="showBottomCanvas('shareOffcanvas')" @addToCart="addToCart" @removeWishList="removeWishList"></wishlist-card>
    </b-col>
  </b-row>
</template>
<script>
import { ref } from 'vue'
import { v4 as uuidV4 } from 'uuid'
import WishlistCard from '@/components/modules/e-commerce/widgets/WishlistCard.vue'
export default {
  components: {
    WishlistCard
  },
  setup(props) {
    const wishlist = ref([
      {
        id: uuidV4(),
        image: require('@/assets/modules/e-commerce/images/wishlist/4.png'),
        name: 'Headphones',
        rating: '4.5',
        amount: '56.00',
        offer: '15%',
        likes: '412'
      },
      {
        id: uuidV4(),
        image: require('@/assets/modules/e-commerce/images/wishlist/6.png'),
        name: 'Jacket',
        rating: '3.5',
        amount: '80.00',
        offer: '10%',
        likes: '865'
      },
      {
        id: uuidV4(),
        image: require('@/assets/modules/e-commerce/images/wishlist/5.png'),
        name: 'Leather Bag',
        rating: '4.2',
        amount: '10.00',
        offer: '50%',
        likes: '384'
      },
      {
        id: uuidV4(),
        image: require('@/assets/modules/e-commerce/images/wishlist/8.png'),
        name: 'Sweatshirt',
        rating: '4.5',
        amount: '56.00',
        offer: '15%',
        likes: '412'
      },
      {
        id: uuidV4(),
        image: require('@/assets/modules/e-commerce/images/wishlist/1.png'),
        name: 'Hand Bag',
        rating: '3.5',
        amount: '80.00',
        offer: '10%',
        likes: '865'
      },
      {
        id: uuidV4(),
        image: require('@/assets/modules/e-commerce/images/wishlist/3.png'),
        name: 'Pencil Heels',
        rating: '4.2',
        amount: '10.00',
        offer: '50%',
        likes: '384'
      },
      {
        id: uuidV4(),
        image: require('@/assets/modules/e-commerce/images/wishlist/2.png'),
        name: 'Casual Shoe',
        rating: '4.5',
        amount: '56.00',
        offer: '15%',
        likes: '412'
      },
      {
        id: uuidV4(),
        image: require('@/assets/modules/e-commerce/images/wishlist/9.png'),
        name: 'Blue Shrug',
        rating: '3.5',
        amount: '80.00',
        offer: '10%',
        likes: '865'
      },
      {
        id: uuidV4(),
        image: require('@/assets/modules/e-commerce/images/wishlist/7.png'),
        name: 'Fancy Bag',
        rating: '4.2',
        amount: '10.00',
        offer: '50%',
        likes: '384'
      }
    ])

    return {
      props,
      wishlist
    }
  },
  methods: {
    removeWishListFromArr(id) {
      this.wishlist.splice(
        this.wishlist.findIndex((item) => item.id === id),
        1
      )
    },
    addToCart() {
      this.$router.push({ name: 'e-commerce.order-process' })
    },
    removeWishList(data) {
      this.deleteSwal({}, () => {
        this.removeWishListFromArr(data.value)
      })
    }
  }
}
</script>
