<template>
  <!-- Horizontal Menu Start -->
  <nav id="navbar_main" class="mobile-offcanvas nav navbar navbar-expand-xl hover-nav horizontal-nav">
    <div class="container-fluid">
      <div class="offcanvas-header px-0">
        <div class="navbar-brand ms-0">
          <brand-logo :color="true"></brand-logo>
          <h4 class="logo-title"><brand-name></brand-name></h4>
        </div>
        <button class="btn-close float-end"></button>
      </div>
      <ul class="navbar-nav">
        <li class="nav-item"><router-link class="nav-link" :to="{ name: 'default.dashboard' }"> Horizontal </router-link>
        </li>
        <li class="nav-item"><router-link class="nav-link" :to="{ name: 'default.dashboard' }"> Dual Horizontal
          </router-link></li>
      </ul>
    </div>
    <!-- container-fluid.// -->
  </nav>
  <!-- Sidebar Menu End -->
</template>

<script setup></script>

<style lang="scss" scoped></style>
