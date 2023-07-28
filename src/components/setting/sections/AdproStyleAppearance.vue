<template>
  <div>
    <h6 class="d-inline-block mb-3 me-2">Style Appearance</h6>
    <small class="badge bg-warning rounded-pill">Pro</small>
  </div>
  <div class="d-grid gap-3 grid-cols-3 mb-4">
    <checkbox-input btn-name="theme_style_appearance" id="theme-style-appearance-flat" labelClass="d-block" :default-checked="themeStyleAppearance.value" value="theme-flat" @onChange="updateCheckbox"> Flat </checkbox-input>
    <checkbox-input btn-name="theme_style_appearance" id="theme-style-appearance-bordered" labelClass="d-block" :default-checked="themeStyleAppearance.value" value="theme-bordered" @onChange="updateCheckbox"> Bordered </checkbox-input>
    <checkbox-input btn-name="theme_style_appearance" id="theme-style-appearance-sharp" labelClass="d-block" :default-checked="themeStyleAppearance.value" value="theme-sharp" @onChange="updateCheckbox"> Sharp </checkbox-input>
  </div>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import CheckboxInput from '@/components/custom/elements/CheckboxInput'
import _ from 'lodash'
export default {
  name: 'AdproStyleAppearance',
  components: {
    CheckboxInput
  },
  setup() {
    const store = useStore()
    const themeStyleAppearance = computed(() => _.cloneDeep(store.state.setting.setting.theme_style_appearance))

    const updateCheckbox = (value, name) => {
      store.dispatch(`setting/${name}`, value)
    }
    return {
      themeStyleAppearance,
      updateCheckbox
    }
  }
}
</script>
