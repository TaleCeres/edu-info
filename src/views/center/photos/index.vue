<template>
  <div class="teacher-box">
    <Icons/>
    <div class="top">
      <div class="photo-title">会员照片墙</div>
      <div class="list" >
        <div class="item" :key="i" v-for="i in list">

        </div>
      </div>
    </div>
    <div class="bg">
      <img src="../images/detail_bg.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'teacher',
  data () {
    return {
      list: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
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
      top 237px
      left 63px
      width 962px
      .photo-title{
        width 707px
        height 329px
        margin 0 auto
        font-size 95px
        color #ffffff
        -webkit-text-stroke:4px #000;
        line-height 280px
        text-stroke:4px #000;
        letter-spacing:12px
        font-weight bolder
        background url("../images/item_3.png") 100% 100%
      }
      .list{
        margin-top 33px
        width 942px
        padding-left 20px
        padding-top 37px
        padding-bottom 37px
        height:951px;
        box-shadow:9px 13px 16px 0px rgba(86,51,0,0.48);
        background #ffffff
        border-radius 40px
        overflow-y auto
        .item{
          width 294px
          height 294px
          margin-right 20px
          border-radius 20px
          margin-bottom 29px
          float left
          background #0083BD
        }
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
