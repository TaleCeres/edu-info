<template>
  <div class="detail-box">
    <Icons/>
    <div class="title">
      <div class="text">{{content.title}}</div>
    </div>
    <div class="content">
      <div class="content-box">
        <div class="title-text">职位负责</div>
        <div class="content-text" v-html="content.obligation">{{content.obligation}}</div>
        <div class="title-text">任职要求</div>
        <div class="content-text" v-html="content.requireText">{{content.requireText}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'advertisesDetail',
  data () {
    return {
      id: 1,
      list: [
        { title: '中心校长',
          obligation: '<p>1、负责品牌建立，媒体公关的维护，建立资源取得的多方面渠道；</p>' +
            '<p>2、负责中心人力资源的有效利用，团队日常管理及建设;</p>' +
            '<p>3、中心人员的管理与培养，根据用人情况进行员工激励或部门协调；</p>' +
            '<p>4、所在中心的业务工作开展，按上级要求完成课程销售业绩；</p>' +
            '<p>5、培训管理员工有特色的服务方式，能够微笑服务不同客户群体；</p>' +
            '<p>6、对所在中心的教学品质、教务要素上严加控管；</p>',
          requireText: '<p>1、热爱教育事业，工作积极主动、责任心强；</p>' +
            '<p>2、有丰富的早教项目运营经验，能独立进行品牌推广及招生，具有较强的综合管理能力和工作协调能力；</p>' +
            '<p>3、能够在压力下胜任多项任务，能带领团队完成销售任务；</p>'
        },
        { title: '指导师',
          obligation: '<p>1、完成课程的教学工作，教室环境的布置及维护；</p>' +
            '<p>2、与孩子互动，启发孩子的思维，制定学员个性化成长方案；</p>' +
            '<p>3、课后一对一点评及鼓励，与家长保持沟通；</p>' +
            '<p>4、认真参加公司组织的教研活动、各类培训，不断提升专业水平和授课技巧。</p>',
          requireText: '<p>1、本科及以上学历，汉语言文学专业，师范类学校，优秀应届毕业生亦可考虑；</p>' +
            '<p>2、逻辑、表达能力强，思路清晰，具备教师资格证者优先优先；</p>' +
            '<p>3、相貌端庄，举止大方得体，普通话标准；</p>' +
            '<p>4、对教育和孩子充满热情，主动、积极的学习态度。</p>'
        },
        { title: '销售主管',
          obligation: '<p>1、确保团队完成校区的招生任务，做好销售团队的管理，对顾问进行定期的工作指导和培训，保证团队成员快速成长，创造良好的工作氛围；</p>' +
            '<p>2、带领顾问团队与家长建立良好的互动关系，积极开展课程推荐、体验课程预约和报名签约，妥善处理前端招生时期家长的各种应急问题；</p>' +
            '<p>3、主动开发、维护渠道及客户资源，协助团队开发、开展各项活动，收集数据，实现销售的可持续发展；</p>' +
            '<p>4、与学员建立良好关系，维护学校形象，推动公司业务管理的规范化、专业化；</p>' +
            '<p>5、合理分配团队资源，定期分析数据，提出改善意见；</p>' +
            '<p>6、 协助市场部和教学部做好市场宣传和推广工作。</p>',
          requireText: '<p>1、学历背景：大专及以上学历,有教育咨询行业和销售经验者优先；</p>' +
            '<p>2、培训经历： 市场、销售、营销、会销等培训，沟通训练等方面培训</p>' +
            '<p>3、经验：有教育咨询行业和销售、服务经验，有心理学教育从业背景者优先</p>' +
            '<p>4、技能技巧：自我管理能力、高执行力、行动力、良好的学习能力、良好的沟通技巧,表达能力强,有感染力，良好的团队协作精神；</p>' +
            '<p>5、可以接受弹性工作时间，包括晚上和周末。</p>'
        },
        { title: '市场专员',
          obligation: '<p>1、负责区域招生宣传工作，推广雇主品牌知名度；</p>' +
            '<p>2、负责招生渠道的挖掘和谈判，渠道咨询量的创造；</p>' +
            '<p>3、负责区域地推活动，搜集有效信息，提高招生处信息量及约访率；</p>' +
            '<p>4、负责兼职人员的招聘与管理；</p>' +
            '<p>5、负责区域大型市场活动的执行。</p>',
          requireText: '<p>1、有教育行业市场工作经验优先考虑；</p>' +
            '<p>2、具备良好的交际能力、组织协调能力、谈判技巧和执行能力;</p>' +
            '<p>3、拥有积极、乐观、热情的心态；</p>' +
            '<p>4、有较强的抗压能力、责任心和团队合作精神；</p>' +
            '<p>5、具备良好职业素质，用诚心、爱心、耐心对待每一位家长和孩子。</p>'
        },
        { title: '行政前台',
          obligation: '<p>1、对来访客人做好接待、登记、引导工作，及时通知被访人员</p>' +
            '<p>2、负责办公用品的盘点工作，不定时检查用品库存</p>' +
            '<p>3、负责会员上课的签到工作及课时的记录</p>' +
            '<p>4、负责每月统计公司员工的考勤情况，考勤资料存档</p>' +
            '<p>5、负责整理、分类、保管公司常用表格并依据实际使用情况进行增补</p>',
          requireText: '<p>1、喜欢孩子并有爱心、耐心，具有亲和力；</p>' +
            '<p>2、形象气质佳、性格开朗活泼，普通话标准；</p>' +
            '<p>3、善于沟通和交往，具备团队合作精神；</p>' +
            '<p>4、办公软件操作熟。   </p>'
        },
        { title: '课程顾问',
          obligation: '<p>1、通过各渠道邀约学员到公司参加试听课程，通过面谈的方式完成课程销售；</p>' +
            '<p>2、分析及了解客户需求，提供专业的课程学习方案；</p>' +
            '<p>3、达成个人既定销售指标，完成月度销售任务，</p>' +
            '<p>4、定期回访未报名客户，长期跟进，最终达成签单；</p>' +
            '<p>5、利用在网站、电话咨询的客户进行有效的沟通达成意向；</p>' +
            '<p>6、针对不同客户需求提出有效解决方案，提升客户满意度。</p>',
          requireText: '<p>1、专科或以上学历，有教育培训行业或其它行业销售相关工作经验者优先考虑；</p>' +
            '<p>2、乐观开朗、富有爱心和亲和力，愿意投身教育事业；</p>' +
            '<p>3、具有较强的逻辑思维能力，执行力和沟通能力；</p>' +
            '<p>4、具备良好的团队合作精神，有强烈的责任感与客户服务意识；</p>' +
            '<p>5、能够接受公司各项培训，学习，考核。</p>' +
            '<p>6、有良好的客户服务意识，奋斗精神，团队合作精神，能适应灵活的工作时间（包括周末）。</p>'
        }
      ],
      content: {}
    }
  },
  created () {
    let { id } = this.$route.query
    this.id = id
    this.changeText()
  },
  activated () {
    let { id } = this.$route.query
    this.id = id
    this.changeText()
  },
  methods: {
    changeText () {
      this.content = this.list[this.id - 1]
    }
  }
}
</script>

<style scoped lang="stylus">
  .detail-box{
    width 100%
    height 100%
    background #FFE674
    .title{
      position absolute
      width 910px
      background url("./images/zp_title.png")
      background-size 100% 100%
      height 273px
      line-height 210px
      left 170px
      top 230px
      .text{
        width 753px
        height 183px
        line-height 183px
        float left
        margin-top 68px
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
      width 753px
      height 1022px
      position absolute
      top 551px
      left 141px
      padding 59px 84px 59px 37px
      background url("./images/zp_bg.png")
      background-size 100% 100%
      line-height 42px
      .content-box{
        width 753px
        height 1022px
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
