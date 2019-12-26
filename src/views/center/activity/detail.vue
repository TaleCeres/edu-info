<template>
  <div class="activity-box">
    <Icons/>
    <div class="top">
      <div class="content">
        <div class="title">{{activity.name}}</div>
        <div class="text" v-html="activity.richText"></div>
      </div>
    </div>
    <div class="bg">
      <img src="../images/article_bg.png" alt="">
    </div>
  </div>
</template>

<script>
import { getActivity } from '@/api/activity'

export default {
  name: 'activityDetail',
  data () {
    return {
      activity: {}
    }
  },
  mounted () {
    let id = this.$route.query.id
    this.id = id
    this.getActivity()
  },
  activated () {
    let id = this.$route.query.id
    this.id = id
    this.getActivity()
  },
  methods: {
    getActivity () {
      getActivity(this.id).then(res => {
        this.activity = res.data
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  .activity-box {
    width 100%
    height 100%
    background #FFE674

    .top {
      position: absolute;
      z-index 2
      top 296px
      left 77px
      width 934px
      .content {
        width:834px;
        height:1280px;
        margin-top 33px
        padding 40px 50px
        box-shadow: 9px 13px 16px 0px rgba(86, 51, 0, 0.48);
        background #ffffff
        border-radius 40px
        overflow-y auto
        .title{
          font-size:70px;
          font-weight:bold;
          color:rgba(0,0,0,1);
        }
        .text{
          margin-top 60px
          text-align left
          font-size:36px;
          font-weight:bold;
          color:rgba(0,0,0,1);
          line-height 1.2
        }
      }
    }

    .bg {
      position absolute
      top 680px
      width 1080px
      height 855px

      img {
        width 100%
        height 100%
      }
    }
  }

</style>
