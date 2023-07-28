<template>
  <!-- Footer Section Start -->
  <footer :class="`footer ${footerStyle}`">
    <div class="footer-body">
      <ul class="left-panel list-inline mb-0 p-0">
        <!-- <li class="list-inline-item"><router-link :to="{ name: 'default.privacy-policy' }">Privacy Policy</router-link></li> -->
        <!-- <li class="list-inline-item"><router-link :to="{ name: 'default.terms-and-conditions' }">Terms of Use</router-link></li> -->
      </ul>
      <div class="right-panel">
        ©2023
        <span data-setting="app_name"><brand-name></brand-name></span>, Made by Ofek Development.
      </div>
    </div>
  </footer>
  <!-- Footer Section End -->
  <b-modal v-model="signInPopup" @hide="hideSignInModal" title="" hide-footer hide-header>
    <sign-in-form-component></sign-in-form-component>
  </b-modal>
  <b-modal v-model="signUpPopup" @hide="hideSignUpModal" title="" hide-footer hide-header>
    <sign-up-form-component></sign-up-form-component>
  </b-modal>
  <b-offcanvas v-model="shareOffcanvas" @hide="hideShareOffcanvas" placement="bottom" title="Share">
    <share-offcanvas></share-offcanvas>
  </b-offcanvas>
</template>

<script>
import { computed, watch, ref } from 'vue'
import { useStore } from 'vuex'
import SignInFormComponent from '@/components/auth/SignInForm.vue'
import SignUpFormComponent from '@/components/auth/SignUpForm.vue'
import ShareOffcanvas from '@/components/widgets/ShareOffcanvasNew.vue'
export default {
  components: { SignInFormComponent, SignUpFormComponent, ShareOffcanvas },
  setup() {
    const store = useStore()
    const footerStyle = computed(() => store.getters['setting/footer_style'])

    // Auth Popup
    const signInPopup = ref(false)
    const signUpPopup = ref(false)
    watch(
      () => store.getters.signInPopup,
      (newValue) => {
        signInPopup.value = newValue
      }
    )
    watch(
      () => store.getters.signUpPopup,
      (newValue) => {
        signUpPopup.value = newValue
      }
    )

    const hideSignInModal = () => {
      store.dispatch('openModalAction', { name: 'signInPopup', value: false })
    }
    const hideSignUpModal = () => {
      store.dispatch('openModalAction', { name: 'signUpPopup', value: false })
    }

    // Bottom Canvas
    const shareOffcanvas = ref(false)
    watch(
      () => store.getters.shareOffcanvas,
      (newValue) => {
        shareOffcanvas.value = newValue
      }
    )
    const hideShareOffcanvas = () => {
      store.dispatch('openBottomCanvasAction', { name: 'shareOffcanvas', value: false })
    }
    return {
      footerStyle,
      signInPopup,
      signUpPopup,
      hideSignInModal,
      hideSignUpModal,
      shareOffcanvas,
      hideShareOffcanvas
    }
  },
  data() {
    return {}
  }
}
</script>
