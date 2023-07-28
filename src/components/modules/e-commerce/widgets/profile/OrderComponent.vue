<template>
  <div class="d-flex align-items-center justify-content-between flex-wrap">
    <h5 class="mb-0 pb-3">3 Orders placed in</h5>
    <div class="dropdown text-end pb-3">
      <button class="dropdown btn btn-soft-primary" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
        Last 90 Days
        <svg width="12" class="ms-2" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6 5.08579L10.2929 0.792893C10.6834 0.402369 11.3166 0.402369 11.7071 0.792893C12.0976 1.18342 12.0976 1.81658 11.7071 2.20711L6.70711 7.20711C6.31658 7.59763 5.68342 7.59763 5.29289 7.20711L0.292893 2.20711C-0.0976311 1.81658 -0.0976311 1.18342 0.292893 0.792893C0.683418 0.402369 1.31658 0.402369 1.70711 0.792893L6 5.08579Z" fill="currentColor"></path>
        </svg>
      </button>
      <ul class="dropdown-menu dropdown-menu-soft-primary" aria-labelledby="dropdownMenuButton2">
        <li><a class="dropdown-item active" href="#">Last 30 Days</a></li>
        <li><a class="dropdown-item" href="#">Last 90 Days</a></li>
        <li><a class="dropdown-item" href="#">Last 180 Days</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Last 1 Year</a></li>
      </ul>
    </div>
  </div>
  <div class="card shadow-none border iq-product-order-placed">
    <div class="card-header user-details-bg-color p-4">
      <div class="iq-order-content">
        <div class="iq-order-user-details d-flex justify-content-between align-items-center gap-4">
          <div>
            <p>Order Placed</p>
            <h6 class="mb-0">12 Jan 2021</h6>
          </div>
          <div>
            <p>Total</p>
            <h6 class="mb-0">$550.00</h6>
          </div>
          <div>
            <p>Ship to</p>
            <h6 class="mb-0 text-primary">Elon Musk</h6>
          </div>
        </div>
        <h6 class="mb-xl-0 mb-2 iq-order-id">
          Order ID:
          <a href="#">#895-458895-125489</a>
        </h6>
      </div>
    </div>
    <div class="card-body">
      <div class="d-flex align-items-center justify-content-between flex-wrap">
        <div class="d-flex align-items-center gap-3">
          <img src="@/assets/modules/e-commerce/images/app/01.png" alt="user-profile" class="img-fluid rounded object-contain avatar-100 iq-product-bg p-3" loading="lazy" />
          <div>
            <router-link :to="{ name: 'e-commerce.product-detail' }">
              <h5 class="mb-3">Biker's Jacket</h5>
            </router-link>
            <h6 class="text-primary mb-0">$45.99</h6>
          </div>
        </div>
        <div class="mt-3 mt-xl-0 mt-3 mt-md-0">
          <div class="dropdown text-end">
            <button class="dropdown btn btn-primary mb-3" id="buy-again-drop" data-bs-toggle="dropdown" aria-expanded="false">
              Buy It Again
              <svg width="12" class="ms-2" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 5.08579L10.2929 0.792893C10.6834 0.402369 11.3166 0.402369 11.7071 0.792893C12.0976 1.18342 12.0976 1.81658 11.7071 2.20711L6.70711 7.20711C6.31658 7.59763 5.68342 7.59763 5.29289 7.20711L0.292893 2.20711C-0.0976311 1.81658 -0.0976311 1.18342 0.292893 0.792893C0.683418 0.402369 1.31658 0.402369 1.70711 0.792893L6 5.08579Z" fill="currentColor"></path>
              </svg>
            </button>
            <ul class="dropdown-menu dropdown-menu-soft-primary" aria-labelledby="buy-again-drop">
              <li><a class="dropdown-item active" href="#">Buy It Again</a></li>
              <li><a class="dropdown-item" href="#">Replace</a></li>
              <li><a class="dropdown-item" href="#">View</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Cancel Order</a></li>
            </ul>
          </div>
          <div class="text-center">
            <a href="../e-commerce/invoice.html">Invoice</a>
            <span>|</span>
            <router-link :to="{ name: 'e-commerce.product-detail' }">Write a Review</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="card shadow-none border iq-product-order-placed">
    <div class="card-header user-details-bg-color p-4">
      <div class="iq-order-content">
        <div class="iq-order-user-details d-flex gap-4 justify-content-between align-items-center">
          <div>
            <p>Order Placed</p>
            <h6 class="mb-0">01 Jan 2022</h6>
          </div>
          <div>
            <p>Total</p>
            <h6 class="mb-0">$950.00</h6>
          </div>
          <div>
            <p>Ship to</p>
            <h6 class="mb-0 text-primary">Elon Musk</h6>
          </div>
        </div>
        <h6 class="mb-xl-0 mb-2 iq-order-id">
          Order ID:
          <a href="#">#405-653265-0876343</a>
        </h6>
      </div>
    </div>
    <div class="card-body">
      <div class="d-flex align-items-center justify-content-between flex-wrap">
        <div class="d-flex align-items-center gap-3">
          <img src="@/assets/modules/e-commerce/images/app/02.png" alt="user-profile" class="img-fluid rounded object-contain avatar-100 iq-product-bg p-3" loading="lazy" />
          <div>
            <router-link :to="{ name: 'e-commerce.product-detail' }">
              <h5 class="mb-3">Pink Sweater</h5>
            </router-link>
            <h6 class="text-primary mb-0">$26.00</h6>
          </div>
        </div>
        <div class="mt-3 mt-xl-0 mt-3 mt-md-0">
          <div class="dropdown text-end">
            <button class="dropdown btn btn-primary mb-3" id="buy-drop" data-bs-toggle="dropdown" aria-expanded="false">
              Buy It Again
              <svg width="12" class="ms-2" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 5.08579L10.2929 0.792893C10.6834 0.402369 11.3166 0.402369 11.7071 0.792893C12.0976 1.18342 12.0976 1.81658 11.7071 2.20711L6.70711 7.20711C6.31658 7.59763 5.68342 7.59763 5.29289 7.20711L0.292893 2.20711C-0.0976311 1.81658 -0.0976311 1.18342 0.292893 0.792893C0.683418 0.402369 1.31658 0.402369 1.70711 0.792893L6 5.08579Z" fill="currentColor"></path>
              </svg>
            </button>
            <ul class="dropdown-menu dropdown-menu-soft-primary" aria-labelledby="buy-drop">
              <li><a class="dropdown-item active" href="#">Buy It Again</a></li>
              <li><a class="dropdown-item" href="#">Replace</a></li>
              <li><a class="dropdown-item" href="#">View</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Cancel Order</a></li>
            </ul>
          </div>
          <div class="text-center">
            <a href="../e-commerce/invoice.html">Invoice</a>
            <span>|</span>
            <router-link :to="{ name: 'e-commerce.product-detail' }">Write a Review</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-12 text-center">
    <a href="javascript:void(0);" class="btn btn-primary">Load More</a>
  </div>
</template>
