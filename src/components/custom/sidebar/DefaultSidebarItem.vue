<template>
  <!-- <div v-if="!item.hidden"> -->
  <side-menu title="item.name" :static-item="true"></side-menu>
  <!-- <div v-if="item.children.length == 1">
            <side-menu isTag="router-link" :title="item.children[0].meta.title" :icon="item.children[0].icon"
                :route="{ to: item.children[0].name }"></side-menu>
        </div> -->
  <!-- </div> -->
  <!-- 
    <side-menu isTag="router-link" title="Alternate Dashboard" icon="dashboard"
        :route="{ to: 'default.alternate-dashboard' }"></side-menu>
    <side-menu title="Menu Style" icon="adjustment" toggle-id="menu-style" :caret-icon="true"
        :route="{ popup: 'false', to: 'menu-style' }" @onClick="toggle" >
        <b-collapse tag="ul" class="sub-nav" id="menu-style" accordion="sidebar-menu"
           >
            <side-menu title="Horizontal" icon="circle" :icon-size="10" icon-type="solid" miniTitle="H"
                :route="{ to: 'horizontal.dashboard' }"></side-menu>
            <side-menu title="Dual Horizontal" icon="circle" :icon-size="10" icon-type="solid" miniTitle="D"
                :route="{ to: 'dual-horizontal.dashboard' }"></side-menu>
            <side-menu title="Dual Compact" icon="circle" :icon-size="10" icon-type="solid" miniTitle="D"
                :route="{ to: 'dual-compact' }"></side-menu>
            <side-menu title="Boxed Horizontal" icon="circle" :icon-size="10" icon-type="solid" miniTitle="B"
                :route="{ to: 'boxed.dashboard' }"></side-menu>
            <side-menu title="Boxed Fancy" icon="circle" :icon-size="10" icon-type="solid" miniTitle="B"
                :route="{ to: 'boxed-fancy.dashboard' }"></side-menu>
        </b-collapse>
    </side-menu> -->
</template>

<script>
import SideMenu from '@/components/custom/nav/SideMenu.vue'

export default {
  name: 'SidebarItem',
  components: { SideMenu },
  props: {
    item: {
      type: Object,
      required: false
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    this.onlyOneChild = null
    return {}
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false
        } else {
          this.onlyOneChild = item
          return true
        }
      })

      if (showingChildren.length === 1) {
        return true
      }

      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    resolvePath(routePath) {
      return routePath
    }
  },
  mounted() {
    // console.log(this.item)
  }
}
</script>
