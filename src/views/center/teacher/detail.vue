<template>
  <div class="teacher-box">
    <Icons/>
    <div class="top">
      <div class="teacher-title">老师介绍</div>
      <div class="face"></div>
      <div class="content"></div>
    </div>
    <div class="bg">
      <img src="../images/detail_bg.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'teacherDetail',
  data () {
    return {
      list: [1, 1, 1, 1, 1, 1, 1]
    }
  }
}
</script>

<style scoped lang="stylus">
  .teacher-box{
    width 100%
    height 100%
    background #FFE674
    .top{
      position: absolute;
      z-index 2
      top 337px
      left 125px
      width 710px
      height 1240px
      padding 60px 73px
      background rgb(255, 254, 212);
      border-radius 40px
      box-shadow:9px 13px 16px 0px rgba(86,51,0,0.48);
      .teacher-title{
        margin 0 auto
        font-size 80px
        color #ffffff
        -webkit-text-stroke:4px #000;
        text-stroke:4px #000;
        letter-spacing:12px
        line-height 1
        font-weight bolder
      }
      .face{
        width 304px
        height 304px
        margin 34px auto
        background #0083BD
        border-radius 50%
      }
      .content{
        width:649px;
        height:649px;
        padding 20px
        box-shadow:6px 9px 30px 2px rgba(86,51,0,0.54);
        background #ffffff
        border-radius 40px
        overflow-y auto
      }
    }

    .bg{
      position absolute
      top 680px
      width 1080px
      height 855px
      img{
        width 100%
        height 100%
      }
    }
  }

</style>
