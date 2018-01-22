<template>
  <div class="info">
    <router-link to="/" class="arrow_right arrow_up"></router-link>
    <div class="info_main w_box">
      <div class="flex_1">
        <section>
          <p>Personal Information</p>
          <router-link to="/personal">详情 >></router-link>
        </section>
      </div>
      <div class="flex_1">
        <section>
          <p>Work Experience</p>
          <router-link to="/work">详情 >></router-link>
        </section>
      </div>
      <div class="flex_1">
        <section>
          <p>Project Experience</p>
          <router-link to="/project">详情 >></router-link>
        </section>
      </div>
    </div>
    <router-link to="/contact" class="arrow_right arrow_down"></router-link>
  </div>
</template>

<script>
export default {
  name: 'info',
  data () {
    return {
      contact: '',
      tel: ''
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      this.$axios.get('https://easy-mock.com/mock/5a01524d36a23b429ea925c5/api/contact').then(res => {
        console.log(res)
        if (res.data.success) {
          this.contact = res.data.data
          this.tel = 'tel:' + this.contact.phone
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
  .info {
    color: #42b983;
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
      bottom: 2.5rem;
    }
    .arrow_down:after {
      transform: rotate(135deg);
    }
    > .arrow_up {
      top: 2.5rem;
    }
    .arrow_up:after {
      transform: rotate(-45deg);
    }
    > .info_main {
      width: 100%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      section:before {
        content: "";
        display: inline-block;
        @include iconBackground;
        width: 2.5rem;
        height: 2.5rem;
      }
      section {
        text-align: center;
        p {
          margin: 0;
        }
      }
      > div:nth-child(1) {
        section:before {
          background-image: url(../assets/image/user.png);
        }
      }
      > div:nth-child(2) {
        section:before {
          background-image: url(../assets/image/job.png);
        }
      }
      > div:nth-child(3) {
        section:before {
          background-image: url(../assets/image/project.png);
        }
      }
    }
  }
</style>
