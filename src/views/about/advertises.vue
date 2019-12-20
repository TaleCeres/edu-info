<template>
  <div class="advertises-box">
    <Icons/>
    <div class="content"><img src="./images/advertises_bg.png" alt=""></div>
    <div class="a-box">
      <div class="go1" @click="goDetail(1)"></div>
      <div class="go2" @click="goDetail(2)"></div>
      <div class="go3" @click="goDetail(3)"></div>
      <div class="go4" @click="goDetail(4)"></div>
      <div class="go5" @click="goDetail(5)"></div>
      <div class="go6" @click="goDetail(6)"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'advertises',
  methods: {
    goDetail (n) {
      this.$router.push({ path: '/about/detail', query: { id: n } })
    }
  }
}
</script>

<style scoped lang="stylus">
  .advertises-box{
    width 100%
    height 100%
    background #FFE674
    .content{
      position absolute
      top 257px
      left 50px
      width 998px
      height 1404px
      z-index 1
      img{
        width 100%
        height 100%
      }
    }
    .a-box{
      position absolute
      z-index 2
    }
    .go1{
      width 350px
      height 200px
      position absolute
      top 736px
      left 168px
    }
    .go2{
      width 380px
      height 200px
      position absolute
      top 713px
      left 626px
    }
    .go3{
      width 300px
      height 150px
      position absolute
      top 995px
      left 478px
    }
    .go4{
      width 380px
      height 180px
      position absolute
      top 1162px
      left 73px
    }
    .go5{
      width 320px
      height 180px
      position absolute
      top 1222px
      left 690px
    }
    .go6{
      width 400px
      height 200px
      position absolute
      top 1439px
      left 278px
    }
  }

</style>
