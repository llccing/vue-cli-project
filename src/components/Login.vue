<template>
  <div class="login">
    <form class="form-inline">
      <div class="form-group">
        <label for="exampleInputName2">Name</label>
        <input type="text" class="form-control" id="exampleInputName2" v-bind="name" placeholder="Jane Doe">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail2">Email</label>
        <input type="email" class="form-control" id="exampleInputEmail2" v-bind="pass" placeholder="jane.doe@example.com">
      </div>
      <button type="submit" class="btn btn-default">Send invitation</button>
    </form>

    <div>
      <router-link to="/"><h2>Index</h2></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        name: '',
        pass: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
