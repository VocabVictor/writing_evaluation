<template>

	<view class="mainbox">
		<u-search class="searchbar" placeholder="搜索" v-model="searchcontent"></u-search>
		<u-collapse @change="change" @close="close" @open="open" >
			<u-collapse-item title="人物话题" >
				<!-- 标签部分 -->
			 <view class="itembox">
			 <view class="u-page__tag-item" v-for="(item, index) in checkboxs1" :key="index">
			 <u-tag :text="`选项${index + 1}`" :plain="!item.checked" type="success" :name="index"
			    @click="checkboxClick1">	
			 	</u-tag>
			 </view>
			 </view>
			</u-collapse-item>
			<u-collapse-item title="自然话题">
			 <view class="itembox">
			 <view class="u-page__tag-item" v-for="(item, index) in checkboxs2" :key="index">
			 <u-tag :text="`选项${index + 1}`" :plain="!item.checked" type="success" :name="index"
			    @click="checkboxClick2">	
			 	</u-tag>
			 </view>
			 </view>			</u-collapse-item>
			<u-collapse-item title="植物话题">
			 <view class="itembox">
			 <view class="u-page__tag-item" v-for="(item, index) in checkboxs3" :key="index">
			 <u-tag :text="`选项${index + 1}`" :plain="!item.checked" type="success" :name="index"
			    @click="checkboxClick3">	
			 	</u-tag>
			 </view>
			 </view>			</u-collapse-item>
		</u-collapse>
		   <!-- 底部按钮 -->
		 <u-row class="bottombutton" ><u-button class="bottombutton"  color="rgb(74,209,181)" @click="changePage()">下一步</u-button></u-row>
	</view>
	  
	

</template>

<script>
	export default {
		data() {
			return {
				searchcontent: "",
				checkboxs1: [{checked: false},{checked: false},{checked: false},{checked: false},{checked: false}	
				],
				checkboxs2: [{checked: false},{checked: false},{checked: false},{checked: false},{checked: false}
				],
				checkboxs3: [{checked: false},{checked: false},{checked: false},{checked: false},{checked: false}	
				]
			}
		},
		methods: {
			open(e) {
				// console.log('open', e)
			},
		 close(e) {
				// console.log('close', e)
			},
			change(e) {
				// console.log('change', e)
			},
			checkboxClick1(name) {
				this.checkboxs1[name].checked = !this.checkboxs1[name].checked
			},	checkboxClick2(name) {
				this.checkboxs2[name].checked = !this.checkboxs2[name].checked
			},	checkboxClick3(name) {
				this.checkboxs3[name].checked = !this.checkboxs3[name].checked
			},
			changePage(){
				uni.navigateTo({
					url:"./2"
				})
			}

		}
	};
</script>

<style>
	.mainbox {
        padding-top:var(--status-bar-height);
		padding-right:30rpx;
		padding-left:30rpx;
		display: flex;
		flex-direction: column;
	}
	.itembox{
		display: flex;
        flex-direction: row;
		flex-wrap:wrap;
		gap:20rpx;
	}
	.u-page__tag-item{
		width:20%;
	}
	.u-collapse-item__content{
		display: flex;
	}
	.bottombutton{
		width:90%;
		position: absolute;
		bottom:10rpx;
		left:50%;
		transform: translate(-50%);
		border-radius: 0rpx;
	}
</style>