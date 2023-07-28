<template>
  <b-row class="align-items-center iq-auth-container w-100">
    <b-col cols="10 offset-1" lg="4 offset-lg-7">
      <b-card>
        <img src="@/assets/images/avatars/01.png" alt="User-Profile" class="theme-color-default-img img-fluid avatar avatar-50 avatar-rounded" loading="lazy" />
        <h4>Hi ! Austin Robertson</h4>
        <p>Enter your password to acess the admin.</p>
        <div class="form-group me-3">
          <label class="form-label" for="lock-pass">Password</label>
          <input type="email" class="form-control mb-0" id="lock-pass" placeholder="Enter Password" />
        </div>
        <b-button variant="primary">Login</b-button>
      </b-card>
    </b-col>
  </b-row>
</template>

<script setup></script>

<style lang="scss" scoped></style>
