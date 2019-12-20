<template>
<div class="introduction-box">
  <Icons/>
  <div class="nav-box">
    <div class="title-btn nav" @click="goHistory">发展历程</div>
    <div class="title-btn nav" @click="goFamily">大家庭</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    goHistory () {
      this.$router.push('/introduction/history')
    },
    goFamily () {
      this.$router.push('/introduction/family')
    }
  }
}
</script>

<style scoped lang="stylus">
  .introduction-box{
    background url("./images/introduciton_bg.png")
    height: 100%;
    .nav-box{
      position absolute
      top 230px
      left 112px
    }
    .nav{
      margin-top 200px
      width 856px
      height 206px
      line-height 164px
      font-size:122px;
      font-weight:bold;
      color:rgba(86,28,140,1);
      text-shadow:9px 13px 0px rgba(172,84,209,1);
      -webkit-text-stroke:4px #fff;
      text-stroke:4px #fff;
    }
  }

</style>
