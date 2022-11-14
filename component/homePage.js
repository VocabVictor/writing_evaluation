import {
	request
} from './request.js'

export function getTopic() {
	return request({
		url: '/api/article/topTen.html',
		method: 'post',
		data:{
			token:uni.getStorageSync('token')
		}
	})
}


export function getList(data) {
	return request({
		url: '/api/article/lists.html',
		method: 'post',
		data:data
	})
}