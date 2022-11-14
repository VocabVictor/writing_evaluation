<template>
	<view class="main">
		<!-- 标题输入框 -->
		<u-form>
			<u-form-item>
				<u--input class="h_input" placeholder="请输入内容" v-model="titlevalue" @change="change" border="bottom">
				</u--input>
			</u-form-item>
		</u-form>
		<!-- 输入框下方的Line -->
		<u-line class="input_line"></u-line>
		<!-- 红色文字提示 -->
		<u--text margin="14rpx" type="error" class="warningtext" text="杜绝抄袭,尊重原创"></u--text>
		<!-- 正文输入框 -->
		<u--textarea height="700rpx" maxlength="2000" v-model="mainvalue" placeholder="正文"></u--textarea>
		<!-- 底部Tab栏 -->
		<u-row class="bottomrow" justify="space-between">
			<!-- &&&标签按钮 -->
			<u-col span="3">
				<u-icon @click="tagshow = true" name="tags-fill" size="23" labelSize="10" label="标签" labelPos="bottom">
				</u-icon>
			</u-col>
			<!-- (设置标签的弹出层 -->
			<u-popup :show="tagshow" @close="tagclose" @open="tagopen">
				<!-- 设置标签中的返回键和确定键 -->
				<view class="textarea">
					<u--text @click="tagclose" size="30rpx" type="info" margin="20rpx" align="left" text="返回"></u--text>
					<u--text @click="tagclose" size="30rpx" type="primary" margin="20rpx" align="right" text="确定">
					</u--text>
				</view>
				<!-- 输入框 -->
				<u--textarea @input="handleArea" height="400rpx" placeholder="请输入标签,以空格分隔" border="bottom">
				</u--textarea>
				<!-- 标签 -->
				<view class="itembox">
					<u-tag v-for="item in tag" :text="item"></u-tag>
				</view>

			</u-popup>
			<!-- 设置标签的弹出层) -->
		 <!-- &&&体裁按钮 -->
			<u-col span="3">
				<u-icon @click="show = true" name="file-text-fill" size="23" labelSize="10" label="体裁"
					labelPos="bottom"></u-icon>
			</u-col>
			<!-- 体裁选择器弹出层 -->
			<u-picker :show="show" :columns="columns" @change="change" @cancel="cancel" @confirm="confirm"></u-picker>
			<!-- &&&浏览按钮,点击后调到下一个页面 -->
			<u-col span="3">
				<u-icon @click="newpage" name="eye-fill" size="23" label="浏览" labelSize="10" labelPos="bottom"></u-icon>
			</u-col>
			<!-- &&&发表按钮 -->
			<u-col span="5" class="buttoncol">
				<u-button class="button" color="#48d1b3" :plain="false" text="发表" @click="navigateTo"></u-button>
			</u-col>
		</u-row>
	</view>
</template>
<script>
	import sendData from '../component/sendData.js'
	export default {
		data() {
			return {
				titlevalue: '',
				mainvalue: '',
				show: false,
				tagshow: false,
				columns: [
					['记叙文', '说明文', '议论文', '散文']
				],
				tag: []
			}
		},
		methods: {
			change(e) {},
			navigateTo() {
				sendData.sendTopic({title:this.titlevalue,article:this.mainvalue,token:uni.getStorageSync('token')}).then(res=>{
					if(res.data.code === 200){
						uni.navigateTo({
							url:"./homePage/homePage"
						});
					}	
				})
			},
			cancel() {
				this.show = false;
			},
			confirm() {
				this.show = false;
			},
			tagclose() {
				this.tagshow = false;
			},
			tagopen() {
				this.tagshow = true;
			},
			newpage() {
				uni.navigateTo({
					url: "./4"
				})
			},
			handleArea(e) {
				this.tag = e.split(" ");
				for (let i = 0; i < this.tag.length; i++) {
					if (this.tag[i] === "") {
						this.tag.splice(i, 1)
					}
				}
			},
		},
		onLoad() {
		}
	}
</script>
<style>
	.main {
		display: flex;
		flex-direction: column;
		margin: 0rpx;
	}

	.h_input {
		margin-top: 20rpx;
	}

	.input_line {
		position: absolute;
		top: 100rpx;
	}

	.bottomrow {
		width: 80%;
		position: absolute;
		display: flex;
		/*       left:50%;
        transform: translate(-50%); */
		bottom: 30rpx;
		height: 60rpx;
	}

	.buttoncol {
		/* background-color: #007AFF; */
	}

	.button {
		width: 100%;
		height: 70rpx;
	}

	.textarea {
		display: flex;
		flex-direction: row;
		/* justify-content: space-between; */
	}

	.itembox {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 20rpx;
	}
</style>
