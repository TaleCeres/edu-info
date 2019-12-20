<template>
  <div class="appointment-box">
    <Icons/>
    <div class="form-box">
      <div class="title">预约体验课</div>
      <div class="input-item" style="margin-top: 160px" >
        <div class="label">宝宝姓名:</div>
        <input type="text" v-model="appointment.name" maxlength="5"/>
      </div>
      <div class="input-item">
        <div class="label" >年龄周岁:</div>
        <input type="text" v-model="appointment.age" maxlength="15"/>
      </div>
      <div class="input-item">
        <div class="label">联系方式:</div>
        <input type="text" v-model="appointment.phone" maxlength="11"/>
      </div>
      <div class="input-item">
        <div class="label">预约时间:</div>
        <input type="text" v-model="appointment.time" placeholder="（周六上午）"/>
      </div>
      <div class="btn" @click="submit"> 提交</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appointment',
  data () {
    return {
      appointment: {
        name: '',
        age: '',
        phone: '',
        time: ''
      }
    }
  },
  methods: {
    submit () {
      // 提交数据
      let { appointment } = this
      if (appointment.age === '' || appointment.age < 0 || appointment.age > 15) {
        alert('请输入合适的年龄')
        return
      }
      if (appointment.name === '') {
        alert('请输入名字')
      }
      if (appointment.phone === '' || appointment.phone.length < 11) {
        alert('请输入正确的手机号')
      }
      if (appointment.time === '') {
        alert('请输入时间')
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .appointment-box{
    width 100%
    height 100%
    background #FFE674
    .form-box{
      position absolute
      left 53px
      top 322px
      width 973px
      height 1357px
      background url("./images/appointment.png")
      background-size 100% 100%
      .title{
        text-align center
        line-height 180px
        height:180px;
        font-size:100px;
        font-weight:bolder;
        color:rgba(252,221,46,1);
        text-shadow:4px 6px 4px rgba(81,65,0,0.72);
        -webkit-text-stroke:3px black;
        text-stroke:3px black;
      }
      .input-item{
        margin 60px auto
        display flex
        width:800px;
        height:138px;
        line-height:138px;
        font-size:59px;
        color:rgba(255,255,255,1);
        background:linear-gradient(90deg,rgba(86,61,229,1) 0%,rgba(35,110,230,1) 100%);
        border-radius:40px;
        .label{
          font-weight:bold;
          width 300px
        }
        input{
          width 500px
          font-size:59px;
          color:rgba(255,255,255,1);
          background transparent
        }
      }
      .btn{
        margin 57px auto
        width:388px;
        height:144px;
        background:rgba(255,226,0,1);
        border:8px solid rgba(23,28,97,1);
        border-radius:30px;
        font-size:80px;
        font-weight:bold;
        color:rgba(23,28,97,1);
        line-height 144px
      }
    }
  }

</style>
