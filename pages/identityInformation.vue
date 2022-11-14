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
		<u-gap height="20"></u-gap>
		
		<!-- 笔名 -->
		<view class="mainContent">
				<u--input
					placeholder="笔名"
					border="surround"
					clearable
				></u--input>
		</view>
		
		<!-- 真实姓名 -->
		<view class="mainContent">
				<u--input
					placeholder="真实姓名"
					border="surround"
					clearable
				></u--input>
		</view>
		
		<!-- 出生日期 -->
		<view class="mainContent">
			<u-input 
				placeholder="出生日期" 
			>
				<template slot="suffix">
					<u-icon name="arrow-down" size="large" @click="showPicker"></u-icon>
					<u-datetime-picker
						:show="dateShow"
						v-model="dateValue"
						mode="date"
						closeOnClickOverlay
						@confirm="confirm"
						@cancel="cancel"
						@change="change"
						@close="close"
					></u-datetime-picker>				
				</template>
			</u-input>
		</view>
		
		<!-- 就读学校 -->
		<view class="mainContent">
			<u--input placeholder="就读学校">
				<template slot="suffix"  >
					<u-icon name="arrow-down" size="large" @click="showPicker"></u-icon>
					<u-picker
						:show="schoolShow"
						:columns="schoolColumns"
						@change="change"
						@cancel="cancel"
						@confirm="confirm"
					></u-picker>			
				</template>
			</u--input>
		</view>
		
		<!-- 入学年份 -->
		<view class="mainContent">
			<u--input placeholder="入学年份" >
				<template slot="suffix"  >
					<u-icon name="arrow-down" size="large" @click="showPicker"></u-icon>
					<u-datetime-picker
						:show="yearShow"
						v-model="yearValue"
						mode="year-month"
						closeOnClickOverlay
						@confirm="confirm"
						@cancel="cancel"
						@change="change"
						@close="close"
					></u-datetime-picker>				
				</template>
			</u--input>
		</view>
		
		<!-- 年级 -->
		<view class="mainContent">
			<u--input placeholder="年级">
				<template slot="suffix"  >
					<u-icon name="arrow-down" size="large" @click="showPicker"></u-icon>
					<u-picker
						:show="gradeShow"
						:columns="gradeColumns"
						@change="change"
						@cancel="cancel"
						@confirm="confirm"
					></u-picker>				
				</template>
			</u--input>
		</view>
		
		<!-- 城市 -->
		<view class="mainContent">
			<u--input placeholder="所在城市">
				<template slot="suffix"  >
					<u-icon name="arrow-down" size="large" @click="showPicker"></u-icon>
					<u-picker
						:show="cityShow"
						:columns="cityColumns"
						@change="change"
						@cancel="cancel"
						@confirm="confirm"
					></u-picker>					
				</template>
			</u--input>
		</view>
		
		<view class="mainContent">
			<u-button text="保存" color="#88dfbf" @click="nextClick"></u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dateShow:false,
				schoolShow:false,
				yearShow:false,
				gradeShow:false,
				cityShow:false,
				dateValue: Number(new Date()),
				yearValue:Number(new Date()),
				schoolColumns:[],
				gradeColumns:[],
				cityColumns:[],
			}
		},
		methods: {
			showPicker(index) {
				// this[`show${this.current}`] = true
				this.dateShow = !this.dateShow
			},
			close() {
				this[`show${this.current}`] = false
			},
			cancel() {
				this[`show${this.current}`] = false
			},
			confirm(e) {
				this.dateShow = false
				this.dateValue(e.value, e.mode)
			},
			change(e) {
				// console.log('change', e)
			},
			nextClick(){
				uni.navigateTo({
					url:"../enter/enter"
				})
			}
			
			
		}
	}
</script>

<style>
	.mainContent {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: center;
		margin: 5vw 10vw;
	}
</style>
