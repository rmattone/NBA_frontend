<template>
  <b-card>
    <b-card class="credit-card-widget" no-body>
      <div class="pb-4 border-0 card-header">
        <div class="p-4 border border-white rounded primary-gradient-card">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h5 class="font-weight-bold">VISA</h5>
              <P class="mb-0">PREMIUM ACCOUNT</P>
            </div>
            <div class="master-card-content">
              <svg class="master-card-1" width="60" height="60" viewBox="0 0 24 24">
                <path fill="#ffffff" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
              </svg>
              <svg class="master-card-2" width="60" height="60" viewBox="0 0 24 24">
                <path fill="#ffffff" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
              </svg>
            </div>
          </div>
          <div class="my-4">
            <div class="card-number">
              <span class="fs-5 me-2">{{ number }}</span>
              <!-- <span class="fs-5 me-2">****</span>
                <span class="fs-5 me-2">****</span>
                <span class="fs-5">2847</span> -->
            </div>
          </div>
          <div class="mb-2 d-flex align-items-center justify-content-between">
            <p class="mb-0">Card holder</p>
            <p class="mb-0">Expire Date</p>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <h6>{{ name }}</h6>
            <h6>{{ date }}</h6>
          </div>
        </div>
      </div>
    </b-card>
    <div class="text-center">
      <a href="#" class="btn btn-soft-primary border-primary border-1 border-dashed" data-bs-toggle="modal" data-bs-target="#add-card-modal">Add Your Card</a>
    </div>
  </b-card>
</template>
<script>
export default {
  props: {
    name: { type: String, required: true },
    date: { type: String, required: true },
    number: { type: String, required: true }
  }
}
</script>
