<template>
  <div class="lesson-box">
    <Icon/>
    <Back/>
    <Home/>
    <div class="box">
      <div class="art" @click="goDetail(1)"></div>
      <div class="math" @click="goDetail(2)"></div>
      <div class="science" @click="goDetail(3)"></div>
      <div class="robot" @click="goDetail(4)"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    goDetail (n) {
      alert(n)
    }
  }
}
</script>

<style scoped lang="stylus">
  .lesson-box{
    width 100%
    height: 100%
    background url("./images/lesson_bg.jpg")
    .box{
      width 800px
      top 288px
      position absolute
      div{
        width 800px
        height 290px
        margin-bottom 43px
      }
    }
  }

</style>
