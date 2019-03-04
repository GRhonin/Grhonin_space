<template>
	<div class="cart-content">
		<OHeader></OHeader>
		<div class="cart-tips">APP首单立减十元</div>
		<div class="pro-content" v-for="(item, index) in list" :key="item.id">
			<div class="content">
				<div class="top">
					<div class="lft">
						<div class="choose"><i class="el-icon-success"></i></div>
						<div class="price" v-text="`￥${item.price * item.count}`"></div>
					</div>
					<div class="edit">
						<div class="jisuan">
							<div class="reduce" @click="reduce(index)">-</div>
							<div class="count" v-text="item.count"></div>
							<div class="release" @click="release(index)">+</div>
						</div>
						<i class="el-icon-delete"></i>
					</div>
				</div>
				<div class="bottom">
					<img src="../assets/product/b5.jpg" alt="">
					<div class="proinfo">
						<span class="name" v-text="item.name"></span>
						<span class="price" v-text="`￥${item.price}`"></span>
					</div>
				</div>
			</div>
		</div>
		<div class="pay-content">
			<div class="selectall"><i class="el-icon-success"></i></div>
			<div class="price-content">
				<p class="shifu">实付款999</p>
				<p class="count">总额555</p>
				<p class="reduce">节省了6656</p>
			</div>
			<div class="topay">去结算</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import OHeader from '../components/OHeader.vue';
	import axios from 'axios';
	import Cookies from 'js-cookie';
        export default {
                components: { OHeader },
	        data(){
                        return {
	                        list: []
                        }
	        },
	        created(){
	                axios({
		                url: '/cart/getgoods',
		                method: 'post',
		                data: { name: Cookies.get('name') }
	                })
		                .then(result => {
		                        result.forEach(item => {
		                                if(item.state ===1 ){
		                                        this.list.push(item);
		                                }
		                        } )
		                })
		                .catch(err => console.log(err.message));
	        },
	        methods: {
	                reduce(){
	                        this.count = this.count<2? 1 : this.count-1;
	                },
		        release(){
	                        this.count = this.count>4? 5 : this.count+1;
		        }
	        }
        };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.pay-content
		position fixed
		z-index 1000
		bottom 0
		width: 100%
		display flex
		align-items center
		background-color rgb(46,46,46)
		height: 3.75rem
		.selectall
			width: 10%
			text-align center
			i
				font-size 1.3rem
				color red
				background-color white
				border-radius .65rem
		.price-content
			color white
			width: 65%
			padding-left .5rem
			.shifu
				font-size 1rem
			.count, .reduce
				font-size .75rem
				color #999999
		.topay
			background-color #e2231a
			color white
			text-align center
			font-size 1rem
			line-height 3.75rem
			width: 25%
	.cart-tips
		height: 2rem
		background-color rgb(209,209,209)
		font-size 1rem
		line-height 2rem
		text-align center
		color #e2231a
	.pro-content
		margin 0 1rem
		display flex
		padding-top 1rem
		.content
			flex-grow 1
			.top
				height: 2.4rem
				display flex
				justify-content space-between
				align-items center
				.lft
					display flex
					justify-content space-between
					.choose
						font-size 1.3rem
						color red
						margin-right .3rem
				.edit
					display flex
					width 9rem
					justify-content space-around
					i
						font-size 1.8rem
					.jisuan
						width 5.625rem
						display flex
						justify-content space-around
						font-size 1.2rem
						border thin solid #cccccc
						text-align center
						line-height 1.6rem
						.count
							border-right solid thin #cccccc
							border-left solid thin #cccccc
							padding 0 .6rem
					.el-icon-delete
						color #999999
			.bottom
				border-bottom thin solid #999999
				display flex
				margin-left 2rem
				img
					width: 5.625rem
					height: 5.625rem
				.proinfo
					display flex
					justify-content space-around
					flex-direction column
					.price
						color #e2231a
						margin-top -2rem
						font-size 1rem
					.name
						width 13rem
						white-space nowrap
						overflow hidden
						text-overflow ellipsis
						font-size 1.15rem
</style>