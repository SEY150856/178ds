<template>
	<view class="pages_search">
		<u-search placeholder="查询热点!" v-model="keyword"></u-search>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: '',
			}
		},
		methods: {

		}
	}
</script>

<style>

	.pages_search {
		box-sizing: border-box;
		padding: 20rpx 3% 25rpx 3%;
		width: 100%;
		background-color: #fff;
	}
</style>
