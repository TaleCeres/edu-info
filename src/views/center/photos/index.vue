<template>
  <div class="teacher-box">
    <Icons/>
    <div class="top">
      <div class="photo-title">会员照片墙</div>
      <div class="list" >
        <div class="item" :key="index" v-for="(item,index) in list">
          <img :src="item.image" alt="">
        </div>
      </div>
    </div>
    <div class="bg">
      <img src="../images/detail_bg.png" alt="">
    </div>
  </div>
</template>

<script>
import { getList } from '@/api/vip'

export default {
  name: 'teacher',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.getList()
  },
  activated () {
    this.getList()
  },
  methods: {
    getList () {
      getList().then(res => {
        this.list = res.data
      })
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
        background url("../images/item_3.png")
      }
      .list{
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
          min-height 294px
          margin-right 20px
          border-radius 20px
          margin-bottom 29px
          float left
          background #0083BD
          img{
            width 100%
            height 100%
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
