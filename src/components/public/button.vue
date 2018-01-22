<template>
  <div class="button" @click="clickMethod" :class="disabled ? 'disabled': ''"><slot></slot></div>
</template>
<script>
export default {
  name: 'Button',
  data () {
    return {
      required: '',
      hasMessages: false
    }
  },
  props: {
    disabled: {
      type: Boolean
    }
  },
  methods: {
    clickMethod () {
      if (!this.disabled) {
        this.$emit('click', () => this)
      }
    }
  },
  computed: {
    messageClass () {
      return {
        'md-invalid': this.hasMessages
      }
    }
  }
}
</script>
<style lang='scss' rel="stylesheet/scss" scoped>
.button{
  background: #42b983;
  min-height: 1.875rem;
  color:#fff;
  font-size: 1rem;
  letter-spacing: .05rem/* .8px */;
  vertical-align: middle;
  height: 1.875rem;
  line-height: 1.875rem;
  position: relative;
  min-width: 6.25rem;
  &.disabled {
    background: #ccc;
  }
}
</style>
