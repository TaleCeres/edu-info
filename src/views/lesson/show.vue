<template>
    <div class="lesson-show " :class="'color'+id">
      <div class="top">
        <div class="age">{{age}}</div>
        <div class="item" :class="'btn-bg'+id">课程体系和设置</div>
        <div class="item" :class="'btn-bg'+id">课 程 展 示</div>
        <div class="item" :class="'btn-bg'+id">宣 传 视 频</div>
      </div>
      <div class="bg1 bg_item" v-if="id===1"></div>
      <div class="bg2 bg_item" v-if="id===2"></div>
      <div class="bg3 bg_item" v-if="id===3"></div>
      <div class="bg4 bg_item" v-if="id===4"></div>
    </div>
</template>

<script>
export default {
  name: 'show',
  data () {
    return {
      id: 1,
      ageList: ['2-7周岁', '3-6周岁', '5-12周岁', '5-6周岁'],
      age: '2-7周岁'
    }
  },
  activated () {
    let { id } = this.$router.query
    this.id = id
    this.changeColor()
  },
  methods: {
    changeColor () {
      this.age = this.ageList[this.id - 1]
    }
  }
}
</script>

<style scoped lang="stylus">
  .lesson-show{
    font-size 95px
    background #FFE674
    .color1{
      color #561C8C
      text-shadow:9px 13px 0px rgba(47,0,90,1);
      -webkit-text-stroke:3px #fff;
      text-stroke:3px #fff;
    }
    .color2{
      color #561C8C
      text-shadow:9px 13px 0px rgba(47,0,90,1);
      -webkit-text-stroke:3px #fff;
      text-stroke:3px #fff;
    }
    .color3{
      color #561C8C
      text-shadow:9px 13px 0px rgba(47,0,90,1);
      -webkit-text-stroke:3px #fff;
      text-stroke:3px #fff;
    }
    .color4{
      color #561C8C
      text-shadow:9px 13px 0px rgba(47,0,90,1);
      -webkit-text-stroke:3px #fff;
      text-stroke:3px #fff;
    }
    .top{
      position absolute
      z-index 2
    }
    .item{
      margin-bottom 166px
      text-align center
      width 840px
      height 200px
      background-size 100% 100%
      line-height 178px
      &.btn-bg1{
        background url("./images/item_1.png")
      }
      &.btn-bg2{
        background url("./images/item_2.png")
      }
      &.btn-bg3{
        background url("./images/item_3.png")
      }
      &.btn-bg4{
        background url("./images/item_4.png")
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
      background url("bg_1.png")
    }
    .bg2{
      height:1055px;
      top 647px
      background url("bg_2.png")
    }
    .bg3{
      height:1339px;
      top 364px
      background url("bg_3.png")
    }
    .bg4{
      height:1355px;
      top 364px
      background url("bg_4.png")
    }
  }

</style>
