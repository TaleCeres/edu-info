<template>
  <div class="lesson-content">
    <Icons/>
    <div class="top" >
      <div class="item btn-bg1" >宣传视频</div>
      <div class="content" >
        <video v-for="(item,index) in videos" controls="" :key="index" name="media" width="100%"><source :src='item' type="video/mp4"></video>
      </div>
    </div>
  </div>
</template>

<script>
import { getVideos } from '../../api/lesson'
export default {
  name: 'lessVideo',
  data () {
    return {
      videos: []
    }
  },
  created () {
    this.getVideos()
  },
  activated () {
    this.getVideos()
  },
  methods: {
    getVideos () {
      getVideos().then(res => {
        this.videos = res.data
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  .lesson-content{
    width 100%
    height 100%
    background #FFE674
    .item {
      margin-bottom 80px
      text-align center
      width 840px
      height 200px
      line-height 178px
      color #561C8C
      text-shadow:9px 13px 0px rgba(47,0,90,0.5);
      -webkit-text-stroke:3px #fff;
      text-stroke:3px #fff;
      &.btn-bg1 {
        background url("../lesson/images/item_1.png")
        background-size 100% 100%
      }
    }
    .top{
      font-size 95px
      position absolute
      top 280px
      z-index 2
      left 131px
      .content{
        width:811px;
        overflow-y auto
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
    }
    .bg_item{
      position absolute
      z-index 1
      width:1080px;
      background-size 100% 100%
    }
  }

</style>
