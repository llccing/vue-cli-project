<template>
    <div class="home">
        <div class="todo">
            <h4 class="todo-title">Todo List</h4>

            <div class="input-wrapper">
                <input type="text" v-model="item.text" placeholder="请输入">
                <button class="btn-add" type="button" v-on:click="addItem">ADD</button>
            </div>

            <ol class="todo-list">
                <li v-for="item in list">
                    <i class="fa fa-square-o fa-lg" v-if="!item.done" aria-hidden="true" @click="done(item)"></i>
                    <i class="fa fa-check-square-o fa-lg" aria-hidden="true" v-if="item.done"  @click="done(item)"></i>

                    {{item.text}}
                    <button class="btn-del" type="button" @click="remove(item,$event)">del</button>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>

  export default {
    name: 'home',
    data () {
      return {
        item: {
          text: '',
          done: false
        },
        list: []
      }
    },
    created: function () {
      let sessionList = sessionStorage.getItem('todoList')
      if (sessionList && sessionList.length > 0) {
        this.list = JSON.parse(sessionList).todoList
      }
    },
    methods: {
      // 添加
      addItem () {
        if (this.item) {
          this.list.push(this.item)
          this.item = {}
          sessionStorage.setItem('todoList', JSON.stringify({
            todoList: this.list
          }))
        }
      },
      // 移除
      remove (item) {
        this.list.splice(this.list.indexOf(item.text), 1)
        sessionStorage.setItem('todoList', JSON.stringify({
          todoList: this.list
        }))
      },
      // 选中
      done (item) {
        if (item.done) {
          item.done = false
        } else {
          item.done = true
        }

        sessionStorage.setItem('todoList', JSON.stringify({
          todoList: this.list
        }))
      }
    },
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .todo {
        width: 400px;
        border: 1px solid #1abd9b;
        margin: 20px auto;
        padding: 0 20px;
        overflow: hidden;
    }

    .todo-title {
        background: #1abd9b;
        color: #fff;
        margin: 0 -20px;
        padding: 10px 20px;
    }

    .input-wrapper {
        margin: 10px 0;
    }

    .input-wrapper input {
        padding: 5px 10px;
    }

    input {
        outline: none;
    }

    .btn-add {
        background: #3ec6a9;
        border: 1px solid #3ec6a9;
        color: #fff;
        outline: none;
        padding: 5px 10px;
    }

    .btn-add:hover {
        border: 1px solid #1abd9b;
    }

    .btn-add:active {
        background: #158975;
    }

    .btn-del {
        background: red;
        border: 1px solid red;
        color: #fff;
        outline: none;
    }

    .btn-del:hover {
        border: 1px solid red;
    }

    .btn-del:active {
        background: orangered;
    }

    .todo-list {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .todo-list li {
        padding: 5px 0;
        overflow: hidden;
        border-bottom: 1px solid #20937d;
    }

    .todo-list li:last-child {
        border-bottom: 0;
    }

    .todo-list li button {
        float: right;
    }


</style>
