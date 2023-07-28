<template>
  <b-row>
    <b-col lg="9">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h4 class="mb-0">Trending Items</h4>
        <ul class="nav nav-pills mb-0 iq-product-filter d-flex bg-transparent align-items-center" id="pills-tab" role="tablist">
          <li class="nav-item dropdown d-none d-xl-block">
            <div class="form-group input-group mb-0 search-input w-100">
              <input type="text" class="form-control" placeholder="Search..." />
              <span class="input-group-text">
                <svg class="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
                  <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
            </div>
          </li>
          <li class="nav-item ms-2" role="presentation">
            <tab-button class="nav-link btn btn-sm btn-icon rounded-pill" target="#grid-view" id="grid-view" :active="true">
              <span class="btn-inner">
                <icon-component type="dual-tone" icon-name="view-grid" />
              </span>
            </tab-button>
          </li>
          <li class="nav-item ms-2" role="presentation">
            <tab-button class="nav-link btn btn-sm btn-icon rounded-pill" target="#list-view" id="list-view">
              <span class="btn-inner">
                <icon-component type="dual-tone" icon-name="adjustment" />
              </span>
            </tab-button>
          </li>
        </ul>
      </div>
      <div class="tab-content" id="pills-tabContent">
        <tab-pane id="grid-view" tab-for="#grid-view">
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            <b-col v-for="(product, index) in products" :key="index">
              <product-widget :name="product.name" :image="product.image" :price="product.amount" :review="product.rating" :rating="product.rating" :isRibbon="product.isRibbon" :ribbonText="product.ribbonText" :ribbonVariant="product.ribbonVariant"></product-widget>
            </b-col>
          </div>
        </tab-pane>
        <tab-pane id="list-view" tab-for="#list-view">
          <div class="row row-cols-1">
            <div class="col">
              <b-col v-for="(product, index) in products" :key="index">
                <product-list-widget :name="product.name" :image="product.image" :inStock="product.stock" deliveryDate="Delivery by, Thu Jan 30" :amount="product.amount" :review="product.rating" :rating="product.rating"></product-list-widget>
              </b-col>
            </div>
          </div>
        </tab-pane>
        <div class="d-flex justify-content-between align-items-center">
          <h4 class="mb-0">Offers</h4>
          <a href="../e-commerce/categories-list.html" class="h6">View All</a>
        </div>
        <div class="mt-3">
          <div class="iq-product-offers mb-4">
            <offer-widget discount="40" :image="require('@/assets/modules/e-commerce/images/offers/06.png')"></offer-widget>
            <offer-widget discount="30" :image="require('@/assets/modules/e-commerce/images/offers/07.png')"></offer-widget>
            <offer-widget discount="10" :image="require('@/assets/modules/e-commerce/images/offers/10.png')"></offer-widget>
            <offer-widget discount="25" :image="require('@/assets/modules/e-commerce/images/offers/09.png')"></offer-widget>
          </div>
        </div>
      </div>
    </b-col>
    <b-col lg="3">
      <filter-widget></filter-widget>
    </b-col>
    <b-col>
      <feature-product-slider title="Feature Product"></feature-product-slider>
    </b-col>
  </b-row>
</template>
<script>
import { ref } from 'vue'
import ProductWidget from '@/components/modules/e-commerce/widgets/ProductWidget.vue'
import ProductListWidget from '@/components/modules/e-commerce/widgets/ProductListWidget.vue'
import FilterWidget from '@/components/modules/e-commerce/widgets/FilterWidget.vue'
import OfferWidget from '@/components/modules/e-commerce/widgets/OfferWidget.vue'
import FeatureProductSlider from '@/components/modules/e-commerce/widgets/FeatureProductSlider.vue'
export default {
  components: {
    ProductWidget,
    ProductListWidget,
    FilterWidget,
    OfferWidget,
    FeatureProductSlider
  },
  setup() {
    const products = ref([
      {
        image: require('@/assets/modules/e-commerce/images/product/04.png'),
        name: "Biker's Jacket",
        rating: '3.5',
        amount: '56.00',
        stock: true,
        isRibbon: false,
        ribbonText: 'New',
        ribbonVariant: 'primary'
      },
      {
        image: require('@/assets/modules/e-commerce/images/product/06.png'),
        name: 'Blue side bag',
        rating: '3.5',
        amount: '56.00',
        stock: false,
        isRibbon: true,
        ribbonText: 'New',
        ribbonVariant: 'primary'
      },
      {
        image: require('@/assets/modules/e-commerce/images/product/07.png'),
        name: 'Pink Sweater',
        rating: '3.5',
        amount: '56.00',
        stock: true
      },
      {
        image: require('@/assets/modules/e-commerce/images/product/02.png'),
        name: 'Casual Shoes',
        rating: '3.5',
        amount: '56.00',
        stock: false
      },
      {
        image: require('@/assets/modules/e-commerce/images/product/05.png'),
        name: 'Blue Shrug',
        rating: '3.5',
        amount: '56.00',
        stock: true,
        isRibbon: true,
        ribbonText: 'Sold',
        ribbonVariant: 'warning'
      },
      {
        image: require('@/assets/modules/e-commerce/images/product/10.png'),
        name: 'Pink bag',
        rating: '3.5',
        amount: '56.00',
        stock: false
      }
    ])

    return {
      products
    }
  }
}
</script>
