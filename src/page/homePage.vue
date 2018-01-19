<template>
  <div class="homePage">
    <div class="itemOne"><span>简历</span><span>Resume</span></div>
    <div class="itemTwo"><span>{{ homePage.zhName}}</span><span>{{ homePage.enName }}</span></div>
    <div class="itemThree">{{ homePage.level }}</div>
  </div>
</template>

<script>
export default {
  name: 'homePage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      homePage: ''
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      console.log('111')
      // this.$axios.get('/api/posts', {}).then(res => {
      this.$axios.get('https://easy-mock.com/mock/5a01524d36a23b429ea925c5/example/homePage').then(res => {
        console.log(res)
        if (res.data.success) {
          this.homePage = res.data.data
        }
      }).catch(err => {
        console.log(err)
        throw new Error(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../assets/scss/common.scss";
  .homePage {
    @include iconBackground;
    background-image: url('../assets/image/bg.jpg');
    width: 100%;
    height: 100%;
    color: #fff;
    > .itemOne {
      padding-top: 180px;
      font-size: 60px;
      span:nth-child(1) {
        letter-spacing: 5px;
      }
      span:nth-child(2) {
        margin-left: 20px;
      }
    }
    > .itemTwo {
      margin-top: 40px;
      padding-top: 40px;
      font-size: 28px;
      position: relative;
      span:nth-child(1) {
        letter-spacing: 5px;
      }
      span:nth-child(2) {
        margin-left: 20px;
      }
    }
    > .itemTwo:before {
      content: "";
      display: inline-block;
      position: absolute;
      left: 45%;
      right: 45%;
      top: 0;
      width: 10%;
      height: 1px;
      margin: auto;
      background-color: #fff;
    }
    > .itemThree {
      font-size: 20px;
      padding-top: 10px;
      letter-spacing: 1px;
    }
    > div {
      @include rounded-corners;
    }
  }
</style>
