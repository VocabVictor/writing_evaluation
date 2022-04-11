
<template>
	<view class="index">
    <u-search  searchIconColor="#ffffff"bgColor="#48d1b3" color="#ffffff" placeholderColor="#ffffff"shape="square" :show-action="false "actionText="搜索"></u-search>
	  <u-text  :bold="true" align="center" text="大家都在找" size="19" class="text maintext"/>
	  <u-text  :bold="true" align="center" color="#48d1b3" class="text ptext" v-for="item in items" :text=item></u-text>
   <!-- 底部栏 -->
   		<u-tabbar
   			:value="value2"
   			:placeholder="false"
   			@change="name => value2 = name"
   			:fixed="true"
   			:safeAreaInsetBottom="false"
   			activeColor="#88dfbf"
   		>
   			<u-tabbar-item
   				text="首页"
   				icon="home"
   			></u-tabbar-item>
   			<u-tabbar-item
   				text="发现"
   				icon="integral"
				name="integral"
   			></u-tabbar-item>
   			<u-tabbar-item
			  
   			></u-tabbar-item>
   			<u-tabbar-item
   				text="纸条"
   				icon="file-text"
   			
   			></u-tabbar-item>
   			<u-tabbar-item
   				text="我的"
   				icon="account"
   			></u-tabbar-item>
   		</u-tabbar>
		<view class="addicon">
		<u-icon  size="40" color="#88dfbf" name="plus-circle-fill" @click="changePage"/>
		</view>
  </view>
</template>
<script>
	export default {
      data() {
        return {
          value: '',
		  value2:"integral",
		  items: ["妈妈","一滴水","旅行日记","北方的风","小金鱼","昨日","冬天"]
        }
      },
      methods: {
        change(e) {
          console.log('change', e);
        },
		changePage(){
			uni.navigateTo({
				url:"./3"
			})
		}
      }
	}
</script>
<style>
	.index{
		padding-top:var(--status-bar-height);
	}
	.addicon{
		position: fixed;
		bottom:10rpx;
		right:50%;
		transform: translate(50%);
		z-index: 1;
	}
	.text{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
	}
	.maintext{
		padding-top: 100rpx;
	}
	.ptext{
		padding-top: 50rpx;
	}
</style>