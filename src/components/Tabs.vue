<template>
    <div class="tabs-box">
      <div class="tab-item intro"  @click="goIntroduction">品牌介绍</div>
      <div class="tab-item lesson"  @click="goLesson">课程介绍</div>
      <div class="tab-item center"  @click="goTeacher">中心风采</div>
      <div class="tab-item about"  @click="goAbout">联系我们</div>
    </div>
</template>

<script>
export default {
  name: 'Tabs',
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
  .tabs-box{
    width 1056px
    position absolute
    bottom 56px
    left 12px
    display flex
    font-size:50px;
    font-weight:bold;
    color:rgba(0,0,0,1);
    .tab-item{
      flex 1
      text-align center
      height 140px
      border 1px solid #000
      border-radius 30px
      line-height 142px
      &.intro{
        background #EB2C77
      }
      &.lesson{
        background #82CFDE
      }
      &.center{
        background #FCDD2E
      }
      &.about{
        background #6C6AD8
      }
    }
  }

</style>
