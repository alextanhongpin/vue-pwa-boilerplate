<template>
    <i class="material-icons">{{name}}</i>
</template>

<script>
export default {
  name: 'template',
  props: [ 'name' ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../styles/theme.scss';

</style>
