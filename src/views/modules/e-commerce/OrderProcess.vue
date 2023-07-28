<template>
  <div class="row">
    <ul class="text-center iq-product-tracker mb-0 py-4" id="progressbar">
      <li :class="`${currentindex == 1 ? 'active' : ''} ${currentindex > 1 ? 'done' : ''} iq-tracker-position-0`" id="iq-tracker-position-1">Cart</li>
      <li :class="`${currentindex == 2 ? 'active' : ''} ${currentindex > 2 ? 'done' : ''} iq-tracker-position-0`" id="iq-tracker-position-2">Checkout</li>
      <li :class="`${currentindex == 3 ? 'active' : ''} ${currentindex > 3 ? 'done' : ''} iq-tracker-position-0`" id="iq-tracker-position-3">Payment</li>
    </ul>
    <div id="cart" :class="`iq-product-tracker-card ${currentindex == 1 ? 'show' : ''} b-0`">
      <cart-component @onClick="changeTab"></cart-component>
    </div>
    <div id="checkout" :class="`iq-product-tracker-card ${currentindex == 2 ? 'show' : ''} b-0`">
      <checkout-component @onClick="changeTab"></checkout-component>
    </div>
    <div id="payment" :class="`iq-product-tracker-card ${currentindex == 3 ? 'show' : ''} b-0`">
      <payment-component @onClick="changeTab"></payment-component>
    </div>
  </div>
</template>
<script>
import CheckoutComponent from '@/components/modules/e-commerce/widgets/order-process/CheckoutComponent.vue'
import PaymentComponent from '@/components/modules/e-commerce/widgets/order-process/PaymentComponent.vue'
import CartComponent from '@/components/modules/e-commerce/widgets/order-process/CartComponent.vue'
export default {
  name: 'order-process',
  components: {
    CheckoutComponent,
    PaymentComponent,
    CartComponent
  },
  data() {
    return {
      currentindex: 1
    }
  },
  methods: {
    changeTab(val) {
      this.currentindex = val
    }
  }
}
</script>
