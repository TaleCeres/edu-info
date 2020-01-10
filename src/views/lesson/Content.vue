<template>
<div class="lesson-content">
  <Icons/>
  <div class="top">
    <img v-if="lesson.lessonSet"   :src="lesson.lessonSet[imgIndex]" alt="">
    <div class="prev btn" @click="prevPage"><img src="./images/prev.png" alt="" ></div>
    <div class="next btn" @click="nextPage"><img src="./images/next.png" alt=""></div>
  </div>
  <div class="bg1 bg_item" v-if="index=='1'"></div>
  <div class="bg2 bg_item" v-if="index=='2'"></div>
  <div class="bg3 bg_item" v-if="index=='3'"></div>
  <div class="bg4 bg_item" v-if="index=='4'"></div>
</div>
</template>

<script>
import { getLesson } from '../../api/lesson'
export default {
  name: 'lessContent',
  data () {
    return {
      id: 1,
      index: 1,
      imgIndex: 0,
      lesson: {}
    }
  },
  created () {
    let { id, index } = this.$route.query
    this.index = index
    this.id = id
    this.getLesson()
  },
  activated () {
    let { id, index } = this.$route.query
    this.index = index
    this.id = id
    this.getLesson()
  },
  methods: {
    getLesson () {
      getLesson(this.id).then(res => {
        this.lesson = res.data
      })
    },
    prevPage () {
      if ((this.imgIndex - 1) < 0) {
        this.$toast('已经到底了')
        return false
      } else {
        this.imgIndex = this.imgIndex - 1
      }
    },
    nextPage () {
      if ((this.imgIndex + 1) >= this.lesson.lessonSet.length) {
        this.$toast('已经到底了')
        return false
      } else {
        this.imgIndex = this.imgIndex + 1
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .lesson-content{
    width 100%
    height 100%
    background #FFE674
    .top{
      z-index 2
      width 100%;
      height 100%
      top 0
      .btn{
        position absolute
        top 250px
        z-index 10
      }
      .prev{
        left 800px
      }
      .next{
        left 900px
      }
    }
    .bg1{
      position absolute
      height:1249px;
      top 435px
      background url("./images/bg_1.png")
    }
    .bg2{
      position absolute
      height:1055px;
      top 647px
      background url("./images/bg_2.png")
    }
    .bg3{
      position absolute
      height:1339px;
      top 364px
      background url("./images/bg_3.png")
    }
    .bg4{
      position absolute
      height:1355px;
      top 364px
      background url("./images/bg_4.png")
    }
  }

</style>
