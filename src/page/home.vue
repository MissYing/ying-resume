<template>
  <div class="home">
    <div class="itemOne"><span>{{ home.zhResume }}</span><span>{{ home.enResume }}</span></div>
    <div class="itemTwo"><span>{{ home.zhName}}</span><span>{{ home.enName }}</span></div>
    <div class="itemThree">{{ home.level }}</div>
    <router-link to="/info" class="arrow_right"></router-link>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      home: ''
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      // this.$axios.get('/api/posts', {}).then(res => {
      // this.$axios.get('https://easy-mock.com/mock/5a01524d36a23b429ea925c5/api/home').then(res => {
      //   console.log(res)
      //   if (res.data.success) {
      //     this.home = res.data.data
      //   }
      // }).catch(err => {
      //   console.log(err)
      //   throw new Error(err)
      // })
      let origin = window.location.origin
      this.$axios.get(origin + '/api/home').then(res => {
        console.log(res)
        if (res.data.success) {
          this.home = res.data.data
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
  .home {
    // @include iconBackground;
    background-size: cover;
    background-repeat: repeat-y;
    background-image: url('../assets/image/bg.jpg');
    width: 100%;
    height: 100%;
    color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    > .itemOne {
      padding-top: 11.25rem;
      font-size: 3.75rem;
      span:nth-child(1) {
        letter-spacing: .3125rem;
      }
      span:nth-child(2) {
        margin-left: 1.25rem;
      }
    }
    > .itemTwo {
      margin-top: 2.5rem;
      padding-top: 2.5rem;
      font-size: 1.75rem;
      position: relative;
      span:nth-child(1) {
        letter-spacing: .3125rem;
      }
      span:nth-child(2) {
        margin-left: 1.25rem;
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
      height: .0625rem;
      margin: auto;
      background-color: #fff;
    }
    > .itemThree {
      font-size: 1.25rem;
      padding-top: .625rem;
      letter-spacing: .0625rem;
    }
    > .arrow_right {
      position: absolute;
      bottom: 2.5rem;
      left: 50%;
      margin-left: -.625rem;
    }
    > .arrow_right:after {
      width: 1.25rem;
      height: 1.25rem;
      border-color: #fff;
      border-width: .1875rem .1875rem 0 0;
      transform: rotate(135deg);
      transition: all .3s ease-in .1s;
    }
  }
</style>
