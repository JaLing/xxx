<template>
  <div class="hello">
    <div v-if="show" transition="expand">hellosdd</div>
    <h1>{{returnObj}}</h1>
    <input type="text" v-model="msg">
    <button v-on:click='chan'>transition</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hsdfsd!',
      show: false,
      apiUrl: 'http://211.149.193.19:8080/api/customers',
      returnObj: []
    }
  },
  ready () {
    this.chan()
  },
  methods: {
    chan () {
      this.$http.get(this.apiUrl).then((response) => {
        console.log(response.status)
        console.log(response.statusText)
        console.log(response.body)
        console.log(response.json())
      }, (response) => {
        console.log(response.data)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
.expand-transition {
  transition: all .3s ease;
  height: 30px;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
}
.expand-enter, .expand-leave  {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}
</style>
