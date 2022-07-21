<template>
	<view class="newlistcont">
		<view class="newlistconttitle">
			<text>
				{{newstitle}}
			</text>
			<view @click="gotourl()">更多 ></view>
		</view>
		<view class="newlist" v-for="(item,index) in indexList" :key="index" @click="goTopages(item)">
			<image :src="item.image" mode="widthFix"></image>
			<view class="right">
				<view class="news_title">
					{{item.title}}
				</view>
				<view class="news_titme">
					<view>
						{{item.addtime}}
					</view>
					<uni-dateformat date="2020/12/12"></uni-dateformat>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				indexList: [],
				newstitle: '最新文章'
			}
		},
		created() {
			this.getnewslist();
		},
		methods: {
			gotourl() {
				uni.switchTab({
					url: '../article/article'
				})
			},


			goTopages(item) {
				console.log(item)
				uni.navigateTo({
					url: '../articleDetails/articleDetails?id=' + item.id
				});
			},
			getnewslist() {
				var temPar = {
					status: 1,
					t_id: "",
					keyword: "",
					page: 2,
				};
				this.$http
					.getnewslist(temPar)
					.then((res) => {
						if (res.code == 200) {
							this.indexList = res.arr.info
							console.log(this.indexList)
						} else {
							// 提示网络错误
							uni.showToast({
								title: "网络错误，请重试~",
								icon: "none",
								duration: 2000,
							});
						}
					})

			},
		}
	}
</script>

<style scoped>
	.newlistcont {
		width: 95%;
		margin: 20rpx auto;
		background-color: #fff;
	}

	.newlist {
		margin: 15rpx auto;
		display: flex;
		flex-direction: row;
		align-items: stretch;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 15rpx;
		border-bottom: 1rpx solid #c3c3c3;
	}

	.newlist>image {
		width: 40%
	}

	.newlist .right {
		width: 58%;
		display: flex;
		flex-direction: column;
		line-height: 1.4;
	}


	.news_title {
		font-size: 28rpx;
		padding: 8rpx 0 0 0;
		line-height: 1.6;
	}

	.news_cont {
		font-size: 24rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}

	.news_titme {
		font-size: 21rpx;
		margin-top: auto;
		padding-bottom: 5rpx;
	}

	.newlistconttitle {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		font-size: 32rpx;
		box-sizing: border-box;
		padding: 20rpx;
	}

	.newlistconttitle text {
		font-size: 36rpx;
		color: hsl(30, 100%, 50%);
	}
</style>
