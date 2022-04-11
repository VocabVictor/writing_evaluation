<template>
	<view style="padding: 20px;">
		<u-button text="1" @click='changePage(1)'></u-button>
		<u-button text="2"></u-button>
		<u-button text="3"></u-button>
		<u-button text="4"></u-button>
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			changePage(num){
				const i = "../"+num
				console.log(i);
				uni.navigateTo({
					url:i,
				})
			}
		};
	},
	onLoad() {},
	methods: {
	},
	
};
</script>