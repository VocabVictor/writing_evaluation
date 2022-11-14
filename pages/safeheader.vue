<template>
	<view>
		<view class="mynavbar" :style="{
				paddingTop:statusbarheight+ 'px',
				background:background
			}"
		>
		</view>
		<slot></slot>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				statusbarheight: 0,
			}
		},
		props:{
			background:{
				type:String,
				default:"transparent"
			}
		},
		methods: {
			setstatusBarHeight:function(){
				// #ifdef MP-WEIXIN
				this.statusbarheight = uni.getMenuButtonBoundingClientRect().height
				this.statusbarheight = this.statusbarheight + uni.getSystemInfoSync().statusBarHeight
				// #endif
				if (this.statusbarheight==0)
					this.statusbarheight = 10
			}
		},
		created: function() {
			this.setstatusBarHeight()
		}
	}
</script>
<style lang="scss" scoped>
	.mynavbar{
		background-color: $app_green;
	}
</style>
