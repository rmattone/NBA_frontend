<template>
  <b-row>
    <b-col lg="12">
      <b-card>
        <b-row class="align-items-center">
          <b-col lg="7">
            <section class="product-vertical-slider">
              <div class="slider__flex">
                <div class="slider__col">
                  <div class="slider__thumbs">
                    <div class="swiper-container">
                      <Swiper class="swiper-wrapper" :modules="modules" direction="vertical" :slide-to-clicked-slide="true" loop loop-slide="5" :slidesPerView="3" :spaceBetween="32" @swiper="setMainSwiper" :controller="{ control: thumbSwiper }">
                        <SwiperSlide class="swiper-slide" v-for="(data, index) in items1" :key="index">
                          <div class="slider__image">
                            <img :src="data.images" alt="" loading="lazy" />
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
                <div class="slider__images">
                  <div class="swiper-container">
                    <Swiper
                      class="swiper-wrapper"
                      :modules="modules"
                      direction="vertical"
                      :space-between="32"
                      :loop="true"
                      :loop-slide="5"
                      :mousewheel="true"
                      :grabCursor="true"
                      @swiper="setThumbSwiper"
                      :controller="{ control: mainSwiper }"
                      :breakpoints="{
                        0: {
                          direction: 'horizontal'
                        },
                        768: {
                          direction: 'vertical'
                        }
                      }">
                      <SwiperSlide class="swiper-slide" v-for="(data, index) in items2" :key="index">
                        <div class="slider__image">
                          <img :src="data.images" alt="" loading="lazy" />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </section>
          </b-col>
          <b-col lg="5">
            <detail-component></detail-component>
          </b-col>
        </b-row>
      </b-card>
      <product-detail-spacification></product-detail-spacification>
    </b-col>
    <feature-product-slider title="Similar Products"></feature-product-slider>
  </b-row>
</template>

<script setup>
import DetailComponent from '@/components/modules/e-commerce/widgets/product-detail/DetailComponent.vue'
import ProductDetailSpacification from '@/components/modules/e-commerce/widgets/product-detail/ProductDetailSpacification.vue'
import FeatureProductSlider from '@/components/modules/e-commerce/widgets/FeatureProductSlider.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Controller } from 'swiper'
import { ref } from 'vue'
const modules = [Navigation, Controller]
const items1 = [{ images: require('@/assets/modules/e-commerce/images/product-detail/2.png') }, { images: require('@/assets/modules/e-commerce/images/product-detail/3.png') }, { images: require('@/assets/modules/e-commerce/images/product-detail/4.png') }, { images: require('@/assets/modules/e-commerce/images/product-detail/5.png') }]
const items2 = [{ images: require('@/assets/modules/e-commerce/images/product-detail/1.png') }, { images: require('@/assets/modules/e-commerce/images/product-detail/2.png') }, { images: require('@/assets/modules/e-commerce/images/product-detail/3.png') }, { images: require('@/assets/modules/e-commerce/images/product-detail/4.png') }]
const mainSwiper = ref(null)
const thumbSwiper = ref(null)
const setMainSwiper = (swiper) => {
  mainSwiper.value = swiper
}
const setThumbSwiper = (swiper) => {
  thumbSwiper.value = swiper
}
</script>
