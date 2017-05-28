<template>
    <header class="header clear">
        <div class="item left">
            <slot name="left"></slot>
        </div>
        <div class="item middle">
            <span class="title">{{title}}</span>
        </div>
        <div class="item right">
            <slot name="right"></slot>
        </div>
    </header>
</template>

<script>
  export default {
    name: 'v-header',
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
    .header {
        height: 40px;
        background-color: #2C8DBB;
        text-align: center;
    }

    .middle {
        display: inline;
        color: #fff;
    }

    .title {
        font-size: 20px;
        font-weight: bold;
    }

    .item {
        line-height: 40px;
    }

    .left {
        float: left;
    }

    .left a,
    .right a {
        color: #fff;
        text-decoration: none;
        border: 1px solid #fff;
        border-radius: 4px;
        padding: 5px;
        margin: 5px;
    }

    .left a:hover,
    .right a:hover {
        background: #20495D;
    }

    .right {
        float: right;
    }
</style>
