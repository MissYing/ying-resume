<template>
  <div class="work">
    <h3>{{ work.title }}</h3>
    <p>{{ work.workOne }}</p>
    <g-button class="back" @click="backClickHandler">BACK</g-button>
  </div>
</template>

<script>
export default {
  name: 'work',
  data () {
    return {
      work: ''
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      this.$axios.get('https://easy-mock.com/mock/5a01524d36a23b429ea925c5/api/work').then(res => {
        console.log(res)
        if (res.data.success) {
          this.work = res.data.data
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
  .work {
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
