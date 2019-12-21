<template>
  <div class="business-box">
    <Icons/>
    <div class="title">
      <div class="text">商业合作</div>
    </div>
    <div class="content">
      <div class="content-box">
      </div>
    </div>
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
    .title{
      position absolute
      width 910px
      background url("./images/business_title.png")
      background-size 100% 100%
      height 273px
      line-height 210px
      left 170px
      top 230px
      .text{
        width 753px
        height 183px
        line-height 183px
        float left
        margin-top 68px
        font-size:122px;
        font-weight:bolder;
        color:rgba(86,28,140,1);
        text-shadow:9px 13px 0px rgba(0,87,161,1);
        -webkit-text-stroke:4px #fff;
        text-stroke:4px #fff;
      }
    }
    .content{
      text-align left
      font-size 32px
      width 753px
      height 1022px
      position absolute
      top 551px
      left 141px
      padding 59px 84px 59px 37px
      background url("./images/zp_bg.png")
      background-size 100% 100%
      line-height 42px
      .content-box{
        width 753px
        height 1022px
        overflow-y auto
      }
      .title-text {
        font-size 36px
        margin  10px 0
      }
      p{
        text-indent 2
      }
    }
  }
</style>
