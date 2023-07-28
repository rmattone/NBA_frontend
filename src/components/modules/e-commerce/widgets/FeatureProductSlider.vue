<template>
  <div class="row row-cols-1">
    <div class="d-flex py-4 pt-0">
      <h4 class="mb-0">{{ title }}</h4>
    </div>
    <div class="overflow-hidden ecommerce-slider slider-circle-btn position-relative">
      <Swiper
        class="p-0 m-0 mb-2 swiper-wrapper list-inline"
        :modules="modules"
        :slide-per-view="4"
        :space-between="32"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }"
        :breakpoints="{
          320: { slidesPerView: 1 },
          550: { slidesPerView: 2 },
          991: { slidesPerView: 3 },
          1400: { slidesPerView: 3 },
          1500: { slidesPerView: 3 },
          1920: { slidesPerView: 4 },
          2040: { slidesPerView: 4 },
          2440: { slidesPerView: 4 }
        }">
        <swiper-Slide class="swiper-slide card-slide" v-for="(data, index) in items" :key="index">
          <div>
            <product-widget :name="data.name" :image="data.image" :review="data.ratting" :rating="data.ratting" :price="data.amount" :isRibbon="data.isRibbon" :ribbonText="data.ribbonText" :ribbonVariant="data.ribbonVariant" />
          </div>
        </swiper-Slide>
      </Swiper>
      <div class="swiper-button swiper-button-next"></div>
      <div class="swiper-button swiper-button-prev"></div>
    </div>
  </div>
</template>
<script>
import { ref, watch, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'
import { useStore } from 'vuex'
import ProductWidget from '@/components/modules/e-commerce/widgets/ProductWidget.vue'
export default {
  name: 'product-slider',
  components: {
    ProductWidget,
    SwiperSlide,
    Swiper
  },
  props: {
    title: {
      type: String
    }
  },
  setup() {
    const render = ref(false)
    const items = ref([
      {
        name: 'Blue Handbag',
        image: require('@/assets/modules/e-commerce/images/product/06.png'),
        ratting: '3.5',
        amount: '56.00',
        isRibbon: false,
        ribbonText: '',
        ribbonVariant: ''
      },
      {
        name: 'Pink Sweater',
        image: require('@/assets/modules/e-commerce/images/product/07.png'),
        ratting: '3.5',
        amount: '65.00',
        isRibbon: true,
        ribbonText: 'SOLD',
        ribbonVariant: 'warning'
      },
      {
        name: 'Knitted Shrug',
        image: require('@/assets/modules/e-commerce/images/product/10.png'),
        ratting: '3.5',
        amount: '$56.00',
        isRibbon: false,
        ribbonText: '',
        ribbonVariant: ''
      },
      {
        name: 'Leather Bags',
        image: require('@/assets/modules/e-commerce/images/product/11.png'),
        ratting: '3.5',
        amount: '$56.00',
        isRibbon: false,
        ribbonText: '',
        ribbonVariant: ''
      },
      {
        name: "Biker's Jacket",
        image: require('@/assets/modules/e-commerce/images/product/04.png'),
        ratting: '3.5',
        amount: '$65.00',
        isRibbon: false,
        ribbonText: '',
        ribbonVariant: ''
      },
      {
        name: 'Knitted Shrug',
        image: require('@/assets/modules/e-commerce/images/product/10.png'),
        ratting: '3.5',
        amount: '$56.00',
        isRibbon: false,
        ribbonText: '',
        ribbonVariant: ''
      },
      {
        name: 'Blue Handbag',
        image: require('@/assets/modules/e-commerce/images/product/06.png'),
        ratting: '3.5',
        amount: '$56.00',
        isRibbon: true,
        ribbonText: 'NEW',
        ribbonVariant: 'primary'
      }
    ])

    const modules = ref([Navigation])
    const sliderOption = ref({
      centeredSlides: false,
      loop: false,
      slidesPerView: 4,
      autoplay: false,
      spaceBetween: 32,
      breakpoints: {
        320: { slidesPerView: 1 },
        550: { slidesPerView: 2 },
        991: { slidesPerView: 3 },
        1400: { slidesPerView: 3 },
        1500: { slidesPerView: 3 },
        1920: { slidesPerView: 4 },
        2040: { slidesPerView: 4 },
        2440: { slidesPerView: 4 }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar'
      }
    })

    const store = useStore()
    const direction = computed(() => store.getters['setting/theme_scheme_direction'])
    watch(direction, async () => {
      render.value = false
      await this.$nextTick()
      render.value = true
    })

    return { items, sliderOption, modules, render }
  }
}
</script>
