<template>
  <div class="mb-4">
    <div>
      <h4 class="mb-0">Category</h4>
    </div>
    <div>
      <ul class="nav iq-nav-category mt-3 mb-3 justify-content-start bg-transparent" id="pills-tab" role="tablist">
        <li class="nav-item me-3" role="presentation">
          <tab-button tag="a" href="#" class="nav-link" target="#all" id="all" :active="true">All</tab-button>
        </li>
        <li class="nav-item me-3" role="presentation">
          <tab-button tag="a" href="#" class="nav-link" target="#popular" id="popular">Popular</tab-button>
        </li>
        <li class="nav-item me-3" role="presentation">
          <tab-button tag="a" href="#" class="nav-link" target="#latest" id="latest">Latest</tab-button>
        </li>
      </ul>
    </div>
    <div class="tab-content mt-3" id="pills-tabContent">
      <tab-pane id="all" tab-for="#all">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 mt-4">
          <b-col v-for="(product, index) in categoryList.all" :key="index">
            <product-widget :name="product.name" :image="product.image" :isQty="true" :qty="product.qty" :noHoverAction="true" :noRatRew="true" :noPrice="true"></product-widget>
          </b-col>
        </div>
      </tab-pane>
      <tab-pane id="popular" tab-for="#popular">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 mt-4">
          <b-col v-for="(product, index) in categoryList.popular" :key="index">
            <product-widget :name="product.name" :image="product.image" :isQty="true" :qty="product.qty" :noHoverAction="true" :noRatRew="true" :noPrice="true"></product-widget>
          </b-col>
        </div>
      </tab-pane>
      <tab-pane id="latest" tab-for="#latest">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 mt-4">
          <b-col v-for="(product, index) in categoryList.latest" :key="index">
            <product-widget :name="product.name" :image="product.image" :isQty="true" :qty="product.qty" :noHoverAction="true" :noRatRew="true" :noPrice="true"></product-widget>
          </b-col>
        </div>
      </tab-pane>
    </div>
    <div class="text-center">
      <a href="javascript:void(0);" class="btn btn-primary">Load More</a>
    </div>
  </div>
</template>
<script>
import { reactive } from 'vue'
import ProductWidget from '@/components/modules/e-commerce/widgets/ProductWidget.vue'
export default {
  components: {
    ProductWidget
  },
  setup() {
    const categoryList = reactive({
      all: [
        { name: "Biker's Jacket", image: require('@/assets/modules/e-commerce/images/product/04.png'), qty: 5458 },
        { name: 'Casual Shoes', image: require('@/assets/modules/e-commerce/images/product/02.png'), qty: 5458 },
        { name: 'Knitted Shrug', image: require('@/assets/modules/e-commerce/images/product/05.png'), qty: 5458 },
        { name: 'Blue Handbag', image: require('@/assets/modules/e-commerce/images/product/06.png'), qty: 5458 },
        { name: 'Pink Sweater', image: require('@/assets/modules/e-commerce/images/product/07.png'), qty: 5458 },
        { name: 'Pink Handbag', image: require('@/assets/modules/e-commerce/images/product/10.png'), qty: 5458 },
        { name: 'Casual Shoes', image: require('@/assets/modules/e-commerce/images/product/02.png'), qty: 5458 },
        { name: "Biker's Jacket", image: require('@/assets/modules/e-commerce/images/product/04.png'), qty: 5458 },
        { name: 'Knitted Shrug', image: require('@/assets/modules/e-commerce/images/product/05.png'), qty: 5458 },
        { name: 'Pink Sweater', image: require('@/assets/modules/e-commerce/images/product/07.png'), qty: 5458 },
        { name: "Biker's Jacket", image: require('@/assets/modules/e-commerce/images/product/04.png'), qty: 5458 },
        { name: 'Blue Handbag', image: require('@/assets/modules/e-commerce/images/product/06.png'), qty: 5458 },
        { name: 'Casual Shoes', image: require('@/assets/modules/e-commerce/images/product/02.png'), qty: 5458 },
        { name: 'Pink Handbag', image: require('@/assets/modules/e-commerce/images/product/10.png'), qty: 5458 },
        { name: 'Casual Shoes', image: require('@/assets/modules/e-commerce/images/product/02.png'), qty: 5458 },
        { name: "Biker's Jacket", image: require('@/assets/modules/e-commerce/images/product/04.png'), qty: 5458 }
      ],
      popular: [
        { name: 'Casual Shoes', image: require('@/assets/modules/e-commerce/images/product/02.png'), qty: 5458 },
        { name: "Biker's Jacket", image: require('@/assets/modules/e-commerce/images/product/04.png'), qty: 5458 },
        { name: 'Knitted Shrug', image: require('@/assets/modules/e-commerce/images/product/05.png'), qty: 5458 },
        { name: 'Blue Handbag', image: require('@/assets/modules/e-commerce/images/product/06.png'), qty: 5458 },
        { name: 'Pink Sweater', image: require('@/assets/modules/e-commerce/images/product/07.png'), qty: 5458 },
        { name: 'Casual Shoes', image: require('@/assets/modules/e-commerce/images/product/02.png'), qty: 5458 },
        { name: 'Pink Handbag', image: require('@/assets/modules/e-commerce/images/product/10.png'), qty: 5458 },
        { name: "Biker's Jacket", image: require('@/assets/modules/e-commerce/images/product/04.png'), qty: 5458 },
        { name: 'Casual Shoes', image: require('@/assets/modules/e-commerce/images/product/02.png'), qty: 5458 },
        { name: "Biker's Jacket", image: require('@/assets/modules/e-commerce/images/product/04.png'), qty: 5458 },
        { name: 'Knitted Shrug', image: require('@/assets/modules/e-commerce/images/product/05.png'), qty: 5458 },
        { name: 'Blue Handbag', image: require('@/assets/modules/e-commerce/images/product/06.png'), qty: 5458 },
        { name: 'Casual Shoes', image: require('@/assets/modules/e-commerce/images/product/02.png'), qty: 5458 },
        { name: 'Pink Sweater', image: require('@/assets/modules/e-commerce/images/product/07.png'), qty: 5458 },
        { name: 'Pink Handbag', image: require('@/assets/modules/e-commerce/images/product/10.png'), qty: 5458 },
        { name: "Biker's Jacket", image: require('@/assets/modules/e-commerce/images/product/04.png'), qty: 5458 }
      ],
      latest: [
        { name: 'Blue Handbag', image: require('@/assets/modules/e-commerce/images/product/06.png'), qty: 5458 },
        { name: 'Knitted Shrug', image: require('@/assets/modules/e-commerce/images/product/05.png'), qty: 5458 },
        { name: 'Pink Sweater', image: require('@/assets/modules/e-commerce/images/product/07.png'), qty: 5458 },
        { name: 'Pink Handbag', image: require('@/assets/modules/e-commerce/images/product/10.png'), qty: 5458 },
        { name: 'Casual Shoes', image: require('@/assets/modules/e-commerce/images/product/02.png'), qty: 5458 },
        { name: "Biker's Jacket", image: require('@/assets/modules/e-commerce/images/product/04.png'), qty: 5458 },
        { name: 'Casual Shoes', image: require('@/assets/modules/e-commerce/images/product/02.png'), qty: 5458 },
        { name: "Biker's Jacket", image: require('@/assets/modules/e-commerce/images/product/04.png'), qty: 5458 },
        { name: 'Blue Handbag', image: require('@/assets/modules/e-commerce/images/product/06.png'), qty: 5458 },
        { name: 'Pink Sweater', image: require('@/assets/modules/e-commerce/images/product/07.png'), qty: 5458 },
        { name: 'Casual Shoes', image: require('@/assets/modules/e-commerce/images/product/02.png'), qty: 5458 },
        { name: 'Knitted Shrug', image: require('@/assets/modules/e-commerce/images/product/05.png'), qty: 5458 },
        { name: "Biker's Jacket", image: require('@/assets/modules/e-commerce/images/product/04.png'), qty: 5458 },
        { name: 'Pink Handbag', image: require('@/assets/modules/e-commerce/images/product/10.png'), qty: 5458 },
        { name: 'Casual Shoes', image: require('@/assets/modules/e-commerce/images/product/02.png'), qty: 5458 },
        { name: "Biker's Jacket", image: require('@/assets/modules/e-commerce/images/product/04.png'), qty: 5458 }
      ]
    })
    return {
      categoryList
    }
  }
}
</script>
