<template>
    <div>
        <!-- begin navbar -->
        <nav class="navbar navbar-fixed-top" role="navigation">
            <div class="container-fluid">
                <div class="navbar-header">
                    <!--<a class="navbar-brand" href="/"></a>-->
                    <router-link class="navbar-brand" to="/home">宜昌住房保障大数据平台</router-link>
                </div>
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="setUp">
                            <span id="user"></span>
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="#" id="changePwd">修改密码</a></li>
                            <li><a href="#" id="logout">退出</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
        <!-- end navbar -->

        <!-- begin sidebar -->
        <side-bar></side-bar>
        <!-- end sidebar-->

        <!-- begin content -->
        <router-view id="indexContent" class="content"></router-view>
        <!-- end content -->

        <!-- begin footer-->
        <div class="footer navbar-fixed-bottom text-center">技术支持 : 北京博图纵横科技有限责任公司</div>
        <!-- end footer-->
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import logo from '../images/logo.png'
  import sideBar from '../components/sideBar.vue'

  export default {
    data () {
      return {
        logo
      }
    },
    computed: mapState({user: state => state.user}),
    components: {
      sideBar
    }
  }
</script>

<style scoped>
    .navbar {
        background: #348FE2;
    }

    .navbar-brand,
    .navbar-brand:hover {
        color: #fff;
    }

    .navbar-header {
        float: left;
    }

    .navbar-right {
        float: right;
    }

    .navbar-nav {
        margin: 0 -15px;
    }

    .dropdown .caret {
        margin-left: .1rem;
    }

    #setUp {
        color: #fff;
    }

    #setUp:hover {
        background: #2881d0;
        color: #fff;
    }

    /* end 左侧二级菜单 */
    .content {
        position: absolute;
        top: 50px;
        right: 0;
        left: 200px;
        bottom: 20px;
        overflow: auto;
        padding: 20px;
    }

    .content.fold {
        left: 50px;
    }

    .top-nav {
        position: fixed;
        left: 200px;
        right: 0;
        top: 50px;
        z-index: 3;
        background: #eee;

        /*暂时控制*/
        /*display: none;*/
    }

    .top-nav.fold {
        left: 50px;
    }

    .top-nav-ul {
        list-style: none;
        padding: 0;
        margin: 0;
        font-weight: bold;
    }

    .top-nav-ul li {
        float: left;
        padding: 8px 0 8px 12px;
        color: #fff;
    }

    .top-nav-ul li.active {
        background: #4da0ea;
        color: #666;
    }

    .top-nav-ul li.active:hover {
        background: #4da0ea;
        color: #fff;
    }

    .top-nav-ul li:hover {
        background: #fff;
    }

    .top-nav-title:link,
    .top-nav-title:visited,
    .top-nav-title:hover {
        color: #333;
        text-decoration: none;
        margin-right: 10px;
    }

    .top-nav-ul li.active .top-nav-close {
        border-right-color: #4da0ea !important;
    }

    .top-nav-ul li:last-child .top-nav-close {
        border-right-color: #eee;
    }

    .top-nav-ul li:last-child:hover .top-nav-close,
    .top-nav-ul li:hover .top-nav-close {
        border-right-color: #fff;
    }

    .top-nav-ul li.active .top-nav-title {
        color: #fff;
    }

    .top-nav-close {
        padding: 3px 9px 5px 5px;
        cursor: pointer;
        border-right: 1px solid #ccc;
    }

    .content > div {
        height: 100%;
        padding: 20px;
        font-size: 14px;
        overflow: auto;
    }

    .footer {
        background: #348FE2;
        color: #fff;
    }

</style>
