<template>
  <div class="activity-box">
    <Icons/>
    <div class="top">
      <div class="activity-title">活动掠影</div>
      <div class="list" >
        <div class="item" :key="i" v-for="i in list">
          <div class="icon"></div>
          <div class="name">活动名称</div>
        </div>
      </div>
    </div>
    <div class="bg">
      <img src="../images/article_bg.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'activity',
  data () {
    return {
      list: [1, 1, 1, 1, 1, 1, 1]
    }
  }
}
</script>

<style scoped lang="stylus">
  .activity-box{
    width 100%
    height 100%
    background #FFE674
    .top{
      position: absolute;
      z-index 2
      top 237px
      left 130px
      width 828px
      .activity-title{
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
        background url("../images/item_2.png") 100% 100%
      }
      .list{
        margin-top 33px
        width 788px
        padding 60px 0 60px 40px
        background #ffffff
        height:977px;
        border-radius 40px
        box-shadow:9px 13px 16px 0px rgba(86,51,0,0.48);
        overflow-y auto
        .item{
          width 352px
          height 480px
          float left
          margin-right 40px
          .icon{
            margin 0 auto
            width 352px
            height 352px
            border-radius 20px
            background rgb(254, 226, 37)
          }
          .name{
            margin-top 25px
            text-align center
            font-size:50px;
            font-weight:bold;
            color:rgba(0,0,0,1);
          }
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
