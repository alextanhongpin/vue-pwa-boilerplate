<template>
  <div class="app-header">
    <div class="app-header_icon-wrapper" v-if="isAuthorized">
      <i @click="toggle" class="material-icons app-header_icon">menu</i>
    </div>
    <div class="app-header_col-center">
      <span><router-link to="/" class="home-link">{{msg}}</router-link></span>
    </div>

    <div class="app-header_col-right" v-if="!isAuthorized">
      <router-link to="/login" class="header-link">Login</router-link>
      &nbsp;
      <router-link to="/register" class="header-link">Register</router-link>
    </div>
  </div>
</template>
 
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'app-header',
  data () {
    return {
      msg: 'Residenz'
    }
  },
  computed: {
    ...mapGetters(['isAuthorized'])
  },
  methods: {
    ...mapActions('sidebar', ['toggle'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../styles/theme.scss';


%app-header-layout {
  grid-row: 1;
  grid-column: 1 / 4;
  display: grid;
  grid-template-columns: 20px [app-menu] 40px 1fr 120px 20px;
  grid-template-rows: 40px;
}


.app-header {
  @extend %app-header-layout;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: $heliotrope;
  color: white;
  box-shadow: 0 5px 10px rgba(black, .2);
  font-weight: bold;
}

.app-header_icon-wrapper {
  grid-column: 2 / 3;
  display: grid;
  align-self: center;
  justify-self: center;
  cursor: pointer;
  opacity: .75;
}

.app-header_icon-wrapper:hover {
  opacity: 1;
}

.app-header_col-center {
  grid-column: 3 / 4;
}
.app-header_col-right {
  grid-column: 4 / 5;
}

.home-link {
  @extend %link;
  color: white;
  text-decoration: none;
}

.header-link {
  @extend %link;
  color: rgba(white, .8);
  text-decoration: none;
}
.header-link:hover {
  color: white;
}


</style>
