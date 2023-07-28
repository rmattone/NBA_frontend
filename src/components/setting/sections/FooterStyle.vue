<template>
  <div class="mt-4 mb-3">
    <h6 class="d-inline-block mb-0 me-2">Footer</h6>
    <small class="badge bg-warning rounded-pill">Pro</small>
  </div>
  <div class="d-grid gap-3 grid-cols-3 mb-4">
    <radio-input btn-name="footer_style" id="footer_Sticky" labelClass=" d-block" :default-checked="footerStyle" value="sticky" @onChange="updateRadio"> Sticky </radio-input>
    <radio-input btn-name="footer_style" id="footer_default" labelClass=" d-block" :default-checked="footerStyle" value="default" @onChange="updateRadio"> Default </radio-input>
    <radio-input btn-name="footer_style" id="footer_glass" labelClass=" d-block" :default-checked="footerStyle" value="glass" @onChange="updateRadio"> Glass </radio-input>
  </div>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import RadioInput from '@/components/custom/elements/RadioInput'
export default {
  name: 'FooterStyle',
  components: {
    RadioInput
  },
  setup() {
    const store = useStore()
    const footerStyle = computed(() => store.getters['setting/footer_style'])
    const updateRadio = (value, name) => {
      store.dispatch(`setting/${name}`, value)
    }
    return {
      footerStyle,
      updateRadio
    }
  }
}
</script>
