<template>
  <div class="row">
    <div class="col-lg-8">
      <div class="card">
        <div class="card-header">
          <h4 class="mb-0">Payment Options</h4>
        </div>
        <div class="card-body">
          <div class="d-flex justify-content-between flex-wrap">
            <div class="d-flex mt-3 gap-3">
              <img class="img-fluid" src="@/assets/modules/e-commerce/images/user-cards/02.png" alt="01" loading="lazy" />
              <h6 class="mb-0">Barclays Bank Debit Card ending in 7852</h6>
            </div>
            <h6 class="mb-0 mt-3">Elon Musk</h6>
            <h6 class="mb-0 mt-3">06 / 2030</h6>
          </div>
          <form class="mt-4">
            <div class="d-flex align-items-center gap-3">
              <div class="mb-4">
                <label class="form-label"> <span class="h6">Enter CVV</span></label>
                <input type="text" class="form-control" required="" placeholder="XXX" />
              </div>
              <button type="submit" class="btn btn-primary mt-2">Continue</button>
            </div>
          </form>
          <hr />
          <div class="card-lists">
            <div class="form-group mt-4">
              <div class="form-check mb-4">
                <input type="radio" id="credit" name="customRadio" class="form-check-input" checked />
                <label class="custom-control-label" for="credit">
                  <span class="h6">Credit / Debit / ATM Card</span>
                </label>
              </div>
              <div class="form-check mb-4">
                <input type="radio" id="netbaking" name="customRadio" class="form-check-input" />
                <label class="custom-control-label" for="netbaking">
                  <span class="h6"> Net Banking</span>
                </label>
              </div>
              <div class="form-check mb-4">
                <input type="radio" id="emi" name="customRadio" class="form-check-input" />
                <label class="custom-control-label" for="emi">
                  <span class="h6">EMI (Easy Installment)</span>
                </label>
              </div>
              <div class="form-check mb-4">
                <input type="radio" id="cod" name="customRadio" class="form-check-input" />
                <label class="custom-control-label" for="cod">
                  <span class="h6">Cash On Delivery</span>
                </label>
              </div>
            </div>
          </div>
          <hr />
          <div class="d-flex flex-wrap gap-2">
            <button type="submit" class="btn btn-primary mt-2">Add Gift Card</button>
            <a class="btn btn-primary mt-2" href="#" role="button" @click="changeTab(1)">cancel</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card">
        <div class="card-header">
          <h4 class="mb-0">Billing Details</h4>
        </div>
        <div class="card-body">
          <div class="d-flex justify-content-between mb-4">
            <h6 class="mb-0">Order ID</h6>
            <h6 class="mb-0">ASDW11268</h6>
          </div>
          <div class="alert bg-body border-primary rounded border-1">
            <div class="d-flex justify-content-between align-items-center">
              <h6 class="text-primary mb-0">Expected date of delivery</h6>
              <h6 class="text-primary mb-0">12 Feb 2020</h6>
            </div>
          </div>
          <hr />
          <div class="mt-4">
            <div class="d-flex justify-content-between mb-4">
              <h6 class="mb-0">Subtotal</h6>
              <h6 class="mb-0 text-primary">$206.00</h6>
            </div>
            <div class="d-flex justify-content-between mb-4">
              <h6 class="mb-0">Discount</h6>
              <h6 class="mb-0 text-success">-$38.00</h6>
            </div>
            <div class="d-flex justify-content-between mb-4">
              <h6 class="mb-0">Shipping</h6>
              <h6 class="mb-0 text-primary">FREE</h6>
            </div>
          </div>
          <hr />
          <div class="d-flex justify-content-between mt-4">
            <h6 class="mb-0">Amount Payable</h6>
            <h6 class="mb-0 text-primary">$168.00</h6>
          </div>
        </div>
        <div class="card-footer">
          <router-link :to="{ name: 'e-commerce.invoice' }" class="btn btn-primary w-100">Finish Payment</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup(props, { emit }) {
    const changeTab = (value) => {
      emit('onClick', value)
    }
    return {
      props,
      changeTab
    }
  }
}
</script>
