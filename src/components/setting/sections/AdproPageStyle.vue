<template>
  <div>
    <h6 class="d-inline-block mb-3 me-2">Page Style</h6>
    <small class="badge bg-warning rounded-pill">Pro</small>
    <span data-bs-toggle="tooltip" data-bs-placement="right" title="Wrap your content layout and select Full Width or Boxed styles.  ">
      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </span>
  </div>
  <div class="d-grid gap-3 grid-cols-2 mb-4">
    <radio-input btn-name="page_layout" id="page-layout-boxed" labelClass=" d-block" :default-checked="pageLayout" value="container" @onChange="updateRadio"> Boxed </radio-input>
    <radio-input btn-name="page_layout" id="page-layout-full-width" labelClass=" d-block" :default-checked="pageLayout" value="container-fluid" @onChange="updateRadio"> Full Width </radio-input>
    <!-- <div data-setting="radio">
      <input type="radio" value="container" class="btn-check" name="page_layout" id="page-layout-boxed" autocomplete="off">
      <label class="btn btn-border d-block" for="page-layout-boxed">Boxed</label>
    </div>
    <div data-setting="radio">
      <input type="radio" value="container-fluid" class="btn-check" name="page_layout" id="page-layout-full-width" autocomplete="off">
      <label class="btn btn-border d-block" for="page-layout-full-width">Full Width</label>
    </div> -->
  </div>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import RadioInput from '@/components/custom/elements/RadioInput'
export default {
  name: 'AdproPageStyle',
  components: {
    RadioInput
  },
  setup() {
    const store = useStore()
    const pageLayout = computed(() => store.getters['setting/page_layout'])
    const updateRadio = (value, name) => {
      store.dispatch(`setting/${name}`, value)
    }
    return {
      pageLayout,
      updateRadio
    }
  }
}
</script>
