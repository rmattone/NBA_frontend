<template>
  <b-row>
    <b-col lg="8">
      <b-card>
        <template #header>
          <h4 class="card-title">Welcome Elon</h4>
        </template>
        <div class="nav nav-tabs nav-iconly gap-5 mb-5">
          <tab-button tag="button" class="nav-link" target="#order" id="order" :active="true">
            <icon-component type="dual-tone" icon-name="bag"></icon-component>
            <span class=""> Your Orders </span>
          </tab-button>
          <tab-button tag="button" class="nav-link" target="#address" id="address">
            <icon-component type="dual-tone" icon-name="location"></icon-component>
            <span class=""> Your Address </span>
          </tab-button>
          <tab-button tag="button" class="nav-link" target="#cards" id="cards">
            <icon-component type="dual-tone" icon-name="wallet"></icon-component>
            <span class=""> Your Cards </span>
          </tab-button>
          <tab-button tag="button" class="nav-link" target="#profile" id="profile">
            <icon-component type="dual-tone" icon-name="user"></icon-component>
            <span class=""> Your Profile </span>
          </tab-button>
        </div>
        <div class="tab-content iq-tab-fade-up">
          <tab-pane id="order" tab-for="#order">
            <order-component></order-component>
          </tab-pane>
          <tab-pane id="address" tab-for="#address">
            <address-component></address-component>
          </tab-pane>
          <tab-pane id="cards" tab-for="#cards">
            <card-component></card-component>
          </tab-pane>
          <tab-pane id="profile" tab-for="#profile">
            <profile-component></profile-component>
          </tab-pane>
        </div>
      </b-card>
    </b-col>
    <b-col lg="4">
      <b-card>
        <template #header>
          <h4 class="mb-0">Buy It Again</h4>
        </template>
        <ul class="list-inline m-0 p-0">
          <li class="d-flex align-items-center mb-4 flex-wrap justify-content-center gap-3">
            <div class="mb-0 mb-xl-0 mb-md-0 mb-lg-4">
              <img src="@/assets/modules/e-commerce/images/product/04.png" alt="user-profile" class="img-fluid rounded object-contain avatar-80 iq-product-bg" loading="lazy" />
            </div>
            <div class="flex-grow-1">
              <a href="../e-commerce/product-detail.html" class="h6 iq-product-detail"> Biker’s Jacket </a>
              <h5 class="text-primary mt-2 mb-0">$45.99</h5>
              <small class="mb-0">Buy on Jan 2021</small>
            </div>
            <router-link class="btn btn-primary btn-icon btn-sm rounded-circle" :to="{ name: 'e-commerce.order-process' }" role="button">
              <span class="btn-inner">
                <icon-component type="dual-tone" icon-name="cart" :size="32"></icon-component>
              </span>
            </router-link>
          </li>
          <li class="d-flex align-items-center mb-4 flex-wrap justify-content-center gap-3">
            <div class="mb-0 mb-xl-0 mb-md-0 mb-lg-4">
              <img src="@/assets/modules/e-commerce/images/product/06.png" alt="user-profile" class="img-fluid rounded object-contain avatar-80 iq-product-bg" loading="lazy" />
            </div>
            <div class="flex-grow-1">
              <a href="../e-commerce/product-detail.html" class="h6 iq-product-detail"> Blue Side Bag </a>
              <h5 class="text-primary mt-2 mb-0">$19.42</h5>
              <small class="mb-0">Buy on Dec 2020</small>
            </div>
            <router-link class="btn btn-primary btn-icon btn-sm rounded-circle" :to="{ name: 'e-commerce.order-process' }" role="button">
              <span class="btn-inner">
                <icon-component type="dual-tone" icon-name="cart" :size="32"></icon-component>
              </span>
            </router-link>
          </li>
          <li class="d-flex align-items-center mb-4 flex-wrap justify-content-center gap-3">
            <div class="mb-0 mb-xl-0 mb-md-0 mb-lg-4">
              <img src="@/assets/modules/e-commerce/images/product/07.png" alt="user-profile" class="img-fluid rounded object-contain avatar-80 iq-product-bg" loading="lazy" />
            </div>
            <div class="flex-grow-1">
              <a href="../e-commerce/product-detail.html" class="h6 iq-product-detail"> Pink Sweater </a>
              <h5 class="text-primary mt-2 mb-0">$26.00</h5>
              <small class="mb-0">Buy on Jan 2021</small>
            </div>
            <router-link class="btn btn-primary btn-icon btn-sm rounded-circle" :to="{ name: 'e-commerce.order-process' }" role="button">
              <span class="btn-inner">
                <icon-component type="dual-tone" icon-name="cart" :size="32"></icon-component>
              </span>
            </router-link>
          </li>
          <li class="d-flex align-items-center flex-wrap justify-content-center gap-3">
            <div class="mb-0 mb-xl-0 mb-md-0 mb-lg-4">
              <img src="@/assets/modules/e-commerce/images/product/02.png" alt="user-profile" class="img-fluid rounded object-contain avatar-80 iq-product-bg" loading="lazy" />
            </div>
            <div class="flex-grow-1">
              <a href="../e-commerce/product-detail.html" class="h6 iq-product-detail"> Casual Shoes </a>
              <h5 class="text-primary mt-2 mb-0">$19.99</h5>
              <small class="mb-0">Buy on Jan 2021</small>
            </div>
            <router-link class="btn btn-primary btn-icon btn-sm rounded-circle" :to="{ name: 'e-commerce.order-process' }" role="button">
              <span class="btn-inner">
                <icon-component type="dual-tone" icon-name="cart" :size="32"></icon-component>
              </span>
            </router-link>
          </li>
        </ul>
      </b-card>
      <div class="row">
        <offer-slider></offer-slider>
      </div>
    </b-col>
    <b-col lg="12">
      <feature-product-slider></feature-product-slider>
    </b-col>
  </b-row>
</template>

<script>
import FeatureProductSlider from '@/components/modules/e-commerce/widgets/FeatureProductSlider.vue'
import OfferSlider from '@/components/modules/e-commerce/widgets/OfferSlider.vue'
import OrderComponent from '@/components/modules/e-commerce/widgets/profile/OrderComponent.vue'
import AddressComponent from '@/components/modules/e-commerce/widgets/profile/AddressComponent.vue'
import CardComponent from '@/components/modules/e-commerce/widgets/profile/CardComponent.vue'
import ProfileComponent from '@/components/modules/e-commerce/widgets/profile/ProfileComponent.vue'
export default {
  components: {
    FeatureProductSlider,
    OfferSlider,
    OrderComponent,
    AddressComponent,
    CardComponent,
    ProfileComponent
  }
}
</script>
