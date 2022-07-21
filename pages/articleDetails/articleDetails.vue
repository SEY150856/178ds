<template>
	<view class="pages">
		<view class="">
			<view class="title">
				{{content.title}}
			</view>
			<view class="beizhu">
				<text>{{content.author}}</text>
				<text>{{content.updatetime}}</text>
			</view>
			<view class="img">
				<image :src="content.image" style="width: 100%;" mode="widthFix"></image>
			</view>
			
			<!-- {{content.content}} -->
		</view>
		<mp-html :content="content.content" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				content: {},
			}
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option.id); //打印出上个页面传递的参数。
			this.id = option.id
			this.postArticleDetails()
		},
		methods: {
			postArticleDetails() {
				var params = {
					id: this.id,
					name: "1",
					flid: ""
				}
				this.$http.postArticleDetails(params).then(res => {
					if (res.code == 200) {
						this.content = res.arr
						console.log(this.content)
					} else {
						uni.showToast({
							title: "网络错误，请重试~",
							icon: "none",
							duration: 2000,
						});
					}
				})
			}
		}
	}
</script>

<style>
	
	.pages{
		width: 98%;
		margin: 0 auto;
		background-color: #fff;
	}
	.title {
		font-size: 36rpx;
		font-weight: bold;
		margin: 15rpx 0;
	}
	.beizhu{
		margin-bottom: 30rpx;
		font-size: 24rpx;
	}
</style>
