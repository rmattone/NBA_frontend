<template>
  <ul class="iq-nav-menu list-unstyled">
    <li :class="`nav-item ${mainMenu.active ? 'active' : ''}`" v-for="(mainMenu, mainKey) in menuOptions" :key="mainKey">
      <a class="nav-link menu-arrow justify-content-start" data-bs-toggle="collapse" :href="`#${mainMenu.name}`" role="button" aria-expanded="false" aria-controls="homeData">
        <icon-component type="dual-tone" :icon-name="mainMenu.icon" :size="20"></icon-component>
        <span class="nav-text ms-2">{{ mainMenu.name }}</span>
      </a>
      <ul class="iq-header-sub-menu list-unstyled collapse" :id="mainMenu.name">
        <li class="nav-item" v-for="(first, firstKey) in mainMenu.children" :key="firstKey">
          <template v-if="!checkArrLength(first.children)">
            <router-link class="nav-link" :to="first.route">{{ first.name }}</router-link>
          </template>
          <template v-else>
            <a class="nav-link menu-arrow" data-bs-toggle="collapse" :href="`#${first.name}`" role="button" aria-expanded="true" aria-controls="menuStyles">
              {{ first.name }}
              <i class="right-icon">
                <icon-component type="outlined" icon-name="chevron-right" :size="20"></icon-component>
              </i>
            </a>
            <ul aria-expanded="false" class="iq-header-sub-menu left list-unstyled collapse" :id="first.name">
              <li class="nav-item" v-for="(second, secondKey) in first.children" :key="secondKey">
                <template v-if="!checkArrLength(second.children)">
                  <router-link class="nav-link" :to="second.route">{{ second.name }}</router-link>
                </template>
                <template v-else>
                  <a class="nav-link menu-arrow" data-bs-toggle="collapse" :href="`#${second.name}`" role="button" aria-expanded="true" aria-controls="menuStyles">
                    {{ second.name }}
                    <i class="right-icon">
                      <icon-component type="outlined" icon-name="chevron-right" :size="20"></icon-component>
                    </i>
                  </a>
                  <ul aria-expanded="false" class="iq-header-sub-menu left list-unstyled collapse" :id="second.name">
                    <li class="nav-item" v-for="(three, threeKey) in second.children" :key="threeKey">
                      <template v-if="!checkArrLength(three.children)">
                        <template v-if="three.type && three.type == 'modal'">
                          <a class="nav-link" @click="showPopup(three.route)">{{ three.name }}</a>
                        </template>
                        <template v-else>
                          <router-link class="nav-link" :to="three.route">{{ three.name }}</router-link>
                        </template>
                      </template>
                    </li>
                  </ul>
                </template>
              </li>
            </ul>
          </template>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
import _ from 'lodash'
const menuOptions = ref([
  {
    active: true,
    name: 'Home',
    icon: 'home',
    children: [
      { name: 'Dashboard', route: { name: 'default.dashboard' } },
      // { name: 'Alternate Dashboard', route: { name: 'default.alternate-dashboard' } },
      {
        name: 'Menu Style',
        children: [
          // { name: 'Horizontal', route: { name: 'horizontal.dashboard' } },
          // { name: 'Dual Horizontal', route: { name: 'dual-horizontal.dashboard' } },
          // { name: 'Dual Compact', route: { name: 'dual-compact.dashboard' } },
          // { name: 'Boxed Horizontal', route: { name: 'boxed.dashboard' } },
          // { name: 'Boxed Fancy', route: { name: 'boxed-fancy.dashboard' } }
        ]
      }
      // { name: 'E-Commerce', route: { name: 'e-commerce.dashboard' } },
      // { name: 'Social App', route: { name: 'social-app.dashboard' } },
      // { name: 'Blog', route: { name: 'blog.dashboard' } },
      // { name: 'Appointment', route: { name: 'appointment.dashboard' } },
      // { name: 'File Manager', route: { name: 'file-manager.dashboard' } },
      // { name: 'Chat', route: { name: 'chat.chat-dashboard' } },
      // { name: 'Mail', route: { name: 'mail.mail-dashboard' } }
    ]
  },
  {
    name: 'Pages',
    icon: 'document',
    children: [
      {
        name: 'Spacial page',
        children: [
          // { name: 'Billing', route: { name: 'special-pages.billing' } },
          // { name: 'Calender', route: { name: 'special-pages.calender' } },
          // { name: 'Kanban', route: { name: 'special-pages.kanban' } },
          // { name: 'Pricing', route: { name: 'special-pages.pricing' } },
          // { name: 'Timeline', route: { name: 'special-pages.timeline' } }
        ]
      },
      {
        name: 'Auth Skins',
        children: [
          {
            name: 'Default',
            children: [
              // { name: 'Sign In', route: { name: 'auth.login' } },
              // { name: 'Sign Up', route: { name: 'auth.register' } },
              // { name: 'Email Varify', route: { name: 'auth.varify-email' } },
              // { name: 'Reset Password', route: { name: 'auth.reset-password' } },
              // { name: 'Lock Screen', route: { name: 'auth.lock-screen' } }
            ]
          },
          {
            name: 'Animated',
            children: [
              // { name: 'Sign In', route: { name: 'animated.auth.login' } },
              // { name: 'Sign Up', route: { name: 'animated.auth.register' } },
              // { name: 'Email Varify', route: { name: 'animated.auth.varify-email' } },
              // { name: 'Reset Password', route: { name: 'animated.auth.reset-password' } },
              // { name: 'Lock Screen', route: { name: 'animated.auth.lock-screen' } },
              // { name: 'Two Factor', route: { name: 'animated.auth.two-factor' } },
              // { name: 'Account Deactivate', route: { name: 'animated.auth.account-deactivated' } }
            ]
          },
          {
            name: 'Popup',
            children: [
              // { name: 'Sign In', type: 'modal', route: 'signIn' },
              // { name: 'Sign Up', type: 'modal', route: 'signUp' }
            ]
          },
          {
            name: 'Simple',
            children: [
              // { name: 'Sign In', route: { name: 'simple.auth.login' } },
              // { name: 'Sign Up', route: { name: 'simple.auth.register' } }
            ]
          }
        ]
      },
      {
        name: 'User',
        children: [
          // { name: 'User Profile', route: { name: 'user.user-profile' } },
          // { name: 'User Add', route: { name: 'user.user-add' } },
          // { name: 'User List', route: { name: 'user.user-list' } }
        ]
      },
      {
        name: 'Utilities',
        children: [
          // { name: '404', route: { name: 'errors.404' } },
          // { name: '500', route: { name: 'errors.500' } },
          // { name: 'Maintenance', route: { name: 'errors.maintenance' } }
        ]
      }
    ]
  },
  {
    name: 'Elements',
    icon: 'bookmark',
    children: [
      /* 
      { name: 'Componants', route: { name: 'design-system.main' } },
      { name: 'Ui Color', route: { name: 'default.ui-color' } },
      {
        name: 'Widgets',
        children: [
          { name: 'Widget Basic', route: { name: 'widget.widget-basic' } },
          { name: 'Widget Chart', route: { name: 'widget.widget-chart' } },
          { name: 'Widget Card', route: { name: 'widget.widget-card' } }
        ]
      },
      {
        name: 'Map',
        children: [
          { name: 'Google', route: { name: 'maps.map-google' } }
          // { name: 'Vector', route: { name: 'default.map-vector' } }
        ]
      },
      {
        name: 'Form',
        children: [
          { name: 'Element', route: { name: 'form.elements' } },
          { name: 'Wizard', route: { name: 'form.wizard' } },
          { name: 'Validation', route: { name: 'form.validation' } }
        ]
      },
      {
        name: 'Table',
        children: [
          { name: 'Bootstrap Table', route: { name: 'table.bootstrap-table' } },
          { name: 'Border Table', route: { name: 'table.border-table' } },
          { name: 'Fancy Table', route: { name: 'table.fancy-table' } },
          { name: 'Fixed Table', route: { name: 'table.fixed-table' } }
        ]
      },
      {
        name: 'Icons',
        children: [
          { name: 'Solid', route: { name: 'icons.solid' } },
          { name: 'Outlined', route: { name: 'icons.outlined' } },
          { name: 'Dual Tone', route: { name: 'icons.dual-tone' } }
        ]
      } */
    ]
  }
])
const checkArrLength = (arr) => {
  if (_.isArray(arr)) {
    return true
  }
  return false
}
</script>

<style lang="scss" scoped></style>
