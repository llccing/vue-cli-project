<template>
    <div class="side-bar-outer">
        <div class="side-bar" id="sideBar">
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                     theme="dark">
                <el-submenu index="1">
                    <template slot="title">element UI</template>
                    <router-link index="1-5" to="/forms" class="meun-indent">
                        <el-menu-item index="1-1">表单元素</el-menu-item>
                    </router-link>
                    <router-link index="1-3" to="/home">
                        <el-menu-item index="1-2">table列表</el-menu-item>
                    </router-link>

                    <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="2">导航二</el-menu-item>
                <el-menu-item index="3">导航三</el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        isActive: 'home'
      }
    },
    methods: {
      currentUrl () {
        this.isActive = this.$router.app.$route.path.substr(1)
        console.log(this.$router.app.$route.path.substr(1))
      },
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    },
    watch: {
      '$route': 'currentUrl'
    }
  }
</script>

<style>
    .side-bar-outer {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 70px;
    }

    .side-bar {
        height: 100%;
        overflow-y: auto;
        margin-top: 50px;
        background: #293038;
        color: #fff;
        font-size: 14px;
        width: 200px;
    }
    .meun-indent{
        display: block;
    }
</style>
