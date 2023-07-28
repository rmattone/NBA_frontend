<template>
  <b-modal v-model="newValue">
    <sign-in-form-component></sign-in-form-component>
  </b-modal>
</template>

<script>
import { ref } from 'vue'
import SignInFormComponent from '@/components/auth/SignInForm.vue'
export default {
  components: {
    SignInFormComponent
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const newValue = ref(false)
    return { newValue }
  }
}
</script>
