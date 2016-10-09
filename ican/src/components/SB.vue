<template>
  <div class="SB">
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 4,
      follo2: false,
      follo3: false,
      pdd: {
        color: 'black'
      },
      items: [
        {name: 'lzl'},
        {name: 'xxx'},
        {name: 'zzz'}
      ]
    }
  },
  computed: {
    b: {
      get () {
        return this.msg + 1
      }
    }
  },
  methods: {
    changej () {
      this.items.unshift()
    }
  },
  created () {
    setTimeout(this.changej, 5000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #42b983;
  }
  .follo1 {
    font-style: italic;
    font-weight: lighter;
  }
  .follo2 {
    color: red;
  }
  .follo3 {
    color: blue;
  }
</style>