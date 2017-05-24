<template>
  <div class="home">
    <div class="left">
      <ul>
        <li>
          <router-link to="/login"><h2>login</h2></router-link>
        </li>
        <li>
          <router-link to="/"><h2>home</h2></router-link>
        </li>
        <li>
          <router-link to="/hello"><h2>Hello</h2></router-link>
        </li>

      </ul>

    </div>
    <div class="right">
      {{msg}}
    </div>
  </div>


</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        msg: 'this is home'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .left,.right{
    float: left;
  }
  ul{
    list-style: none;
    margin:0;
    padding:0;
  }
</style>
