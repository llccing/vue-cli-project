<template>
    <div class="zrdj">
        <div class="condition">
            <form id="formCondition" class="form-inline">
                <div class="mb16">
                    <div class="form-group">
                        <label class="control-label">市：</label>
                        <select class="form-control w200" name="s" id="s">
                            <option value="4205">宜昌市</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label class="control-label">区县：</label>
                        <select class="form-control w200" v-model="condition.county">
                            <option v-for="city in cities" :value="city.dmCode">{{city.dmName}}</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label class="control-label">街办：</label>
                        <select class="form-control w200" v-model="condition.street">
                            <option v-for="street in streets" v-bind:value="street.dmCode">{{street.dmName}}</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label class="control-label">社区：</label>
                        <select class="form-control w200" v-model="condition.community">
                            <option v-for="community in communities" v-bind:value="community.dmCode">
                                {{community.dmName}}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="mb16">
                    <div class="form-group">
                        <label class="control-label">受理编号：</label>
                        <input class="form-control w157" type="text" v-model="condition.acceptNum" maxlength="25"/>
                    </div>

                    <div class="form-group">
                        <label class="control-label">身份证号：</label>
                        <input class="form-control w172" type="text" v-model="condition.cardNum" maxlength="18"/>
                    </div>

                    <div class="form-group">
                        <label class="control-label">姓名：</label>
                        <input class="form-control w100" type="text" v-model="condition.name" maxlength="10"/>
                    </div>

                    <div class="form-group">
                        <label class="control-label">审核日期：</label>
                        <div class="calendar">
                            <input class="form-control calendar-date" type="text" v-model="condition.beginTime"/>
                        </div>
                        <span class="mlr-3">至</span>
                        <div class="calendar">
                            <input class="form-control calendar-date" type="text" v-model="condition.endTime"/>
                        </div>
                    </div>
                </div>
                <div class="mb16">
                    <div class="form-group mr25">
                        <label class="control-label">补贴类型：</label>
                        <label class="radio-inline"><input type="radio" value="0"
                                                           v-model="condition.guaranteeType">全部</label>
                        <label class="radio-inline"><input type="radio" value="1" v-model="condition.guaranteeType">租赁补贴</label>
                        <label class="radio-inline"><input type="radio" value="2" v-model="condition.guaranteeType">实物配租</label>
                    </div>

                    <div class="form-group">
                        <button type="button" class="button-lg btn-query" v-bind:click="search">查询</button>
                    </div>
                </div>
            </form>


        </div>

        <div class="table-wrapper">
            <v-client-table :data="tableData" :columns="columns"></v-client-table>
        </div>
    </div>
</template>

<script>
  import api from '../store/api'
  import {fetchList, fetchPv} from '../api/table'
  export default {
    data () {
      return {
        // 查询条件
        condition: {
          county: '',
          street: '',
          community: '',
          acceptNum: '',
          cardNum: '',
          name: '',
          beginTime: '',
          endTime: '',
          guaranteeType: '2'
        },

        cities: [],

        streets: [],

        communities: [],

        columns: ['id', 'name', 'age'],
        tableData: [
          {id: 1, name: 'John', age: '20'},
          {id: 2, name: 'Jane', age: '24'},
          {id: 3, name: 'Susan', age: '16'},
          {id: 4, name: 'Chris', age: '55'},
          {id: 5, name: 'Dan', age: '40'}
        ]
      }
    },
    created () {
      this.setCities()
      this.setStreet()
      this.setCommunities()
      this.search()

      fetchList(this.condition).then(response => {
        alert(response)
      })

      fetchPv(this.condition).then(response => {
        alert(response)
      })
    },
    methods: {
      setCities () {
        api.axios.get(api.apis.dm.cities).then(response => {
          if (response.data.code === 200 && response.data.data) {
            console.log('cities1')
            this.cities = response.data.data
            this.cities.unshift({
              'dmName': '全部',
              'dmCode': ''
            })
          }
        })
      },
      setStreet () {
        api.axios.get(api.apis.dm.streets).then(response => {
          if (response.data.code === 200 && response.data.data) {
            console.log('streets')
            this.streets = response.data.data
            this.streets.unshift({
              'dmName': '全部',
              'dmCode': ''
            })
          }
        })
      },
      setCommunities () {
        api.axios.get(api.apis.dm.communities).then(response => {
          if (response.data.code === 200 && response.data.data) {
            console.log('communities')
            this.communities = response.data.data
            this.communities.unshift({
              'dmName': '全部',
              'dmCode': ''
            })
          }
        })
      },
      search () {
        console.log('get list')
      }
    }
  }
</script>

<style>
    @import "../css/register.css";
</style>
