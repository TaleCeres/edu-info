<template>
<div class="teacher-box">
  <Icons/>
  <div class="top">
    <div class="teacher-title">老师介绍</div>
    <div class="list" >
      <div class="item" :key="index" v-for="(item,index) in list" @click="goDetail(item._id)">
        <div class="face"><img :src="item.icon"></div>
        <div class="name">{{item.name}}</div>
      </div>
    </div>
  </div>
  <div class="bg">
    <img src="../images/detail_bg.png" alt="">
  </div>
</div>
</template>

<script>
import { getList } from '@/api/teacher'
export default {
  name: 'teacher',
  data () {
    return {
      list: [1, 1, 1, 1, 1, 1, 1]
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
      this.$router.push({ path: '/center/teacher/detail', query: { id } })
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
      left 130px
      width 828px
      .teacher-title{
        text-align center
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
        background url("../images/item_1.png")
      }
      .list{
        width 788px
        padding 20px
        background #ffffff
        height:1057px;
        border-radius 40px
        box-shadow:9px 13px 16px 0px rgba(86,51,0,0.48);
        overflow-y auto
        .item{
          width 380px
          height 400px
          float left
          .face{
            margin 0 auto
            width 264px
            height 264px
            border-radius 50%
            img{
              width 100%
              height 100%
              border-radius 50%
            }
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
