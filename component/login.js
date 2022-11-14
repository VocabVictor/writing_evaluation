import {request} from './request.js'
// import store from '../store'
import axios from 'axios/index.js'

function login(obj) {
  return request({
    url: '/api/login/check.html',
    method: 'post',
    data: obj
  })
}

// 每次加载页面，获取用户登录态
function getUser() {
  request({
    url: '/getuser',
  }).then(res => {
    if(res.data.msg == 'ok') {
      // 把服务端读出来的token数据保存到vuex
      store.commit('setUser', res.data.user)
    }
    else {
      console.log('未登录')
    }
  })
}

function getCaptcha() {
  return request({
    url: '/captcha'
  })
}



export default {
  login,
  getUser,
  getCaptcha
}
