<template>
	<view class="">
		<u-swiper :loading='loading' :list="bannerList" indicator indicatorMode="line" circular></u-swiper>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				loading: true,
				bannerList: [],
			}
		},
		created() {
			this.loadData();

		},

		methods: {
			loadData() {
				this.$http
					.getBannerList()
					.then((res) => {
						if (res.code == 200) {
							for (var i in res.arr) {
								this.bannerList.push(res.arr[i].b_img)
							}
							this.loading = false
						} else {
							// 提示网络错误
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
</style>
