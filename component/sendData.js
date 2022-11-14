// 客户端
import {request} from './request.js'

// 上传头像
function uploadAvatar(img) {
  return request({
    url: '/setavatar',
    method: 'post',
    data: img,
    headers: {'Content-Type': 'multipart/form-data'},
  })
}

// 上传文章
function sendTopic(data) {
  return request({
    url: '/api/article/add.html',
    method: 'post',
    data: data,
	headers:{'Content-Type': 'application/json'}
  })
}

// 上传评论
function sendComment({commenter, content, topicId}) {
  return request({
    url: '/comment',
    method: 'post',
    data: {commenter, content, topicId}
  })
}

// 修改密码
function modPwd({oldpwd, newpwd}) {
  return request({
    url: '/mod/pwd',
    method: 'post',
    data: {oldpwd, newpwd}
  })
}

export default {uploadAvatar, sendTopic, sendComment, modPwd}
