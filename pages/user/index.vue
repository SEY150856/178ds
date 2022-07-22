<template>
	<view class="user_cont">
		<view class="user">
			<u-avatar :src="userInfo.Image" :size="80"></u-avatar>
			<view class="user_name">
				<text>昵称：</text>
				<text>
					{{userInfo.name}}
				</text>
			</view>
			<view class="user_name">
				<text>性别：</text>
				<text>
					{{userInfo.sex}}
				</text>
			</view>
			<button type="primary" class="middle-btn" open-type="getUserInfo" @getuserinfo="getUserInfo">
				登录
			</button>
		</view>
		<view class="beizhu">
			登录小程序，可参与互动评论、点赞、收藏、转发
		</view>
<!-- 		<view class="card-area">
			<button type="primary" class="middle-btn" open-type="getPhoneNumber"
				@getphonenumber="getPhoneNumber">获取用户手机号</button>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				canIUseGetPhoneNumber: swan.canIUse('button.open-type.getPhoneNumber'),


				text: '',
				showSex: false,
				userInfo: {
					name: '未知',
					sex: '未知',
					Image: '',
				},
				radio: '',
				switchVal: false,
			}

		},
		methods: {
			getPhoneNumber(e) {
				console.log('用户手机号:', e);
			},



			getUserInfo(e) {
				this.userInfo.name = e.detail.userInfo.nickName;
				this.userInfo.sex = e.detail.userInfo.gender;
				this.userInfo.Image = e.detail.userInfo.avatarUrl;
				console.log('用户名称', e.detail.userInfo.nickName);
				console.log('用户头像', e.detail.userInfo.avatarUrl);
				console.log('用户性别', e.detail.userInfo.gender);
			}

		},
	}
</script>


<style scoped>
	.user_cont {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		box-sizing: border-box;
	}

	.user {
		width: 95%;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #fff;
		border-radius: 15rpx;
		margin-top: 50rpx;
		padding: 50rpx 0;
	}

	.user_name {
		width: 95%;
		margin: 20rpx 0;
		font-size: 28rpx;
	}

	.beizhu {
		text-align: center;
		font-size: 24rpx;
		color: #878787;
		margin: 30rpx;
	}
</style>
