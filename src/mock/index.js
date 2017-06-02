import Mock from 'mockjs'
import tableAPI from './table'
import loginAPI from './user'

// 表格
Mock.mock(/api\/table\/list/, 'get', tableAPI.getList)
Mock.mock(/api\/talbe\/pv/, 'get', tableAPI.getPv)

// 登录
Mock.mock(/api\/user\/getInfo/, 'post', loginAPI)

export default Mock
