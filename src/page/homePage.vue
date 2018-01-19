<template>
  <div class="homePage">
    <div class="itemOne"><span>简历</span><span>Resume</span></div>
    <div class="itemTwo"><span>{{ homePage.zhName}}</span><span>{{ homePage.enName }}</span></div>
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
        if (res.success) {
          this.homePage = res.data
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
    > div {
      @include rounded-corners;
    }
  }
</style>
