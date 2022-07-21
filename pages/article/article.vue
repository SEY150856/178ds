<template>
	<view>
		<view class="article_tags">
			<u-tabs :list="list1" @click="click"></u-tabs>
		</view>

		<view class="article_tagslist">
			<view class="newlist" v-for="(item,index) in articleList" :key="index" @click="goTopages(item)">
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
			<view class="pagesclass">
				<uni-pagination :total="pages" title="标题文字" @change="change" />
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				pages: 1,
				page: 1,
				status: 1,
				articleList: [],
				list1: [{
					name: '电商管理',
				}, {
					name: '电商资讯',
				}, {
					name: '电商问答'
				}]
			}
		},
		created() {
			this.postArticle(0)
		},
		methods: {
			goTopages(item) {
				console.log(item)
				uni.navigateTo({
					url: '../articleDetails/articleDetails?id=' + item.id
				});
			},
			change(res) {
				this.page = res.current
				this.postArticle()
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
			},
			postArticle() {
				var params = {
					status: this.status,
					t_id: "",
					keyword: "",
					page: this.page
				};
				this.$http.postArticle(params).then(res => {
					if (res.code == 200) {
						console.log(res)
						this.articleList = res.arr.info
						console.log(this.articleList)
						this.pages = Number(res.arr.count)
					} else {
						uni.showToast({
							title: "网络错误，请重试~",
							icon: "none",
							duration: 2000,
						});
					}
				})
			},
			click(item) {
				console.log('item', item.index);
				this.status = item.index + 1;
				this.postArticle();
			}
		}
	}
</script>

<style>
	.article_tags {
		width: 100%;
		background-color: #fff;
		box-sizing: border-box;
		padding: 20rpx 5%;
	}



	/* 文章 */
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

	.article_tagslist {
		background-color: #fff;
	}

	.pagesclass {
		margin: 20rpx;
	}
</style>
