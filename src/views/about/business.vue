<template>
  <div class="business-box">
    <Icons/>
  </div>
</template>

<script>
export default {
  name: 'business',
  data () {
    return {
      id: 1,
      content: {}
    }
  }
}
</script>

<style scoped lang="stylus">
  .business-box{
    width 100%
    height 100%
    background #FFE674
    background url("./images/business.jpg") 100% 100%
  }
</style>
