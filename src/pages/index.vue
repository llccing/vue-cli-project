<template>
    <div>
        <!-- begin navbar -->
        <nav class="navbar navbar-fixed-top" role="navigation">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="login.html">宜昌住房保障大数据平台</a>
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
            <!-- /.container-fluid -->
        </nav>

        <div class="side-bar-outer">
            <div class="side-bar" id="sideBar">
                <div class="sidebar-fold"><span class="fa fa-bars fa-rotate-90"></span></div>
                <div class="sidebar-nav">
                    <div data-title="zlbt" class="nav-parent">
                        <div class="nav-title">
                            <img src="../images/04.png" data-toggle="tooltip" data-placement="right" title="租赁补贴管理">
                            <span class="title-name">准入登记管理</span>
                            <span class="fa fa-caret-down fa-rotate-0 nav-caret"></span>
                            <router-link to=""></router-link>
                        </div> <div class="nav-title">
                            <img src="../images/04.png" data-toggle="tooltip" data-placement="right" title="租赁补贴管理">
                            <span class="title-name">保障配给规则定制</span>
                            <span class="fa fa-caret-down fa-rotate-0 nav-caret"></span>
                        </div> <div class="nav-title">
                            <img src="../images/04.png" data-toggle="tooltip" data-placement="right" title="租赁补贴管理">
                            <span class="title-name">准入规则定制</span>
                            <span class="fa fa-caret-down fa-rotate-0 nav-caret"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- end sidebar-->

        <!-- begin content -->
        <div id="indexContent" class="content"></div>
        <!-- end content -->

        <!-- begin footer-->
        <div class="footer navbar-fixed-bottom text-center">技术支持 : 北京博图纵横科技有限责任公司</div>
        <!-- end footer-->
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import logo from '../images/logo.png'

  export default {
    data () {
      return {
        logo
      }
    },
    computed: mapState({user: state => state.user})
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

    .dropdown {
        /*width: 100px;*/
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
        font-size: .14rem;
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
        padding: 0 .15rem;
    }

    .sidebar-nav div.single img {
        padding-right: .15rem;
    }

    .sidebar-nav div.single span {
        display: inline-block;
        padding-right: .1rem;
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
        padding: 0 .15rem;
    }

    .nav-parent .nav-title img {
        padding-right: 6px;
    }

    .nav-parent .nav-title span.title-name {
        display: inline-block;
        padding-right: .3rem;
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

    /* end 左侧二级菜单 */
    .content {
        position: absolute;
        top: 86px;
        right: 0;
        left: 200px;
        bottom: 20px;
        overflow: auto;
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
