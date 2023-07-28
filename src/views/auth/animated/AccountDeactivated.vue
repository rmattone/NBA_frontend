<template>
  <b-row class="d-flex align-items-center iq-auth-container w-100">
    <b-col cols="10 offset-1" lg="4 offset-lg-7">
      <b-card>
        <h4>Account De-activate</h4>
        <p>Enter your details to de-activate your account</p>
        <div class="form-group me-3">
          <label class="form-label" for="email01">Email</label>
          <input type="email" class="form-control mb-0" id="email01" placeholder="Enter Email" />
        </div>
        <div class="form-group me-3">
          <label class="form-label" for="username01">Username</label>
          <input type="email" class="form-control mb-0" id="username01" placeholder="Enter Username" />
        </div>
        <button type="button" class="btn btn-primary">De-activate</button>
      </b-card>
    </b-col>
  </b-row>
</template>

<script setup></script>

<style lang="scss" scoped></style>
