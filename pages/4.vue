<template>
	<view class="mainbox">
	<u--text class="maintext" size="30"text="那句深情的话" ></u--text>
    <view class="svebox">
		<u-row>
		<u-avatar :src="src" size="60"></u-avatar>
		<view class = textbox>
		<u-text size="18"text="怀左同学"></u-text>
		<u-text color="#b1b1b1" text="初一"></u-text>
		</view>
		</u-row>
		<u-text :text="artical" class="artical" size="19"></u-text>
		<u-row class="bottombutton">
		    <u-button color="#48d1b3" class="u-button" @click="returnpage">返回修改</u-button>
		    <u-button color="#48d1b3"class="u-button"  >存回草稿</u-button>
		    <u-button color="#48d1b3"class="u-button"  >直接发布</u-button>
		</u-row>
     </view>
	</view>
</template>

<script>
	export default {
	  data() {
	    return {
			src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.zhimg.com%2F50%2Fv2-b37ae51099512ecc2f15f126a592c547_hd.jpg&refer=http%3A%2F%2Fpic2.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651488380&t=76f424ef7ac38acb79ec7055a31b0bb9',
			artical:"在我们河南家乡这，每年二月二到三月三这期间不管男女老少都逃脱不了对逛庙会的魅力所吸引，这也是我们这当地的风俗。大清早，家家户户骑着车或开车带着孩子去逛庙会，孩子们喜笑颜开一路欢声笑语，年轻一辈的都成群结队的。每次庙会都是人山人海，但不因为这减少对庙会的喜爱，相反更是热闹非凡。还没到呢，路边就停的都是车，再往前走一段路就看到拥挤在一块的人。好不容易挤进去了，可又犯起愁，这到底该吃哪样，玩哪样呢？又怕瞧了那样又错过这样。此时孩子们更犯愁了，摸摸兜里因玩乐而仅剩的钱，不由得后悔了。"
	    }
	  },
	  methods: {
	    change(e) {
	      console.log('change', e);
	    },
		returnpage(){
			uni.navigateBack({
					delta:1,//返回层数，2则上上页
				})
		}
	  }
	}
</script>

<style>
	.mainbox{
		padding:30rpx;
	}
	.svebox{
		height:140rpx;
		margin-top: 40rpx;
	}
	
	.textbox{
		height:110rpx;
		display:flex; 
		flex-direction: column;
		justify-content:flex-end;
		margin-left: 20rpx;
	}
	.artical{
		padding-top:40rpx;
	}
	.bottombutton{
		width:95%;
		position: absolute;
		bottom:20rpx;
		left:50%;
		transform: translate(-50%);
		border-radius: 0rpx;
	}
	.u-button{
		margin: 10rpx;
	}
</style>
