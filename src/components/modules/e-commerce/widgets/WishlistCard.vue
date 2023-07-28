<template>
  <b-card class="flex-row" no-body>
    <div class="card-header rounded-0 rounded-start bg-soft-secondary p-0">
      <img :src="image" class="img-fluid h-100 p-3" alt="wishlist-img" loading="lazy" />
    </div>
    <div class="card-body rounded-end">
      <div class="d-flex justify-content-between mb-2">
        <h5 class="mb-0">{{ name }}</h5>
        <div class="d-flex align-items-center gap-2">
          <icon-component type="solid" icon-name="star" :size="18" style="color: #ffd329"></icon-component>
          <span class="text-primary">{{ ratings }}</span>
        </div>
      </div>
      <div class="d-flex justify-content-between mb-4">
        <p class="mb-0">
          ${{ amount }}<small class="text-success"> {{ offer }} Off</small>
        </p>
        <p class="mb-0">({{ likes }})</p>
      </div>
      <div class="d-flex justify-content-between">
        <div class="d-flex gap-2">
          <button class="btn btn-primary btn-icon btn-sm rounded-pill" @click="addToCart" type="button">
            <span class="btn-inner">
              <icon-component type="dual-tone" icon-name="cart" :size="24"></icon-component>
            </span>
          </button>
          <button class="btn btn-primary btn-icon btn-sm rounded-pill delete-btn" @click="removeWishList" role="button">
            <span class="btn-inner">
              <icon-component type="dual-tone" icon-name="trash" :size="24"></icon-component>
            </span>
          </button>
        </div>
        <b-button variant="btn-soft-primary btn-icon" size="sm" pill @click="shareClick">
          <span class="btn btn-soft-primary btn-icon btn-sm rounded-pill">
            <svg class="icon-24" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" fill="none">
              <path d="M5.50052 15C6.37518 14.9974 7.21675 14.6653 7.85752 14.07L14.1175 17.647C13.9078 18.4666 14.0002 19.3343 14.378 20.0913C14.7557 20.8483 15.3935 21.4439 16.1745 21.7692C16.9555 22.0944 17.8275 22.1274 18.6309 21.8623C19.4343 21.5971 20.1153 21.0515 20.5493 20.3252C20.9832 19.599 21.1411 18.7408 20.994 17.9076C20.8469 17.0745 20.4047 16.3222 19.7483 15.7885C19.0918 15.2548 18.2652 14.9753 17.4195 15.0013C16.5739 15.0273 15.7659 15.357 15.1435 15.93L8.88352 12.353C8.94952 12.103 8.98552 11.844 8.99152 11.585L15.1415 8.06996C15.7337 8.60874 16.4932 8.92747 17.2925 8.97268C18.0918 9.01789 18.8823 8.78684 19.5315 8.31828C20.1806 7.84972 20.6489 7.17217 20.8577 6.39929C21.0666 5.6264 21.0032 4.80522 20.6784 4.0735C20.3535 3.34178 19.7869 2.74404 19.0735 2.38056C18.3602 2.01708 17.5436 1.90998 16.7607 2.07723C15.9777 2.24447 15.2761 2.67588 14.7736 3.29909C14.271 3.92229 13.9981 4.69937 14.0005 5.49996C14.0045 5.78796 14.0435 6.07496 14.1175 6.35296L8.43352 9.59997C8.1039 9.09003 7.64729 8.67461 7.10854 8.39454C6.5698 8.11446 5.96746 7.97937 5.3607 8.00251C4.75395 8.02566 4.16365 8.20627 3.64781 8.52658C3.13197 8.84689 2.70834 9.29589 2.41853 9.82946C2.12872 10.363 1.98271 10.9628 1.99484 11.5699C2.00697 12.177 2.17683 12.7704 2.48772 13.292C2.79861 13.8136 3.23984 14.2453 3.76807 14.5447C4.29629 14.8442 4.89333 15.0011 5.50052 15Z" fill="currentColor"></path>
            </svg>
          </span>
        </b-button>
      </div>
    </div>
  </b-card>
</template>
<script>
export default {
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    ratings: { type: [String, Number], required: true },
    amount: { type: [String, Number], required: true },
    offer: { type: [String, Number], required: true },
    likes: { type: [String, Number], required: true }
  },
  setup(props, { emit }) {
    const shareClick = (e) => {
      emit('openShare', e)
    }
    const addToCart = (e) => {
      emit('addToCart', { event: e, value: props.id })
    }

    const removeWishList = (e) => {
      emit('removeWishList', { event: e, value: props.id })
    }
    return { props, shareClick, addToCart, removeWishList }
  }
}
</script>
