<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{ title }}</text>
		</view>
		<van-button type="primary">主要按钮</van-button>
	</view>
</template>

<script setup>
import { onMounted, inject } from 'vue';
const apiUrl = inject('apiUrl');
onMounted(() => {
	uni.request({
		url: apiUrl + '/artist/desc?id=6452',
		success: function (res) {
			console.log(res.data);
		}
	});
});
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>
