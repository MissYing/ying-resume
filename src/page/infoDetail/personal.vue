<template>
  <div class="personal">
    <h3>{{ userInfo.title }}</h3>
    <div class="personal_main w_box">
      <div class="flex_1">姓名：{{ userInfo.name }}</div>
      <div class="flex_1">性别：{{ userInfo.sex }}</div>
      <a :href="tel" class="flex_1">电话：{{ userInfo.phone }}</a>
      <div class="flex_1">学历：{{ userInfo.educate }}</div>
      <div class="flex_1">邮箱：{{ userInfo.email }}</div>
      <div class="flex_1">籍贯：{{ userInfo.nativePlace }}</div>
      <div class="flex_1">生日：{{ userInfo.birthday }}</div>
      <div class="flex_1">现居住地：{{ userInfo.place }}</div>
      <div class="flex_1">求职地区：{{ userInfo.jobPlace }}</div>
      <div class="flex_1">期望薪资：{{ userInfo.salaryExpectation }}</div>
      <div class="flex_1">到岗时间：{{ userInfo.date }}</div>
    </div>
    <div class="advantage">{{ userInfo.advantage }}</div>
    <g-button class="back" @click="backClickHandler">BACK</g-button>
  </div>
</template>

<script>
export default {
  name: 'personal',
  data () {
    return {
      userInfo: '',
      tel: ''
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
    .personal_main {
      display: flex;
      flex-wrap: wrap;
      font-size: .75rem;
      text-align: left;
      .flex_1 {
        min-width: 50%;
        line-height: 2.5rem;
      }
    }
    .advantage {
      padding-top: 2.5rem;
      border-top: .0625rem solid #42b983;
      margin-top: 1.875rem;
      padding-bottom: 1.875rem;
      font-size: .75rem;
      text-align: left;
    }
    .back {
      display: inline-block;
      @include rounded-corners;
    }
  }
</style>
