<template>
  <div class="d-flex justify-content-between align-items-center">
    <h5 class="mt-4 mb-3">Menu Hide</h5>
    <div class="form-check form-switch">
      <checkbox-input btn-name="sidebar_show" type="switch" label-title="Mini" label-class="overflow-hidden p-0" id="sidebar-hide" :default-checked="menuHide.value" value="sidebar-none" @onChange="updateCheckbox"> </checkbox-input>
    </div>
  </div>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import CheckboxInput from '@/components/custom/elements/CheckboxInput'
import _ from 'lodash'
export default {
  components: {
    CheckboxInput
  },
  setup() {
    const store = useStore()
    const menuHide = computed(() => _.cloneDeep(store.state.setting.setting.sidebar_show))

    const updateCheckbox = (value, name) => {
      store.dispatch(`setting/${name}`, value)
    }
    return {
      menuHide,
      updateCheckbox
    }
  }
}
</script>
