<template>
    <div class="lesson-show" >
      <Icons/>
      <div class="top" :class="'color'+index">
        <div class="age">{{age}}</div>
        <div class="item" :class="'btn-bg'+index" @click="goContent">课程体系和设置</div>
        <div class="item" :class="'btn-bg'+index" @click="goImage">课程展示</div>
        <div class="item" :class="'btn-bg'+index" @click="goVideo">宣传视频</div>
      </div>
      <div class="bg1 bg_item" v-if="index=='1'"></div>
      <div class="bg2 bg_item" v-if="index=='2'"></div>
      <div class="bg3 bg_item" v-if="index=='3'"></div>
      <div class="bg4 bg_item" v-if="index=='4'"></div>
    </div>
</template>

<script>
export default {
  name: 'show',
  data () {
    return {
      id: '1',
      index: '1',
      ageList: ['2-7周岁', '3-6周岁', '5-12周岁', '5-6周岁'],
      age: '2-7周岁'
    }
  },
  created () {
    let { id, index } = this.$route.query
    this.index = index
    this.id = id
    this.changeColor()
  },
  activated () {
    let { id, index } = this.$route.query
    this.index = index
    this.id = id
    this.changeColor()
  },
  methods: {
    changeColor () {
      this.age = this.ageList[this.index - 1]
    },
    goContent () {
      this.$router.push({ path: '/lesson/content', query: { id: this.id, index: this.index } })
    },
    goImage () {
      this.$router.push({ path: '/lesson/image', query: { id: this.id, index: this.index } })
    },
    goVideo () {
      this.$router.push({ path: '/lesson/video', query: { id: this.id, index: this.index } })
    }
  }
}
</script>

<style scoped lang="stylus">
  .lesson-show{
    width 100%
    height 100%

    background #FFE674
    .color1{
      color #561C8C
      text-shadow:9px 13px 0px rgba(47,0,90,0.5);
      -webkit-text-stroke:3px #fff;
      text-stroke:3px #fff;
    }
    .color2{
      color #FF5883
      text-shadow:9px 13px 0px rgba(47,0,90,0.5);
      -webkit-text-stroke:3px #fff;
      text-stroke:3px #fff;
    }
    .color3{
      color #561C8C
      text-shadow:9px 13px 0px rgba(47,0,90,0.5);
      -webkit-text-stroke:3px #fff;
      text-stroke:3px #fff;
    }
    .color4{
      color #561C8C
      text-shadow:9px 13px 0px rgba(47,0,90,0.5);
      -webkit-text-stroke:3px #fff;
      text-stroke:3px #fff;
    }
    .top{
      font-size 95px
      position absolute
      top 280px
      z-index 2
      left 131px
      .age{
        margin-bottom 96px
      }
    }
    .item{
      margin-bottom 166px
      text-align center
      width 840px
      height 200px
      line-height 178px
      &.btn-bg1{
        background url("./images/item_1.png")
        background-size 100% 100%
      }
      &.btn-bg2{
        background url("./images/item_2.png")
        background-size 100% 100%
      }
      &.btn-bg3{
        background url("./images/item_1.png")
        background-size 100% 100%
      }
      &.btn-bg4{
        background url("./images/item_1.png")
        background-size 100% 100%
      }
    }
    .bg_item{
      position absolute
      z-index 1
      width:1080px;
      background-size 100% 100%
    }
    .bg1{
      height:1249px;
      top 435px
      background url("./images/bg_1.png")
    }
    .bg2{
      height:1055px;
      top 647px
      background url("./images/bg_2.png")
    }
    .bg3{
      height:1339px;
      top 364px
      background url("./images/bg_3.png")
    }
    .bg4{
      height:1355px;
      top 364px
      background url("./images/bg_4.png")
    }
  }

</style>
