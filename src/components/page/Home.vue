<template>
  <div class="page">
    <br>
    <h1>{{ title }}</h1>

    <div>Hello! This is a simple boilerplate for you to get started with vue.js development</div>

    <br>
    <br>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: 'Home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../styles/theme.scss';

.page {
  @extend %page;
  text-align: center;
  margin: $dim-200 auto;
}

</style>
