<template>
  <div class="row">
    <div class="col-lg-8">
      <div class="card">
        <div class="card-body">
          <h4 class="mb-0">Most Recently Used</h4>
          <div class="row">
            <div class="col-lg-4">
              <div class="mt-4">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="address" id="address21" checked />
                  <label class="form-check-label mb-0" for="address21">
                    <span class="h6 mb-0">Billing Address</span>
                  </label>
                </div>
                <p class="mb-0">Elon Musk</p>
                <p class="mb-0">265, Hill View, Rochester Avenue.Kentucky - 40062</p>
                <div class="mt-2">
                  <a href="#">Edit</a>
                  <span> | </span>
                  <a href="#">Remove </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="mt-4">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="address" id="address001" />
                  <label class="form-check-label" for="address001">
                    <span class="h6 mb-0">Shipping Address</span>
                  </label>
                </div>
                <p class="mb-0">Elon Musk</p>
                <p class="mb-0">265, Hill View, Rochester Avenue.Kentucky - 40062</p>
                <div class="mt-2">
                  <a href="#">Edit</a>
                  <span> | </span>
                  <a href="#">Remove </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="mt-4">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="address" id="address002" />
                  <label class="form-check-label" for="address002">
                    <span class="h6 mb-0">Office Address</span>
                  </label>
                </div>
                <p class="mb-0">Elon Musk</p>
                <p class="mb-0">265, Hill View, Rochester Avenue.Kentucky - 40062</p>
                <div class="mt-2">
                  <a href="#">Edit</a>
                  <span> | </span>
                  <a href="#">Remove </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h4 class="mb-0">Add New Address</h4>
        </div>
        <div class="card-body">
          <form autocomplete="off">
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="form-label" for="fName">First Name</label>
                  <input type="text" class="form-control" id="fName" placeholder="" autocomplete="fname" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="form-label" for="LName">Last Name</label>
                  <input type="text" class="form-control" id="LName" placeholder="" autocomplete="lname" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="form-label" for="Cno">Contact Number</label>
                  <input type="email" class="form-control" id="Cno" placeholder="" autocomplete="cno" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="form-label" for="email">Email ID</label>
                  <input type="text" class="form-control" id="email" placeholder="" autocomplete="email-id" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="form-label" for="HName">House no./ Flat no.</label>
                  <input type="password" class="form-control" id="HName" placeholder="" autocomplete="hno" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="form-label" for="Lmark">Landmark</label>
                  <input type="text" class="form-control" id="Lmark" placeholder="" autocomplete="landmark" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="form-label" for="Street">Street Address</label>
                  <input type="text" class="form-control" id="Street" placeholder="" autocomplete="Street" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="form-label" for="Town">Town/ City</label>
                  <input type="text" class="form-control" id="Town" placeholder="" autocomplete="town" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="form-label" for="State">State/ Country</label>
                  <input type="text" class="form-control" id="State" placeholder="" autocomplete="state-country" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="form-label" for="Zip">Postcode/ ZIP Code</label>
                  <input type="text" class="form-control" id="Zip" placeholder="" autocomplete="postcode-zip" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-0">
                  <label class="form-label" for="Comment">Enter your Comment</label>
                  <textarea class="form-control" rows="4" id="Comment" placeholder="" autocomplete="comment"></textarea>
                </div>
              </div>
              <div class="col-lg-12 d-flex my-4">
                <div class="form-check">
                  <input type="checkbox" id="Daddress" class="form-check-input" />
                  <label class="form-check-label" for="Daddress">Make this my default address.</label>
                </div>
              </div>
              <div class="d-flex">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card">
        <div class="card-header">
          <h4 class="mb-0">Payment Summary</h4>
        </div>
        <div class="card-body">
          <div class="border-bottom">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <div class="d-flex align-items-center">
                <svg width="20" class="text-primary" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0.75C15.108 0.75 19.25 4.891 19.25 10C19.25 15.108 15.108 19.25 10 19.25C4.891 19.25 0.75 15.108 0.75 10C0.75 4.891 4.891 0.75 10 0.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9.99512 6.20312V10.6221" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9.995 13.7969H10.005" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h6 class="mb-0 ms-2">New user?</h6>
              </div>
              <div class="d-flex">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
            <div class="d-flex justify-content-between mb-3">
              <h6 class="mb-0">Order ID</h6>
              <h6 class="mb-0">ASDW11268</h6>
            </div>
            <div class="d-flex justify-content-between mb-4">
              <div>
                <input type="text" class="form-control" id="last-name" placeholder="Coupon Code" />
              </div>
              <button type="submit" class="btn btn-primary">Apply</button>
            </div>
          </div>
          <div class="border-bottom mt-4">
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
          <div class="mt-4">
            <div class="d-flex justify-content-between mb-4">
              <h6 class="mb-0">Order Total</h6>
              <h6 class="mb-0 text-primary">$168.00</h6>
            </div>
            <div class="alert border-primary rounded border-1 mb-4">
              <div class="d-flex justify-content-between align-items-center">
                <h6 class="mb-0 text-primary">Total Savings on this order</h6>
                <h6 class="mb-0 text-primary">$38.00</h6>
              </div>
            </div>
            <div class="alert border-primary rounded border-1 mb-4">
              <div class="d-flex justify-content-between align-items-center">
                <h6 class="mb-0 text-primary">Expected date of delivery</h6>
                <h6 class="mb-0 text-primary">12 Feb 2020</h6>
              </div>
            </div>
            <div class="d-flex justify-content-between flex-wrap">
              <a id="backbutton" href="#checkout" class="btn btn-soft-primary d-block back justify-content-between" @click="changeTab(1)">Back</a>
              <a id="deliver-address" href="#payment" class="btn btn-primary d-block" @click="changeTab(3)">Place Order</a>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h4 class="mb-0">Delivery Method</h4>
        </div>
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <div class="form-check d-flex align-items-center gap-3">
              <input class="form-check-input" id="StandardD" type="radio" name="delivery001" />
              <label class="form-check-label d-flex flex-column" for="StandardD">
                <span class="h6">Standard Delivery</span>
                <span>2-3 days delivery</span>
              </label>
            </div>
            <h6 class="text-primary mb-0">FREE</h6>
          </div>
          <div class="d-flex justify-content-between align-items-center mt-4">
            <div class="form-check d-flex align-items-center gap-3">
              <input class="form-check-input" id="ExpressD" type="radio" name="delivery001" />
              <label class="form-check-label d-flex flex-column" for="ExpressD">
                <span class="h6">Express Delivery</span>
                <span>1 day fast delivery</span>
              </label>
            </div>
            <h6 class="text-primary mb-0">$10</h6>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h4 class="mb-0">Additional Services</h4>
        </div>
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <div class="form-check">
              <input class="form-check-input" id="productCare" type="checkbox" name="delivery002" />
              <label class="form-check-label" for="productCare">
                <span class="h6">Handle With Care</span>
                <span>Protection provided</span>
              </label>
            </div>
            <h6 class="text-primary mb-0">$12</h6>
          </div>
          <div class="d-flex justify-content-between align-items-center mt-3">
            <div class="form-check">
              <input class="form-check-input" id="productGift" type="checkbox" name="delivery002" />
              <label class="form-check-label" for="productGift">
                <span class="h6">Gift Wrap</span>
                <span>Gift wrap your product</span>
              </label>
            </div>
            <h6 class="text-primary mb-0">$15</h6>
          </div>
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
