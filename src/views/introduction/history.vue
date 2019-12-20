<template>
  <div class="family-box">
    <Icons/>
    <div class="title-btn title">发 展 历 程</div>
    <div class="img"><img src="./images/history.png" alt=""></div>
  </div>
</template>

<script>
export default {
  name: 'history'
}
</script>

<style scoped lang="stylus">
  .family-box{
    width 100%
    height 100%
    background #FFF6B0
    .title{
      position absolute
      width 822px
      height 151px
      top 216px
      left 151px
      font-size:87px;
      font-weight:bolder;
      color:rgba(86,28,140,1);
      line-height 120px
      text-shadow:9px 13px 0px rgba(172,84,209,1);
      -webkit-text-stroke:3px #fff;
      text-stroke:3px #fff;
    }
    .img{
      width 915px
      height 1307px
      position absolute
      left 83px
      top 397px
    }
  }
</style>
