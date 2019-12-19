<template>
  <div class="btn-back" @click="goHome">
    <div class="img"><img src="~@/assets/images/home.png" alt=""></div>
    <div class="text">主页</div>
  </div>
</template>

<script>
export default {
  name: 'btn-home',
  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="stylus">
  .btn-back{
    position: absolute;
    width 135px
    height 135px
    right 189px
    top 40px
    background:#0083BD;
    box-shadow:3px 5px 1px 2px rgba(90,44,0,0.59);
    border-radius:50%;
    .img{
      margin-top 20px
      text-align center
      img{
        display inline-block
        width 60px
        height 56px
      }
    }
    .text{
      margin-top 10px
      text-align center
      font-size:32px;
      font-weight:bold;
      color:rgba(255,255,255,1);
    }
  }

</style>
