<template>
  <b-row>
    <b-col lg="12">
      <b-card>
        <b-row>
          <b-col lg="12">
            <div class="d-flex justify-content-between mb-3">
              <h4 class="mb-0">Invoice #215462</h4>
              <span>Hope UI ltd.</span>
            </div>
            <h5 class="mb-4">Elon Musk</h5>
            <b-row>
              <b-col lg="4" md="6" sm="6" mt-3 mt-sm-0>
                <div>
                  <h6>Bill To:</h6>
                  <p>Elon Musk</p>
                  <p class="mb-0">4517 Washington Ave. Manchester, Kentucky 39495</p>
                </div>
              </b-col>
              <b-col lg="3" md="6" sm="6" mt-3 mt-sm-0>
                <div>
                  <h6>Bill From:</h6>
                  <p>Hope UI ltd.</p>
                  <p class="mb-0">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                </div>
              </b-col>
              <b-col lg="2" md="6" sm="6" mt-3 mt-lg-0 text-lg-end text-start>
                <div>
                  <p class="text-muted mb-0">Amount Due</p>
                  <h5 class="mb-0">$14,010.00</h5>
                </div>
              </b-col>
              <b-col lg="2" md="6" sm="6" mt-3 mt-lg-0 text-lg-end text-start>
                <div class="mb-3">
                  <h6 class="mb-0">Invoice Date</h6>
                  <p>27 May 2021</p>
                </div>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="12" mt-4>
            <div class="table-responsive-lg">
              <table class="table iq-billing-table">
                <thead>
                  <tr>
                    <th scope="col">Description</th>
                    <th class="text-center" scope="col">Price</th>
                    <th class="text-center" scope="col">Quantity</th>
                    <th scope="col">Sub-Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="w-50">
                      <h6 class="mb-0">Item 1</h6>
                      <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </td>
                    <td class="text-center">$2,100.00</td>
                    <td class="text-center">1</td>
                    <td>$2,100.00</td>
                  </tr>
                  <tr>
                    <td>
                      <h6 class="mb-0">Item 2</h6>
                      <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </td>
                    <td class="text-center">$4,205.00</td>
                    <td class="text-center">2</td>
                    <td>$8,410.00</td>
                  </tr>
                  <tr>
                    <td>
                      <h6 class="mb-0">Item 3</h6>
                      <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </td>
                    <td class="text-center">$1,500</td>
                    <td class="text-center">3</td>
                    <td>$4,500.00</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      <div class="text-center">
                        <h6>Total:</h6>
                        <h6>Tax:</h6>
                        <h6 class="mb-0">Discount:</h6>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex flex-column">
                        <h6>$15,010.00</h6>
                        <h6>$1,500</h6>
                        <h6 class="mb-0">$2,500</h6>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3">Net Amount</td>
                    <td>
                      <h6 class="mb-0">$14,010.00</h6>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-col>
          <b-col lg="12">
            <p class="ms-4">Please pay before the due date. Thank you for your business.</p>
            <div class="d-flex justify-content-center mt-4">
              <button type="button" class="btn btn-primary" onClick="window.print()">Print</button>
            </div>
          </b-col>
        </b-row>
      </b-card>
    </b-col>
  </b-row>
</template>
