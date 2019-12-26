<template>
  <div class="about-box">
    <Icons/>
    <div class="item-box"><div class="about-item" @click="goAppointment">预约体验课</div>
      <div class="about-item change" @click="goBusiness">商业合作</div>
      <div class="about-item" @click="goAdvertises">招聘</div>
      <div class="about-item change" @click="goJoin">加盟</div></div>
    <div class="bl1 bl"><img src="./images/bl.png" alt=""></div>
    <div class="bl2 bl"><img src="./images/bl2.png"></div>
    <div class="bl3 bl"><img src="./images/bl.png" alt=""></div>
    <div class="bl4 bl"><img src="./images/bl2.png" alt=""></div>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    goAppointment () {
      this.$router.push('/about/appointment')
    },
    goBusiness () {
      this.$router.push('/about/business')
    },
    goJoin () {
      this.$router.push('/about/join')
    },
    goAdvertises () {
      this.$router.push('/about/advertises')
    }
  }
}
</script>

<style scoped lang="stylus">
 .about-box{
   background #FFE674
   width 100%
   height 100%
   .item-box{
     position absolute
     top 384px
     left 105px
   }
   .about-item{
     text-align center
     width:871px;
     height:243px;
     font-size:122px;
     font-weight:bolder;
     margin-bottom 87px
     line-height 190px
     color:#561C8C
     text-shadow:9px 13px 0px rgba(42,0,82,1);
     -webkit-text-stroke:3px #fff;
     text-stroke:3px #fff;
     background url("./images/about_item.png")
     background-size 100% 100%
     &.change{
       background url("./images/about_item1.png")
     }
   }
   .bl{
     width:264px;
     height:52px;
     img{
       width 100%
       height 100%
     }
     &.bl1{
       position absolute
       top 323px
       left 200px
     }
     &.bl2{
       position absolute
       top 646px
       left 612px
     }
     &.bl3{
       position absolute
       top 976px
       left 200px
     }
     &.bl4{
       position absolute
       top 1294px
       left 612px
     }
   }
 }

</style>
