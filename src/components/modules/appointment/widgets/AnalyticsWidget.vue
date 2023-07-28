<template>
  <div class="card">
    <div class="card-body">
      <div class="d-flex align-items-center gap-3">
        <div :class="`bg-soft-${variant} p-2 rounded`">
          <icon-component type="dual-tone" :icon-name="icon" :size="32"></icon-component>
        </div>
        <div>
          <h4 class="counter">{{ value }}</h4>
          <span class="text-dark">{{ description }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'document'
    },
    description: {
      type: String,
      default: ''
    },
    value: {
      type: [Number, String],
      default: 0
    },
    variant: {
      type: String,
      default: 'primary'
    }
  }
}
</script>
