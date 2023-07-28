<template>
  <b-row>
    <b-col lg="8">
      <b-card no-body>
        <div class="card-thumbnail">
          <span class="text-primary">02 Dec 2021</span>
          <h4 class="mt-2">The Experience: Travel Tales From India and Abroad.</h4>
          <div class="d-flex">
            <router-link :to="{ name: 'blog.detail' }" class="iq-blog-adventure fs-6">Travel</router-link><span class="mx-3"> | </span>
            <router-link :to="{ name: 'blog.detail' }" class="iq-blog-adventure text-primary fs-6">Jenny Wilson</router-link>
          </div>
          <img class="img-fluid rounded object-cover iq-blog-experience mt-3 mb-3 w-100" src="@/assets/modules/blog/images/blog-detail/01.png" alt="01" />
          <h5 class="mt-3 mb-0">Through the States</h5>
          <p class="mt-3">
            Lorem ipsum dolor sit amet,
            <span class="text-primary">consectetur</span> adipiscing elit. Neque at velit ultrices convallis. Purus sed adipiscing hendrerit risus id dapibus tristique consectetur. Enim non viverra massa sollicitudin arcu aliquam, sagittis aliquet diam.
          </p>
          <div class="bg-primary rounded my-4">
            <div class="p-4">
              <div class="d-flex justify-content-evenly align-items-center text-white">
                <svg class="iq-blog-special" width="50" viewBox="0 0 71 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.2" d="M19.508 33.7143C23.1374 33.7143 26.0107 34.8972 28.1278 37.2632C30.3962 39.4812 31.5304 42.4386 31.5304 46.1353C31.5304 50.1278 30.1693 53.307 27.4473 55.6729C24.8765 57.891 21.3227 59 16.7859 59C11.4931 59 7.3344 57.0038 4.3099 53.0113C1.43664 49.0188 0 43.3258 0 35.9323C0 29.2782 1.51225 23.1416 4.53674 17.5226C7.56124 11.7556 12.098 5.98872 18.147 0.221802C18.2982 0.0739339 18.525 0 18.8275 0C19.2812 0 19.6592 0.221802 19.9617 0.665405C20.2641 1.10902 20.2641 1.47869 19.9617 1.77443C12.5517 9.16791 8.84665 17.8922 8.84665 27.9474C8.84665 32.0877 9.60277 35.119 11.115 37.0414C12.476 34.8233 15.2737 33.7143 19.508 33.7143ZM58.9776 33.7143C62.607 33.7143 65.4803 34.8972 67.5975 37.2632C69.8658 39.4812 71 42.4386 71 46.1353C71 50.1278 69.639 53.307 66.9169 55.6729C64.3461 57.891 60.7923 59 56.2556 59C50.9627 59 46.804 57.0038 43.7796 53.0113C40.9063 49.0188 39.4696 43.3258 39.4696 35.9323C39.4696 29.2782 40.9819 23.1416 44.0064 17.5226C47.0309 11.7556 51.5676 5.98872 57.6166 0.221802C57.7678 0.0739339 57.9947 0 58.2971 0C58.7508 0 59.1289 0.221802 59.4313 0.665405C59.7338 1.10902 59.7338 1.47869 59.4313 1.77443C52.0213 9.16791 48.3163 17.8922 48.3163 27.9474C48.3163 32.0877 49.0724 35.119 50.5847 37.0414C51.9457 34.8233 54.7433 33.7143 58.9776 33.7143Z" fill="currentcolor" />
                </svg>
                <div>
                  <h4 class="text-white text-center mb-0">
                    <div>“Travel is the only thing you buy that</div>
                    <div>makes you richer.”</div>
                  </h4>
                  <h6 class="text-white text-center mt-3">- John Tom</h6>
                </div>
                <svg class="iq-blog-special" width="50" viewBox="0 0 77 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.2" d="M55.8434 27.4286C51.9073 27.4286 48.7913 26.1454 46.4952 23.5789C44.0351 21.1729 42.8051 17.9649 42.8051 13.9549C42.8051 9.62406 44.2811 6.17543 47.2332 3.60902C50.0213 1.203 53.8754 -5.60778e-06 58.7955 -6.03791e-06C64.5357 -6.53973e-06 69.0458 2.1654 72.3259 6.49622C75.442 10.8271 77 17.0025 77 25.0226C77 32.2406 75.36 38.8972 72.0799 44.9925C68.7998 51.2481 63.8797 57.5038 57.3195 63.7594C57.1555 63.9198 56.9095 64 56.5815 64C56.0895 64 55.6794 63.7594 55.3514 63.2782C55.0234 62.797 55.0234 62.396 55.3514 62.0752C63.3876 54.0551 67.4058 44.5915 67.4057 33.6842C67.4057 29.193 66.5857 25.9048 64.9457 23.8195C63.4696 26.2256 60.4356 27.4286 55.8434 27.4286ZM13.0383 27.4286C9.10224 27.4286 5.98615 26.1454 3.69009 23.5789C1.23003 21.1729 3.60488e-06 17.9649 3.25431e-06 13.9549C2.8757e-06 9.62406 1.47604 6.17543 4.42811 3.60902C7.21619 1.20301 11.0703 -1.86564e-06 15.9904 -2.29577e-06C21.7306 -2.79759e-06 26.2407 2.1654 29.5208 6.49623C32.6368 10.8271 34.1949 17.0025 34.1949 25.0226C34.1949 32.2406 32.5548 38.8972 29.2748 44.9925C25.9947 51.2481 21.0745 57.5038 14.5144 63.7594C14.3504 63.9198 14.1044 64 13.7764 64C13.2844 64 12.8743 63.7594 12.5463 63.2782C12.2183 62.797 12.2183 62.396 12.5463 62.0752C20.5825 54.0551 24.6006 44.5915 24.6006 33.6842C24.6006 29.193 23.7806 25.9048 22.1406 23.8195C20.6645 26.2256 17.6305 27.4286 13.0383 27.4286Z" fill="currentcolor" />
                </svg>
              </div>
            </div>
          </div>
          <h5 class="mt-4">To Travel Is To Live</h5>
          <p class="mt-3">
            Lorem ipsum dolor sit amet,
            <span class="text-primary">consectetur adipiscing elit.</span> Neque at velit ultrices convallis set. Purus sed adipiscing hendrerit risus id dapibus tristique consectetur enim non viverra.
          </p>
          <p class="mt-3 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque at velit ultrices convallis set. Purus sed adipiscing hendrerit risus id dapibus tristique consectetur enim non viverra.</p>
          <div class="d-flex justify-content-end">
            <div class="me-4 d-flex align-items-center">
              <a href="#">
                <icon-component type="solid" :size="24" icon-name="chat"></icon-component>
              </a>
              <span class="fs-6 ms-2">Comment</span>
            </div>
            <div class="d-flex align-items-center">
              <a href="#">
                <icon-component type="solid" :size="24" icon-name="heart"></icon-component>
              </a>
              <span class="fs-6 ms-2">Like</span>
            </div>
          </div>
        </div>
      </b-card>
      <b-card no-body>
        <b-card-header>
          <b-card-title>{{ $t('blog.sidebar.comment') }}</b-card-title>
        </b-card-header>
        <b-card-body>
          <b-card class="shadow-none bg-transparent border mb-3">
            <div class="d-flex flex-sm-nowrap flex-wrap justify-content-center">
              <div>
                <img class="img-fluid object-contain avatar-120 rounded-0" src="@/assets/modules/blog/images/blog-avatar/07.png" alt="01" />
              </div>
              <div class="ms-0 ms-sm-3">
                <div class="d-flex justify-content-between align-items-center my-2 my-lg-0">
                  <h6 class="mb-0">Jackson Jones</h6>
                  <a class="text-dark" href="javascript:void(0)">Reply</a>
                </div>
                <small class="text-primary">March 01st 2021</small>
                <p class="mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut eu morbi tincidunt erat egestas quisque ultrices ut. Vel elementum blandit et tellus sit tincidunt.</p>
              </div>
            </div>
          </b-card>
          <b-card class="shadow-none bg-transparent border ms-5">
            <div class="d-flex flex-sm-nowrap flex-wrap justify-content-center">
              <div>
                <img class="img-fluid object-contain avatar-120 rounded-0" src="@/assets/modules/blog/images/blog-avatar/08.png" alt="01" />
              </div>
              <div class="ms-0 ms-sm-3">
                <div class="d-flex justify-content-between align-items-center my-2 my-lg-0">
                  <h6 class="mb-0">Lara Williams</h6>
                  <a class="text-dark" href="javascript:void(0)">Reply</a>
                </div>
                <small class="text-primary">March 13th 2021</small>
                <p class="mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut eu morbi tincidunt erat egestas quisque ultrices ut. Vel elementum blandit et tellus sit tincidunt.</p>
              </div>
            </div>
          </b-card>
          <b-card class="shadow-none bg-transparent border mb-0">
            <div class="d-flex flex-sm-nowrap flex-wrap justify-content-center">
              <div>
                <img class="img-fluid object-contain avatar-120 rounded-0" src="@/assets/modules/blog/images/blog-avatar/07.png" alt="01" />
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
                  <b-form-group>
                    <b-form-input type="text" class="form-control" placeholder=" Hi there, I love your blog " />
                  </b-form-group>
                </b-col>
                <div class="d-flex">
                  <b-button variant="primary rounded">Get Started</b-button>
                </div>
              </div>
            </div>
          </b-card>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header>
          <b-card-title>{{ $t('blog.sidebar.post') }}</b-card-title>
        </b-card-header>
        <b-card-body>
          <b-form>
            <b-row>
              <b-col lg="6">
                <b-form-group label-for="full-name" class="form-label" label="First Name">
                  <b-form-input type="text" class="form-control w-100" id="full-name" placeholder=" John" />
                </b-form-group>
              </b-col>
              <b-col lg="6">
                <b-form-group label-for="last-name" class="form-label" label="Email ID">
                  <b-form-input type="text" class="form-control w-100" id="last-name" placeholder="XYZ@exampleemail.com " />
                </b-form-group>
              </b-col>
              <b-col lg="12">
                <b-form-group label-for="message" class="form-label" label="Enter your Comment">
                  <b-form-input type="text" id="message" rows="4" class="form-control w-100" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                </b-form-group>
              </b-col>
              <b-col lg="12" class="d-flex justify-content-between">
                <b-form-checkbox class="mb-3">Save my name and email in this browser for the next time I comment. </b-form-checkbox>
              </b-col>
              <div class="d-flex">
                <b-button type="submit" variant="primary">Submit</b-button>
              </div>
            </b-row>
          </b-form>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col lg="4">
      <b-card>
        <h4 class="mb-3">{{ $t('blog.sidebar.search') }}</h4>
        <b-nav>
          <div class="form-group input-group mb-0 search-input w-100">
            <b-form-input type="text" class="form-control" placeholder="Search..." />
            <span class="input-group-text">
              <icon-component type="outlined" :size="20" icon-name="search"></icon-component>
            </span>
          </div>
        </b-nav>
      </b-card>
      <b-card>
        <h4 class="mb-4">{{ $t('blog.sidebar.about-me') }}</h4>
        <div class="d-flex align-items-center">
          <img class="img-fluid rounded-circle avatar-130" src="@/assets/modules/blog/images/blog-avatar/01.png" alt="user-img" />
          <div class="ms-3">
            <h6 class="mb-3 text-primary">Loren Banks</h6>
            <p class="mt-3">Elit vitae neque velit mattis elementum egestas non, Sem eget.</p>
            <div class="d-flex gap-3">
              <a href="javascript:void(0)">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.9998 12C23.9998 5.37234 18.6273 0 12.0007 0C5.37201 0 0 5.37218 0 12C0 18.6268 5.37217 24 12.0007 24C18.6275 24 23.9998 18.6268 23.9998 12Z" fill="#3D83D9" />
                  <path d="M9.06396 9.07227H6.28613V17.011H9.06396V9.07227Z" fill="white" />
                  <path d="M7.67514 5.10254C6.80501 5.10254 6.12388 5.90215 6.32007 6.80286C6.43403 7.32607 6.86083 7.74668 7.38588 7.85212C8.28124 8.03193 9.06397 7.35414 9.06397 6.49153C9.06397 5.72568 8.44333 5.10254 7.67514 5.10254Z" fill="white" />
                  <path d="M18.1938 11.511C18.0069 10.0148 17.2585 9.07227 15.2358 9.07227C13.8002 9.07227 13.2293 9.29619 12.9001 9.92284V9.07227H10.6514V17.011H12.9656V12.8554C12.9656 11.818 13.1622 11.0344 14.4449 11.0344C15.7092 11.0344 15.8108 11.9988 15.8108 12.9228V17.0112H18.1939C18.1938 17.0112 18.2379 11.8608 18.1938 11.511Z" fill="white" />
                </svg>
              </a>
              <a href="javascript:void(0)">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.0002 11.9992C24.0002 5.37225 18.6279 0 12 0C5.37242 0 0 5.37225 0 11.9992C0 18.6262 5.37242 24 12 24C18.6281 24 24.0002 18.6262 24.0002 11.9992Z" fill="#395196" />
                  <path d="M13.0575 9.15703V8.02035C13.0575 7.46672 13.427 7.33737 13.6857 7.33737C13.9452 7.33737 15.2811 7.33737 15.2811 7.33737V4.90325L13.0846 4.89355C10.6466 4.89355 10.093 6.71004 10.093 7.87296V9.15703H8.68359V12.0004H10.1052C10.1052 15.2223 10.1052 19.1073 10.1052 19.1073H12.9477C12.9477 19.1073 12.9477 15.1827 12.9477 12.0004H15.0575L15.317 9.15703H13.0575V9.15703Z" fill="white" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </b-card>
      <b-card>
        <h4 class="mb-3">{{ $t('blog.sidebar.categories') }}</h4>
        <ul class="list-inline list-main d-flex flex-column gap-4 mb-0">
          <li class="">
            <div class="iq-blog-categories d-flex justify-content-between align-items-center">
              <h6 class="iq-categories-name mb-0">Beauty</h6>
              <p class="iq-categories-indicator line-around-2 mb-0">
                <span class="px-5"></span>
              </p>
              <span class="px-3 d-flex align-items-center">(8)</span>
            </div>
          </li>
          <li>
            <div class="iq-blog-categories d-flex justify-content-between align-items-center">
              <h6 class="iq-categories-name mb-0">SkinCare</h6>
              <p class="iq-categories-indicator line-around-2 mb-0">
                <span class="px-5"></span>
              </p>
              <span class="px-3 d-flex align-items-center">(2)</span>
            </div>
          </li>
          <li>
            <div class="iq-blog-categories d-flex justify-content-between align-items-center">
              <h6 class="iq-categories-name mb-0">HairCare</h6>
              <p class="iq-categories-indicator line-around-2 mb-0">
                <span class="px-5"></span>
              </p>
              <span class="px-3 d-flex align-items-center">(6)</span>
            </div>
          </li>
          <li>
            <div class="iq-blog-categories d-flex justify-content-between align-items-center">
              <h6 class="iq-categories-name mb-0">Makeup</h6>
              <p class="iq-categories-indicator line-around-2 mb-0">
                <span class="px-5"></span>
              </p>
              <span class="px-3 d-flex align-items-center">(6)</span>
            </div>
          </li>
          <li>
            <div class="iq-blog-categories d-flex justify-content-between align-items-center">
              <h6 class="iq-categories-name mb-0">Business</h6>
              <p class="iq-categories-indicator line-around-2 mb-0">
                <span class="px-5"></span>
              </p>
              <span class="px-3 d-flex align-items-center">(5)</span>
            </div>
          </li>
          <li>
            <div class="iq-blog-categories d-flex justify-content-between align-items-center">
              <h6 class="iq-categories-name mb-0">Salon</h6>
              <p class="iq-categories-indicator line-around-2 mb-0">
                <span class="px-5"></span>
              </p>
              <span class="px-3 d-flex align-items-center">(4)</span>
            </div>
          </li>
          <li>
            <div class="iq-blog-categories d-flex justify-content-between align-items-center">
              <h6 class="iq-categories-name mb-0">Toner</h6>
              <p class="iq-categories-indicator line-around-2 mb-0">
                <span class="px-5"></span>
              </p>
              <span class="px-3 d-flex align-items-center">(8)</span>
            </div>
          </li>
        </ul>
      </b-card>
      <b-card>
        <h4 class="mb-3">{{ $t('blog.sidebar.recent') }}</h4>
        <img class="img-fluid fit-img mb-4 object-cover iq-recent-post w-100" src="@/assets/modules/blog/images/blog-detail/05.png" alt="01" />
        <small class="text-primary">April 19th 2021</small>
        <router-link :to="{ name: 'blog.detail' }" class="iq-title">
          <h4 class="mt-2 mb-3">5 Beauty Essentials Everyone Should Have in Their Collection.</h4>
        </router-link>
        <div class="d-flex">
          <router-link :to="{ name: 'blog.dashboard' }" class="text-body">Travel</router-link><span class="ms-2 me-2"> | </span>
          <router-link :to="{ name: 'blog.dashboard' }" class="text-primary">Jenny Wilson</router-link>
        </div>
        <p class="pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut eu morbi tincidunt</p>
        <b-button variant="primary mt-2 rounded">Read More</b-button>
      </b-card>
      <b-card>
        <h4 class="mb-4">{{ $t('blog.sidebar.popular') }}</h4>
        <ul class="iq-col-masonry logik-blogtag list-unstyled gap-3">
          <li>
            <a href="javascript:void(0)" class="bg-soft-primary rounded-pill iq-custom-badge">
              <span>#Care</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" class="bg-soft-primary rounded-pill iq-custom-badge"> <span>#Beauty</span></a>
          </li>
          <li>
            <a href="javascript:void(0)" class="bg-soft-primary rounded-pill iq-custom-badge">
              <span>#HairCare</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" class="bg-soft-primary rounded-pill iq-custom-badge">
              <span>#SkinCare</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" class="bg-soft-primary rounded-pill iq-custom-badge">
              <span>#Serum</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" class="bg-soft-primary rounded-pill iq-custom-badge">
              <span>#Skin</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" class="bg-soft-primary rounded-pill iq-custom-badge">
              <span>#Hydrate</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" class="bg-soft-primary rounded-pill iq-custom-badge">
              <span>#Radiant</span>
            </a>
          </li>
        </ul>
      </b-card>
      <b-card>
        <h4 class="mb-4">{{ $t('blog.sidebar.follow') }}</h4>
        <div class="d-grid gap-3 grid-cols-2">
          <a href="javascript:void(0)" class="d-flex align-items-center gap-1">
            <icon-component type="solid" :size="10" icon-name="circle"></icon-component>
            <span class="text-body">Facebook</span>
          </a>
          <a href="javascript:void(0)" class="d-flex align-items-center gap-1">
            <icon-component type="solid" :size="10" icon-name="circle"></icon-component>
            <span class="text-body">Instagram</span>
          </a>
          <a href="javascript:void(0)" class="d-flex align-items-center gap-1">
            <icon-component type="solid" :size="10" icon-name="circle"></icon-component>
            <span class="text-body">Twitter</span>
          </a>
          <a href="javascript:void(0)" class="d-flex align-items-center gap-1">
            <icon-component type="solid" :size="10" icon-name="circle"></icon-component>
            <span class="text-body">Youtube</span>
          </a>
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
export default {
  name: 'BlogDetail'
}
</script>
