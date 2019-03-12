<template>
	<div class="box">
		<div class="header" @click="teste">头</div>
		<div class="content">
			<div class="test" v-for="item in 20"></div>
		</div>
		<div class="footer">jio</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import Cookies from 'js-cookie';
	import axios from 'axios';
        export default {
                data(){
                        return {
                                list: [],
	                        url1: ''
                        }
                },
	        canActivate(transition){
			console.log(transition);
			this.url1 = transition;
			transition.next();
	        },
	        methods: {
	                teste(){
	                        console.log(this.url1);
	                }
	        }
        };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.box
		display flex
		flex-direction column
		height: 100%
		.header
			height: 2rem
			background-color bisque
			flex-shrink 0
		.content
			flex-grow 1
			.test
				height: 10rem
				border-bottom thin solid bisque
		.footer
			flex-shrink 0
			height: 2rem
			background-color red
</style>