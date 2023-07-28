<template>
  <section class="iq-auth-page" style="background: url(@/assets/images/dashboard/top-image.jpg); background-size: cover; background-repeat: no-repeat">
    <div class="row d-flex align-items-center justify-content-center vh-100 w-100">
      <div class="col-md-4 col-xl-4">
        <sign-up-form-component></sign-up-form-component>
      </div>
    </div>
  </section>
</template>

<script setup>
import SignUpFormComponent from '@/components/auth/SignUpForm.vue'
</script>
