<template>
  <div class="detail-box">
    <Icons/>
<!--    <div class="title">-->
<!--      <div class="text">商业合作</div>-->
<!--    </div>-->
<!--    <div class="content">-->
<!--      <div class="content-box">-->
<!--        <img src="./images/join.jpg" alt="">-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: 'join',
  data () {
    return {
      id: 1,
      content: {}
    }
  }
}
</script>

<style scoped lang="stylus">
  .detail-box{
    width 100%
    height 100%
    background url("./images/join.jpg")
    .title{
      position absolute
      width 913px
      background url("./images/join.png")
      background-size 100% 100%
      height 219px
      left 84px
      top 265px
      .text{
        width 913px
        height 183px
        line-height 183px
        float left
        font-size:122px;
        font-weight:bolder;
        color:rgba(86,28,140,1);
        text-shadow:9px 13px 0px rgba(0,87,161,1);
        -webkit-text-stroke:4px #fff;
        text-stroke:4px #fff;
      }
    }
    .content{
      text-align left
      font-size 32px
      width 847px
      height 1110px
      position absolute
      top 551px
      left 101px
      padding 20px 84px 0px 37px
      background url("./images/join_content.png")
      background-size 100% 100%
      line-height 42px
      .content-box{
        width 753px
        height 1050px
        overflow-y auto
      }
      .title-text {
        font-size 36px
        margin  10px 0
      }
      p{
        text-indent 2
      }
    }
  }
</style>
