<template>
<div class="lesson-content">
  <Icons/>
  <div class="top" :class="'color'+id">
    <div class="item" :class="'btn-bg'+id">课程体系和设置</div>
    <div class="content">
    </div>
  </div>
  <div class="bg1 bg_item" v-if="id=='1'"></div>
  <div class="bg2 bg_item" v-if="id=='2'"></div>
  <div class="bg3 bg_item" v-if="id=='3'"></div>
  <div class="bg4 bg_item" v-if="id=='4'"></div>
</div>
</template>

<script>
export default {
  name: 'lessContent',
  data () {
    return {
      id: 1
    }
  },
  created () {
    let { id } = this.$route.query
    this.id = id
  },
  activated () {
    let { id } = this.$route.query
    this.id = id
  },
  methods: {}
}
</script>

<style scoped lang="stylus">
  .lesson-content{
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
      .content{
        width:811px;
        height:1094px;
        background:rgba(255,243,211,1);
        border:6px solid rgba(90, 16, 148, 1);
        box-shadow:9px 13px 20px 4px rgba(100,66,0,0.46);
      }
    }
    .item{
      margin-bottom 80px
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
