<template>
  <!--Logo start-->
  <div class="logo-main">
    <div class="logo-normal">
      <img :src="logo" :class="`${color ? 'text-primary' : ''} icon-30`" />
    </div>
    <div class="logo-mini">
      <img :src="icon" :class="`${color ? 'text-primary' : ''} icon-30`" />
    </div>
  </div>
  <!--Logo End-->
</template>

<script>
import logo from '@/assets/images/centro/icon.png'
export default {
  props: {
    color: { type: Boolean, default: false }
  },
  data() {
    return {
      logo: logo
    }
  }
}
</script>
