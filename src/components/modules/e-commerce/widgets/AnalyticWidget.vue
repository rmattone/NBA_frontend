<template>
  <b-card class="text-center">
    <div class="m-auto d-inline-block p-4 bg-soft-primary rounded-pill">
      <icon-component type="dual-tone" icon-name="document-arrow-up" :size="44" />
    </div>
    <h4 class="mt-4 mb-2 counter">{{ amount }}</h4>
    <p class="mb-0">{{ title }}</p>
  </b-card>
</template>
<script>
export default {
  props: {
    amount: { type: String, required: true },
    title: { type: String, required: true }
  }
}
</script>
