<template>
  <div class="article-box">
    <Icons/>
    <div class="top">
      <div class="article-title">育儿知识分享</div>
      <div class="list" >
        <div class="item" :key="i" v-for="i in list">
          <div class="icon"></div>
          <div class="content">
            <div class="title">标题。。。。。</div>
            <div class="intro">大师的那是就看到你金克拉撒旦</div>
          </div>
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
  name: 'article',
  data () {
    return {
      list: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    }
  }
}
</script>

<style scoped lang="stylus">
  .article-box{
    width 100%
    height 100%
    background #FFE674
    .top{
      position: absolute;
      z-index 2
      top 237px
      left 77px
      width 934px
      .article-title{
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
        background url("../images/item_4.png") 100% 100%
      }
      .list{
        margin-top 33px
        width 868px
        padding 48px 33px
        height:961px;
        box-shadow:9px 13px 16px 0px rgba(86,51,0,0.48);
        background #ffffff
        border-radius 40px
        overflow-y auto
        .item{
          height 300px
          margin-bottom 36px
          display flex
          .icon{
            width 300px
            height 300px
            background #FF5883
            border-radius 20px
          }
          .content{
            text-align left
            margin-left 30px
            .title{
              font-size:50px;
              font-weight:bold;
              color:rgba(0,0,0,1);
            }
            .intro{
              margin-top 16px
              font-size:36px;
              font-weight:bold;
              color:rgba(102,102,102,1);
            }
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
