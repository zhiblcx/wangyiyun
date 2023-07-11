<template>
	<view>博客</view>
	<view><button @click="counter.increment()">+1</button></view>
	{{ counter.count }}
</template>

<script setup>
import { useCounterStore } from '@/store/index.js';
const counter = useCounterStore();
</script>

<style></style>
