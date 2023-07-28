<template>
  <b-card>
    <nav class="tab-bottom-bordered">
      <div class="mb-0 nav nav-tabs" id="nav-tab1" role="tablist">
        <tab-button tag="button" class="nav-link" target="#description" id="description" :active="true">Description</tab-button>
        <tab-button tag="button" class="nav-link" target="#info" id="info">Info</tab-button>
        <tab-button tag="button" class="nav-link" target="#review" id="review">Reviews(2)</tab-button>
      </div>
    </nav>
    <div class="tab-content mt-4" id="nav-tabContent">
      <tab-pane id="description" tab-for="#description">
        <div class="d-flex flex-column">
          <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus eleifend ultrices vestibulum tempor augue bibendum dolor quam malesuad.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus eleifend ultrices vestibulum tempor augue bibendum dolor quam malesuad.</p>
          <div class="row row-cols-2 row-cols-lg-5 py-3">
            <div class="col">
              <img src="@/assets/modules/e-commerce/images/bag-product/10.png" alt="bag-products" class="img-fluid iq-product-img rounded-2 w-100" loading="lazy" />
            </div>
            <div class="col">
              <img src="@/assets/modules/e-commerce/images/bag-product/32.png" alt="bag-products" class="img-fluid iq-product-img rounded-2 w-100" loading="lazy" />
            </div>
            <div class="col">
              <img src="@/assets/modules/e-commerce/images/bag-product/52.png" alt="bag-products" class="img-fluid iq-product-img rounded-2 w-100" loading="lazy" />
            </div>
            <div class="col">
              <img src="@/assets/modules/e-commerce/images/bag-product/83.png" alt="bag-products" class="img-fluid iq-product-img rounded-2 w-100" loading="lazy" />
            </div>
            <div class="col">
              <img src="@/assets/modules/e-commerce/images/bag-product/103.png" alt="bag-products" class="img-fluid iq-product-img rounded-2 w-100" loading="lazy" />
            </div>
          </div>
          <p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus eleifend ultrices vestibulum tempor augue bibendum dolor quam malesuad.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus eleifend ultrices vestibulum tempor augue bibendum dolor quam malesuad.</p>
          <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus eleifend ultrices vestibulum tempor augue bibendum dolor quam malesuad. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus eleifend ultrices vestibulum tempor augue bibendum dolor quam malesuad.</p>
        </div>
      </tab-pane>
      <tab-pane id="info" tab-for="#info">
        <table class="table mb-0 table-bordered">
          <tbody>
            <tr>
              <th>Type</th>
              <td>Backpack</td>
            </tr>
            <tr>
              <th>Ideal For</th>
              <td>Men &amp; Women</td>
            </tr>
            <tr>
              <th>Trolley Support</th>
              <td>No</td>
            </tr>
            <tr>
              <th>Laptop Sleeve</th>
              <td>No</td>
            </tr>
            <tr>
              <th>With Rain Cover</th>
              <td>No</td>
            </tr>
            <tr>
              <th>Style Code</th>
              <td>Provogue_Day_002</td>
            </tr>
            <tr>
              <th>Color Code</th>
              <td>Grey, Black</td>
            </tr>
            <tr>
              <th>Material, Waterproof</th>
              <td>Material: Polyester, Waterproof: Yes</td>
            </tr>
            <tr>
              <th>Number of Compartments</th>
              <td>2</td>
            </tr>
            <tr>
              <th>Pattern</th>
              <td>Self Design</td>
            </tr>
          </tbody>
        </table>
      </tab-pane>
      <tab-pane id="review" tab-for="#review">
        <h4>Review</h4>
        <div>
          <div class="card shadow-none bg-transparent border">
            <div class="card-body">
              <div class="d-flex flex-sm-nowrap flex-wrap">
                <div>
                  <img class="img-fluid object-contain avatar-120 rounded" src="@/assets/modules/e-commerce/images/user/04.png" alt="01" loading="lazy" />
                </div>
                <div class="ms-0 ms-sm-3">
                  <div class="d-flex justify-content-between align-items-center my-2 my-lg-0">
                    <h6 class="mb-0">Emma Jones</h6>
                    <a class="text-dark" href="javascript:void(0)">Reply</a>
                  </div>
                  <small class="text-primary">March 01st 2021</small>
                  <p class="mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut eu morbi tincidunt erat egestas quisque ultrices ut. Vel elementum blandit et tellus sit tincidunt.</p>
                </div>
              </div>
            </div>
          </div>
          <b-card class="shadow-none bg-transparent border">
            <div class="d-flex flex-sm-nowrap flex-wrap">
              <div>
                <img class="img-fluid object-contain avatar-120 rounded" src="@/assets/modules/e-commerce/images/user/01.png" alt="01" loading="lazy" />
              </div>
              <div class="ms-0 ms-sm-3">
                <div class="d-flex justify-content-between align-items-center my-2 my-lg-0">
                  <h6 class="mb-0">Jackson Jones</h6>
                  <a class="text-dark" href="javascript:void(0)">Reply</a>
                </div>
                <small class="text-primary">March 20th 2021</small>
                <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut eu morbi tincidunt erat egestas quisque ultrices ut. Vel elementum blandit et tellus sit tincidunt.</p>
                <div class="d-flex mb-3">
                  <a class="" href="javascript:void(0)">Reply To Jackson Jones</a>
                  <a class="text-body ms-3" href="javascript:void(0)">Cancel Reply</a>
                </div>
                <b-col lg="12">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder=" Hi there, I love your blog " />
                  </div>
                </b-col>
                <div class="d-flex">
                  <button type="submit" class="btn btn-primary rounded">Get Started</button>
                </div>
              </div>
            </div>
          </b-card>
        </div>
        <p class="my-4">- There are no reviews yet</p>
        <h4 class="mb-3">Be the first to Review</h4>
        <form>
          <b-row>
            <b-col lg="6">
              <div class="form-group">
                <label for="full-name" class="form-label">First Name<span class="text-danger">*</span></label>
                <input type="text" class="form-control w-100" id="full-name" placeholder=" John" />
              </div>
            </b-col>
            <b-col lg="6">
              <div class="form-group">
                <label for="last-name" class="form-label">Email ID<span class="text-danger">*</span></label>
                <input type="text" class="form-control w-100" id="last-name" placeholder="XYZ@exampleemail.com " />
              </div>
            </b-col>
            <b-col lg="12">
              <div class="form-group">
                <label for="message" class="form-label">Enter your Review<span class="text-danger">*</span></label>
                <textarea class="form-control" rows="5" id="message" aria-label="With textarea" spellcheck="false" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit"></textarea>
              </div>
            </b-col>
            <b-col lg="12 d-flex justify-content-between">
              <div class="form-check mb-3">
                <input type="checkbox" class="form-check-input" id="customCheck1" />
                <label class="form-check-label" for="customCheck1">Save my name, email, and website in this browser for the next time I comment.<span class="text-danger">*</span></label>
              </div>
            </b-col>
            <div class="d-flex">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </b-row>
        </form>
      </tab-pane>
    </div>
  </b-card>
</template>
