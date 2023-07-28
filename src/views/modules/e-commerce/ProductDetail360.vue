<template>
  <b-row>
    <b-col lg="12">
      <b-card>
        <b-row class="align-items-center">
          <b-col lg="7">
            <div class="product-slider slider-circle-btn" v-if="render">
              <div class="position-relative text-end">
                <Swiper
                  class="gallery-top"
                  :modules="modules"
                  :space-between="10"
                  loop
                  :looped-slides="3"
                  :navigation="{
                    nextEl: '#top-slider-next',
                    prevEl: '#top-slider-prev'
                  }"
                  @swiper="setMainSwiper"
                  :controller="{ control: thumbSwiper }">
                  <SwiperSlide class="swiper-slide" v-for="(data, index) in items1" :key="index">
                    <img alt="product-15" :src="data.images" loading="lazy" />
                  </SwiperSlide>
                </Swiper>
                <div class="swiper-button swiper-button-next" id="top-slider-next"></div>
                <div class="swiper-button swiper-button-prev" id="top-slider-prev"></div>
                <button class="btn btn-soft-secondary rounded-circle btn-lg btn-icon" data-bs-toggle="modal" data-bs-target="#product-viewer360">
                  <span class="btn-inner">
                    <svg class="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.83415 9.44546H7.03334M7.03334 9.44546C7.35138 9.44546 7.6564 9.57755 7.88129 9.81267C8.10618 10.0478 8.23253 10.3667 8.23253 10.6992C8.23253 11.0317 8.10618 11.3506 7.88129 11.5857C7.6564 11.8208 7.35138 11.9529 7.03334 11.9529H5.1489M7.03334 9.44546C7.35138 9.44546 7.6564 9.31337 7.88129 9.07825C8.10618 8.84313 8.23253 8.52423 8.23253 8.19172C8.23253 7.85921 8.10618 7.54032 7.88129 7.3052C7.6564 7.07008 7.35138 6.93799 7.03334 6.93799H5.1489" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12.6867 6.93799H12.0014C11.4562 6.93799 10.9333 7.16443 10.5478 7.56749C10.1623 7.97056 9.94568 8.51723 9.94568 9.08725V10.5201M9.94568 10.5201C9.94568 10.9001 10.0901 11.2645 10.3471 11.5333C10.6041 11.802 10.9527 11.9529 11.3162 11.9529H11.6588C12.0223 11.9529 12.3709 11.802 12.6279 11.5333C12.8849 11.2645 13.0293 10.9001 13.0293 10.5201V10.1619C13.0293 9.78186 12.8849 9.41742 12.6279 9.14871C12.3709 8.88 12.0223 8.72904 11.6588 8.72904H11.3162C10.9527 8.72904 10.6041 8.88 10.3471 9.14871C10.0901 9.41742 9.94568 9.78186 9.94568 10.1619V10.5201Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M14.7424 9.44546V8.37083C14.7424 7.99082 14.8868 7.62637 15.1438 7.35766C15.4008 7.08895 15.7494 6.93799 16.1129 6.93799H16.4555C16.819 6.93799 17.1676 7.08895 17.4246 7.35766C17.6816 7.62637 17.826 7.99082 17.826 8.37083V10.5201C17.826 10.9001 17.6816 11.2645 17.4246 11.5333C17.1676 11.802 16.819 11.9529 16.4555 11.9529H16.1129C15.7494 11.9529 15.4008 11.802 15.1438 11.5333C14.8868 11.2645 14.7424 10.9001 14.7424 10.5201V9.44546Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M18.9785 6.80396C18.9785 6.59074 19.0649 6.38625 19.2186 6.23548C19.3722 6.0847 19.5807 6 19.798 6H20.0029C20.2203 6 20.4287 6.0847 20.5824 6.23548C20.7361 6.38625 20.8225 6.59074 20.8225 6.80396C20.8225 7.01719 20.7361 7.48967 20.5824 7.64044C20.4287 7.79121 20.2203 7.87592 20.0029 7.87592H19.798C19.5807 7.87592 19.3722 7.79121 19.2186 7.64044C19.0649 7.48967 18.9785 7.01719 18.9785 6.80396Z" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M4 11C1.38269 11.6145 1 12.5806 1 13.6671C1 15.3749 5.16801 16.7852 10.5652 17M18.964 11.0651C21.4277 11.6815 23 12.6182 23 13.6671C23 15.2725 19.3166 16.6151 14.3913 16.9487" stroke="currentColor" stroke-linecap="round" />
                      <path d="M8.85788 14L11.2777 17.0142L8 19.0636" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                </button>
              </div>
              <div class="swiper-container">
                <Swiper class="gallery-thumbs" :modules="modules" :space-between="10" :centered-slides="true" loop :looped-slides="3" :touch-ratio="0.2" slides-per-view="auto" @swiper="setThumbSwiper" :controller="{ control: mainSwiper }">
                  <SwiperSlide class="swiper-slide" v-for="(data, index) in items2" :key="index">
                    <img alt="product-15" :src="data.images" loading="lazy" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </b-col>
          <b-col lg="5">
            <detail-component></detail-component>
          </b-col>
        </b-row>
      </b-card>
      <product-detail-spacification360></product-detail-spacification360>
    </b-col>
    <feature-product-slider title="Similar Products"></feature-product-slider>
    <b-modal v-model="show360" hide-footer hide-header id="product-viewer360" content-class="bg-transparent border-0 shadow-none" size="lg">
      <div class="model-header text-end">
        <button type="button" class="btn btn-light m-2" @click="show360 = false">close</button>
      </div>
      <b-row class="vh-80 align-items-center">
        <div class="d-flex flex-column">
          <div class="cloudimage-360" id="product-360" data-folder="https://templates.iqonic.design/hope-ui/pro/html/e-commerce/assets/images/bag-product/" data-filename-x="{index}.png" data-amount-x="73" data-hide-360-logo="true"></div>
        </div>
      </b-row>
    </b-modal>
  </b-row>
</template>

<script setup>
// Library
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Controller } from 'swiper'
import { ref, onMounted } from 'vue'
import 'js-cloudimage-360-view'

// Componants
import DetailComponent from '@/components/modules/e-commerce/widgets/product-detail/DetailComponent.vue'
import ProductDetailSpacification360 from '@/components/modules/e-commerce/widgets/product-detail/ProductDetailSpacification360.vue'
import FeatureProductSlider from '@/components/modules/e-commerce/widgets/FeatureProductSlider.vue'
const modules = [Navigation, Controller]
const show360 = ref(false)
const render = ref(true)
const items1 = [{ images: require('@/assets/modules/e-commerce/images/bag-product/10.png') }, { images: require('@/assets/modules/e-commerce/images/bag-product/20.png') }, { images: require('@/assets/modules/e-commerce/images/bag-product/30.png') }, { images: require('@/assets/modules/e-commerce/images/bag-product/40.png') }, { images: require('@/assets/modules/e-commerce/images/bag-product/50.png') }, { images: require('@/assets/modules/e-commerce/images/bag-product/60.png') }, { images: require('@/assets/modules/e-commerce/images/bag-product/90.png') }]
const items2 = [{ images: require('@/assets/modules/e-commerce/images/bag-product/10.png') }, { images: require('@/assets/modules/e-commerce/images/bag-product/20.png') }, { images: require('@/assets/modules/e-commerce/images/bag-product/30.png') }, { images: require('@/assets/modules/e-commerce/images/bag-product/40.png') }, { images: require('@/assets/modules/e-commerce/images/bag-product/50.png') }, { images: require('@/assets/modules/e-commerce/images/bag-product/60.png') }, { images: require('@/assets/modules/e-commerce/images/bag-product/90.png') }]
const mainSwiper = ref(null)
const thumbSwiper = ref(null)
const setMainSwiper = (swiper) => {
  mainSwiper.value = swiper
}
const setThumbSwiper = (swiper) => {
  thumbSwiper.value = swiper
}
// Lifecycle
onMounted(() => {
  const event360Modal = document.getElementById('product-viewer360')
  if (event360Modal !== null) {
    event360Modal.addEventListener('shown.bs.modal', function () {
      const cloudImg360 = document.querySelector('.cloudimage-360')
      if (!cloudImg360.classList.contains('initialized')) {
        window.CI360.init()
      }
    })
  }
})
</script>
