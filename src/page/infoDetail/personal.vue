<template>
  <div class="personal">
    <h3>{{ userInfo.title }}</h3>
    <div class="main personal_main">
      <div>姓名：{{ userInfo.name }}</div>
      <div>性别：{{ userInfo.sex }}</div>
      <a :href="tel">电话：{{ userInfo.phone }}</a>
      <div>学历：{{ userInfo.educate }}</div>
      <div>邮箱：{{ userInfo.email }}</div>
      <div>籍贯：{{ userInfo.nativePlace }}</div>
      <div>生日：{{ userInfo.birthday }}</div>
      <div>求职地区：{{ userInfo.jobPlace }}</div>
      <div>期望薪资：{{ userInfo.salaryExpectation }}</div>
      <div>到岗时间：{{ userInfo.date }}</div>
      <div>现居住地：{{ userInfo.place }}</div>
      <div>github：{{ userInfo.github }}</div>
    </div>
    <div class="advantage">{{ userInfo.advantage }}</div>
    <g-button class="back" @click="backClickHandler">{{ btnFont }}</g-button>
  </div>
</template>

<script>
export default {
  name: 'personal',
  data () {
    return {
      userInfo: '',
      tel: '',
      btnFont: '<< BACK'
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      this.$axios.get('https://easy-mock.com/mock/5a01524d36a23b429ea925c5/api/userInfo').then(res => {
        console.log(res)
        if (res.data.success) {
          this.userInfo = res.data.data
          this.tel = 'tel:' + this.userInfo.phone
        }
      }).catch(err => {
        console.log(err)
        throw new Error(err)
      })
    },
    backClickHandler () {
      this.$router.push('/info')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../../assets/scss/common.scss";
  .personal {
    width: 20rem;
    margin: 1.875rem auto .625rem;
    border: .0625rem solid #46bd79;
    padding: .625rem;
    @include rounded-corners;
    h3 {
      font-size: .875rem;
    }
    h3:before {
      content: "";
      display: inline-block;
      @include iconBackground;
      width: 3.75rem;
      height: 3.75rem;
      @include rounded-corners(50%);
      background-image: url(../../assets/image/user.jpeg);
      vertical-align: middle;
      margin-right: .625rem;
    }
    .main {
      border-bottom: .0625rem solid #42b983;
      margin: 0 auto 1.875rem;
      padding-bottom: 1.25rem;
    }
    .personal_main {
      display: flex;
      // flex-wrap: wrap;
      // flex-direction: row;
      flex-flow: row wrap; // 以上两句可以用这句替代
      font-size: .75rem;
      text-align: left;
      max-width: 100%;
      overflow: hidden;
      div:nth-child(odd), a {
        min-width: 10.625rem;
      }
      div, a {
        line-height: 2.5rem;
      }
      div:last-child {
        margin-left: right;
      }
    }
    .advantage {
      padding-bottom: 1.875rem;
      font-size: .75rem;
      text-align: left;
    }
    .back {
      display: inline-block;
      @include rounded-corners;
      font-size: .875rem;
    }
  }
</style>
