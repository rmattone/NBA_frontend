<template>
  <b-row>
    <b-col lg="12">
      <b-card>
        <b-row class="align-items-center">
          <b-col lg="7">
            <Renderer
              width="500"
              height="400"
              ref="renderer"
              :antialias="true"
              :alpha="true"
              :orbit-ctrl="{
                enableDamping: true,
                autoRotate: true,
                enableZoom: false,
                dampingFactor: 0.05
              }">
              <Camera :position="{ x: 6, y: 4, z: 1 }" :far="200" :fov="2.5" />
              <Scene>
                <HemisphereLight :position="{ x: 0, y: 50, z: 0 }" color="#ffffff" :intensity="3"></HemisphereLight>
                <DirectionalLight :position="{ x: 0, y: -7, z: 10 }" :castShadow="true" color="#aabbff" :intensity="0.5"></DirectionalLight>
                <DirectionalLight :position="{ x: 0, y: 7, z: 10 }" :castShadow="true" color="#aabbff" :intensity="0.5"></DirectionalLight>
                <GltfModel src="/3d/shoes.gltf" />
              </Scene>
            </Renderer>
          </b-col>
          <b-col lg="5">
            <detail-component name="Hope UI Shoes" amount="99.00"></detail-component>
          </b-col>
        </b-row>
      </b-card>
      <product-detail-spacification></product-detail-spacification>
    </b-col>
    <feature-product-slider title="Similar Products"></feature-product-slider>
  </b-row>
</template>

<script setup>
// Library
import { Camera, GltfModel, Renderer, Scene, HemisphereLight, DirectionalLight } from 'troisjs'

// Componants
import DetailComponent from '@/components/modules/e-commerce/widgets/product-detail/DetailComponent.vue'
import ProductDetailSpacification from '@/components/modules/e-commerce/widgets/product-detail/ProductDetailSpacification.vue'
import FeatureProductSlider from '@/components/modules/e-commerce/widgets/FeatureProductSlider.vue'
</script>
