<template>
  <div class="mb-4">
    <div class="d-flex justify-content-between align-items-center">
      <h4 class="mb-0">Fashion</h4>
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
    <div>
      <span>Filter</span>
    </div>
    <div class="d-flex mb-4 mt-2 align-items-center">
      <span class="bg-soft-primary rounded-pill iq-custom-badge">
        5 Star
        <button class="btn btn-primary btn-sm rounded-pill iq-cancel-btn">
          <svg class="icon-14" width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </span>
      <span class="bg-soft-primary rounded-pill iq-custom-badge">
        Watch
        <button class="btn btn-primary btn-sm rounded-pill iq-cancel-btn">
          <svg class="icon-14" width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </span>
      <span class="bg-soft-primary rounded-pill iq-custom-badge">
        10% off
        <button class="btn btn-primary btn-sm rounded-pill iq-cancel-btn">
          <svg class="icon-14" width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </span>
    </div>
    <div class="col-lg-12 pt-4">
      <div class="tab-content" id="pills-tabContent">
        <tab-pane id="grid-view" tab-for="#grid-view">
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            <b-col v-for="(product, index) in products" :key="index">
              <product-widget :name="product.name" :image="product.image" :price="product.amount" :review="product.ratting" :rating="product.ratting" :isRibbon="product.isRibbon" :ribbonText="product.ribbonText" :ribbonVariant="product.ribbonVariant"></product-widget>
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
      </div>
    </div>
    <div class="text-center">
      <a href="javascript:void(0);" class="btn btn-primary">Load More</a>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import ProductWidget from '@/components/modules/e-commerce/widgets/ProductWidget.vue'
import ProductListWidget from '@/components/modules/e-commerce/widgets/ProductListWidget.vue'
export default {
  components: {
    ProductWidget,
    ProductListWidget
  },
  setup() {
    const products = ref([
      { name: 'Casual Shoes', image: require('@/assets/modules/e-commerce/images/product/02.png'), ratting: '3.9', amount: '56.00', stock: true, isRibbon: false, ribbonText: '', ribbonVariant: '' },
      { name: "Biker's Jacket", image: require('@/assets/modules/e-commerce/images/product/04.png'), ratting: '3.5', amount: '95.00', isRibbon: true, ribbonText: 'NEW', ribbonVariant: 'primary' },
      { name: 'Knitted Shrug', image: require('@/assets/modules/e-commerce/images/product/05.png'), ratting: '3.2', amount: '22.00', stock: true, isRibbon: false, ribbonText: '', ribbonVariant: '' },
      { name: 'Blue Handbag', image: require('@/assets/modules/e-commerce/images/product/06.png'), ratting: '1.5', amount: '01.00', isRibbon: false, ribbonText: '', ribbonVariant: '' },
      { name: 'Pink Sweater', image: require('@/assets/modules/e-commerce/images/product/07.png'), ratting: '4.5', amount: '85.00', stock: true, isRibbon: false, ribbonText: '', ribbonVariant: '' },
      { name: 'Pink Handbag', image: require('@/assets/modules/e-commerce/images/product/10.png'), ratting: '5.0', amount: '65.00', isRibbon: true, ribbonText: 'SOLD', ribbonVariant: 'danger' },
      { name: 'Casual Shoes', image: require('@/assets/modules/e-commerce/images/product/02.png'), ratting: '3.5', amount: '72.00', stock: true, isRibbon: false, ribbonText: '', ribbonVariant: '' },
      { name: "Biker's Jacket", image: require('@/assets/modules/e-commerce/images/product/04.png'), ratting: '3.2', amount: '19.00', isRibbon: false, ribbonText: '', ribbonVariant: '' },
      { name: 'Casual Shoes', image: require('@/assets/modules/e-commerce/images/product/02.png'), ratting: '3.9', amount: '56.00', isRibbon: false, ribbonText: '', ribbonVariant: '' },
      { name: "Biker's Jacket", image: require('@/assets/modules/e-commerce/images/product/04.png'), ratting: '3.5', amount: '95.00', stock: true, isRibbon: true, ribbonText: 'NEW', ribbonVariant: 'primary' },
      { name: 'Knitted Shrug', image: require('@/assets/modules/e-commerce/images/product/05.png'), ratting: '3.2', amount: '22.00', stock: true, isRibbon: false, ribbonText: '', ribbonVariant: '' },
      { name: 'Blue Handbag', image: require('@/assets/modules/e-commerce/images/product/06.png'), ratting: '1.5', amount: '01.00', isRibbon: false, ribbonText: '', ribbonVariant: '' },
      { name: 'Pink Sweater', image: require('@/assets/modules/e-commerce/images/product/07.png'), ratting: '4.5', amount: '85.00', isRibbon: false, ribbonText: '', ribbonVariant: '' },
      { name: 'Pink Handbag', image: require('@/assets/modules/e-commerce/images/product/10.png'), ratting: '5.0', amount: '65.00', stock: true, isRibbon: true, ribbonText: 'SOLD', ribbonVariant: 'danger' },
      { name: 'Casual Shoes', image: require('@/assets/modules/e-commerce/images/product/02.png'), ratting: '3.5', amount: '72.00', isRibbon: false, ribbonText: '', ribbonVariant: '' },
      { name: "Biker's Jacket", image: require('@/assets/modules/e-commerce/images/product/04.png'), ratting: '3.2', amount: '19.00', stock: true, isRibbon: false, ribbonText: '', ribbonVariant: '' }
    ])

    return {
      products
    }
  }
}
</script>
