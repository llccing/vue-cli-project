<template>
    <div class="side-bar-outer">
        <div class="side-bar" id="sideBar">
            <div class="sidebar-fold"><span class="fa fa-bars fa-rotate-90"></span></div>
            <div class="sidebar-nav">
                <div data-title="zlbt" class="nav-parent">
                    <div class="nav-title" v-bind:class="{active: isActive}">
                        <img src="../images/04.png" data-toggle="tooltip" data-placement="right" title="租赁补贴管理">
                        <router-link to="/home"><span class="title-name">例子</span></router-link>
                    </div>

                    <div class="nav-title" v-bind:class="{active: isActive}">
                        <img src="../images/04.png" data-toggle="tooltip" data-placement="right" title="租赁补贴管理">
                        <router-link to="/zrdj"><span class="title-name">准入登记管理</span></router-link>
                    </div>
                    <div class="nav-title" v-bind:class="{active: currentActive}">
                        <img src="../images/04.png" data-toggle="tooltip" data-placement="right" title="租赁补贴管理">
                        <router-link to="/zrdj"><span class="title-name">echarts</span></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        isActive: true
      }
    },
    computed: {
      currentActive () {
        console.log(this.$router)
        return !this.isActive
      }
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

    .side-bar.fold {
        width: 50px;
    }

    .sidebar-fold {
        padding: 8px 0;
        text-align: center;
        background: #394555;
        cursor: pointer;
    }

    .sidebar-nav div.single {
        cursor: pointer;
        line-height: 40px;
        padding: 0 15px;
    }

    .sidebar-nav div.single img {
        padding-right: 15px;
    }

    .sidebar-nav div.single span {
        display: inline-block;
        padding-right: 1px;
    }

    .sidebar-nav div.single:hover {
        background: #37424F;
    }

    .sidebar-nav > div.single.active {
        background: #348FE2;
    }

    /* start 左侧二级菜单 */

    .nav-parent .nav-title {
        height: 40px;
        line-height: 40px;
        padding: 0 15px;
    }

    .nav-title.active {
        background: #348FE2;
    }

    .nav-parent .nav-title img {
        padding-right: 6px;
    }

    .nav-title a {
        color: #fff;
    }

    .nav-parent .nav-title span.title-name {
        display: inline-block;
        padding-right: 3px;
    }

    .nav-parent .nav-title:hover {
        background: #37424F;
    }

    .nav-parent.active .nav-title {
        background: #348FE2;
    }

    .nav-title .nav-caret {
        float: right;
        line-height: 40px;
    }

    .nav-body {
        display: none;
        line-height: 30px;
        background: #43525e;
        list-style: none;
        padding: 0;
        margin: 0;
        font-size: 12px;
    }

    .nav-body li a:link,
    .nav-body li a:visited,
    .nav-body li a:hover {
        color: #9ea1a3;
        text-decoration: none;
        display: block;
        margin-left: 24px;
        border-left: 1px solid #556375;
        padding-left: 24px;
        position: relative;
    }

    .nav-body li:first-child a {
        padding-top: 10px;
    }

    .nav-body li:first-child a img.nav-circle {
        top: 19px;
    }

    .nav-body li:last-child a {
        padding-bottom: 10px;
    }

    .nav-body li.active a {
        color: #fefefe;
    }

    .nav-body .nav-circle {
        position: absolute;
        left: -7px;
        top: 9px;
    }
</style>
