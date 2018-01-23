<template>
  <div class="project">
    <h3>{{ project.title }}</h3>
    <div class="main project_main">
      <p>{{ project.projectOne }}</p>
      <!-- <div class="work_item" v-for="(list, index) in project.lists" :key="index">
      </div> -->
    </div>
    <g-button class="back" @click="backClickHandler">{{ btnFont }}</g-button>
  </div>
</template>

<script>
export default {
  name: 'project',
  data () {
    return {
      project: '',
      btnFont: '<< BACK'
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      this.$axios.get('https://easy-mock.com/mock/5a01524d36a23b429ea925c5/api/project').then(res => {
        console.log(res)
        if (res.data.success) {
          this.project = res.data.data
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
  .project {
    width: 80%;
    max-width: 50rem;
    margin: .9375rem auto;
    border: .0625rem solid #46bd79;
    padding: .625rem .9375rem;
    -webkit-overflow-scrolling : touch;
    overflow-y: auto;
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
    .project_main {
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
