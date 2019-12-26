<template>
  <div class="article-box">
    <Icons/>
    <div class="top">
      <div class="article-title">育儿知识分享</div>
      <div class="list" >
        <div class="item" :key="index" v-for="(item,index) in list" @click="goDetail(item._id)">
          <div class="icon"><img :src="item.icon"></div>
          <div class="content">
            <div class="title">{{item.title}}</div>
            <div class="intro">{{item.content.substring(1,50)+'...'}}</div>
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
import { getList } from '@/api/article'
export default {
  name: 'article',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      getList().then(res => {
        this.list = res.data
      })
    },
    goDetail (id) {
      this.$router.push({ path: '/center/article/detail', query: { id } })
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
        width 735px
        height 357px
        margin 0 auto
        font-size 95px
        color #ffffff
        -webkit-text-stroke:4px #000;
        line-height 320px
        text-stroke:4px #000;
        letter-spacing:12px
        font-weight bolder
        background url("../images/item_4.png")
      }
      .list{
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
          border-bottom 4px solid #eee
          padding-bottom 20px
          .icon{
            width 300px
            height 300px
            background #FF5883
            border-radius 20px
            overflow hidden
            img{
              width 100%
              height 100%
            }
          }
          .content{
            width 550px
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
