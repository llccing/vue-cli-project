import Mock from 'mockjs'
import {param2Obj} from '../utils/index'

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'),
    name: '@cname',
    auditor: '@cname',
    title: '@ctitle(10, 20)',
    forecast: '@float(0, 100, 2, 2)',
    importance: '@integer(1, 3)',
    'type|1': ['FD', 'FE', 'BI', 'VN'],
    'status|1': ['published', 'draft', 'deleted'],
    pageviews: '@integer(300, 5000)'
  }))
}

export default {
  getList: condig => {
    const {name, page, limit, sort} = param2Obj(condig)
    let mockList = List.filter(item => {
      if (name && item.name.indexOf('name') < 0) {
        return false
      }
      return true
    })

    if (sort === '-id') {
      mockList.reverse()
    }

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    return {
      total: mockList.length,
      items: pageList
    }
  },
  getPv: () => ({
    pvData: [
      {key: 'PC网站', pv: 1024},
      {key: 'mobile网站', pv: 1024},
      {key: 'ios', pv: 1024},
      {key: 'android', pv: 1024}
    ]
  })
}
