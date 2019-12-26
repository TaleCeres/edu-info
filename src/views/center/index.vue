<template>
   <div class="center-box">
     <Icons/>
     <div class="nav-box">
       <div class="nav-item item1" @click="goTeacher">老师介绍</div>
       <div class="nav-item item2" @click="goActivity">活动掠影</div>
       <div class="nav-item item3" @click="goPhotos">会员照片墙</div>
       <div class="nav-item item4" @click="goArticle">育儿知识汇</div>
     </div>
     <div class="index-bg">
       <img src="./images/index_bg.png" alt="">
     </div>
   </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    goTeacher () {
      this.$router.push('/center/teacher')
    },
    goActivity () {
      this.$router.push('/center/activity')
    },
    goPhotos () {
      this.$router.push('/center/photos')
    },
    goArticle () {
      this.$router.push('/center/article')
    }
  }
}
</script>

<style scoped lang="stylus">
  .center-box{
    width 100%
    height 100%
    background #FFE674
    .nav-box{
      position absolute
      top 263px
      left 179px
      z-index 2
      .nav-item{
        width 735px
        height 357px
        font-size 95px
        color #ffffff
        -webkit-text-stroke:3px #000;
        line-height 320px
        text-stroke:3px #000;
        letter-spacing:12px
        &.item1{
          background url("./images/item_1.png") 100% 100%
        }
        &.item2{
          background url("./images/item_2.png") 100% 100%
        }
        &.item3{
          background url("./images/item_3.png") 100% 100%
        }
        &.item4{
          background url("./images/item_4.png") 100% 100%
        }
      }
    }
    .index-bg{
      position absolute
      z-index 1
      width 1080px
      height 756px
      top 563px
      img{
        width 100%
        height 100%
      }
    }
  }

</style>
