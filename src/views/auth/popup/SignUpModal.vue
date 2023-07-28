<template>
  <b-modal v-model="newValue">
    <sign-up-form-component></sign-up-form-component>
  </b-modal>
</template>

<script>
import { ref, watch } from 'vue'
import SignUpFormComponent from '@/components/auth/SignUpForm.vue'
export default {
  components: {
    SignUpFormComponent
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const newValue = ref(props.modelValue)
    watch(
      () => props.modelValue,
      (newVal) => {
        newValue.value = newVal
      }
    )
    watch(
      () => newValue.value,
      (newVal) => {
        emit('update:modelValue', newVal)
      }
    )
    return {
      newValue
    }
  }
}
</script>
