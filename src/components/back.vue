<template>
    <div class="btn-back" @click="goBack">
      <div class="img"><img src="~@/assets/images/back.png" alt=""></div>
      <div class="text">返回</div>
    </div>
</template>

<script>
export default {
  name: 'btn-back',
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="stylus">
  .btn-back{
    position: absolute;
    width 135px
    height 135px
    right 35px
    top 40px
    background:rgba(85,111,181,1);
    box-shadow:3px 5px 1px 2px rgba(90,44,0,0.59);
    border-radius:50%;
    .img{
      margin-top 20px
      text-align center
      img{
        display inline-block
        width 80px
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
