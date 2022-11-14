<template>
	<view class="page">
		<!-- 顶部栏 -->
		<u-navbar
			title="个人设置"
			safeAreaInsetTop
			fixed
			placeholder
			border
			:autoBack="true"
		>
		</u-navbar>
		<u-gap height="30"></u-gap>
		
		<!-- 主要内容 -->
		<view class="mainContent">
			<view class="content">
				<view class="image">
					<u-upload
						:fileList="fileList1"
						@afterRead="afterRead"
						@delete="deletePic"
						name="1"
						:maxCount="1"
					></u-upload>
				</view>
				<view class="image">
					<text class="imageHint" >上传图片不大于2M</text>
				</view>
			</view>
			
			
			<!-- 性别栏 -->
			<view class="contents">
				<u-radio-group
					placement="row"
					class="contents"
				>
				<u-radio
					:customStyle="{marginRight: '16px'}"
					v-for="(item, index) in radiolist"
					:key="index"
					:label="item.name"
					:name="item.name"
					activeColor="#88dfbf"
					>
				</u-radio>
				</u-radio-group>
			</view>
			
			<!-- 文本域 -->
			<view class="contents">
				<u--textarea
					height="200"
					v-model="textValue"
					placeholder="个性签名(140字以内)"
					count
				></u--textarea>
			</view>
			
			<view class="contents">
				<u-button
					text="下一步"
					size="large"
					type="info"
					color="#88dfbf"
					@click="nextClick"
				></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				radiolist: [{
								name: '女生',
								disabled: false
							},
							{
								name: '男生',
								disabled: false
							},
						   ],
				textValue:'',
				fileList1: [],
				ID:[
					{id:"BJ0000005"},
				],
			}
		},
		methods: {
			nextClick() {
				this.$u.route('pages/identityInformation/identityInformation');
			},
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					let item = this[`fileList${event.name}`][fileListLen]
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}
			},
			uploadFilePromise(url) {
				const token = uni.getStorageSync('token')
				uni.uploadFile({
						url: 'https://writing.hzxwhzxw.asia/setavatar', // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'avatar',
						header:{
							"Authorization":token
						}
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	.page {
		padding: 0;
		flex: 1;
		
	}
	
	.mainContent{
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: center;
		width: 80%;
		margin: 10vw 10vw;
		
	}
	
	.content,.contents {
		margin-bottom: 12px;
	}
	
	.content{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	
	
	.image {
		
	}
	
	.uploadImage {
		margin-bottom: 10px;
		padding-left: 10%;
	}
	
	.imageHint{
		font-size: 7;
		color:grey;
		text-align: center;
	}
		
	.ID{
		font-size: 10;
	}	
</style>
