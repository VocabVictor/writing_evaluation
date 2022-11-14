<template>

	<view class="mainbox">
		<u-search class="searchbar" placeholder="搜索" v-model="searchcontent"></u-search>
		<u-collapse @change="change" @close="close" @open="open" >
		<!-- ///////////////////////////// -->
			 <u-collapse-item v-for="obj in data.data" :title="obj.type">
				 <view class="itembox">
					 <!-- item指[亲人,朋友...]中的一个 -->
				 <view class="u-page__tag-item" v-for="(item, index) in obj.data" :key="index">
				 <u-tag :text="`${item}`" :plain="(obj.isOpen)==index?false:true" type="success" :name="index"
				    @click="changePlain(obj,index)">	
				 	</u-tag>
				 </view>
				 </view>
			 </u-collapse-item>
		</u-collapse>
		<!-- ////////////////////// -->
		   <!-- 底部按钮 -->
		 <u-row class="bottombutton" ><u-button class="bottombutton"  color="rgb(74,209,181)" @click="changePage()">下一步</u-button></u-row>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchcontent: "",
				data:{"data":[{"id":1,"type":"人物话题","data":["亲人","朋友","名人","自己"],"isOpen":-1},
       {"id":2,"type":"自然话题","data":["环境","环保","风景","其他"],"isOpen":-1},{"id":3,"type":"植物话题","data":["鲜花","绿草","大树","其他"],"isOpen":-1},{"id":4,"type":"节日话题","data":["传统","西方","春节","其他"],"isOpen":-1},{"id":5,"type":"动物话题","data":["城市","乡村","自然","其他"],"isOpen":-1},{"id":6,"type":"情感话题","data":["亲情","友情","爱情","自情"],"isOpen":-1},{"id":7,"type":"事物话题","data":["食品","用品","工具","其他"],"isOpen":-1}
         ]} ,
     sdata:{"data":[{"id":1,"type":"人物话题","data":["亲人","朋友","名人","自己"],"isOpen":-1},
        {"id":2,"type":"自然话题","data":["环境","环保","风景","其他"],"isOpen":-1},{"id":3,"type":"植物话题","data":["鲜花","绿草","大树","其他"],"isOpen":-1},{"id":4,"type":"节日话题","data":["传统","西方","春节","其他"],"isOpen":-1},{"id":5,"type":"动物话题","data":["城市","乡村","自然","其他"],"isOpen":-1},{"id":6,"type":"情感话题","data":["亲情","友情","爱情","其他"],"isOpen":-1},{"id":7,"type":"事物话题","data":["食品","用品","工具","其他"],"isOpen":-1}
     ]}
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
			radioClick(name) {
			    this.radios.map((item, index) => {
				item.checked = index === name ? true : false
				      })
						},
			changePage(){
				uni.navigateTo({
					url:"./2"
				})
			},
		   changePlain(obj,index){
			
			   if(obj.isOpen == index){
				   obj.isOpen = -1;
			   }
			   else obj.isOpen = index;
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
		margin-left: 10rpx;
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