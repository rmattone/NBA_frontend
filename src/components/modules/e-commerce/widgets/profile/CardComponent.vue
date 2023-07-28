<template>
  <h4 class="mb-4">Your Payment Options</h4>
  <div class="border rounded">
    <div class="card shadow-none mb-0">
      <div class="card-header border-bottom d-flex flex-wrap justify-content-between py-4 px-0 mx-4">
        <h5 class="mb-0">Your Default Payment Preference</h5>
        <a href="#">Update preference</a>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-lg-2">
            <h6>Name:</h6>
            <h6 class="mt-2">Elon Musk</h6>
          </div>
          <div class="col-lg-4">
            <h6>Address:</h6>
            <p class="mt-2 mb-0">265, Hill View, Rochester Avenue. Kentucky - 40062</p>
          </div>
          <div class="col-lg-4">
            <h6>Payment Method:</h6>
            <p class="mt-2 mb-0">Bank Of America Debit Card ending in 0654</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="border rounded mt-4">
    <div class="card shadow-none mb-0">
      <div class="card-header border-bottom d-flex flex-wrap justify-content-between py-4 px-0 mx-4">
        <h5>Your Saved Debit &amp; Credit Cards</h5>
        <a href="#" class="text-dark">Expires On</a>
      </div>
      <div class="card-body">
        <div class="credit-cards">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item shadow-none border-0 mb-4">
              <div class="accordion-header" id="headingOne">
                <div class="accordion-button bg-body" role="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <div class="d-flex flex-grow-1 align-items-center">
                    <img src="@/assets/modules/e-commerce/images/user-cards/01.png" alt="image" class="img-fluid" loading="lazy" />
                    <h6 class="ms-3 card-details mb-0">BOA Debit Card 0654</h6>
                  </div>
                  <div>
                    <h6 class="mx-2 mb-0">03 / 2022</h6>
                  </div>
                </div>
              </div>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="d-flex flex-column">
                    <h6 class="mb-2">Elon Musk</h6>
                    <p>255, Hill View, Rochester Avenue. Kentucky - 40062</p>
                    <a href="#">
                      <small class="text-primary">Edit | Remove</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item shadow-none border-0 mb-4">
              <div class="accordion-header" id="headingTwo">
                <div class="accordion-button bg-body collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <div class="d-flex flex-grow-1 align-items-center">
                    <img src="@/assets/modules/e-commerce/images/user-cards/01.png" alt="image" class="img-fluid" loading="lazy" />
                    <h6 class="ms-3 card-details mb-0">CB Credit Card 6549</h6>
                  </div>
                  <div>
                    <h6 class="mx-2 mb-0">05 / 2026</h6>
                  </div>
                </div>
              </div>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="d-flex flex-column">
                    <h6 class="mb-2">Elon Musk</h6>
                    <p>255, Hill View, Rochester Avenue.Kentucky - 40062</p>
                    <a href="#">
                      <small class="text-primary">Edit | Remove</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item shadow-none border-0 mb-4">
              <div class="accordion-header" id="headingThree">
                <div class="accordion-button bg-body collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <div class="d-flex flex-grow-1 align-items-center">
                    <img src="@/assets/modules/e-commerce/images/user-cards/02.png" alt="image" class="img-fluid" loading="lazy" />
                    <h6 class="ms-3 card-details mb-0">BB Debit Card 7852</h6>
                  </div>
                  <div>
                    <h6 class="mx-2 mb-0">06 / 2030</h6>
                  </div>
                </div>
              </div>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="d-flex flex-column">
                    <h6 class="mb-2">Elon Musk</h6>
                    <p>255, Hill View, Rochester Avenue.Kentucky - 40062</p>
                    <a href="#">
                      <small class="text-primary">Edit | Remove</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item shadow-none border-0">
              <div class="accordion-header" id="headingFour">
                <div class="accordion-button bg-body collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  <div class="d-flex flex-grow-1 align-items-center">
                    <img src="@/assets/modules/e-commerce/images/user-cards/01.png" alt="image" class="img-fluid" loading="lazy" />
                    <h6 class="ms-3 card-details mb-0">BOA Debit Card 6555</h6>
                  </div>
                  <div>
                    <h6 class="text-danger mx-2 mb-0">Expired 08/2021</h6>
                  </div>
                </div>
              </div>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="d-flex flex-column">
                    <h6 class="mb-2">Elon Musk</h6>
                    <p>255, Hill View, Rochester Avenue.Kentucky - 40062</p>
                    <a href="#">
                      <small class="text-primary">Edit | Remove</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="border rounded mt-4">
    <div class="card shadow-none mb-0">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <h5 class="mb-3">Add a New Payment Method</h5>
            <h5 class="mb-1">Credit or Debit Cards</h5>
            <p>We accept all major credit and debit card</p>
          </div>
          <div>
            <img src="@/assets/modules/e-commerce/images/user-cards/01.png" alt="user-profile" class="img-fluid mt-3 me-3" loading="lazy" />
            <img src="@/assets/modules/e-commerce/images/user-cards/03.png" alt="user-profile" class="img-fluid mt-3 me-3" loading="lazy" />
            <img src="@/assets/modules/e-commerce/images/user-cards/05.png" alt="user-profile" class="img-fluid mt-3 me-3" loading="lazy" />
            <img src="@/assets/modules/e-commerce/images/user-cards/04.png" alt="user-profile" class="img-fluid mt-3 me-3" loading="lazy" />
            <img src="@/assets/modules/e-commerce/images/user-cards/02.png" alt="user-profile" class="img-fluid mt-3 me-3" loading="lazy" />
          </div>
        </div>
        <button class="btn btn-primary mt-3">Add a credit or debit card</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
