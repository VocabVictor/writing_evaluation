import {request} from './request.js'

// 验证邮箱或用户名是否存在
function testExist({key, value}) {
  return request({
    url: '/api/testexist',
    params: {key, value}
  })
}

// 注册
function register(data) {
  return request({
    url: '/api/register/check.html',
    method: 'post',
    data:data
  })
}

export default {
  register,
  testExist
}