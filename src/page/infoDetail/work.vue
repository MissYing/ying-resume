<template>
  <div class="work">
    <h3>{{ works.title }}</h3>
    <div class="main work_main">
      <div class="work_item" v-for="(item, index) in works.work" :key="index">
        <h4>{{ item.level }}</h4>
        <p>{{ item.company }}</p>
        <p>{{ item.stayTime }}</p>
        <p>{{ item.duty }}</p>
      </div>
    </div>
    <g-button class="back" @click="backClickHandler">{{ btnFont }}</g-button>
  </div>
</template>

<script>
export default {
  name: 'work',
  data () {
    return {
      works: '',
      btnFont: '<< BACK'
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
          this.works = res.data.data
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
  // .work {
  //   width: 80%;
  //   max-width: 50rem;
  //   margin: .9375rem auto;
  //   border: .0625rem solid #46bd79;
  //   padding: .625rem .9375rem;
  //   -webkit-overflow-scrolling : touch;
  //   overflow-y: auto;
  //   @include rounded-corners;
  //   h3 {
  //     font-size: .875rem;
  //   }
  //   h3:before {
  //     content: "";
  //     display: inline-block;
  //     @include iconBackground;
  //     width: 3.75rem;
  //     height: 3.75rem;
  //     @include rounded-corners(50%);
  //     background-image: url(../../assets/image/user.jpeg);
  //     vertical-align: middle;
  //     margin-right: .625rem;
  //   }
  //   .main {
  //     border-bottom: .0625rem solid #42b983;
  //     margin: 0 auto 1.875rem;
  //     padding-bottom: 1.25rem;
  //   }
  //   .work_main {
  //     .work_item {
  //       font-size: .75rem;
  //       p:last-child {
  //         text-align: left;
  //       }
  //     }
  //   }
  //   .back {

  //     display: inline-block;
  //     @include rounded-corners;
  //   }
  // }
</style>
