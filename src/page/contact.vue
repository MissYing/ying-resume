<template>
  <div class="contact">
    <div class="thanks">{{ contact.thanks}}</div>
    <a :href="tel" class="tel">{{ contact.phone }}</a>
    <router-link to="/info" class="arrow_right"></router-link>
  </div>
</template>

<script>
export default {
  name: 'contact',
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
  .contact {
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
    > .arrow_right {
      position: absolute;
      bottom: 2.5rem;
      left: 50%;
      margin-left: -.625rem;
    }
    > .arrow_right:after {
      width: 1.25rem;
      height: 1.25rem;
      border-width: .1875rem .1875rem 0 0;
      transform: rotate(-45deg);
      transition: all .3s ease-in .1s;
    }
  }
</style>
