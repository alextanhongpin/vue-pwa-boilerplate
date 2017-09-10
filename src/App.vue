<template>

  <div id="wrapper">
    <app-sidebar/>
    <div id="app" :class='{"is-active": isOpen}'>
      <app-header/>
      <app-shimmer/>
      <main>
        <router-view></router-view>
      </main>
      <app-footer/>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/atom/AppHeader'
import AppFooter from '@/components/atom/AppFooter'
import AppSidebar from '@/components/atom/AppSidebar'
import AppShimmer from '@/components/atom/AppShimmer'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter,
    AppSidebar,
    AppShimmer
  },
  computed: {
    ...mapGetters('sidebar', ['isOpen'])
  }
}
</script>

<style lang="scss">

@import './styles/theme.scss';
@import './styles/main.scss';

</style>
