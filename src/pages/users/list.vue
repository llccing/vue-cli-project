<template>
    <div>
        <el-table
                ref="userTable"
                :data="userList"
                border
                highlight-current-row
                @current-change="handleCurrentChange"
                style="width: 100%">
            <el-table-column
                    prop="id"
                    label="id"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="username"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="password"
                    label="地址">
            </el-table-column>

            <el-table-column label="操作">
                <template scope="scope">
                    <el-button
                            size="small"
                            @click="handleEdit(scope.$index, scope.row)">编辑
                    </el-button>
                    <el-button
                            size="small"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <div style="margin-top: 20px">
            <el-button @click="setCurrent(userList[1])">选中第二行</el-button>
            <el-button @click="setCurrent()">取消选择</el-button>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        userList: [],
        currentRow: null
      }
    },
    created () {
      this.queryAll()
    },
    methods: {
      queryAll () {
        axios.get('http://localhost:3000/users/page?page=1&limit=2')
          .then(data => {
            this.userList = data.data.data
            console.log(this.userList)
          })
          .catch(error => {
            this.userList = []
            console.log(error)
          })
      },
      setCurrent (row) {
        this.$refs.userTable.setCurrentRow(row)
      },
      handleCurrentChange (val) {
        this.currentRow = val
      },
      handleEdit (index, row) {
        console.log(index)
        console.log(row)
      },
      handleDelete (index, row) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })

//        this.userList.slice(index, 1)
      }
    }
  }
</script>
