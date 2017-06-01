import Mock from 'mockjs'
import tableAPI from './table'

Mock.mock(/api\/table\/list/, 'get', tableAPI.getList)
Mock.mock(/api\/talbe\/pv/, 'get', tableAPI.getPv)

export default Mock
