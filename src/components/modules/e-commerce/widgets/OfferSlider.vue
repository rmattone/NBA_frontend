<template>
  <div class="overflow-hidden collection-slider">
    <Swiper class="p-0 m-0 mb-2 swiper-wrapper list-inline" loop :slide-per-view="1" :space-between="8" autoplay>
      <SwiperSlide class="swiper-slide card-slide">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-center">
              <img src="@/assets/modules/e-commerce/images/product/03.png" class="img-fluid object-contain avatar-100" alt="product" loading="lazy" />
            </div>
            <div class="text-center">
              <h6 class="text-primary">New Collection for you</h6>
              <p class="small">Get 20 % off on Headphones</p>
              <button class="btn btn-primary" type="submit">View Now</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide card-slide">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-center">
              <img src="@/assets/modules/e-commerce/images/product/01.png" class="img-fluid object-contain avatar-100" alt="product" loading="lazy" />
            </div>
            <div class="text-center">
              <h6 class="text-primary">New Collection for you</h6>
              <p class="small">Get 20 % off on Biker's Jacket</p>
              <button class="btn btn-primary" type="submit">View Now</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
</script>

<style lang="scss" scoped></style>
