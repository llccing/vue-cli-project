<template>
    <header class="header">
        <div class="item left">
            <slot name="left"></slot>
        </div>
        <div class="title">{{title}}</div>
        <div class="item right">
            <slot name="right"></slot>
        </div>
    </header>
</template>

<script>
  export default {
    name:'v-header',
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="less" scoped>
    .header {
        color: #fff;
        line-height: 38px;
        background: #222;

    .item {
        position: absolute;
        top: 0;
        bottom: 0;

        a {
            color: #fff;
        }

    }

    .left {
        left: 10px;
    }

    .right {
        right: 10px;
    }

    }
</style>