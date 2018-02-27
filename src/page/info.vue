<template>
  <div class="info">
    <router-link to="/" class="arrow_right arrow_up animated infinite bounceIn"></router-link>
    <div class="info_main">
      <div class="w_box">
        <a href="javascript:void(0);" :class="isPersonal ? 'flex_1 active' : 'flex_1'" @click="clickHandlerPersonal">
          <section>
            <p>Personal Information</p>
            <!-- <router-link to="/personal">详情 >></router-link> -->
          </section>
        </a>
        <a href="javascript:void(0);" :class="isWork ? 'flex_1 active' : 'flex_1'" @click="clickHandlerWork">
          <section>
            <p>Work Experience</p>
            <!-- <router-link to="/work">详情 >></router-link> -->
          </section>
        </a>
        <a href="javascript:void(0);" :class="isProject ? 'flex_1 active' : 'flex_1'" @click="clickHAndlerProject">
          <section>
            <p>Project Experience</p>
            <!-- <router-link to="/project">详情 >></router-link> -->
          </section>
        </a>
      </div>
      <div class="personal" v-if="isPersonal">
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
      </div>
      <div class="work" v-if="isWork">
        <h3>{{ works.title }}</h3>
        <div class="main work_main">
          <div class="work_item" v-for="(item, index) in works.work" :key="index">
            <h4>{{ item.level }}</h4>
            <p>{{ item.company }}</p>
            <p>{{ item.stayTime }}</p>
            <p>{{ item.duty }}</p>
          </div>
        </div>
      </div>
      <div class="project" v-if="isProject">
        <h3>{{ project.title }}</h3>
        <div class="main project_main">
          <p>{{ project.projectOne }}</p>
          <!-- <div class="work_item" v-for="(list, index) in project.lists" :key="index">
          </div> -->
        </div>
      </div>
    </div>
    <router-link to="/contact" class="arrow_right arrow_down animated infinite bounceIn"></router-link>
  </div>
</template>

<script>
import personalModels from './models/personal-model'
import projectModels from './models/project-model'
import workModels from './models/work-model'

export default {
  name: 'info',
  data () {
    return {
      isPersonal: true,
      isWork: false,
      isProject: false,
      userInfo: personalModels,
      works: workModels,
      project: projectModels,
      tel: 'tel:' + personalModels.phone
    }
  },
  created () {
    // this.initData()
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
    clickHandlerPersonal () {
      this.isPersonal = true
      this.isProject = false
      this.isWork = false
    },
    clickHandlerWork (e) {
      this.isPersonal = false
      this.isProject = false
      this.isWork = true
      // if (!this.$el.style.position) this.$el.style.position = 'relative'
    },
    clickHAndlerProject () {
      this.isPersonal = false
      this.isProject = true
      this.isWork = false
      // this.$el.style.position = 'inherit'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../assets/scss/common.scss";
  .info {
    color: #42b983;
    position: relative;
    // @media screen and (max-width:500px) {
    //   position: relative;
    // }
    > .thanks {
      padding-top: 10rem;
      font-size: 4.375rem;
    }
    > .tel {
      padding-top: 1.25rem;
      font-size: 1.875rem;
    }
    > .tel:before {
      content: "";
      display: inline-block;
      vertical-align: middle;
      @include iconBackground;
      width: 1.875rem;
      height: 1.875rem;
      margin-right: .3125rem;
      background-image: url(../assets/image/tel.png);
    }
    > .arrow_up, .arrow_down {
      position: absolute;
      left: 50%;
      margin-left: -.625rem;
    }
    > .arrow_right:after {
      width: 1.25rem;
      height: 1.25rem;
      border-width: .1875rem .1875rem 0 0;
      transition: all .3s ease-in .1s;
    }
    > .arrow_down {
      bottom: 1rem;
    }
    .arrow_down:after {
      transform: rotate(135deg);
    }
    > .arrow_up {
      top: 2rem;
    }
    .arrow_up:after {
      transform: rotate(-45deg);
    }
    > .info_main {
      width: 80%;
      max-width: 50rem;
      padding: 5rem 0;
      margin: auto;
      section:before {
        content: "";
        display: inline-block;
        @include iconBackground;
        width: 2.5rem;
        height: 2.5rem;
        @media screen and (max-width:500px) {
          width: 1.5rem;
          height: 1.5rem;
          font-size: .875rem;
        }
        vertical-align: middle;
      }
      section {
        text-align: center;
        p {
          margin: 0 .625rem 0 .625rem;
          @media screen and (max-width:500px) {
            margin: 0;
          }
          display: inline-block;
        }
      }
      .w_box {
        > a {
          display: block;
          padding: .625rem 0;
        }
        a.active {
          color: #fff;
          background-color: #46bd79;
        }
        > a:nth-child(1) {
          section:before {
            background-image: url(../assets/image/user.png);
          }
        }
        > a:nth-child(2) {
          section:before {
            background-image: url(../assets/image/job.png);
          }
        }
        > a:nth-child(3) {
          section:before {
            background-image: url(../assets/image/project.png);
          }
        }
        > a.active:nth-child(1) {
          section:before {
            background-image: url(../assets/image/user_def.png);
          }
        }
        > a.active:nth-child(2) {
          section:before {
            background-image: url(../assets/image/job_def.png);
          }
        }
        > a.active:nth-child(3) {
          section:before {
            background-image: url(../assets/image/project_def.png);
          }
        }
      }
      .personal {
        // width: 80%;
        max-width: 50rem;
        margin: 1.25rem auto 1rem;
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
          background-image: url(../assets/image/user.jpeg);
          vertical-align: middle;
          margin-right: .625rem;
        }
        .main {
          border-bottom: .0625rem solid #42b983;
          margin: 0 auto 1.875rem;
          // padding-bottom: 1.25rem;
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
          // div:nth-child(odd), a {
          //   min-width: 10.625rem;
          // }
          div, a {
            min-width: 9.375rem;
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
      }
      .project {
        // width: 80%;
        max-width: 50rem;
        margin: 1.25rem auto 1rem;
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
          background-image: url(../assets/image/user.jpeg);
          vertical-align: middle;
          margin-right: .625rem;
        }
        .main {
          // border-bottom: .0625rem solid #42b983;
          margin: 0 auto 1.875rem;
          // padding-bottom: 1.25rem;
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
      }
      .work {
        max-width: 50rem;
        margin: 1.25rem auto 1rem;
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
          background-image: url(../assets/image/user.jpeg);
          vertical-align: middle;
          margin-right: .625rem;
        }
        .main {
          // border-bottom: .0625rem solid #42b983;
          margin: 0 auto 1.875rem;
          // padding-bottom: 1.25rem;
        }
        .work_main {
          .work_item {
            font-size: .75rem;
            p:last-child {
              text-align: left;
            }
          }
        }
      }
    }
  }
</style>
