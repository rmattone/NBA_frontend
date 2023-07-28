<template>
  <div class="row">
    <div class="col-lg-8">
      <div class="card">
        <div class="card-header">
          <h4>{{ $t('e-commerce.sidebar.my-cart') }}</h4>
        </div>
        <div class="card-body p-0">
          <div class="table-responsive">
            <table class="table table-responsive mb-0">
              <tbody>
                <tr data-item="list" v-for="(data, index) in items" :key="index">
                  <th scope="row">
                    <div class="d-flex align-items-center gap-4">
                      <img :src="data.image" alt="image" class="img-fluid object-contain avatar-100 iq-product-bg p-3" loading="lazy" />
                      <div>
                        <h5 class="mb-3">{{ data.title }}</h5>
                        <p class="mb-1">{{ data.para }}</p>
                        <p class="mb-1">{{ data.para2 }}</p>
                      </div>
                    </div>
                  </th>
                  <td>
                    <qty-button v-model="qty"></qty-button>
                  </td>
                  <td>
                    <div class="d-flex gap-3">
                      <p class="text-decoration-line-through mb-0">
                        {{ data.prize }}
                      </p>
                      <a href="#" class="text-decoration-none">{{ data.prize2 }}</a>
                    </div>
                  </td>
                  <td>
                    <button class="btn btn-icon btn-danger btn-sm delete-btn" @click="handleRemove(index)">
                      <span class="btn-inner">
                        <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.4" d="M19.643 9.48851C19.643 9.5565 19.11 16.2973 18.8056 19.1342C18.615 20.8751 17.4927 21.9311 15.8092 21.9611C14.5157 21.9901 13.2494 22.0001 12.0036 22.0001C10.6809 22.0001 9.38741 21.9901 8.13185 21.9611C6.50477 21.9221 5.38147 20.8451 5.20057 19.1342C4.88741 16.2873 4.36418 9.5565 4.35445 9.48851C4.34473 9.28351 4.41086 9.08852 4.54507 8.93053C4.67734 8.78453 4.86796 8.69653 5.06831 8.69653H18.9388C19.1382 8.69653 19.3191 8.78453 19.4621 8.93053C19.5953 9.08852 19.6624 9.28351 19.643 9.48851Z" fill="currentColor"></path>
                          <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="currentColor"></path>
                        </svg>
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card">
        <div class="card-header">
          <h4 class="mb-0">{{ $t('e-commerce.sidebar.order-summary') }}</h4>
        </div>
        <div class="card-body">
          <div class="border-bottom">
            <div class="d-flex justify-content-between mb-4">
              <h6 class="mb-0">Order ID</h6>
              <h6 class="mb-0">ASDW11268</h6>
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Coupon Code" aria-label="Coupon Code" aria-describedby="CouponCode" />
              <button class="btn btn-primary" type="button" id="CouponCode">Apply</button>
            </div>
          </div>
          <div class="border-bottom mt-4">
            <div class="d-flex justify-content-between mb-4">
              <h6>Subtotal</h6>
              <h6 class="text-primary">$206.00</h6>
            </div>
            <div class="d-flex justify-content-between mb-4">
              <h6>Discount</h6>
              <h6 class="text-success">-$38.00</h6>
            </div>
            <div class="d-flex justify-content-between mb-4">
              <h6>Shipping</h6>
              <h6 class="text-success">FREE</h6>
            </div>
          </div>
          <div class="mt-4">
            <div class="d-flex justify-content-between mb-4">
              <h6 class="mb-0">Order Total</h6>
              <h5 class="text-primary mb-0">$168.00</h5>
            </div>
            <div class="alert border-primary rounded border-1 mb-4">
              <div class="d-flex justify-content-between align-items-center">
                <h6 class="text-primary mb-0">Total Savings on this order</h6>
                <h6 class="text-primary mb-0"><b>$38.00</b></h6>
              </div>
            </div>
            <div class="alert border-primary rounded border-1 mb-4">
              <div class="d-flex justify-content-between align-items-center">
                <h6 class="text-primary mb-0">Expected date of delivery</h6>
                <h6 class="text-primary mb-0">12 Feb 2020</h6>
              </div>
            </div>
            <div class="d-flex">
              <a id="place-order" href="#payment" class="btn btn-primary d-block mt-3 w-100" @click="changeTab(2)">Checkout</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import QtyButton from '@/components/custom/elements/QtyButton.vue'
export default {
  components: {
    QtyButton
  },
  setup(props, { emit }) {
    const qty = ref(0)
    const items = ref([
      {
        image: require('@/assets/modules/e-commerce/images/cart/01.png'),
        title: 'Biker’s Jacket',
        para: 'Colour: Red & Black',
        para2: 'Size: L',
        prize: '$80.00',
        prize2: '$56.00'
      },
      {
        image: require('@/assets/modules/e-commerce/images/cart/02.png'),
        title: 'Pink Sweater',
        para: 'Colour: Pink',
        para2: 'Size: M',
        prize: '$70.00',
        prize2: '$56.00'
      },
      {
        image: require('@/assets/modules/e-commerce/images/cart/03.png'),
        title: 'Beats Headphones',
        para: 'Colour: Green',
        para2: 'Size: M',
        prize2: '$56.00'
      },
      {
        image: require('@/assets/modules/e-commerce/images/product/02.png'),
        title: 'Shoes',
        para: 'Colour: Yellow',
        para2: 'Size: 8',
        prize2: '$56.00'
      }
    ])
    const handleRemove = () => {
      // this.$swal({
      //   title: 'Are you sure?',
      //   text: 'You want to delete this item',
      //   icon: 'error',
      //   showCancelButton: true,
      //   backdrop: 'rgba(60,60,60,0.8)',
      //   confirmButtonText: 'Yes, delete it!',
      //   confirmButtonColor: '#c03221'
      // }).then((result) => {
      //   if (result.isConfirmed) {
      //     this.items.splice(index, 1)
      //     this.$swal('Deleted!', 'Your item has been deleted.', 'success')
      //   }
      // })
    }
    const changeTab = (value) => {
      emit('onClick', value)
    }
    return { items, handleRemove, props, changeTab, qty }
  }
}
</script>
