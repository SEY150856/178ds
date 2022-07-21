<template>
	<view class="content">
		<!-- 搜索 -->
		<indexSeach></indexSeach>
		<!-- banner -->
		<indexbanner></indexbanner>
		<!-- 推荐 -->
		<graphic></graphic>
		<!-- 文章推荐 -->
		<newlist></newlist>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {
		},

		methods: {

		}
	}
</script>

<style scoped>
	.content {
		width: 100%;
		box-sizing: border-box;
		min-height: 100vh;
		background-color: #e5e5e5;
	}
</style>
