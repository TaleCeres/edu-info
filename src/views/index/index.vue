<template>
  <div class="index-box">
    <Icon/>
    <div class="intro">
      <div class="text" @click="goIntroduction()">品牌介绍</div>
    </div>
    <div class="item-box">
      <div class="lesson item"><div class="item-text" @click="goLesson()">课程介绍</div> </div>
      <div class="center-info item "><div class="item-text" @click="goTeacher()">中心风采</div></div>
      <div class="about item"><div class="item-text" @click="goAbout()">联系我们</div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  created () {
    let org = this.$route.query.org
    this.$store.commit('SET_ORG', org)
  },
  methods: {
    goIntroduction () {
      this.$router.push('/introduction')
    },
    goLesson () {
      this.$router.push('/lesson')
    },
    goTeacher () {
      this.$router.push('/center')
    },
    goAbout () {
      this.$router.push('/about')
    }
  }
}
</script>

<style scoped lang="stylus">
  .index-box{
    width 100%
    height 100%
    background url("~@/assets/images/index_bg.png")
    .intro{
      position absolute
      width 600px
      height 500px
      top 200px
      left 245px
      background url('~@/assets/images/index_top.png')
      .text{
        margin-top 298px
        text-align center
        margin-left -20px
        height:73px;
        font-size:74px;
        font-weight:bold;
        color:rgba(255,57,40,1);
      }
    }
    .item-box{
      position absolute
      left 242px
      top 700px
      .item{
        width 610px
        height 278px
        margin-top 10px
        background url("~@/assets/images/index_item.png")
        .item-text{
          padding-top 70px
          text-align center
          margin-left -20px
          height:73px;
          font-size:74px;
          font-weight:bold;
          color:rgba(255,57,40,1);
        }
      }
    }
  }

</style>
