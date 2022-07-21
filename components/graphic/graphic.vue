<template>
	<view class="grahic">
		<view class="recommendation">
			<text>
				图文推荐
			</text>
		</view>
		<view class="uni-margin-wrap">
			<swiper class="swiper" :style="{height:height+'px'}" circular display-multiple-items="2"
				:indicator-dots="indicatorDots" :autoplay="false" :interval="interval" :duration="duration">
				<swiper-item v-for="(item,index) in list" :key="index">
					<view class="swiperimg">
						<image :src="item.thumb" mode="widthFix"></image>
						<text>
							{{item.price}}
						</text>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list: [{
					price: '230.5',
					thumb: 'https://cdn.uviewui.com/uview/goods/1.jpg'
				}, {
					price: '74.1',
					thumb: 'https://cdn.uviewui.com/uview/goods/2.jpg'
				}, {
					price: '8457',
					thumb: 'https://cdn.uviewui.com/uview/goods/6.jpg'
				}, {
					price: '1442',
					thumb: 'https://cdn.uviewui.com/uview/goods/5.jpg'
				}, {
					price: '541',
					thumb: 'https://cdn.uviewui.com/uview/goods/2.jpg'
				}, {
					price: '234',
					thumb: 'https://cdn.uviewui.com/uview/goods/3.jpg'
				}, {
					price: '562',
					thumb: 'https://cdn.uviewui.com/uview/goods/4.jpg'
				}, {
					price: '251.5',
					thumb: 'https://cdn.uviewui.com/uview/goods/1.jpg'
				}],
				indicatorDots: false,
				autoplay: true,
				interval: 2000,
				duration: 500,
				
				height: '',
			}
		},
		created(){
			this.resize()
		},
		methods:{
			resize() {
				const query = uni.createSelectorQuery().in(this);
				query.select('.swiperimg').boundingClientRect((pos) => {
					console.log('pos', pos)
					this.height = pos.height;
				}).exec()
			
			
			},
		}
	}
</script>

<style scoped>
	.grahic{
		width: 95%;
		margin: 30rpx auto;
		background-color: #fff;
		border-radius: 15rpx;
		box-sizing: border-box;
		padding: 15rpx 5rpx 10rpx 5rpx;
	}
	.recommendation {
		text-align: center;
		margin: 30rpx auto;
		color: hsl(30, 100%, 50%);
	}
	.swiperimg {
		font-size: 30rpx;
		color: #3b3b3b;
	}
	swiper-item image {
		width: 100%;
	}
	swiper-item {
		box-sizing: border-box;
		padding: 5rpx;
	}
</style>