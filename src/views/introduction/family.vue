<template>
    <div class="family-box">
      <Icons/>
      <div class="title-btn title">美 数 乐 大 家 庭</div>
      <div class="img"><img src="./images/family.png" alt=""></div>
    </div>
</template>

<script>
export default {
  name: 'family'
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
    top 309px
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
    width 975px
    height 1060px
    position absolute
    left 44px
    top 551px
  }
}
</style>
